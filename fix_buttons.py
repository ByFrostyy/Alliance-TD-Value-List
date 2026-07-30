import os

filepath = 'src/components/CommunityTrades.tsx'
with open(filepath, 'r') as f:
    content = f.read()

# Replace Message button
content = content.replace(
    'className="flex-1 w-full bg-[#5865F2] hover:bg-[#4752c4] text-white hover:shadow-[0_0_15px_rgba(88,101,242,0.3)] px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-200 text-center cursor-pointer shadow-md border border-[#5865F2]/20"',
    'className="flex-1 w-full bg-white hover:bg-zinc-200 text-black px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-200 text-center cursor-pointer shadow-md"'
)

# Replace counter offers message icon color
content = content.replace('text-[#5865F2]', 'text-zinc-400')

with open(filepath, 'w') as f:
    f.write(content)

