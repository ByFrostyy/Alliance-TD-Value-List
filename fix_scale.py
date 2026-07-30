import os

def fix_scales(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # CommunityTrades.tsx and TradeCalculator.tsx
    content = content.replace('scale-[1.4]', 'scale-[1.5]')
    content = content.replace('scale-[1.45]', 'scale-[1.55]')

    with open(filepath, 'w') as f:
        f.write(content)

fix_scales('src/components/TradeCalculator.tsx')
fix_scales('src/components/CommunityTrades.tsx')
