import { useNavigate } from "react-router";
import { Flame } from "lucide-react";
import { PrimaryButton } from "./PrimaryButton";

export function HeatmapScreen() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center gap-8 px-8 pt-16 pb-8 min-h-[70vh]">
      <div className="w-[100px] h-[100px] rounded-full bg-[#e9f1ef] flex items-center justify-center">
        <Flame size={48} className="text-[#7fa7b8]" />
      </div>
      <div className="flex flex-col items-center gap-3 text-center">
        <h2 className="text-[#2e3a3f]">No Active Conversation</h2>
        <p
          className="font-['Inter',sans-serif] text-[#6b7c80] max-w-[280px]"
          style={{ fontSize: "14px", fontWeight: 400 }}
        >
          Start a new activity to see the live heatmap of your conversation
          dynamics.
        </p>
      </div>
      <PrimaryButton
        text="Start Activity"
        onClick={() => navigate("/home/activity")}
      />
    </div>
  );
}