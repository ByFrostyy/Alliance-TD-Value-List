import os

filepath = 'src/components/CommunityTrades.tsx'
with open(filepath, 'r') as f:
    content = f.read()

content = content.replace('bg-gradient-to-b from-[#140f13] to-[#0b090a]', 'bg-[#0a0a0c]')
content = content.replace('bg-gradient-to-b from-[#0f1413] to-[#090b0a]', 'bg-[#0a0a0c]')
content = content.replace('border-rose-500/10', 'border-white/5')
content = content.replace('border-emerald-500/10', 'border-white/5')

# The buttons
content = content.replace('Add Unit', 'ADD UNIT')

with open(filepath, 'w') as f:
    f.write(content)

