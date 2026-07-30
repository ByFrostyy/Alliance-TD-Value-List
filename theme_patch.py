import re

def apply_monochrome_theme(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Backgrounds
    content = content.replace('bg-[#06070c]', 'bg-[#09090b]')
    content = content.replace('bg-[#0a0b10]', 'bg-[#09090b]')
    content = content.replace('bg-[#111320]', 'bg-[#121214]')
    content = content.replace('bg-[#0a0b11]', 'bg-[#09090b]')
    content = content.replace('bg-[#0c0d14]', 'bg-[#18181b]')
    content = content.replace('bg-[#130f18]', 'bg-[#18181b]')
    content = content.replace('bg-[#0e1413]', 'bg-[#18181b]')
    content = content.replace('bg-[#08090d]', 'bg-[#09090b]')
    content = content.replace('bg-[#1e2030]', 'bg-[#27272a]')
    content = content.replace('bg-[#2b2d42]', 'bg-[#3f3f46]')
    content = content.replace('bg-[#0e1017]', 'bg-[#18181b]')
    content = content.replace('bg-[#1c1822]', 'bg-[#27272a]')
    content = content.replace('bg-[#161c1a]', 'bg-[#27272a]')
    content = content.replace('bg-[#06070a]', 'bg-[#09090b]')
    content = content.replace('bg-[#0b0c10]', 'bg-[#09090b]')
    content = content.replace('bg-[#0f111a]', 'bg-[#18181b]')
    
    # Texts
    content = content.replace('text-[#dbdee1]', 'text-zinc-300')
    
    # Borders
    content = content.replace('border-indigo-500/20', 'border-white/10')
    content = content.replace('border-indigo-500/10', 'border-white/5')
    content = content.replace('border-[#5865F2]/30', 'border-white/20')
    content = content.replace('border-[#5865F2]/50', 'border-white/30')
    
    # Accents
    content = content.replace('bg-[#5865F2]/5', 'bg-white/5')
    content = content.replace('group-hover:bg-[#5865F2]/10', 'group-hover:bg-white/10')
    content = content.replace('bg-indigo-500/10', 'bg-white/5')
    content = content.replace('bg-indigo-600', 'bg-white')
    content = content.replace('hover:bg-indigo-700', 'hover:bg-zinc-200')
    content = content.replace('text-indigo-400', 'text-white')
    content = content.replace('text-indigo-500', 'text-white')
    content = content.replace('from-violet-500 via-indigo-500 to-cyan-500', 'from-zinc-500 via-zinc-400 to-zinc-600')
    content = content.replace('focus:border-cyan-500', 'focus:border-white/50')
    content = content.replace('focus:border-indigo-500', 'focus:border-white/50')
    
    with open(filepath, 'w') as f:
        f.write(content)

apply_monochrome_theme('src/components/CommunityTrades.tsx')
apply_monochrome_theme('src/components/TradeCalculator.tsx')
