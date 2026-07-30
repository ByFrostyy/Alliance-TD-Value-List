import os

filepath = 'src/components/CommunityTrades.tsx'
with open(filepath, 'r') as f:
    content = f.read()

content = content.replace(
    'className="bg-[#5865F2] hover:bg-[#4752c4] text-white active:scale-[0.99] font-black py-3 px-6 rounded-2xl text-xs uppercase tracking-widest transition w-full mt-2 cursor-pointer shadow-lg hover:shadow-[0_0_15px_rgba(88,101,242,0.45)] border border-[#5865F2]/20"',
    'className="bg-white hover:bg-zinc-200 text-black active:scale-[0.99] font-black py-3 px-6 rounded-2xl text-xs uppercase tracking-widest transition w-full mt-2 cursor-pointer shadow-lg"'
)

with open(filepath, 'w') as f:
    f.write(content)

