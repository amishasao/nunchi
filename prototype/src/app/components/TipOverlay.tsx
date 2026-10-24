import { motion } from "motion/react";
import { PrimaryButton } from "./PrimaryButton";

interface TipOverlayProps {
  title: string;
  description: string;
  onClose: () => void;
}

export function TipOverlay({ title, description, onClose }: TipOverlayProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-8"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-white rounded-[20px] p-8 flex flex-col items-center gap-6 max-w-[340px] w-full shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Illustration placeholder */}
        <div className="w-[140px] h-[140px] rounded-xl bg-[#81a9e5] flex items-center justify-center">
          <span
            className="text-white font-['Raleway',sans-serif]"
            style={{ fontSize: "48px", fontWeight: 700 }}
          >
            {title.charAt(0)}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col items-center gap-2 text-center">
          <h2
            className="font-['Poppins',sans-serif] text-[#333]"
            style={{ fontSize: "28px", fontWeight: 600, letterSpacing: "-0.5px" }}
          >
            {title}
          </h2>
          <p
            className="font-['Poppins',sans-serif] text-[#727474]"
            style={{ fontSize: "16px", fontWeight: 400 }}
          >
            {description}
          </p>
        </div>

        <PrimaryButton text="I got it!" onClick={onClose} className="w-full" />
      </motion.div>
    </motion.div>
  );
}
