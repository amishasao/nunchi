import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { PrimaryButton } from "./PrimaryButton";
import { Star } from "lucide-react";

export function RateInteractionScreen() {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [sessionData, setSessionData] = useState<{
    duration: number;
    insights: string[];
    participants: string[];
  } | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("lastSession");
    if (stored) {
      setSessionData(JSON.parse(stored));
    }
  }, []);

  const handleSubmit = () => {
    setSubmitted(true);
    // Save rating
    const history = JSON.parse(
      sessionStorage.getItem("interactionHistory") || "[]"
    );
    history.push({
      ...sessionData,
      rating,
      date: new Date().toISOString(),
    });
    sessionStorage.setItem("interactionHistory", JSON.stringify(history));

    setTimeout(() => {
      navigate("/home");
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] gap-6 px-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", damping: 15 }}
          className="w-[80px] h-[80px] rounded-full bg-[#9fbfa8] flex items-center justify-center"
        >
          <svg width="40" height="30" viewBox="0 0 40 30" fill="none">
            <path
              d="M4 15L15 26L36 4"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
        <h2 className="text-[#2e3a3f] text-center">Thank you!</h2>
        <p
          className="font-['Inter',sans-serif] text-[#6b7c80] text-center"
          style={{ fontSize: "14px", fontWeight: 400 }}
        >
          Your interaction has been saved. Redirecting to home...
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] gap-8 px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-8 w-full max-w-[320px]"
      >
        <h1
          className="font-['Poppins',sans-serif] text-[#333] text-center"
          style={{
            fontSize: "30px",
            fontWeight: 600,
            letterSpacing: "-0.5px",
            lineHeight: 1.2,
          }}
        >
          Rate the Interaction
        </h1>

        {sessionData && (
          <div className="flex flex-col items-center gap-1">
            <p
              className="font-['Inter',sans-serif] text-[#6b7c80]"
              style={{ fontSize: "14px" }}
            >
              Duration:{" "}
              {Math.floor(sessionData.duration / 60)}m{" "}
              {sessionData.duration % 60}s
            </p>
            <p
              className="font-['Inter',sans-serif] text-[#6b7c80]"
              style={{ fontSize: "14px" }}
            >
              Participants: {sessionData.participants.join(", ")}
            </p>
          </div>
        )}

        {/* Star Rating */}
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <motion.button
              key={star}
              whileTap={{ scale: 1.2 }}
              onMouseEnter={() => setHoveredRating(star)}
              onMouseLeave={() => setHoveredRating(0)}
              onClick={() => setRating(star)}
              className="p-1"
            >
              <Star
                size={42}
                fill={
                  star <= (hoveredRating || rating) ? "#FFCF4C" : "#d9d9d9"
                }
                stroke={
                  star <= (hoveredRating || rating) ? "#FFCF4C" : "#d9d9d9"
                }
                strokeWidth={1}
              />
            </motion.button>
          ))}
        </div>

        <PrimaryButton
          text="Submit!"
          onClick={handleSubmit}
          disabled={rating === 0}
          className="w-full"
        />
      </motion.div>
    </div>
  );
}