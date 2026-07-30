import os

def fix_avatars(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Remove scale and use object-contain for all unit images
    content = content.replace('object-cover scale-[1.75]', 'object-contain scale-110')
    content = content.replace('object-cover scale-[1.85]', 'object-contain scale-125')
    content = content.replace('object-cover scale-[1.5]', 'object-contain scale-110')
    content = content.replace('object-cover scale-[1.55]', 'object-contain scale-125')
    content = content.replace('object-cover scale-[1.25]', 'object-contain scale-110')
    content = content.replace('object-cover scale-[1.2]', 'object-contain scale-100')
    content = content.replace('object-cover scale-[1.4]', 'object-contain scale-110')
    content = content.replace('object-cover scale-[1.45]', 'object-contain scale-125')

    with open(filepath, 'w') as f:
        f.write(content)

fix_avatars('src/components/CommunityTrades.tsx')
fix_avatars('src/components/TradeCalculator.tsx')
