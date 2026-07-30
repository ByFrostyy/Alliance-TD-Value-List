import os

filepath = 'src/components/CommunityTrades.tsx'
with open(filepath, 'r') as f:
    content = f.read()

content = content.replace(
    'className="bg-[#5865F2] hover:bg-[#4752c4] text-white font-black uppercase tracking-wider text-[10px] px-4 py-2 rounded-xl transition duration-200 select-none cursor-pointer shrink-0 border border-white/5 shadow-md flex items-center justify-center gap-1.5"',
    'className="bg-white hover:bg-zinc-200 text-black font-black uppercase tracking-wider text-[10px] px-4 py-2 rounded-xl transition duration-200 select-none cursor-pointer shrink-0 border border-white/5 shadow-md flex items-center justify-center gap-1.5"'
)

with open(filepath, 'w') as f:
    f.write(content)

