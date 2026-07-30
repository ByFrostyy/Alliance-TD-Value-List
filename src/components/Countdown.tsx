import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Flame, Hourglass, Sparkles, Trophy } from "lucide-react";

// Target dates from the original applet (already released or upcoming relative to their timeline)
const zu = new Date("2026-06-21T18:00:00+03:00").getTime();
const fg = new Date("2026-06-16T18:00:00+03:00").getTime();

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<number>(zu - Date.now());
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const tick = () => {
      const now = Date.now();
      const diff = zu - now;
      setTimeLeft(diff);

      const totalDuration = zu - fg;
      const elapsed = now - fg;
      let percentage = Math.floor((elapsed / totalDuration) * 100);
      percentage = Math.max(0, Math.min(100, percentage));
      setProgress(percentage);
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatUnit = (value: number) => {
    return String(value).padStart(2, "0");
  };

  if (timeLeft <= 0) {
    return (
      <div id="countdown-released-section" className="flex flex-col items-center justify-center p-8 bg-[#08090f] border border-emerald-500/10 hover:border-emerald-500/20 transition-all rounded-[2rem] text-center max-w-xl mx-auto shadow-2xl relative overflow-hidden min-h-[300px]">
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
        <Flame className="w-16 h-16 text-emerald-400 animate-bounce mb-4" />
        <h3 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-300 tracking-wider">
          UPDATE IS OUT!
        </h3>
        <p className="text-slate-400 font-semibold mt-2">
          Hop into Alliance: TD and enjoy the new features!
        </p>
      </div>
    );
  }

  const days = Math.floor(timeLeft / 86400000);
  const hours = Math.floor((timeLeft % 86400000) / 3600000);
  const minutes = Math.floor((timeLeft % 3600000) / 60000);
  const seconds = Math.floor((timeLeft % 60000) / 1000);

  const countdownUnits = [
    { value: days, label: "Days" },
    { value: hours, label: "Hours" },
    { value: minutes, label: "Minutes" },
    { value: seconds, label: "Seconds" }
  ];

  return (
    <div id="countdown-active-section" className="flex flex-col items-center justify-center p-8 max-w-2xl mx-auto w-full">
      <div className="text-center flex flex-col items-center gap-2 mb-8">
        <Hourglass className="w-10 h-10 text-indigo-400 animate-spin" style={{ animationDuration: "8s" }} />
        <h3 className="text-xl font-black text-white uppercase tracking-widest mt-2 flex items-center gap-1.5 font-sans">
          🔨 Crafts + ?? ✨ UPDATE
        </h3>
        <p className="text-slate-500 text-xs font-mono">
          Target Release: Sun June 21, 2026, 18:00 (GMT+3)
        </p>
      </div>

      <div className="flex justify-center flex-wrap gap-4 mb-8 w-full max-w-md">
        {countdownUnits.map((unit, index) => (
          <motion.div
            key={unit.label}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.1, type: "spring" }}
            className="flex-1 min-w-[85px] bg-[#07080e]/95 border border-white/5 rounded-2xl py-5 px-3 text-center shadow-xl relative overflow-hidden backdrop-blur-md"
          >
            <div className="absolute top-0 left-0 w-full h-0.5 bg-indigo-500/80" />
            <span className="block text-3xl font-black tracking-tight text-white mb-1 font-mono drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]">
              {formatUnit(unit.value)}
            </span>
            <span className="block text-[8px] font-black uppercase text-indigo-400 tracking-wider font-mono">
              {unit.label}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="w-full bg-[#07080e]/95 border border-white/5 rounded-3xl p-6 shadow-xl relative overflow-hidden backdrop-blur-md">
        <div className="absolute inset-0 bg-indigo-500/[0.02] pointer-events-none" />
        <div className="flex justify-between items-center text-[10px] font-mono font-bold text-slate-500 mb-3 uppercase tracking-widest">
          <span>Deployment Start</span>
          <span className="text-indigo-400 font-mono">Target ETA</span>
        </div>

        <div className="w-full h-3 border border-white/5 rounded-full bg-black/60 overflow-hidden relative shadow-inner">
          <motion.div
            className="h-full bg-gradient-to-r from-indigo-600 to-indigo-400"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ boxShadow: "0 0 12px #6366f1" }}
          />
        </div>

        <div className="flex justify-between items-center mt-4">
          <span className="text-[10px] font-black text-indigo-400/80 font-mono flex items-center gap-1.5 uppercase tracking-wider">
            <Trophy className="w-4 h-4 text-amber-500" />
            Deployment State
          </span>
          <span className="text-xs font-black text-white font-mono bg-white/5 border border-white/10 px-3 py-1 rounded-xl">
            {progress}% Completed
          </span>
        </div>
      </div>

      <motion.div
        className="mt-8 flex items-center gap-2 text-slate-500 text-[10px] font-mono uppercase font-black tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
        <span>Sync Server Active & Ready</span>
      </motion.div>
    </div>
  );
}
