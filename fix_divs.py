import os

filepath = 'src/components/CommunityTrades.tsx'
with open(filepath, 'r') as f:
    content = f.read()

content = content.replace('''<div className="flex-1 p-4 md:p-5 flex flex-col gap-2.5 relative bg-gradient-to-br from-rose-500/[0.02] to-transparent">
                          {/* Box 1: OFFERING (Red accent) */}
                          <div>''', '''<div className="flex-1 p-4 md:p-5 flex flex-col gap-2.5 relative bg-gradient-to-br from-rose-500/[0.02] to-transparent">
                          {/* Box 1: OFFERING (Red accent) */}''')

with open(filepath, 'w') as f:
    f.write(content)

