import os

def replace_in_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Pattern 1: w-14 h-14 images
    content = content.replace(
        '<div className="relative group/img overflow-hidden rounded-xl">\n                        <img \n                          src={item.unit.img} \n                          alt={item.unit.name} \n                          className="relative w-14 h-14 object-contain group-hover/img:scale-105 transition-transform duration-300 z-10" \n                        />',
        '<div className="relative group/img overflow-hidden rounded-xl w-14 h-14 bg-black/30 shadow-md border border-white/10">\n                        <img \n                          src={item.unit.img} \n                          alt={item.unit.name} \n                          className="relative w-full h-full object-cover scale-[1.25] group-hover/img:scale-[1.3] transition-transform duration-300 z-10" \n                        />'
    )
    
    content = content.replace(
        '<div className="relative group/img overflow-hidden rounded-xl">\n                                  <img\n                                    src={item.unit?.img}\n                                    alt={item.unit?.name}\n                                    className="relative w-14 h-14 object-contain group-hover/img:scale-105 transition-transform duration-300 z-10"\n                                  />',
        '<div className="relative group/img overflow-hidden rounded-xl w-14 h-14 bg-black/30 shadow-md border border-white/10">\n                                  <img\n                                    src={item.unit?.img}\n                                    alt={item.unit?.name}\n                                    className="relative w-full h-full object-cover scale-[1.25] group-hover/img:scale-[1.3] transition-transform duration-300 z-10"\n                                  />'
    )
    
    # Pattern 2: w-10 h-10 images
    content = content.replace(
        '<img src={unit.img} alt={unit.name} className="w-10 h-10 object-contain shrink-0" />',
        '<div className="w-10 h-10 shrink-0 overflow-hidden rounded-lg bg-black/30 border border-white/10"><img src={unit.img} alt={unit.name} className="w-full h-full object-cover scale-[1.25]" /></div>'
    )
    
    content = content.replace(
        '<img src={unit.img} className="w-10 h-10 rounded-lg bg-black/30 object-cover border border-white/5" alt="" />',
        '<div className="w-10 h-10 shrink-0 overflow-hidden rounded-lg bg-black/30 border border-white/5"><img src={unit.img} className="w-full h-full object-cover scale-[1.25]" alt="" /></div>'
    )

    # Pattern 3: w-8 h-8 images
    content = content.replace(
        '<img src={item.unit?.img} className="w-8 h-8 object-contain mt-1.5 shrink-0" alt="" />',
        '<div className="w-8 h-8 mt-1.5 shrink-0 overflow-hidden rounded-lg bg-black/25 border border-white/5"><img src={item.unit?.img} className="w-full h-full object-cover scale-[1.25]" alt="" /></div>'
    )
    
    # Pattern 4: w-10 h-10 images inside CommunityTrades details
    content = content.replace(
        '<img src={item.unit?.img} alt={item.unit?.name} className="w-10 h-10 object-cover rounded-lg shadow-md ring-1 ring-white/10" />',
        '<div className="w-10 h-10 shrink-0 overflow-hidden rounded-lg shadow-md ring-1 ring-white/10"><img src={item.unit?.img} alt={item.unit?.name} className="w-full h-full object-cover scale-[1.25]" /></div>'
    )

    with open(filepath, 'w') as f:
        f.write(content)

replace_in_file('src/components/TradeCalculator.tsx')
replace_in_file('src/components/CommunityTrades.tsx')
