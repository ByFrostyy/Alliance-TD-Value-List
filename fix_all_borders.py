import os

def remove_borders(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # CommunityTrades.tsx
    content = content.replace(
        '<div className="w-24 h-24 mb-3 overflow-hidden rounded-2xl shadow-xl border border-white/10">',
        '<div className="w-24 h-24 mb-3 overflow-hidden rounded-2xl shadow-xl">'
    )
    
    # Also TradeCalculator.tsx
    content = content.replace(
        '<div className="w-14 h-14 shrink-0 overflow-hidden rounded-lg bg-black/30 border border-white/10">',
        '<div className="w-14 h-14 shrink-0 overflow-hidden rounded-lg bg-black/30">'
    )
    
    content = content.replace(
        '<div className="relative group/img overflow-hidden rounded-xl w-14 h-14 bg-black/30 shadow-md border border-white/10">',
        '<div className="relative group/img overflow-hidden rounded-xl w-14 h-14 bg-black/30 shadow-md">'
    )

    content = content.replace(
        '<div className="w-10 h-10 shrink-0 overflow-hidden rounded-lg bg-black/30 border border-white/10">',
        '<div className="w-10 h-10 shrink-0 overflow-hidden rounded-lg bg-black/30">'
    )
    
    content = content.replace(
        '<div className="w-10 h-10 shrink-0 overflow-hidden rounded-lg bg-black/30 border border-white/5">',
        '<div className="w-10 h-10 shrink-0 overflow-hidden rounded-lg bg-black/30">'
    )

    content = content.replace(
        '<div className="w-8 h-8 mt-1.5 shrink-0 overflow-hidden rounded-lg bg-black/25 border border-white/5">',
        '<div className="w-8 h-8 mt-1.5 shrink-0 overflow-hidden rounded-lg bg-black/25">'
    )
    
    with open(filepath, 'w') as f:
        f.write(content)

remove_borders('src/components/TradeCalculator.tsx')
remove_borders('src/components/CommunityTrades.tsx')
