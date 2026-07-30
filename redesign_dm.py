import os

filepath = 'src/components/CommunityTrades.tsx'
with open(filepath, 'r') as f:
    content = f.read()

old_dm_proposal = '''<div className="bg-[#0e1017] border border-white/10 rounded-2xl p-4 w-full sm:w-[320px] shadow-[0_16px_36px_rgba(0,0,0,0.8)] flex flex-col gap-3.5 select-none text-left relative overflow-hidden group">
                                          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-500" />
                                          
                                          <div className="flex justify-between items-center border-b border-white/5 pb-2 mt-0.5">
                                            <span className="text-[10px] font-black uppercase tracking-wider text-zinc-400 font-sans">DM TRADE PROPOSAL</span>
                                            {isPending && (
                                              <span className="bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 font-black text-[8px] uppercase tracking-wider px-2.5 py-0.5 rounded-full animate-pulse">PENDING</span>
                                            )}
                                            {isAccepted && (
                                              <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-black text-[8px] uppercase tracking-wider px-2.5 py-0.5 rounded-full">ACCEPTED 🤝</span>
                                            )}
                                            {isDeclined && (
                                              <span className="bg-rose-500/10 border border-rose-500/20 text-rose-400 font-black text-[8px] uppercase tracking-wider px-2.5 py-0.5 rounded-full">DECLINED ❌</span>
                                            )}
                                          </div>

                                          {/* Row of offers */}
                                          <div className="grid grid-cols-2 gap-2.5 text-xs">
                                            {/* Sender's offer */}
                                            <div className="bg-[#130f18] border border-rose-500/10 p-2.5 rounded-xl flex flex-col gap-1.5">
                                              <span className="text-[10px] font-black uppercase text-rose-400 tracking-wider font-sans">Offers:</span>
                                              <div className="flex flex-col gap-1 overflow-y-auto max-h-[100px] scrollbar-thin">
                                                {payload.yourGems > 0 && (
                                                  <div className="text-[11px] text-cyan-400 font-mono font-black flex items-center gap-1">
                                                    💎 {payload.yourGems.toLocaleString()}
                                                  </div>
                                                )}
                                                {payload.yourOffer && payload.yourOffer.map((it: any, idx: number) => (
                                                  <div key={idx} className="flex items-center gap-1 min-w-0 bg-[#1c1822] border border-white/[0.03] p-1 rounded-lg">
                                                    <span className="font-mono font-black text-white shrink-0 text-[9px] bg-white/10 border border-white/10 px-1 py-0.2 rounded-md">{it.qty}x</span>
                                                    <span className="truncate font-semibold text-slate-300 text-[10px]">{it.unit?.name}</span>
                                                  </div>
                                                ))}
                                                {payload.yourGems === 0 && (!payload.yourOffer || payload.yourOffer.length === 0) && (
                                                  <span className="text-[9px] text-slate-600 italic">Empty offer</span>
                                                )}
                                              </div>
                                            </div>

                                            {/* Recipient's offer */}
                                            <div className="bg-[#0e1413] border border-emerald-500/10 p-2.5 rounded-xl flex flex-col gap-1.5">
                                              <span className="text-[10px] font-black uppercase text-emerald-400 tracking-wider font-sans">Wants:</span>
                                              <div className="flex flex-col gap-1 overflow-y-auto max-h-[100px] scrollbar-thin">
                                                {payload.theirGems > 0 && (
                                                  <div className="text-[11px] text-cyan-400 font-mono font-black flex items-center gap-1">
                                                    💎 {payload.theirGems.toLocaleString()}
                                                  </div>
                                                )}
                                                {payload.theirOffer && payload.theirOffer.map((it: any, idx: number) => (
                                                  <div key={idx} className="flex items-center gap-1 min-w-0 bg-[#161c1a] border border-white/[0.03] p-1 rounded-lg">
                                                    <span className="font-mono font-black text-emerald-400 shrink-0 text-[9px] bg-emerald-500/10 border border-emerald-500/15 px-1 py-0.2 rounded-md">{it.qty}x</span>
                                                    <span className="truncate font-semibold text-slate-300 text-[10px]">{it.unit?.name}</span>
                                                  </div>
                                                ))}
                                                {payload.theirGems === 0 && (!payload.theirOffer || payload.theirOffer.length === 0) && (
                                                  <span className="text-[9px] text-slate-600 italic">Empty request</span>
                                                )}
                                              </div>
                                            </div>
                                          </div>

                                          {/* Note section */}
                                          {payload.note && (
                                            <div className="bg-[#06070a] border border-white/5 px-2.5 py-2.5 rounded-xl text-[10px] text-slate-300 italic break-words">
                                              "{payload.note}"
                                            </div>
                                          )}'''

new_dm_proposal = '''<div className="bg-[#0b0c10]/95 backdrop-blur-xl border border-white/10 rounded-2xl w-full sm:w-[320px] shadow-2xl flex flex-col select-none text-left relative overflow-hidden group">
                                          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-500 opacity-80" />
                                          
                                          <div className="flex justify-between items-center px-4 pt-4 pb-3 border-b border-white/5 bg-white/[0.01]">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 font-sans">DM TRADE PROPOSAL</span>
                                            {isPending && <span className="bg-yellow-500/10 text-yellow-500 font-bold text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full animate-pulse border border-yellow-500/20">PENDING</span>}
                                            {isAccepted && <span className="bg-emerald-500/10 text-emerald-400 font-bold text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-emerald-500/20">ACCEPTED 🤝</span>}
                                            {isDeclined && <span className="bg-rose-500/10 text-rose-400 font-bold text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-rose-500/20">DECLINED ❌</span>}
                                          </div>

                                          <div className="p-4 flex flex-col gap-4">
                                            <div className="flex flex-col gap-2">
                                               <span className="text-[10px] font-black text-rose-400 uppercase tracking-widest flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-rose-500" /> Offers</span>
                                               <div className="flex flex-col gap-1.5">
                                                 {payload.yourGems > 0 && <span className="text-xs font-mono font-bold bg-[#130f18] border border-rose-500/10 text-cyan-400 px-2.5 py-1.5 rounded-lg w-max shadow-sm">💎 {payload.yourGems.toLocaleString()}</span>}
                                                 {payload.yourOffer && payload.yourOffer.map((it:any, idx:number) => (
                                                   <span key={idx} className="text-xs font-medium bg-[#130f18] border border-white/5 text-slate-200 p-1.5 pr-3 rounded-xl flex items-center gap-2.5 w-max shadow-sm">
                                                     {it.unit?.img ? <img src={it.unit.img} className="w-6 h-6 rounded-md object-cover bg-black" /> : <div className="w-6 h-6 rounded-md bg-white/5" />} 
                                                     <span><span className="text-rose-300 font-black font-mono mr-1">{it.qty}x</span> {it.unit?.name}</span>
                                                   </span>
                                                 ))}
                                                 {payload.yourGems === 0 && (!payload.yourOffer || payload.yourOffer.length === 0) && (
                                                  <span className="text-[10px] text-slate-600 italic px-1">Empty offer</span>
                                                )}
                                               </div>
                                            </div>
                                            
                                            <div className="flex justify-center -my-1 opacity-50">
                                               <ArrowUpDown className="w-4 h-4 text-slate-400" />
                                            </div>

                                            <div className="flex flex-col gap-2">
                                               <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Wants</span>
                                               <div className="flex flex-col gap-1.5">
                                                 {payload.theirGems > 0 && <span className="text-xs font-mono font-bold bg-[#0e1413] border border-emerald-500/10 text-cyan-400 px-2.5 py-1.5 rounded-lg w-max shadow-sm">💎 {payload.theirGems.toLocaleString()}</span>}
                                                 {payload.theirOffer && payload.theirOffer.map((it:any, idx:number) => (
                                                   <span key={idx} className="text-xs font-medium bg-[#0e1413] border border-white/5 text-slate-200 p-1.5 pr-3 rounded-xl flex items-center gap-2.5 w-max shadow-sm">
                                                     {it.unit?.img ? <img src={it.unit.img} className="w-6 h-6 rounded-md object-cover bg-black" /> : <div className="w-6 h-6 rounded-md bg-white/5" />} 
                                                     <span><span className="text-emerald-300 font-black font-mono mr-1">{it.qty}x</span> {it.unit?.name}</span>
                                                   </span>
                                                 ))}
                                                 {payload.theirGems === 0 && (!payload.theirOffer || payload.theirOffer.length === 0) && (
                                                  <span className="text-[10px] text-slate-600 italic px-1">Empty request</span>
                                                )}
                                               </div>
                                            </div>
                                          </div>

                                          {payload.note && (
                                            <div className="bg-white/[0.02] border-t border-white/5 px-4 py-3 text-xs text-slate-300 italic font-medium leading-relaxed">
                                              "{payload.note}"
                                            </div>
                                          )}'''

content = content.replace(old_dm_proposal, new_dm_proposal)

with open(filepath, 'w') as f:
    f.write(content)
