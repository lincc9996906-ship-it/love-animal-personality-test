import { animalList, animalTypes } from '../data/animalTypes'
import { DecorativeBlobs } from './DecorativeBlobs'

const previewPrimary = animalTypes.dog
const previewHidden = animalTypes.hamster

export function Home({ onStart, questionCount = 20 }) {
  return (
    <main className="relative min-h-dvh overflow-hidden bg-[#fff9f5] font-rounded text-ink">
      <DecorativeBlobs />
      <span aria-hidden="true" className="absolute left-[6%] top-28 text-3xl text-[#ffb6aa] opacity-70 animate-bob">♡</span>
      <span aria-hidden="true" className="absolute right-[6%] top-40 text-2xl text-[#a99be9] opacity-60 animate-bob-delayed">✦</span>

      <section className="relative mx-auto max-w-6xl px-5 pb-12 pt-7 sm:px-8 sm:pt-10">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2.5"><span className="grid h-9 w-9 place-items-center rounded-xl bg-ink text-lg shadow-soft">💌</span><span className="text-sm font-black tracking-tight">恋爱动物研究所</span></div>
          <span className="rounded-full border border-white bg-white/65 px-3 py-1.5 text-[10px] font-black tracking-[.14em] text-[#847481] shadow-sm backdrop-blur">LOVE LAB 01</span>
        </nav>

        <div className="mt-10 grid items-center gap-9 lg:grid-cols-[1.02fr_.98fr] lg:gap-12 lg:pt-6">
          <div className="relative z-10 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-white bg-white/75 px-3 py-1.5 text-xs font-black tracking-[.1em] text-coral shadow-soft"><span className="text-base leading-none">✦</span> 解锁你的心动动物</div>
            <h1 className="mt-5 font-rounded text-[clamp(2.7rem,6.3vw,5.25rem)] font-black leading-[.98] tracking-[-.06em] text-ink">
              测测你的<br />
              <span className="relative inline-block text-coral">恋爱动物人格<span className="absolute -bottom-2 left-1 h-2 w-[94%] -rotate-1 rounded-full bg-[#ffe2db] -z-10" /></span>
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-base font-medium leading-relaxed text-[#796b76] lg:mx-0 lg:text-lg">喜欢一个人时，你是热烈奔跑的小狗，还是慢慢靠近的小乌龟？<br className="hidden sm:block" />找到藏在爱情里的那只小动物。</p>
            <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row lg:items-start">
              <button onClick={onStart} className="group rounded-full bg-ink px-7 py-4 text-base font-black text-white shadow-[0_9px_0_#d6c3cc,0_20px_34px_rgba(52,41,63,.2)] transition hover:-translate-y-1 hover:bg-coral active:translate-y-1 active:shadow-[0_3px_0_#d6c3cc]">
                开启我的恋爱档案 <span className="ml-1 inline-block transition group-hover:translate-x-1">→</span>
              </button>
              <span className="px-2 py-3 text-xs font-bold text-[#978995]">{questionCount} 个恋爱情境 · 约 3 分钟</span>
            </div>
            <div className="mt-8 flex items-center justify-center gap-3 lg:justify-start"><div className="flex -space-x-2">{animalList.slice(0, 4).map((animal) => <span key={animal.id} className="grid h-8 w-8 place-items-center rounded-full border-2 border-[#fff9f5] bg-white text-base shadow-sm">{animal.emoji}</span>)}</div><p className="text-xs font-bold text-[#857782]">12 种恋爱能量，等你发现</p></div>
          </div>

          <div className="relative mx-auto w-full max-w-[530px] lg:max-w-none">
            <div aria-hidden="true" className="absolute -left-5 top-16 h-48 w-48 rounded-full bg-[#ffe1d9]/75 blur-2xl" />
            <div aria-hidden="true" className="absolute -right-6 bottom-0 h-44 w-44 rounded-full bg-[#e8ddff]/80 blur-2xl" />
            <div className="relative rounded-[2.25rem] border border-white/90 bg-white/62 p-3 shadow-float backdrop-blur-sm sm:p-4">
              <div className="flex items-center justify-between px-2 pb-3"><p className="text-xs font-black tracking-[.14em] text-[#8b7885]">ANIMAL CONSTELLATION</p><span className="rounded-full bg-[#fff0b5] px-2.5 py-1 text-[10px] font-black text-[#887125]">12 只已发现</span></div>
              <div className="grid grid-cols-4 gap-2 sm:gap-3">
                {animalList.map((animal, index) => (
                  <div key={animal.id} className="group relative flex aspect-[.92] flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/90 p-1.5 shadow-[0_5px_12px_rgba(91,63,86,.08)] transition duration-300 hover:-translate-y-1 hover:rotate-2 hover:shadow-soft" style={{ background: `linear-gradient(145deg, #fff 0%, ${animal.tint} 135%)`, animationDelay: `${index * 40}ms` }}>
                    <span className="absolute -right-2 -top-3 text-3xl text-white/50">✦</span>
                    <span className="relative text-3xl drop-shadow-sm transition duration-300 group-hover:scale-110 sm:text-4xl">{animal.emoji}</span>
                    <span className="relative mt-1 whitespace-nowrap text-[10px] font-black text-[#5c4d5b] sm:text-xs">{animal.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <span className="absolute -right-2 -top-5 rotate-[9deg] rounded-full bg-[#eae4ff] px-3 py-1.5 text-xs font-black text-[#7461a8] shadow-soft">探索 12 种心动方式</span>
          </div>
        </div>

        <section className="relative mt-12 overflow-hidden rounded-[2rem] border border-white/90 bg-white/70 p-5 shadow-soft backdrop-blur sm:mt-16 sm:p-7">
          <span className="absolute -right-8 -top-12 h-36 w-36 rounded-full bg-[#ffe4dc] opacity-70" />
          <div className="relative grid items-center gap-6 md:grid-cols-[.72fr_1.28fr]">
            <div className="text-center md:text-left"><p className="text-xs font-black tracking-[.16em] text-coral">RESULT PREVIEW</p><h2 className="mt-2 text-2xl font-black">你的心动档案<br className="hidden md:block" />会长这样</h2><p className="mt-3 text-sm font-medium leading-relaxed text-[#7b6c77]">不只是一个结果，而是一张想发给朋友的恋爱名片。</p></div>
            <div className="relative mx-auto flex w-full max-w-md items-center rounded-[1.5rem] border border-white bg-[#fffdfc] p-4 shadow-[0_12px_30px_rgba(115,75,104,.11)] sm:p-5">
              <span className="grid h-20 w-20 shrink-0 place-items-center rounded-[1.4rem] text-5xl shadow-sm" style={{ backgroundColor: previewPrimary.tint }}>{previewPrimary.emoji}</span>
              <div className="ml-4 min-w-0"><span className="rounded-full px-2 py-1 text-[10px] font-black" style={{ backgroundColor: previewPrimary.tint, color: previewPrimary.accent }}>高人气心动款</span><p className="mt-2 text-2xl font-black">{previewPrimary.name}</p><p className="mt-1 text-xs font-bold" style={{ color: previewPrimary.accent }}>{previewPrimary.kind}</p><div className="mt-2 flex gap-1.5">{previewPrimary.keywords.map((keyword) => <span key={keyword} className="rounded-full bg-[#fff0ec] px-2 py-1 text-[10px] font-bold text-[#71616f]">{keyword}</span>)}</div></div>
              <span className="absolute -bottom-3 -right-2 rounded-full bg-[#fff0b5] px-3 py-1.5 text-[10px] font-black text-[#876f25] shadow-soft">隐藏：{previewHidden.emoji}{previewHidden.name}</span>
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}
