import { forwardRef } from 'react'

export const ShareCard = forwardRef(function ShareCard({ primary, hidden, rarity }, ref) {
  return (
    <div ref={ref} className="relative aspect-[.72] w-[min(100%,360px)] overflow-hidden rounded-[30px] bg-[#fffaf6] p-6 font-rounded text-ink shadow-float" style={{ background: `linear-gradient(155deg, ${primary.tint} 0%, #fffaf6 46%, ${hidden.tint} 128%)` }}>
      <span className="absolute -right-14 -top-14 h-52 w-52 rounded-full bg-white/55" />
      <span className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-white/60" />
      <span className="absolute right-8 top-24 rotate-12 text-3xl text-white/65">✦</span>
      <span className="absolute bottom-36 left-5 -rotate-12 text-2xl text-white/70">♡</span>
      <div className="relative flex h-full flex-col">
        <div className="flex items-center justify-between"><span className="rounded-full bg-white/75 px-3 py-1.5 text-[10px] font-black tracking-[.16em] text-[#766678]">LOVE ANIMAL REPORT</span><span className="text-lg">💌</span></div>
        <p className="mt-7 text-xs font-black tracking-[.13em] text-[#786b76]">我的恋爱动物人格</p>
        <div className="mt-3 rounded-[25px] border border-white/90 bg-white/80 p-4 shadow-[0_12px_28px_rgba(117,76,96,.11)]">
          <div className="flex items-center gap-3"><span className="grid h-[68px] w-[68px] place-items-center rounded-[1.3rem] text-5xl shadow-sm" style={{ backgroundColor: primary.tint }}>{primary.emoji}</span><div className="min-w-0"><h2 className="text-[27px] font-black leading-none tracking-tight">{primary.name}</h2><p className="mt-1.5 text-xs font-bold" style={{ color: primary.accent }}>{primary.kind}</p></div></div>
          <div className="mt-4 flex items-center justify-between gap-2"><span className="rounded-full px-2.5 py-1 text-[10px] font-black" style={{ color: primary.accent, backgroundColor: primary.tint }}>稀有度 · {rarity.label}</span><span className="text-[10px] font-bold text-[#8d7e89]">心动档案 NO.01</span></div>
          <div className="mt-3 flex flex-wrap gap-1.5">{primary.keywords.map((word, index) => <span key={word} className="rounded-full bg-white px-2.5 py-1 text-[11px] font-bold text-[#625463]">{['♡', '✦', '☼'][index]} {word}</span>)}</div>
        </div>
        <div className="mt-4 rounded-2xl bg-white/52 px-4 py-3"><p className="text-sm font-black leading-relaxed text-[#5f505e]">“{primary.shareQuote ?? primary.description}”</p></div>
        <div className="mt-4 flex items-center rounded-2xl border border-white/80 bg-white/60 px-3.5 py-3"><span className="grid h-11 w-11 place-items-center rounded-xl text-2xl" style={{ backgroundColor: hidden.tint }}>{hidden.emoji}</span><div className="ml-3"><p className="text-[10px] font-black tracking-[.13em] text-[#9a8490]">HIDDEN ENERGY</p><p className="mt-0.5 text-sm font-black">隐藏人格：{hidden.name}</p></div></div>
        <div className="mt-auto rounded-2xl bg-ink px-4 py-3.5 text-white"><div className="flex items-center justify-between"><div><p className="text-xs font-black">你的恋爱动物会是哪一只？</p><p className="mt-1 text-[10px] font-medium text-[#d9cfdd]">测测你的恋爱动物人格</p></div><span className="grid h-8 w-8 place-items-center rounded-full bg-white/15 text-lg">→</span></div></div>
      </div>
    </div>
  )
})
