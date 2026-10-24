import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router";
import { ChevronRight, Volume2 } from "lucide-react";
import { motion } from "motion/react";
import { PrimaryButton } from "./PrimaryButton";
import { ListenOverlay } from "./ListenOverlay";

// Heatmap colors from calm (green) to tense (red)
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

interface HeatCell {
  value: number; // 0-9
  participantIndex: number | null;
}

const GRID_ROWS = 6;
const GRID_COLS = 7;

function getColor(value: number) {
  return HEAT_COLORS[Math.min(value, 9)];
}

export function HeatmapLiveScreen() {
  const navigate = useNavigate();
  const [grid, setGrid] = useState<HeatCell[][]>([]);
  const [participants, setParticipants] = useState<string[]>([]);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [insights, setInsights] = useState<string[]>([]);
  const [showListenOverlay, setShowListenOverlay] = useState(false);
  const [isRecording, setIsRecording] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const generateInsights = useCallback(
    (g: HeatCell[][], parts: string[]) => {
      const newInsights: string[] = [];
      // Calculate average intensity per participant
      const partIntensity: Record<number, number[]> = {};
      g.forEach((row) =>
        row.forEach((cell) => {
          if (cell.participantIndex !== null) {
            if (!partIntensity[cell.participantIndex])
              partIntensity[cell.participantIndex] = [];
            partIntensity[cell.participantIndex].push(cell.value);
          }
        })
      );

      Object.entries(partIntensity).forEach(([idx, values]) => {
        const avg = values.reduce((a, b) => a + b, 0) / values.length;
        const name = parts[parseInt(idx)] || `Person ${parseInt(idx) + 1}`;
        if (avg > 6) {
          newInsights.push(`${name} appears tense - consider de-escalating`);
        } else if (avg < 3) {
          newInsights.push(
            `${name} is calm - good energy for deeper discussion`
          );
        } else {
          newInsights.push(`${name} is moderately engaged`);
        }
      });

      if (newInsights.length === 0) {
        newInsights.push("Conversation is flowing naturally");
      }

      return newInsights.slice(0, 3);
    },
    []
  );

  // Initialize from activity data
  useEffect(() => {
    const stored = sessionStorage.getItem("currentActivity");
    let parts = ["You", "Person 2", "Person 3"];
    if (stored) {
      const data = JSON.parse(stored);
      if (data.participants && data.participants.length > 0) {
        parts = ["You", ...data.participants];
      }
    }
    setParticipants(parts);

    // Initialize grid
    const initialGrid: HeatCell[][] = [];
    for (let r = 0; r < GRID_ROWS; r++) {
      const row: HeatCell[] = [];
      for (let c = 0; c < GRID_COLS; c++) {
        const pIdx =
          Math.random() > 0.7
            ? Math.floor(Math.random() * parts.length)
            : null;
        row.push({
          value: Math.floor(Math.random() * 4),
          participantIndex: pIdx,
        });
      }
      row[0] = { value: 1, participantIndex: null };
      initialGrid.push(row);
    }

    // Place participants on the grid
    parts.forEach((_, i) => {
      const r = Math.floor(Math.random() * GRID_ROWS);
      const c = Math.floor(Math.random() * GRID_COLS);
      initialGrid[r][c] = {
        value: Math.floor(Math.random() * 6) + 2,
        participantIndex: i,
      };
    });

    setGrid(initialGrid);
    setInsights(generateInsights(initialGrid, parts));
  }, [generateInsights]);

  // Simulate live updates
  useEffect(() => {
    if (!isRecording) return;

    intervalRef.current = setInterval(() => {
      setElapsedTime((t) => t + 1);
      setGrid((prev) => {
        if (prev.length === 0) return prev;
        const newGrid = prev.map((row) =>
          row.map((cell) => {
            const delta = Math.random() > 0.7 ? (Math.random() > 0.5 ? 1 : -1) : 0;
            return {
              ...cell,
              value: Math.max(0, Math.min(9, cell.value + delta)),
            };
          })
        );
        setInsights(generateInsights(newGrid, participants));
        return newGrid;
      });
    }, 2000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRecording, participants, generateInsights]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleEndActivity = () => {
    setIsRecording(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
    // Store session data for rating
    sessionStorage.setItem(
      "lastSession",
      JSON.stringify({
        duration: elapsedTime,
        insights,
        participants,
      })
    );
    navigate("/home/rate");
  };

  return (
    <div className="flex flex-col gap-4 px-5 pt-4 pb-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="font-['Inter',sans-serif] text-[#2e3a3f]">Heatmap</h3>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowListenOverlay(true)}
            className="text-[#2e3a3f] p-1"
          >
            <Volume2 size={24} />
          </button>
          {isRecording && (
            <div className="flex items-center gap-2 bg-[#ff8080]/20 rounded-full px-3 py-1">
              <motion.div
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-2.5 h-2.5 rounded-full bg-[#ff4444]"
              />
              <span
                className="font-['Inter',sans-serif] text-[#ff4444]"
                style={{ fontSize: "13px", fontWeight: 600 }}
              >
                {formatTime(elapsedTime)}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Heatmap Grid */}
      <div className="bg-white rounded-xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.08)]">
        <div className="p-3">
          <div
            className="grid gap-[3px] rounded-lg overflow-hidden"
            style={{
              gridTemplateColumns: `repeat(${GRID_COLS}, 1fr)`,
            }}
          >
            {grid.map((row, r) =>
              row.map((cell, c) => (
                <motion.div
                  key={`${r}-${c}`}
                  animate={{
                    backgroundColor: getColor(cell.value),
                  }}
                  transition={{ duration: 0.8 }}
                  className="aspect-square rounded-[4px] relative flex items-center justify-center"
                  style={{ backgroundColor: getColor(cell.value) }}
                >
                  {cell.participantIndex !== null && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="bg-white rounded-full w-[26px] h-[26px] flex items-center justify-center shadow-sm">
                        <span
                          className="font-['Inter',sans-serif] text-[#2e3a3f]"
                          style={{ fontSize: "12px", fontWeight: 600 }}
                        >
                          {cell.participantIndex + 1}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))
            )}
          </div>
        </div>
        {/* Legend */}
        <div className="flex items-center justify-between px-4 pb-3">
          <span
            className="font-['Inter',sans-serif] text-[#6b7c80]"
            style={{ fontSize: "11px", fontWeight: 400 }}
          >
            Calm
          </span>
          <div className="flex gap-0.5">
            {HEAT_COLORS.map((color, i) => (
              <div
                key={i}
                className="w-4 h-2 rounded-[2px]"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <span
            className="font-['Inter',sans-serif] text-[#6b7c80]"
            style={{ fontSize: "11px", fontWeight: 400 }}
          >
            Tense
          </span>
        </div>
      </div>

      {/* Participant Legend */}
      <div className="flex flex-wrap gap-3">
        {participants.map((p, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <div className="bg-white border border-[#d8e1e3] rounded-full w-[22px] h-[22px] flex items-center justify-center">
              <span
                className="font-['Inter',sans-serif] text-[#2e3a3f]"
                style={{ fontSize: "11px", fontWeight: 600 }}
              >
                {i + 1}
              </span>
            </div>
            <span
              className="font-['Inter',sans-serif] text-[#6b7c80]"
              style={{ fontSize: "12px", fontWeight: 500 }}
            >
              {p}
            </span>
          </div>
        ))}
      </div>

      {/* Quick Insights */}
      <div className="flex flex-col gap-2">
        <h3 className="font-['Inter',sans-serif] text-[#2e3a3f]">
          Quick Insights
        </h3>
        {insights.map((insight, i) => (
          <motion.div
            key={`${insight}-${i}`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-[#81a9e5]/15 rounded-xl px-4 py-3.5 flex items-center justify-between"
          >
            <span
              className="font-['Inter',sans-serif] text-[#2e3a3f] flex-1"
              style={{ fontSize: "14px", fontWeight: 400 }}
            >
              {insight}
            </span>
            <ChevronRight size={18} className="text-[#7fa7b8] shrink-0" />
          </motion.div>
        ))}
      </div>

      {/* End Activity Button */}
      <div className="flex justify-center pt-2">
        <PrimaryButton
          text="End Activity"
          onClick={handleEndActivity}
          className="w-full max-w-[300px]"
        />
      </div>

      {/* Listen Overlay */}
      {showListenOverlay && (
        <ListenOverlay onClose={() => setShowListenOverlay(false)} />
      )}
    </div>
  );
}