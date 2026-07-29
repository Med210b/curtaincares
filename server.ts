import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post("/api/contact", async (req, res) => {
    const { name, phone, email, service, message } = req.body;

    const emailHost = process.env.EMAIL_HOST;
    const emailPort = process.env.EMAIL_PORT;
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const emailTo = process.env.EMAIL_TO || "info@curtaincares.com";

    // If no email config, we'll just log and return success to avoid blocking the UI
    // but in a real app, we'd want this configured.
    if (!emailHost || !emailUser || !emailPass) {
      console.warn("Email configuration missing. Submission logged to console.");
      console.log("Contact Form Submission:", { name, phone, email, service, message });
      return res.status(200).json({ 
        message: "Message received (Simulator Mode)",
        details: "Email credentials not found in environment variables. See .env.example."
      });
    }

    try {
      const transporter = nodemailer.createTransport({
        host: emailHost,
        port: parseInt(emailPort || "587"),
        secure: emailPort === "465",
        auth: {
          user: emailUser,
          pass: emailPass,
        },
      });

      const mailOptions = {
        from: `Curtain Care Concierge <${emailUser}>`,
        to: emailTo,
        subject: `New Service Request: ${service} from ${name}`,
        text: `
          New Contact Form Submission:
          
          Name: ${name}
          Phone: ${phone}
          Email: ${email}
          Service: ${service}
          Message: ${message}
        `,
        html: `
          <div style="font-family: sans-serif; color: #2D2424; max-width: 600px;">
            <h2 style="color: #A6854D;">New Service Request</h2>
            <p>You have a new contact form submission from the website.</p>
            <hr style="border: 0; border-top: 1px solid #eee;" />
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; font-weight: bold; width: 150px;">Full Name:</td>
                <td style="padding: 10px 0;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold;">Phone:</td>
                <td style="padding: 10px 0;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold;">Email:</td>
                <td style="padding: 10px 0;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold;">Service:</td>
                <td style="padding: 10px 0;">${service}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; vertical-align: top;">Message:</td>
                <td style="padding: 10px 0;">${message}</td>
              </tr>
            </table>
            <hr style="border: 0; border-top: 1px solid #eee;" />
            <p style="font-size: 12px; color: #999;">This is an automated notification from curtaincares.com</p>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error: any) {
      console.error("Error sending email:", error);
      
      let clientMessage = "Failed to send email";
      let errorType = "general";

      const errorStr = String(error);
      
      if (errorStr.includes("SmtpClientAuthentication is disabled")) {
        clientMessage = "SMTP Authentication is disabled for this Microsoft 365 account. An admin must enable 'Authenticated SMTP' in the Microsoft 365 Admin Center.";
        errorType = "smtp_auth_disabled";
      } else if (errorStr.includes("535 5.7.139") || errorStr.includes("Authentication unsuccessful")) {
        clientMessage = "Authentication failed. This is likely because MFA is enabled and you need an 'App Password', or SMTP AUTH is disabled for this specific user.";
        errorType = "auth_failure_m365";
      } else if (error.code === "EAUTH") {
        clientMessage = "Invalid email credentials. If using Gmail, you likely need an 'App Password'.";
        errorType = "auth_failure";
      }

      res.status(500).json({ 
        message: clientMessage, 
        errorType,
        error: errorStr 
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
