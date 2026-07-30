import os
import re

filepath = 'src/components/CommunityTrades.tsx'
with open(filepath, 'r') as f:
    content = f.read()

# Replace the YOUR OFFER panel in DM Modal
old_your_offer = '''<button
                          type="button"
                          onClick={() => {
                            setUnitPickerSide('your');
                            setPickerSearchQuery('');
                            setPickerRarityFilter('All');
                            setPickerSelectedUnit(null);
                            setPickerSelectedSign(signatures.find(s => s.name === "None") || signatures[0]);
                            setPickerSelectedQty(1);
                          }}
                          className="flex-1 bg-zinc-800 border border-white/10 hover:bg-zinc-700 hover:scale-[1.01] active:scale-[0.99] text-white font-black py-3 px-4 rounded-xl shadow-md transition-all duration-300 flex items-center justify-center gap-1.5 text-[10px] uppercase tracking-wider select-none cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" /> ADD UNIT
                        </button>'''

new_your_offer = '''<button
                          type="button"
                          onClick={() => {
                            setUnitPickerSide('your');
                            setPickerSearchQuery('');
                            setPickerRarityFilter('All');
                            setPickerSelectedUnit(null);
                            setPickerSelectedSign(signatures.find(s => s.name === "None") || signatures[0]);
                            setPickerSelectedQty(1);
                          }}
                          className="flex-1 bg-white hover:bg-zinc-200 active:scale-[0.99] text-black font-black py-3 px-4 rounded-xl shadow-md transition-all duration-300 flex items-center justify-center gap-1.5 text-[10px] uppercase tracking-wider select-none cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" /> ADD UNIT
                        </button>'''

content = content.replace(old_your_offer, new_your_offer, 1)

# Modify Total Value container in DM Modal YOUR OFFER
content = content.replace(
'''<div className="bg-black/60 rounded-xl p-3 border border-white/5 flex items-center justify-between shadow-inner">
                        <span className="font-black text-[10px] uppercase tracking-widest">Total Value:</span>
                        <span className="font-mono text-base font-black text-cyan-400">
                          💎 {Math.round(dmYourOfferGems + dmYourOfferItems.reduce((acc, item) => acc + (item.unit?.gems || 0) * (1 + (item.sign?.percent || 0) / 100) * item.qty, 0)).toLocaleString()}
                        </span>
                      </div>''',
'''<div className="bg-[#050505] rounded-xl p-3 border border-white/5 flex items-center justify-between shadow-inner">
                        <span className="font-black text-[10px] uppercase tracking-widest text-zinc-400">TOTAL VALUE:</span>
                        <span className="font-mono text-base font-black text-cyan-400 flex items-center gap-1">
                          💎 {Math.round(dmYourOfferGems + dmYourOfferItems.reduce((acc, item) => acc + (item.unit?.gems || 0) * (1 + (item.sign?.percent || 0) / 100) * item.qty, 0)).toLocaleString()}
                        </span>
                      </div>''', 1)

# Modify Total Value container in DM Modal THEIR OFFER
content = content.replace(
'''<div className="bg-black/60 rounded-xl p-3 border border-white/5 flex items-center justify-between shadow-inner">
                        <span className="font-black text-[10px] uppercase tracking-widest">Total Value:</span>
                        <span className="font-mono text-base font-black text-cyan-400">
                          💎 {Math.round(dmTheirOfferGems + dmTheirOfferItems.reduce((acc, item) => acc + (item.unit?.gems || 0) * (1 + (item.sign?.percent || 0) / 100) * item.qty, 0)).toLocaleString()}
                        </span>
                      </div>''',
'''<div className="bg-[#050505] rounded-xl p-3 border border-white/5 flex items-center justify-between shadow-inner">
                        <span className="font-black text-[10px] uppercase tracking-widest text-zinc-400">TOTAL VALUE:</span>
                        <span className="font-mono text-base font-black text-cyan-400 flex items-center gap-1">
                          💎 {Math.round(dmTheirOfferGems + dmTheirOfferItems.reduce((acc, item) => acc + (item.unit?.gems || 0) * (1 + (item.sign?.percent || 0) / 100) * item.qty, 0)).toLocaleString()}
                        </span>
                      </div>''', 1)

with open(filepath, 'w') as f:
    f.write(content)

