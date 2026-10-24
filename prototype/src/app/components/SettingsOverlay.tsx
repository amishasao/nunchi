import { useState } from "react";
import { motion } from "motion/react";
import { PrimaryButton } from "./PrimaryButton";

interface SettingsOverlayProps {
  onClose: () => void;
}

export function SettingsOverlay({ onClose }: SettingsOverlayProps) {
  const [range, setRange] = useState(50);
  const [agreed, setAgreed] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-white rounded-[19px] px-6 py-10 flex flex-col items-center gap-10 max-w-[360px] w-full"
        style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.15)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title */}
        <h2
          className="font-['Raleway',sans-serif] text-[#2e3a3f] text-center"
          style={{ fontSize: "30px", fontWeight: 700, letterSpacing: "-0.5px" }}
        >
          Settings
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-8 w-full items-center">
          {/* Range Slider */}
          <div className="flex flex-col items-start w-full gap-2">
            <span
              className="font-['Inter',sans-serif] text-[#2e3a3f]"
              style={{ fontSize: "18px", fontWeight: 600 }}
            >
              Range
            </span>
            <div className="relative w-full h-[44px] flex items-center">
              {/* Track background */}
              <div className="absolute left-0 right-0 h-[16px] rounded-full overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 bg-[#7fa7b8] rounded-l-full"
                  style={{ width: `${range}%` }}
                />
                <div
                  className="absolute inset-y-0 right-0 rounded-r-full"
                  style={{
                    left: `${range}%`,
                    backgroundColor: "rgba(120,120,120,0.2)",
                  }}
                />
                {/* End dot */}
                <div className="absolute right-[5px] top-1/2 -translate-y-1/2 w-[4px] h-[4px] rounded-full bg-[#4A4459]" />
              </div>
              {/* Handle */}
              <div
                className="absolute top-0 h-[44px] w-[4px] rounded-[2px] bg-[#7fa7b8] -translate-x-1/2"
                style={{ left: `${range}%` }}
              />
              {/* Invisible range input */}
              <input
                type="range"
                min={0}
                max={100}
                value={range}
                onChange={(e) => setRange(Number(e.target.value))}
                className="absolute inset-0 w-full opacity-0 cursor-pointer"
                style={{ height: "44px" }}
              />
            </div>
          </div>

          {/* Agree checkbox */}
          <div className="flex flex-col items-start w-full gap-1">
            <span
              className="font-['Inter',sans-serif] text-[#2e3a3f]"
              style={{ fontSize: "14px", fontWeight: 600 }}
            >
              Allow ATTUNE to record conversations
            </span>
            <button
              onClick={() => setAgreed(!agreed)}
              className="flex items-center gap-3 py-1"
            >
              <div
                className={`w-[18px] h-[18px] rounded-[4px] border transition-all flex items-center justify-center ${
                  agreed
                    ? "bg-[#2e3a3f] border-[#2e3a3f]"
                    : "border-[#d8e1e3] bg-white"
                }`}
              >
                {agreed && (
                  <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                    <path
                      d="M1 5L4.5 8.5L11 1.5"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
              <span
                className="font-['Inter',sans-serif] text-[#2e3a3f]"
                style={{ fontSize: "14px", fontWeight: 400 }}
              >
                Agree
              </span>
            </button>
          </div>
        </div>

        {/* Save and Exit */}
        <PrimaryButton text="Save and Exit" onClick={onClose} className="w-full" />
      </motion.div>
    </motion.div>
  );
}
