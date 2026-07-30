import os

def redesign_trade_card():
    filepath = 'src/components/CommunityTrades.tsx'
    with open(filepath, 'r') as f:
        content = f.read()

    # Replaces the dual box offers grid with a unified row layout with center arrow
    old_grid_start = '<div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3.5 w-full z-10">'
    new_grid_start = '''{/* Unified Trade Container */}
                        <div className="flex-1 flex flex-col md:flex-row items-stretch bg-black/40 border border-white/5 rounded-2xl relative z-10 shadow-inner">
                          {/* Left: OFFERING */}
                          <div className="flex-1 p-4 md:p-5 flex flex-col gap-2.5 relative bg-gradient-to-br from-rose-500/[0.02] to-transparent">'''

    content = content.replace(old_grid_start, new_grid_start)

    content = content.replace(
        '<div className="bg-[#130f18] border border-rose-500/10 md:group-hover:border-rose-500/20 transition-all duration-300 p-4 rounded-2xl flex flex-col gap-2.5 relative overflow-hidden">',
        '<div>'
    )
    content = content.replace(
        '<div className="bg-[#0e1413] border border-emerald-500/10 md:group-hover:border-emerald-500/20 transition-all duration-300 p-4 rounded-2xl flex flex-col gap-2.5 relative overflow-hidden">',
        '''{/* Center Arrow Divider */}
                          <div className="hidden md:flex items-center justify-center -mx-6 z-20 relative">
                            <div className="w-12 h-12 rounded-full bg-[#111320] border-4 border-[#0a0b11] flex items-center justify-center shadow-2xl">
                              <ArrowRightLeft className="w-5 h-5 text-slate-400" />
                            </div>
                          </div>
                          <div className="md:hidden flex items-center justify-center -my-3 z-20 relative">
                            <div className="w-10 h-10 rounded-full bg-[#111320] border-4 border-[#0a0b11] flex items-center justify-center shadow-2xl rotate-90">
                              <ArrowRightLeft className="w-4 h-4 text-slate-400" />
                            </div>
                          </div>
                          
                          {/* Right: LOOKING FOR */}
                          <div className="flex-1 p-4 md:p-5 flex flex-col gap-2.5 relative bg-gradient-to-tl from-emerald-500/[0.02] to-transparent">'''
    )

    # Make the items slightly smaller to fit the unified padding
    content = content.replace('className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-3"', 'className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 gap-2 mt-3"')

    with open(filepath, 'w') as f:
        f.write(content)

redesign_trade_card()
