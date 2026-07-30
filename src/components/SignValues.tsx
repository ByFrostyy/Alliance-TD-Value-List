import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Award, Users, Search, ArrowUpDown, X, BadgePercent } from "lucide-react";
import { sd, ug, wS } from "../data";
import { Staff } from "../types";

export default function SignValues() {
  const [selectedGroup, setSelectedGroup] = useState<any | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("name");

  // Map category member counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    ug.forEach(cat => {
      counts[cat.id] = sd.filter(item => wS(item.role) === cat.id).length;
    });
    return counts;
  }, []);

  // Filter and sort staff list
  const filteredStaff = useMemo(() => {
    if (!selectedGroup) return [];
    let list = sd.filter(item => wS(item.role) === selectedGroup.id);

    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        item =>
          item.name.toLowerCase().includes(q) ||
          item.sign.toLowerCase().includes(q)
      );
    }

    if (sortBy === "name") {
      list.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      list.sort((a, b) => b.percent - a.percent);
    }

    return list;
  }, [selectedGroup, searchQuery, sortBy]);

  return (
    <div id="sign-values-section" className="flex flex-col gap-6 w-full relative">
      <div className="text-center max-w-xl mx-auto mb-4">
        <h3 className="text-2xl font-black text-white uppercase tracking-wider mb-2 flex items-center justify-center gap-2">
          <Award className="w-6 h-6 text-amber-500 animate-pulse" />
          Sign Values Page
        </h3>
        <p className="text-zinc-400 text-sm">
          Browse game VIPs, developers, and partners. Learn about signature value percentages and find creators who sign custom items!
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto w-full">
        {ug.map((cat, idx) => {
          const count = categoryCounts[cat.id] || 0;
          return (
            <motion.button
              key={cat.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                setSelectedGroup(cat);
                setSearchQuery("");
                setSortBy("name");
              }}
              className={`w-full bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 p-6 rounded-3xl text-center relative overflow-hidden transition-all duration-300 shadow-lg group cursor-pointer ${cat.class}`}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-current opacity-80" />
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                {cat.id === "owner" ? "👑" : cat.id === "dev" ? "⚙️" : "👾"}
              </div>
              <div className="font-extrabold text-sm uppercase tracking-wider text-slate-100 group-hover:text-white mb-1.5">
                {cat.name}
              </div>
              <div className="text-[10px] font-bold font-mono text-slate-400 group-hover:text-zinc-300">
                {count} {count === 1 ? "Member" : "Members"}
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Modal Overlay for Selected Group Details */}
      <AnimatePresence>
        {selectedGroup && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-45 flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#050505] border border-white/10 p-6 rounded-3xl w-full max-w-4xl h-[75vh] flex flex-col shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedGroup(null)}
                className="absolute top-5 right-5 text-slate-500 hover:text-white p-1 rounded-full hover:bg-white/5 transition select-none cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="mb-6">
                <span className="text-[9px] tracking-widest font-black uppercase text-slate-500 block mb-1">
                  Directory Listing
                </span>
                <h4 className="text-xl font-black text-white flex items-center gap-2 uppercase tracking-wide">
                  <Users className="w-5 h-5 text-blue-400" />
                  {selectedGroup.name}
                </h4>
              </div>

              {/* Filters */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <div className="sm:col-span-2 relative">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="text"
                    placeholder="Search members by name or signature..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div className="relative font-sans">
                  <ArrowUpDown className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                  <select
                    value={sortBy}
                    onChange={e => setSortBy(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-9 pr-3 text-sm text-slate-300 focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer"
                  >
                    <option value="name" className="bg-[#050505] text-white">Sort by: Name (A-Z)</option>
                    <option value="percent" className="bg-[#050505] text-white">Sort by: % value add</option>
                  </select>
                </div>
              </div>

              {/* Members List */}
              <div className="flex-1 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pr-1 content-start items-start">
                {filteredStaff.map((member, idx) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    className="bg-white/[0.02] border border-white/5 hover:border-white/15 p-5 rounded-2xl flex flex-col justify-start gap-4 hover:shadow-xl transition-all duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-14 rounded-2xl bg-black/60 flex items-center justify-center text-2xl shadow-inner border border-white/5">
                        {member.avatar}
                      </div>
                      <div className="min-w-0">
                        <div className="font-extrabold text-white text-sm truncate">{member.name}</div>
                        <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block">
                          Category VIP
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 bg-black/45 p-3 rounded-xl border border-white/5">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-500 font-bold uppercase tracking-wider text-[8px]">
                          Signature:
                        </span>
                        <span className="font-mono font-black text-slate-200">
                          {member.sign}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-500 font-bold uppercase tracking-wider text-[8px]">
                          Value Boost:
                        </span>
                        <span className="font-black text-amber-400 flex items-center gap-0.5">
                          <BadgePercent className="w-3.5 h-3.5" />
                          +{member.percent}%
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {filteredStaff.length === 0 && (
                  <div className="col-span-full text-center py-16 text-slate-500 text-xs font-mono flex flex-col items-center justify-center gap-2">
                    <Users className="w-10 h-10 opacity-30 text-blue-500" />
                    <span>No members found in this category.</span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
