import os
import re

filepaths = ['src/components/CommunityTrades.tsx', 'src/components/TradeCalculator.tsx']
for filepath in filepaths:
    with open(filepath, 'r') as f:
        content = f.read()

    # Change the x{qty} badge
    content = content.replace(
        'className="absolute -top-1 -right-1 bg-zinc-800 border border-white/10 text-zinc-300 font-black text-[8.5px] px-2 py-0.5 rounded-lg shadow-md select-none z-25 font-mono"',
        'className="absolute -top-2 -right-2 bg-[#2a2d36] border-2 border-[#18181b] text-white font-bold text-[9px] w-5 h-5 flex items-center justify-center rounded-full shadow-md select-none z-25"'
    )
    
    # Same badge but maybe slightly different class in other places
    content = content.replace(
        'className="absolute top-1 right-1.5 font-mono font-black text-[9px] text-zinc-300 opacity-60"',
        'className="absolute -top-2 -right-2 bg-[#2a2d36] border-2 border-[#18181b] text-white font-bold text-[9px] w-5 h-5 flex items-center justify-center rounded-full shadow-md select-none z-25"'
    )

    # Change the image container to have black background
    content = content.replace(
        'className="relative group/img overflow-hidden rounded-xl w-14 h-14"',
        'className="relative group/img overflow-hidden rounded-xl w-14 h-14 bg-[#050505] shadow-inner"'
    )
    content = content.replace(
        'className="relative group/img overflow-hidden rounded-xl w-14 h-14 bg-black/30 shadow-md"',
        'className="relative group/img overflow-hidden rounded-xl w-14 h-14 bg-[#050505] shadow-inner"'
    )

    # The group-hover scale
    content = content.replace('group-hover/img:scale-[1.85]', 'group-hover/img:scale-125')

    with open(filepath, 'w') as f:
        f.write(content)

