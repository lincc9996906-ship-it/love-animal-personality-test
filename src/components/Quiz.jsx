import { DecorativeBlobs } from './DecorativeBlobs'

const optionMarks = ['A', 'B', 'C', 'D']

export function Quiz({ question, index, total, selectedIndex, onSelect }) {
  const progress = ((index + 1) / total) * 100
  return (
    <main className="relative grid min-h-dvh place-items-center overflow-hidden bg-[#fdf8f5] px-4 py-7 font-rounded text-ink sm:px-8">
      <DecorativeBlobs compact />
      <section className="relative w-full max-w-2xl animate-pop">
        <div className="mb-5 flex items-end justify-between gap-4 px-1">
          <div>
            <p className="text-sm font-black tracking-[.1em] text-coral">正在寻找你的恋爱动物</p>
            <p className="mt-1 text-xs font-medium text-[#8d818c]">凭第一反应选就好，没有标准答案</p>
          </div>
          <p className="shrink-0 text-sm font-black text-ink"><span className="text-xl text-coral">{String(index + 1).padStart(2, '0')}</span> / {String(total).padStart(2, '0')}</p>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-[#eadfe2]">
          <div className="h-full rounded-full bg-gradient-to-r from-coral to-[#ffb565] transition-all duration-500 ease-out" style={{ width: `${progress}%` }} />
        </div>

        <article className="mt-5 overflow-hidden rounded-[2rem] border border-white bg-white shadow-float sm:mt-7 sm:rounded-[2.5rem]">
          <div className="relative bg-gradient-to-br from-[#fff0e9] via-[#fff8f1] to-[#ebe6ff] px-6 pb-6 pt-8 sm:px-10 sm:pb-9 sm:pt-11">
            <span className="absolute right-7 top-5 text-4xl opacity-40">💌</span>
            <p className="text-xs font-black tracking-[.16em] text-[#a77678]">恋 爱 情 境</p>
            <h1 className="mt-4 max-w-xl text-xl font-black leading-relaxed sm:text-2xl">{question.question}</h1>
          </div>
          <div className="grid gap-3 p-5 sm:grid-cols-2 sm:gap-4 sm:p-7">
            {question.options.map((option, optionIndex) => {
              const selected = selectedIndex === optionIndex
              return (
                <button key={`${option.text}-${optionIndex}`} onClick={() => onSelect(option, optionIndex)} disabled={selectedIndex !== null}
                  className={`group flex min-h-[74px] items-center rounded-2xl border-2 px-4 text-left transition duration-300 sm:min-h-[88px] sm:px-5 ${selected ? 'border-coral bg-[#fff0ed] shadow-[0_7px_0_#ffc9c0]' : 'border-[#f1e9e9] bg-[#fffdfc] hover:-translate-y-0.5 hover:border-[#e5d4db] hover:bg-[#fff8f5] hover:shadow-soft'} disabled:cursor-default`}>
                  <span className={`mr-3 grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-black transition ${selected ? 'bg-coral text-white' : 'bg-[#f2eced] text-[#9f8f96] group-hover:bg-[#ffe1db] group-hover:text-coral'}`}>{selected ? '✓' : optionMarks[optionIndex]}</span>
                  <span className="text-sm font-bold leading-relaxed text-[#4e414f]">{option.text}</span>
                </button>
              )
            })}
          </div>
        </article>
        <p className="mt-5 text-center text-xs font-medium text-[#a79aa4]">相信你的直觉，选完会自动进入下一题</p>
      </section>
    </main>
  )
}
