import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Image as ImageIcon, List as ListIcon, History as HistoryIcon, Clock, Calendar, Sun, Sparkles, CircleHelp, Flame, Package, SquareCheckBig, Settings, Rocket, Shield } from "lucide-react";
import { Gl } from "../data";
import { UpdateLog } from "../types";

const iconMap: Record<string, React.ComponentType<any>> = {
  sun: Sun,
  flame: Flame,
  "circle-help": CircleHelp,
  package: Package,
  "square-check-big": SquareCheckBig,
  settings: Settings,
  sparkles: Sparkles,
  rocket: Rocket,
  shield: Shield,
  clock: Clock,
  calendar: Calendar,
};

function getFeatureIcon(iconName: string) {
  return iconMap[iconName] || CircleHelp;
}

export default function UpdatesLog() {
  const [logs, setLogs] = useState<UpdateLog[]>(Gl);
  const [selectedId, setSelectedId] = useState<string>("");

  useEffect(() => {
    fetch("/api/updates")
      .then((res) => res.json())
      .then((data) => {
        if (data.updates && Array.isArray(data.updates) && data.updates.length > 0) {
          setLogs(data.updates);
          setSelectedId((prev) => prev || data.updates[0].id);
        } else if (Gl.length > 0) {
          setLogs(Gl);
          setSelectedId((prev) => prev || Gl[0].id);
        }
      })
      .catch(() => {
        if (Gl.length > 0) {
          setLogs(Gl);
          setSelectedId((prev) => prev || Gl[0].id);
        }
      });
  }, []);

  const activeLog = useMemo(() => logs.find((r) => r.id === selectedId) || logs[0] || null, [logs, selectedId]);

  if (!activeLog) {
    return (
      <div className="col-span-12 text-center py-20 bg-white/5 border border-white/10 rounded-3xl p-8 w-full">
        <Sparkles className="w-12 h-12 text-indigo-400 mx-auto mb-4 animate-pulse" />
        <h3 className="text-xl font-black text-white uppercase tracking-wider">Update Log is Empty</h3>
        <p className="text-slate-400 text-sm mt-2 max-w-md mx-auto">
          There are currently no published update logs. Check back later!
        </p>
      </div>
    );
  }

  return (
    <div id="updates-log-section" className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
      {/* Left Column: Update Cover */}
      <div className="lg:col-span-5 w-full">
        <div className="flex flex-col h-full min-h-[600px] lg:h-[600px] bg-[#0a0c16]/95 border border-white/10 rounded-3xl overflow-hidden shadow-xl relative transition-all duration-300">
          <div className="px-6 py-5 border-b border-white/10 flex items-center gap-3 relative z-10 bg-[#07080f]/90">
            <div className="p-2.5 bg-white/5 rounded-xl border border-white/10">
              <ImageIcon className="w-5 h-5 text-indigo-400" />
            </div>
            <h2 className="text-base font-black text-white tracking-wide uppercase">Update Cover</h2>
          </div>
          <div className="relative z-10 flex-1 flex flex-col justify-between overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLog.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                className="absolute inset-0 w-full h-full"
              >
                <div className="absolute inset-0 bg-slate-950" />
                <img
                  src={activeLog.image}
                  alt={activeLog.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-90 scale-100 hover:scale-105 duration-700 transition-transform"
                />
                {activeLog.tag && (
                  <div className="absolute top-5 left-5 z-20">
                    <div className="relative px-5 py-2.5 font-black text-xs uppercase tracking-widest text-white rounded-xl overflow-hidden border border-white/20 bg-blue-600/90 backdrop-blur-md">
                      <span>{activeLog.tag}</span>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent z-10" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Middle Column: Log Details */}
      <div className="lg:col-span-4 h-full">
        <div className="flex flex-col h-full bg-[#0a0c16]/95 border border-white/10 rounded-3xl overflow-hidden shadow-xl relative lg:h-[600px] min-h-[600px] transition-all duration-300">
          <div className="px-6 py-5 border-b border-white/10 flex items-center gap-3 relative z-10 bg-[#07080f]/90">
            <div className="p-2.5 bg-white/5 rounded-xl border border-white/10">
              <ListIcon className="w-5 h-5 text-indigo-400" />
            </div>
            <h2 className="text-base font-black text-white tracking-wide uppercase">Log Details</h2>
          </div>
          <div className="relative z-10 flex-1 p-5 flex flex-col justify-start overflow-y-auto custom-scroll">
            <div className="flex flex-col flex-1 w-full relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeLog.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col gap-5"
                >
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center p-2.5 mb-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                      {activeLog.iconIsSun ? (
                        <Sun className="w-6 h-6 text-amber-400" />
                      ) : (
                        <Sparkles className="w-6 h-6 text-indigo-400" />
                      )}
                    </div>
                    <h3 className="text-lg font-black text-white leading-tight mb-1 tracking-tight">{activeLog.title}</h3>
                    <div className="flex items-center justify-center gap-1.5 text-slate-400 font-mono text-[10px]">
                      <Clock className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{activeLog.date}</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    {activeLog.features.map((feature, idx) => {
                      const isEmoji = feature.icon && (feature.icon.trim().length <= 2 || !/^[a-zA-Z0-9_-]+$/.test(feature.icon));
                      const ResolvedIcon = isEmoji ? null : getFeatureIcon(feature.icon);

                      return (
                        <motion.div
                          key={`${activeLog.id}-feat-${idx}`}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.04 }}
                          className="flex items-center gap-3 bg-white/[0.02] hover:bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-2.5 px-3 transition-all duration-200"
                        >
                          <div className={`p-1.5 rounded-lg bg-black/45 border border-white/10 ${feature.color} flex items-center justify-center w-8 h-8`}>
                            {isEmoji ? (
                              <span className="text-sm select-none leading-none">{feature.icon}</span>
                            ) : (
                              ResolvedIcon && <ResolvedIcon className="w-4 h-4" strokeWidth={2.5} />
                            )}
                          </div>
                          <span className="text-xs font-semibold text-slate-200">{feature.text}</span>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: All Updates List */}
      <div className="lg:col-span-3 h-full lg:h-[600px]">
        <div className="flex flex-col h-full bg-[#0a0c16]/95 border border-white/10 rounded-3xl overflow-hidden shadow-xl relative min-h-[300px] lg:h-[600px] transition-all duration-300">
          <div className="px-6 py-5 border-b border-white/10 flex items-center gap-3 relative z-10 bg-[#07080f]/90">
            <div className="p-2.5 bg-white/5 rounded-xl border border-white/10">
              <HistoryIcon className="w-5 h-5 text-indigo-400" />
            </div>
            <h2 className="text-base font-black text-white tracking-wide uppercase">All Updates ({logs.length})</h2>
          </div>
          <div className="relative z-10 flex-1 p-4 overflow-y-auto custom-scroll flex flex-col gap-3">
            {logs.map((log, idx) => {
              const isSelected = log.id === selectedId;
              return (
                <motion.button
                  key={log.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedId(log.id)}
                  className={`relative overflow-hidden flex items-center gap-4 p-4 rounded-2xl text-left transition-all duration-300 outline-none w-full border cursor-pointer
                    ${isSelected ? "bg-white/10 border-indigo-500/60" : "bg-black/20 border-white/5 hover:bg-white/5 hover:border-white/20"}`}
                >
                  <div className={`relative w-10 h-10 rounded-lg overflow-hidden shrink-0 transition-opacity ${isSelected ? "opacity-100 ring-2 ring-indigo-500" : "opacity-65"}`}>
                    <img src={log.image} alt={log.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col gap-1 min-w-0">
                    <span className={`font-black text-sm truncate ${isSelected ? "text-white" : "text-slate-300"}`}>{log.title}</span>
                    <span className={`text-xs font-mono font-medium ${isSelected ? "text-indigo-300" : "text-slate-500"}`}>{log.date}</span>
                    {isSelected && (
                      <span className="text-[10px] uppercase font-black tracking-widest text-[#10b981] mt-1 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" /> Active
                      </span>
                    )}
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
