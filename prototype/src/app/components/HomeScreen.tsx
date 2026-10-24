import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import { TipOverlay } from "./TipOverlay";
import { PrimaryButton } from "./PrimaryButton";
import { SettingsOverlay } from "./SettingsOverlay";
import imgImage3 from "figma:asset/c97a5c891d3019a1ba179d80e42e4b692f5803af.png";
import svgPaths from "../../imports/svg-idkvdsa4gp";

// Heatmap grid colors adapted to the teal-green palette
const CELL_DARK = "#2e3a3f";
const CELL_MID = "#7fa7b8";
const CELL_LIGHT = "#c5ddd2";

// Each row is a mood, each col is a day (S M T W T F S)
// 0 = dark, 1 = mid, 2 = light
const heatmapData: number[][] = [
  [0, 0, 0, 1, 2, 1, 1], // calm
  [0, 1, 0, 1, 2, 1, 1], // focused
  [0, 0, 0, 2, 2, 1, 2], // confident
  [0, 1, 0, 1, 2, 1, 1], // intentional
];

const moodLabels = ["calm", "focused", "confident", "intentional"];
const dayLabels = ["S", "M", "T", "W", "T", "F", "S"];

function getCellColor(value: number) {
  if (value === 0) return CELL_DARK;
  if (value === 1) return CELL_MID;
  return CELL_LIGHT;
}

const recommendedTips = [
  {
    title: "Instilling Trust",
    description:
      "Build trust by maintaining steady eye contact, using open body language, and validating others' perspectives before sharing your own.",
  },
  {
    title: "Finding Intent",
    description:
      "Look beyond words to understand the true motivation behind what someone is saying. Pay attention to tone shifts and repeated themes.",
  },
  {
    title: "Unspoken Cues",
    description:
      "Notice micro-expressions, posture changes, and breathing patterns. These non-verbal signals often reveal more than words.",
  },
];

function SettingsHeartIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 30 30" fill="none">
      <mask
        id="mask_settings"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
        width="30"
        height="30"
        x="0"
        y="0"
      >
        <rect fill="#D9D9D9" height="30" width="30" />
      </mask>
      <g mask="url(#mask_settings)">
        <path d={svgPaths.p906f8f0} fill="#2e3a3f" />
      </g>
    </svg>
  );
}

function DoubleArrowIcon() {
  return (
    <svg width="18" height="16" viewBox="0 0 14 12" fill="none">
      <path d={svgPaths.p3019f900} fill="#2e3a3f" />
    </svg>
  );
}

export function HomeScreen() {
  const navigate = useNavigate();
  const [selectedTip, setSelectedTip] = useState<
    (typeof recommendedTips)[0] | null
  >(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showScrollBtn, setShowScrollBtn] = useState(true);
  const [showSettings, setShowSettings] = useState(false);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowScrollBtn(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll);
      checkScroll();
      return () => el.removeEventListener("scroll", checkScroll);
    }
  }, []);

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 160, behavior: "smooth" });
    }
  };

  const cardGradients = [
    "linear-gradient(135deg, #7fa7b8 0%, #9fbfa8 100%)",
    "linear-gradient(135deg, #9fbfa8 0%, #c5ddd2 60%, #7fa7b8 100%)",
    "linear-gradient(135deg, #2e3a3f 0%, #7fa7b8 80%, #9fbfa8 100%)",
  ];

  return (
    <div className="flex flex-col gap-8 px-5 pt-4 pb-6">
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span
          className="font-['Inter',sans-serif] text-[#2e3a3f]"
          style={{ fontSize: "14px", fontWeight: 700 }}
        >
          Next Interaction: Today at 3 pm
        </span>
        <button
          onClick={() => setShowSettings(true)}
          className="p-0.5"
        >
          <SettingsHeartIcon />
        </button>
      </div>

      {/* Welcome Card */}
      <div className="relative rounded-[9px] overflow-hidden h-[106px]">
        <img
          src={imgImage3}
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        <div className="absolute inset-0 bg-black/20" />
        <p
          className="absolute bottom-3 left-3 font-['Raleway',sans-serif] text-[#f6f8f7]"
          style={{ fontSize: "32px", fontWeight: 700, lineHeight: "1.2" }}
        >
          Welcome John
        </p>
      </div>

      {/* Insights Section */}
      <div className="flex flex-col gap-2">
        <h3 className="font-['Inter',sans-serif] text-[#2e3a3f]">
          Insights
        </h3>

        {/* Heatmap Grid */}
        <div className="relative pl-[84px] pr-1">
          {/* Mood labels */}
          <div className="absolute left-0 top-0 flex flex-col gap-[12px] w-[80px]">
            {moodLabels.map((label) => (
              <div
                key={label}
                className="h-[28px] flex items-center"
              >
                <span
                  className="font-['Inter',sans-serif] text-[#2e3a3f]"
                  style={{ fontSize: "13px", fontWeight: 400 }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Grid cells */}
          <div className="flex flex-col gap-[12px]">
            {heatmapData.map((row, ri) => (
              <div key={ri} className="flex gap-[11px]">
                {row.map((cell, ci) => (
                  <div
                    key={`${ri}-${ci}`}
                    className="w-[28px] h-[28px] rounded-[4px]"
                    style={{ backgroundColor: getCellColor(cell) }}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* Day labels */}
          <div className="flex gap-[11px] mt-3">
            {dayLabels.map((day, i) => (
              <div key={i} className="w-[28px] flex items-center justify-center">
                <span
                  className="font-['Raleway',sans-serif] text-[#2e3a3f] text-center"
                  style={{ fontSize: "16px", fontWeight: 600 }}
                >
                  {day}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recommended Section */}
      <div className="flex flex-col gap-3">
        <h3 className="font-['Inter',sans-serif] text-[#2e3a3f]">
          Recommended
        </h3>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-2 -mx-1 px-1 scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <style>{`div::-webkit-scrollbar { display: none; }`}</style>

            {recommendedTips.map((tip, index) => (
              <button
                key={tip.title}
                onClick={() => setSelectedTip(tip)}
                className="flex flex-col gap-3 shrink-0 w-[132px] cursor-pointer text-left"
              >
                <div
                  className="w-full h-[132px] rounded-[8px]"
                  style={{
                    backgroundImage: cardGradients[index],
                    boxShadow: "4px 2px 4px 0px rgba(0,0,0,0.12)",
                  }}
                />
                <span
                  className="font-['Inter',sans-serif] text-[#2e3a3f] text-center w-full"
                  style={{ fontSize: "15px", fontWeight: 600 }}
                >
                  {tip.title}
                </span>
              </button>
            ))}
          </div>

          {/* Scroll arrow – small pill button at the right edge */}
          {showScrollBtn && (
            <button
              onClick={handleScrollRight}
              className="absolute right-[-4px] top-[50px] w-[32px] h-[32px] rounded-full bg-white/90 flex items-center justify-center transition-opacity duration-300"
              style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}
              aria-label="Scroll right"
            >
              <DoubleArrowIcon />
            </button>
          )}
        </div>
      </div>

      {/* Start Activity */}
      <div className="flex justify-center">
        <PrimaryButton
          text="Start Activity"
          onClick={() => navigate("/home/activity")}
        />
      </div>

      {/* Tip Overlay */}
      {selectedTip && (
        <TipOverlay
          title={selectedTip.title}
          description={selectedTip.description}
          onClose={() => setSelectedTip(null)}
        />
      )}

      {/* Settings Overlay */}
      {showSettings && (
        <SettingsOverlay onClose={() => setShowSettings(false)} />
      )}
    </div>
  );
}