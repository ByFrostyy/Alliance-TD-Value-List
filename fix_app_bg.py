import os

filepath = 'src/App.tsx'
with open(filepath, 'r') as f:
    content = f.read()

content = content.replace('bg-[#050508]', 'bg-[#09090b]')
content = content.replace('bg-indigo-500/30', 'bg-zinc-500/30')
content = content.replace('text-indigo-300', 'text-zinc-300')
content = content.replace('text-indigo-400', 'text-zinc-300')
content = content.replace('border-indigo-500', 'border-white/20')

# Also change any other blue/purple colors if necessary, but keep admin panel blue so it's visible?
content = content.replace('text-blue-400', 'text-zinc-400')
content = content.replace('text-blue-300', 'text-zinc-300')
content = content.replace('bg-blue-600', 'bg-zinc-700')
content = content.replace('bg-blue-500', 'bg-zinc-600')

with open(filepath, 'w') as f:
    f.write(content)

