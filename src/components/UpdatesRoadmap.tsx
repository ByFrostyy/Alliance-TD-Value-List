import React from "react";
import { motion } from "framer-motion";
import { Map, Clock, Rocket, Star, Wrench, Sparkles, CheckCircle2, ArrowRightLeft, TrendingUp } from "lucide-react";

export function UpdatesRoadmap() {
  const roadmapItems = [
    {
      title: "Unknown ???",
      status: "planned",
      date: "TBA",
      description: "Upcoming game update for Alliance Tower Defense! Stay tuned for official announcements.",
      icon: <Rocket className="w-5 h-5 text-indigo-400" />,
      features: [
        "Alliance Tower Defense Major Update",
        "New Secret & Godly Units"
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-black text-white uppercase tracking-widest mb-3 flex items-center justify-center gap-3">
          <Map className="w-8 h-8 text-indigo-500" />
          Updates Roadmap
        </h2>
        <p className="text-slate-400 font-medium max-w-2xl mx-auto">
          Take a look at our upcoming plans and what we are currently working on. We are always trying to improve the experience for our community.
        </p>
      </div>

      <div className="space-y-6">
        {roadmapItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#050505]/50 border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 relative overflow-hidden"
          >
            {/* Status Indicator */}
            <div className="absolute top-0 right-0 p-4">
              {item.status === "in-progress" ? (
                <div className="flex items-center gap-2 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  <Wrench className="w-3.5 h-3.5 animate-pulse" />
                  In Progress
                </div>
              ) : item.status === "completed" ? (
                <div className="flex items-center gap-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Completed
                </div>
              ) : (
                <div className="flex items-center gap-2 bg-slate-500/10 text-slate-400 border border-slate-500/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  <Clock className="w-3.5 h-3.5" />
                  Planned
                </div>
              )}
            </div>

            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
              {item.icon}
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <span className="text-xs font-mono font-bold text-slate-500 bg-white/5 px-2 py-0.5 rounded-md">
                  {item.date}
                </span>
              </div>
              <p className="text-slate-400 text-sm mb-5 leading-relaxed">
                {item.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {item.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-zinc-500 mt-0.5 shrink-0" />
                    <span className="text-xs font-semibold text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
