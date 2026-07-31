import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Map, Clock, Rocket, Star, Wrench, Sparkles, CheckCircle2, Flame, RefreshCw } from "lucide-react";
import { RoadmapItem } from "../types";

export function UpdatesRoadmap() {
  const [roadmapItems, setRoadmapItems] = useState<RoadmapItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchRoadmap = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/roadmap");
      if (res.ok) {
        const data = await res.json();
        if (data.roadmap && Array.isArray(data.roadmap)) {
          setRoadmapItems(data.roadmap);
        }
      }
    } catch (err) {
      console.error("Error fetching roadmap:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRoadmap();
  }, []);

  const getIcon = (iconName?: string) => {
    switch (iconName) {
      case "Flame":
        return <Flame className="w-6 h-6 text-amber-400" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-purple-400" />;
      case "Wrench":
        return <Wrench className="w-6 h-6 text-indigo-400" />;
      case "Star":
        return <Star className="w-6 h-6 text-yellow-400" />;
      case "Clock":
        return <Clock className="w-6 h-6 text-blue-400" />;
      case "CheckCircle2":
        return <CheckCircle2 className="w-6 h-6 text-emerald-400" />;
      case "Map":
        return <Map className="w-6 h-6 text-teal-400" />;
      case "Rocket":
      default:
        return <Rocket className="w-6 h-6 text-indigo-400" />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-black text-white uppercase tracking-widest mb-3 flex items-center justify-center gap-3">
          <Map className="w-8 h-8 text-indigo-500" />
          Updates Roadmap
        </h2>
        <p className="text-slate-400 font-medium max-w-2xl mx-auto">
          Take a look at our upcoming plans and what we are currently working on. We are always trying to improve the experience for our community.
        </p>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-16 gap-3">
          <RefreshCw className="w-8 h-8 text-indigo-400 animate-spin" />
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Loading roadmap data...</span>
        </div>
      ) : roadmapItems.length === 0 ? (
        <div className="text-center py-16 bg-[#05050a]/60 border border-white/5 rounded-3xl p-8">
          <Map className="w-12 h-12 text-slate-600 mx-auto mb-3" />
          <h3 className="text-lg font-black text-white uppercase tracking-wider mb-1">No Roadmap Items</h3>
          <p className="text-slate-400 text-sm">No roadmap milestones have been published yet.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {roadmapItems.map((item, index) => (
            <motion.div
              key={item.id || index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#05050a]/80 border border-white/10 hover:border-white/20 transition-all rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 relative overflow-hidden shadow-2xl backdrop-blur-md"
            >
              {/* Status Indicator */}
              <div className="absolute top-4 right-4">
                {item.status === "in-progress" ? (
                  <div className="flex items-center gap-2 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                    <Wrench className="w-3.5 h-3.5 animate-pulse" />
                    In Progress
                  </div>
                ) : item.status === "completed" ? (
                  <div className="flex items-center gap-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Completed
                  </div>
                ) : (
                  <div className="flex items-center gap-2 bg-slate-500/10 text-slate-400 border border-slate-500/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                    <Clock className="w-3.5 h-3.5" />
                    Planned
                  </div>
                )}
              </div>

              {/* Icon / Image Header */}
              <div className="flex md:flex-col items-center gap-4 shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 shadow-inner">
                  {getIcon(item.icon)}
                </div>
                {item.image && (
                  <div className="w-20 h-20 rounded-2xl border border-white/10 overflow-hidden bg-black/40 shrink-0 shadow-md">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                )}
              </div>

              <div className="flex-1 min-w-0 pr-16 md:pr-0">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-white tracking-wide">{item.title}</h3>
                  <span className="text-xs font-mono font-bold text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-0.5 rounded-md">
                    {item.date}
                  </span>
                </div>
                <p className="text-slate-400 text-sm mb-5 leading-relaxed">
                  {item.description}
                </p>

                {item.features && item.features.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 pt-2 border-t border-white/5">
                    {item.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 bg-white/[0.02] border border-white/5 rounded-xl p-2">
                        <Sparkles className="w-3.5 h-3.5 text-indigo-400 mt-0.5 shrink-0" />
                        <span className="text-xs font-semibold text-slate-300 leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
