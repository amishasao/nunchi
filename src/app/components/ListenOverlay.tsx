import { motion } from "motion/react";
import { Play } from "lucide-react";
import { PrimaryButton } from "./PrimaryButton";
import imgImage2 from "figma:asset/b324ad8a3b5bb7bdca54e752c230d984f0b44f14.png";

interface ListenOverlayProps {
  onClose: () => void;
}

export function ListenOverlay({ onClose }: ListenOverlayProps) {
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
        <div className="flex flex-col items-center gap-2 text-center">
          <h2
            className="font-['Poppins',sans-serif] text-[#333]"
            style={{
              fontSize: "28px",
              fontWeight: 600,
              letterSpacing: "-0.5px",
            }}
          >
            Tap to Listen
          </h2>
          <p
            className="font-['Poppins',sans-serif] text-[#727474]"
            style={{ fontSize: "15px", fontWeight: 400 }}
          >
            Here's a link to hear voiceover cues to help you right now.
          </p>
        </div>

        <div className="flex items-center gap-1">
          <button className="w-[56px] h-[56px] flex items-center justify-center text-[#2e3a3f]">
            <Play size={40} fill="#2e3a3f" />
          </button>
          <div className="h-[56px] flex-1 rounded-[18px] overflow-hidden">
            <img
              src={imgImage2}
              alt="Audio waveform"
              className="h-full w-[180px] object-cover"
            />
          </div>
        </div>

        <PrimaryButton text="Done!" onClick={onClose} className="w-full" />
      </motion.div>
    </motion.div>
  );
}
