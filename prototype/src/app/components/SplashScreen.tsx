import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";

export function SplashScreen() {
  const navigate = useNavigate();
  const [phase, setPhase] = useState<"in" | "hold" | "out">("in");

  useEffect(() => {
    // fade in → hold → fade out → navigate
    const holdTimer = setTimeout(() => setPhase("hold"), 600);
    const outTimer = setTimeout(() => setPhase("out"), 2400);
    const navTimer = setTimeout(() => navigate("/home", { replace: true }), 3200);
    return () => {
      clearTimeout(holdTimer);
      clearTimeout(outTimer);
      clearTimeout(navTimer);
    };
  }, [navigate]);

  return (
    <div className="flex flex-col h-full max-w-[430px] mx-auto relative overflow-hidden">
      <AnimatePresence>
        {phase !== "out" ? (
          <motion.div
            key="splash"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center bg-[#7fa7b8]"
          >
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="font-['Raleway',sans-serif] text-white text-center"
              style={{
                fontSize: "48px",
                fontWeight: 400,
                letterSpacing: "6.72px",
              }}
            >
              ATTUNE
            </motion.p>
          </motion.div>
        ) : (
          <motion.div
            key="splash-exit"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center bg-[#7fa7b8]"
          >
            <p
              className="font-['Raleway',sans-serif] text-white text-center"
              style={{
                fontSize: "48px",
                fontWeight: 400,
                letterSpacing: "6.72px",
              }}
            >
              ATTUNE
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
