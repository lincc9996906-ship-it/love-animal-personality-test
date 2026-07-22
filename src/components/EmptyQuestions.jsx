import { animalTypes } from '../data/animalTypes'
import { DecorativeBlobs } from './DecorativeBlobs'

export function EmptyQuestions({ onBack, onPreview }) {
  return (
    <main className="relative grid min-h-dvh place-items-center overflow-hidden bg-cream p-5 font-rounded text-ink">
      <DecorativeBlobs />
      <section className="relative w-full max-w-lg animate-pop rounded-[2rem] border border-white bg-white/90 p-7 text-center shadow-float sm:p-9">
        <div className="mx-auto grid h-20 w-20 place-items-center rounded-[1.6rem] bg-[#ffe1db] text-4xl">📝</div>
        <p className="mt-5 text-xs font-black tracking-[.17em] text-coral">QUESTION BANK READY</p>
        <h1 className="mt-2 text-2xl font-black">恋爱情境题待接入</h1>
        <p className="mt-3 text-sm font-medium leading-relaxed text-[#776a76]">为保证题目必须原样使用，题库没有被擅自补写。把提供的 20 道原题填入 <code className="rounded bg-[#f4eeee] px-1.5 py-0.5 text-xs font-bold">src/data/questions.js</code> 后，首页按钮会自动开启完整测试。</p>
        <div className="mt-6 rounded-2xl bg-[#fff7e8] p-4 text-left text-sm font-bold leading-relaxed text-[#826d48]">每题需含 question、4 个 options，以及对应的 scores；现有算法会累计 12 种动物分数并展示前三名。</div>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button onClick={onPreview} className="rounded-full bg-ink px-5 py-3 text-sm font-black text-white transition hover:bg-coral">预览结果卡样式</button>
          <button onClick={onBack} className="rounded-full border-2 border-[#eadfe2] px-5 py-3 text-sm font-black transition hover:bg-[#fff8f5]">返回首页</button>
        </div>
        <p className="mt-5 text-xs font-bold text-[#a1959f]">{animalTypes.dog.emoji} 12 种人格资料已配置完成</p>
      </section>
    </main>
  )
}
