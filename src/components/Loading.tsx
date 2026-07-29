import { motion } from "motion/react";
import { LOGO_URL } from "@/src/lib/constants";

export default function Loading() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-[100] bg-cream flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: [0.8, 1, 1.05, 1],
          opacity: 1 
        }}
        transition={{ 
          duration: 2,
          times: [0, 0.4, 0.7, 1],
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="w-[450px] h-64"
      >
        <img
          src={LOGO_URL}
          alt="Curtaincares Logo"
          className="w-full h-full object-contain drop-shadow-[0_0_25px_rgba(197,163,106,0.3)]"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </motion.div>
  );
}
