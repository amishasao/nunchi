import { useState } from "react";
import { useNavigate } from "react-router";
import { PrimaryButton } from "./PrimaryButton";

const intentionOptions = [
  "Discussion",
  "Onboarding",
  "Interview",
  "Research",
  "Coffee Chat",
];

export function StartActivityScreen() {
  const navigate = useNavigate();
  const [activityName, setActivityName] = useState("");
  const [selectedIntentions, setSelectedIntentions] = useState<string[]>([]);
  const [intentionOther, setIntentionOther] = useState("");
  const [participants, setParticipants] = useState("");

  const toggleIntention = (intention: string) => {
    setSelectedIntentions((prev) =>
      prev.includes(intention)
        ? prev.filter((i) => i !== intention)
        : [...prev, intention]
    );
  };

  const handleStart = () => {
    if (!activityName.trim()) return;
    // Store activity data for heatmap screen
    const activityData = {
      name: activityName,
      intentions: [
        ...selectedIntentions,
        ...(intentionOther.trim() ? [intentionOther.trim()] : []),
      ],
      participants: participants
        .split(",")
        .map((p) => p.trim())
        .filter(Boolean),
      startTime: new Date().toISOString(),
    };
    sessionStorage.setItem("currentActivity", JSON.stringify(activityData));
    navigate("/home/heatmap/live");
  };

  const isValid =
    activityName.trim() &&
    (selectedIntentions.length > 0 || intentionOther.trim());

  return (
    <div className="flex flex-col gap-5 px-10 pt-4 pb-6">
      <h1 className="text-center text-[#2e3a3f]">Start a new Activity</h1>

      <div className="flex flex-col gap-5">
        {/* Activity Name */}
        <div className="flex flex-col gap-1">
          <label className="font-['Inter',sans-serif] text-[#2e3a3f]">
            Name of Activity<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={activityName}
            onChange={(e) => setActivityName(e.target.value)}
            placeholder="Name of Activity"
            className="border border-[#d8e1e3] rounded-[5px] px-4 py-3 font-['Inter',sans-serif] text-[#2e3a3f] placeholder:text-[#d2d2d2] outline-none focus:border-[#7fa7b8] transition-colors"
            style={{ fontSize: "14px", fontWeight: 400 }}
          />
        </div>

        {/* Intentions */}
        <div className="flex flex-col gap-1">
          <label className="font-['Inter',sans-serif] text-[#2e3a3f]">
            <span style={{ fontSize: "14px", fontWeight: 400 }}>
              Select your Intention(s)<span className="text-red-500">*</span>
            </span>
          </label>
          <div className="flex flex-col gap-0.5">
            {intentionOptions.map((intention) => (
              <button
                key={intention}
                onClick={() => toggleIntention(intention)}
                className="flex items-center gap-3 py-1.5 text-left"
              >
                <div
                  className={`w-[18px] h-[18px] rounded-[4px] border transition-all flex items-center justify-center ${
                    selectedIntentions.includes(intention)
                      ? "bg-[#2e3a3f] border-[#2e3a3f]"
                      : "border-[#d8e1e3] bg-white"
                  }`}
                >
                  {selectedIntentions.includes(intention) && (
                    <svg
                      width="12"
                      height="10"
                      viewBox="0 0 12 10"
                      fill="none"
                    >
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
                  {intention}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Intention Other */}
        <div className="flex flex-col gap-1">
          <label className="font-['Inter',sans-serif] text-[#2e3a3f]">
            Intention Other
          </label>
          <textarea
            value={intentionOther}
            onChange={(e) => setIntentionOther(e.target.value)}
            placeholder="Describe another intention..."
            rows={2}
            className="border border-[#d8e1e3] rounded-[5px] px-4 py-3 font-['Inter',sans-serif] text-[#2e3a3f] placeholder:text-[#d2d2d2] outline-none focus:border-[#7fa7b8] transition-colors resize-none"
            style={{ fontSize: "14px", fontWeight: 400 }}
          />
        </div>

        {/* Participants */}
        <div className="flex flex-col gap-1">
          <label className="font-['Inter',sans-serif] text-[#2e3a3f]">
            Participants
          </label>
          <input
            type="text"
            value={participants}
            onChange={(e) => setParticipants(e.target.value)}
            placeholder="e.g. Sarah, Mike, Alex"
            className="border border-[#d8e1e3] rounded-[5px] px-4 py-3 font-['Inter',sans-serif] text-[#2e3a3f] placeholder:text-[#d2d2d2] outline-none focus:border-[#7fa7b8] transition-colors"
            style={{ fontSize: "14px", fontWeight: 400 }}
          />
        </div>
      </div>

      <div className="flex justify-center pt-2">
        <PrimaryButton
          text="Start Activity"
          onClick={handleStart}
          disabled={!isValid}
        />
      </div>
    </div>
  );
}