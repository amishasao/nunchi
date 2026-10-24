import { useState } from "react";
import img3DAvatars10 from "figma:asset/6e4d877ce9c070a34ca062eebd3f33d8c1dac952.png";
import img3DAvatars12 from "figma:asset/eaa320717b7e77fd08d1bdaf9802cc375eb36366.png";
import img3DAvatars15 from "figma:asset/b45fff6b8e9ca09258e544c7bd3e6cd00180d427.png";
import img3DAvatars13 from "figma:asset/436985b609d053075017d7f78ccd2d5f7d059fcf.png";
import img3DAvatars11 from "figma:asset/e94ab0fb805f87cde4c201f6a72ac4ed80d9e261.png";
import img3DAvatars17 from "figma:asset/a7e8150b48421155ec56805f777056f57141df11.png";
import img3DAvatars20 from "figma:asset/633f85a8183a9043a1490dbabccae2c5cd82170e.png";

const HEAT_COLORS = [
  "#cdfad5",
  "#d4fbc0",
  "#e2fcb0",
  "#f6fdc3",
  "#fff4b0",
  "#ffebb0",
  "#ffd7a0",
  "#ffcf96",
  "#ffb080",
  "#ff8080",
];

interface PastInteraction {
  title: string;
  time: string;
  participants: string[];
  avatars: string[];
  heatValues: number[];
  summary: string[];
}

const mockInteractions: PastInteraction[] = [
  {
    title: "Meeting at 3:30 pm",
    time: "Today",
    participants: ["Sarah", "Mike"],
    avatars: [img3DAvatars10, img3DAvatars12],
    heatValues: [1, 1, 1, 2, 2, 3, 5, 6, 7, 2, 2, 1, 1],
    summary: [
      "Conversation was mostly calm with a brief spike",
      "Sarah showed increased engagement mid-discussion",
      "Good overall energy balance",
    ],
  },
  {
    title: "Coffee chat at 5:10 pm",
    time: "Today",
    participants: ["Alex", "Jordan", "Sam"],
    avatars: [img3DAvatars15, img3DAvatars13, img3DAvatars11],
    heatValues: [1, 3, 4, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    summary: [
      "Relaxed conversation throughout",
      "Early engagement from Alex settled quickly",
      "Natural rapport building detected",
    ],
  },
  {
    title: "Interview at 6:20 pm",
    time: "Yesterday",
    participants: ["Taylor", "Morgan"],
    avatars: [img3DAvatars20, img3DAvatars17],
    heatValues: [1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 5, 8, 9],
    summary: [
      "Tension escalated towards the end",
      "Consider ending interviews with lighter topics",
      "Good start but energy shifted negatively",
    ],
  },
];

function MiniHeatBar({ values }: { values: number[] }) {
  return (
    <div className="flex items-center gap-px w-full">
      {values.map((v, i) => (
        <div
          key={i}
          className="flex-1 h-3 first:rounded-l-full last:rounded-r-full"
          style={{ backgroundColor: HEAT_COLORS[Math.min(v, 9)] }}
        />
      ))}
    </div>
  );
}

export function ProfileScreen() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <div className="flex flex-col pb-4">
      {/* Profile Header */}
      <div className="relative">
        <div className="bg-[#7fa7b8] h-[120px] w-full" />
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-[45px]">
          <div className="w-[90px] h-[90px] rounded-full bg-[#eaddff] flex items-center justify-center border-4 border-white shadow-md">
            <svg width="36" height="33" viewBox="0 0 28 26" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20 6C20 9.31 17.31 12 14 12C10.69 12 8 9.31 8 6C8 2.69 10.69 0 14 0C17.31 0 20 2.69 20 6ZM18 6C18 8.21 16.21 10 14 10C11.79 10 10 8.21 10 6C10 3.79 11.79 2 14 2C16.21 2 18 3.79 18 6Z"
                fill="#4F378A"
              />
              <path
                d="M14 15C7.62 15 2.1 18.83 0 24.19C0.51 24.7 1.05 25.18 1.62 25.63C3.18 20.71 8.09 17 14 17C19.91 17 24.82 20.71 26.38 25.63C26.95 25.18 27.49 24.7 28 24.19C25.9 18.83 20.38 15 14 15Z"
                fill="#4F378A"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="px-6 pt-14 pb-2">
        <h1 className="text-[#2e3a3f] text-center" style={{ fontSize: "28px" }}>
          John Doe
        </h1>
        <p
          className="font-['Inter',sans-serif] text-[#6b7c80] text-center"
          style={{ fontSize: "14px", fontWeight: 500 }}
        >
          Nunchi Practitioner
        </p>
      </div>

      {/* Interactions Today */}
      <div className="px-4 pt-4 flex flex-col gap-3">
        <h2 className="text-[#2e3a3f] px-1" style={{ fontSize: "20px" }}>
          Interactions today
        </h2>

        {mockInteractions.map((interaction, index) => (
          <button
            key={index}
            onClick={() =>
              setExpandedCard(expandedCard === index ? null : index)
            }
            className="bg-[#9fbfa8] rounded-[16px] p-3 flex flex-col gap-2 text-left transition-all"
          >
            {/* Header */}
            <div className="flex items-center justify-between w-full">
              <span
                className="font-['Inter',sans-serif] text-[#2e3a3f]"
                style={{ fontSize: "12px", fontWeight: 600 }}
              >
                {interaction.title}
              </span>
              <div className="flex items-center gap-1.5">
                <span
                  className="font-['Inter',sans-serif] text-[#2e3a3f]"
                  style={{ fontSize: "10px", fontWeight: 400 }}
                >
                  Participants:
                </span>
                {interaction.avatars.map((avatar, ai) => (
                  <img
                    key={ai}
                    src={avatar}
                    alt=""
                    className="w-[22px] h-[22px] rounded-full object-cover"
                  />
                ))}
              </div>
            </div>

            {/* Mini Heatbar */}
            <MiniHeatBar values={interaction.heatValues} />

            {/* Legend */}
            <div className="flex justify-between w-full">
              <span
                className="font-['Inter',sans-serif] text-[#2e3a3f]"
                style={{ fontSize: "10px", fontWeight: 400 }}
              >
                Calm
              </span>
              <span
                className="font-['Inter',sans-serif] text-[#2e3a3f]"
                style={{ fontSize: "10px", fontWeight: 400 }}
              >
                Tense
              </span>
            </div>

            {/* Summary (expandable) */}
            {expandedCard === index && (
              <div className="flex flex-col gap-1 pt-1 border-t border-[#7fa7b8]/30 w-full">
                <span
                  className="font-['Inter',sans-serif] text-[#2e3a3f]"
                  style={{ fontSize: "12px", fontWeight: 600 }}
                >
                  Summary
                </span>
                {interaction.summary.map((s, si) => (
                  <div key={si} className="flex gap-2">
                    <span
                      className="font-['Inter',sans-serif] text-[#2e3a3f]"
                      style={{ fontSize: "10px", fontWeight: 400 }}
                    >
                      {si + 1}. {s}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}