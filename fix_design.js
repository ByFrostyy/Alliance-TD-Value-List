const fs = require('fs');
let code = fs.readFileSync('src/components/CommunityTrades.tsx', 'utf8');

// The replacement logic:
// 1. bg-gradient-to-b from-[...] to-[...] border border-white/10 rounded-3xl p-5 flex flex-col relative overflow-hidden min-h-[420px] -> bg-white/[0.02] border border-white/5 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden min-h-[420px]
code = code.replace(/className="bg-gradient-to-b from-\[#[a-zA-Z0-9]+\] to-\[#[a-zA-Z0-9]+\] border border-white\/10 rounded-3xl p-[45] flex flex-col relative overflow-hidden min-h-\[[0-9]+px\]"/g, 'className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden min-h-[420px]"');

// 2. <h3 className="text-xs font-black tracking-widest text-white flex items-center gap-1.5 uppercase">\s*<span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse shadow-\[0_0_8px_#ffffff\]" \/> ->
code = code.replace(/className="text-xs font-black tracking-widest text-white flex items-center gap-1.5 uppercase">\s*<span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse shadow-\[0_0_8px_#ffffff\]" \/>/g, 'className="text-sm font-black tracking-widest text-zinc-200 flex items-center gap-2 uppercase">\n                        <span className="w-2 h-2 rounded-full bg-zinc-400" />');

// 3. Clear button style:
code = code.replace(/className="text-\[10px\] font-black uppercase text-white bg-white\/10 border border-white\/20 px-3.5 py-1.5 rounded-xl hover:bg-white\/20 hover:text-white transition-all duration-200 select-none cursor-pointer"/g, 'className="text-xs font-black uppercase text-zinc-400 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-xl hover:bg-zinc-800 hover:text-white transition-all duration-200 select-none cursor-pointer"');

// 4. Grid box
// Create trade grid:
code = code.replace(/<div className="grid grid-cols-2 gap-3 min-h-\[220px\] max-h-\[300px\] overflow-y-auto p-2 pr-3 bg-black\/20 border border-white\/5 rounded-2xl mb-4 scrollbar-thin">/g, '<div>\n                    <div className="grid grid-cols-2 gap-3 min-h-[220px] max-h-[300px] content-start overflow-y-auto p-2 pr-3.5 mb-6 scrollbar-thin">');

// DM trade grid:
code = code.replace(/<div className="grid grid-cols-3 sm:grid-cols-4 gap-2 mb-4 bg-black\/20 border border-white\/5 rounded-2xl p-2 min-h-\[160px\] content-start">/g, '<div>\n                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 min-h-[160px] content-start overflow-y-auto p-2 pr-3.5 mb-6 scrollbar-thin">');


// 5. Wrap buttons and total value in a div
// Create trade:
code = code.replace(/<\/div>\s*<div className="flex gap-2.5 mb-4">/g, '</div>\n                  </div>\n                  <div>\n                    <div className="flex gap-3 mb-4">');

// DM trade:
code = code.replace(/<\/div>\s*<div className="flex gap-2 mb-3">/g, '</div>\n                  </div>\n                  <div>\n                    <div className="flex gap-3 mb-4">');


// 6. Total value:
code = code.replace(/<div className="border border-white\/5 flex justify-between items-center bg-black\/25 px-4 py-3 rounded-2xl mt-auto">/g, '<div className="border border-white/5 flex justify-between items-center bg-black/25 px-4 py-3 rounded-2xl">');
code = code.replace(/<span className="text-slate-400 font-extrabold text-\[10px\] uppercase tracking-wider">Total Value:<\/span>\s*<span className="font-mono text-sm font-black text-white">/g, '<span className="text-slate-400 font-extrabold text-xs uppercase tracking-wider">Total Value:</span>\n                      <span className="font-mono text-lg font-black text-zinc-100">');


fs.writeFileSync('src/components/CommunityTrades.tsx', code);
console.log('done');
