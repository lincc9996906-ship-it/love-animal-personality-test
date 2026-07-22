import { DecorativeBlobs } from './DecorativeBlobs'

export function Analyzing() {
  return (
    <main className="relative grid min-h-dvh place-items-center overflow-hidden bg-cream px-5 font-rounded text-ink">
      <DecorativeBlobs />
      <section className="relative flex max-w-sm animate-pop flex-col items-center text-center">
        <div className="relative grid h-40 w-40 place-items-center">
          <span className="absolute h-40 w-40 rounded-full border-2 border-dashed border-[#fac4b8] animate-[spin_11s_linear_infinite]" />
          <span className="absolute h-28 w-28 rounded-full bg-[#ffe1db] animate-pulse-soft" />
          <span className="text-6xl animate-bob">💘</span>
          <span className="absolute -right-1 top-3 text-2xl animate-bob-delayed">✨</span>
          <span className="absolute bottom-3 -left-3 text-xl animate-bob">🐾</span>
        </div>
        <p className="mt-8 text-xs font-black tracking-[.2em] text-coral">ANALYZING YOUR LOVE ENERGY</p>
        <h1 className="mt-3 text-2xl font-black">正在召唤你的恋爱动物...</h1>
        <p className="mt-3 text-sm font-medium leading-relaxed text-[#827582]">翻看你藏在每个选择里的心动线索</p>
        <div className="mt-7 flex gap-2"><i className="h-2 w-2 rounded-full bg-coral animate-pulse" /><i className="h-2 w-2 rounded-full bg-coral animate-[pulse_1s_ease-in-out_.2s_infinite]" /><i className="h-2 w-2 rounded-full bg-coral animate-[pulse_1s_ease-in-out_.4s_infinite]" /></div>
      </section>
    </main>
  )
}
