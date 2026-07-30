import React, { useState } from "react";
import { MessageSquare, Gamepad2, Users, ExternalLink, ShieldAlert, Sparkles, Clock } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function LinksPage() {
  const [showGameComingSoon, setShowGameComingSoon] = useState(false);

  const links = [
    {
      title: "Official Discord Server",
      description: "Join our active Discord community to chat with thousands of players, receive instant updates, participate in giveaways, trade in real-time, and get direct support from our staff!",
      buttonText: "Join Discord Community",
      url: "https://discord.gg/CrwsZC3f2",
      icon: MessageSquare,
      imageUrl: "https://i.postimg.cc/sDD7yb0v/images-(1).png",
      color: "from-indigo-600 to-violet-600",
      shadow: "shadow-sm",
      bgGradient: "bg-gradient-to-br from-indigo-950/20 via-black to-transparent",
      borderColor: "border-indigo-500/20",
      hoverText: "group-hover:text-indigo-300",
      hoverBorder: "group-hover:border-indigo-500/30",
      isGame: false
    },
    {
      title: "Play Alliance: TD",
      description: "Summon legendary towers, strategize with friends, defend against waves of unique enemies, and trade rare items on the official Roblox marketplace. Hop right into the action!",
      buttonText: "Play Game on Roblox",
      url: "https://www.roblox.com/games/99703116573266/Alliance-Tower-Defense",
      icon: Gamepad2,
      imageUrl: "https://i.postimg.cc/t48x3JRN/2c2c3d84-6c43-441d-9fd2-fd7ae36bf27e.png",
      color: "from-indigo-600 to-indigo-700",
      shadow: "shadow-sm",
      bgGradient: "bg-gradient-to-br from-indigo-950/20 via-black to-transparent",
      borderColor: "border-indigo-500/20",
      hoverText: "group-hover:text-indigo-300",
      hoverBorder: "group-hover:border-indigo-500/30",
      isGame: false
    },
    {
      title: "Official Roblox Group",
      description: "Join our official Roblox group to unlock exclusive in-game perks, receive community ranks, meet fellow players, and stay up to date with developer announcements!",
      buttonText: "Join Roblox Group",
      url: "https://www.roblox.com/share/g/201343620",
      icon: Users,
      imageUrl: "https://i.postimg.cc/vBsxKKVD/image.png",
      color: "from-violet-600 to-fuchsia-600",
      shadow: "shadow-sm",
      bgGradient: "bg-gradient-to-br from-violet-950/20 via-black to-transparent",
      borderColor: "border-violet-500/20",
      hoverText: "group-hover:text-violet-300",
      hoverBorder: "group-hover:border-violet-500/30",
      isGame: false
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-4 px-2 text-left font-sans">
      <div className="mb-8 text-center sm:text-left">
        <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wider flex items-center justify-center sm:justify-start gap-2.5">
          <Sparkles className="w-5 h-5 text-indigo-400 animate-pulse" />
          <span>Alliance: TD Main Page</span>
        </h2>
        <p className="text-xs text-indigo-400 font-mono tracking-widest uppercase">
          Connect with developers and players on official platforms
        </p>
      </div>

      <AnimatePresence>
        {showGameComingSoon && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginBottom: 0 }}
            animate={{ opacity: 1, height: "auto", marginBottom: "1.5rem" }}
            exit={{ opacity: 0, height: 0, marginBottom: 0 }}
            className="bg-amber-500/10 border border-amber-500/20 text-amber-400 p-4 rounded-2xl flex items-center gap-3 text-xs font-semibold relative overflow-hidden shadow-sm"
          >
            <Clock className="w-4 h-4 shrink-0 animate-spin-slow" />
            <span>The official Alliance: TD game is currently under active private development and is coming soon! Stay tuned to our Discord for launch announcements.</span>
            <button 
              onClick={() => setShowGameComingSoon(false)}
              className="ml-auto text-amber-400 hover:text-white font-black cursor-pointer text-sm px-2"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {links.map((link, idx) => {
          const Icon = link.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.3 }}
              className={`bg-[#0a0c16]/95 border ${link.borderColor} ${link.bgGradient} p-6 rounded-3xl flex flex-col justify-between ${link.shadow} hover:shadow-md transition duration-300 relative group overflow-hidden hover:border-indigo-500/40`}
              id={`links-card-${idx}`}
            >
              {/* Highlight Overlay */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/[0.01] rounded-bl-full pointer-events-none group-hover:bg-white/[0.02] transition-colors" />

              <div>
                <div className="flex items-center gap-4 mb-4">
                  {link.imageUrl ? (
                    <img
                      src={link.imageUrl}
                      alt={link.title}
                      referrerPolicy="no-referrer"
                      className={`w-14 h-14 rounded-2xl object-cover border-2 border-white/15 shadow-xl ${link.hoverBorder} transition-all duration-300`}
                    />
                  ) : (
                    <div className={`p-3 bg-gradient-to-r ${link.color} rounded-2xl text-white shadow-lg`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  )}
                  <h3 className={`text-sm font-black text-white uppercase tracking-wider ${link.hoverText} transition-colors`}>
                    {link.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-medium mb-6 min-h-[80px]">
                  {link.description}
                </p>
              </div>

              {link.isGame ? (
                <button
                  type="button"
                  onClick={() => setShowGameComingSoon(true)}
                  className={`w-full py-2.5 px-4 bg-gradient-to-r ${link.color} text-white text-xs font-black uppercase tracking-wider rounded-xl hover:scale-[1.02] active:scale-[0.98] transition flex items-center justify-center gap-2 shadow-lg ${link.shadow} cursor-pointer`}
                >
                  <span>{link.buttonText}</span>
                  <Clock className="w-3.5 h-3.5" />
                </button>
              ) : (
                <a
                  href={link.url}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className={`w-full py-2.5 px-4 bg-gradient-to-r ${link.color} text-white text-xs font-black uppercase tracking-wider rounded-xl hover:scale-[1.02] active:scale-[0.98] transition flex items-center justify-center gap-2 shadow-lg ${link.shadow}`}
                >
                  <span>{link.buttonText}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
