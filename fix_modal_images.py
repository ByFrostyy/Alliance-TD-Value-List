import os

def replace_in_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # CommunityTrades.tsx
    content = content.replace(
        '<div className="relative group/glow">\n                  <img src={pickerSelectedUnit.img} alt={pickerSelectedUnit.name} className="relative w-24 h-24 object-cover rounded-2xl border-2 border-amber-500/60 shadow-xl mb-3" />\n                </div>',
        '<div className="w-24 h-24 mb-3 overflow-hidden rounded-2xl shadow-xl border border-white/10"><img src={pickerSelectedUnit.img} alt={pickerSelectedUnit.name} className="w-full h-full object-cover scale-[1.25]" /></div>'
    )
    
    # TradeCalculator.tsx
    content = content.replace(
        '<div className="relative group/glow">\n                  <img src={activeConfigUnit.img} alt={activeConfigUnit.name} className="relative w-24 h-24 object-contain bg-black/40 rounded-2xl border-2 border-amber-500/60 shadow-xl mb-3" />\n                </div>',
        '<div className="w-24 h-24 mb-3 overflow-hidden rounded-2xl shadow-xl border border-white/10"><img src={activeConfigUnit.img} alt={activeConfigUnit.name} className="w-full h-full object-cover scale-[1.25]" /></div>'
    )

    with open(filepath, 'w') as f:
        f.write(content)

replace_in_file('src/components/TradeCalculator.tsx')
replace_in_file('src/components/CommunityTrades.tsx')
