import { useEffect, useRef, useState } from 'react'
import html2canvas from 'html2canvas'
import { DecorativeBlobs } from './DecorativeBlobs'
import { ShareCard } from './ShareCard'

const rarityByAnimal = {
  dog: { label: '高人气心动款', note: '你的爱意像晴天，藏不住也不必藏。', color: '#E95F55' },
  cat: { label: '神秘少数派', note: '越靠近，越会发现你的偏爱很特别。', color: '#7162BD' },
  fox: { label: '氛围感主角', note: '和你在一起，平常日子也会有电影感。', color: '#D77D3B' },
  eagle: { label: '清醒稀有款', note: '你把心动和远方，都看得很认真。', color: '#5275AE' },
  lion: { label: '守护限定款', note: '你的可靠，是关系里很珍贵的底气。', color: '#B96C23' },
  rabbit: { label: '温柔共感款', note: '被你放在心上，会有被认真接住的感觉。', color: '#C95F83' },
  bear: { label: '安心陪伴款', note: '你就是那个让人想放心靠近的存在。', color: '#926148' },
  turtle: { label: '长情限定款', note: '慢一点没关系，你的认真会走得更远。', color: '#4E9065' },
  wolf: { label: '清醒自在款', note: '你把完整的自己，也带进了爱情里。', color: '#536A88' },
  capybara: { label: '松弛治愈款', note: '你的舒服，是关系里安静的魔法。', color: '#9B7054' },
  hamster: { label: '细节宝藏款', note: '你的喜欢，总藏在别人意想不到的地方。', color: '#C77E29' },
  owl: { label: '读心观察家', note: '你总能看见爱意里那些没有说出口的部分。', color: '#624995' }
}

function RevealStage({ primary, onReveal }) {
  useEffect(() => {
    const timer = window.setTimeout(onReveal, 1300)
    return () => window.clearTimeout(timer)
  }, [onReveal])

  return (
    <section className="relative grid min-h-[72dvh] place-items-center overflow-hidden text-center">
      <div className="reveal-halo" style={{ background: primary.tint }} />
      <span className="reveal-spark reveal-spark-one">✦</span>
      <span className="reveal-spark reveal-spark-two">✦</span>
      <span className="reveal-spark reveal-spark-three">♡</span>
      <div className="relative z-10 animate-pop">
        <p className="text-xs font-black tracking-[.2em] text-coral">LOVE SIGNAL FOUND</p>
        <div className="reveal-orb mt-6" style={{ background: `radial-gradient(circle at 35% 25%, #fff 0 6%, ${primary.tint} 40%, ${primary.accent} 150%)` }}>
          <span className="animate-bob text-7xl drop-shadow-sm">{primary.emoji}</span>
        </div>
        <h1 className="mt-7 text-2xl font-black">正在拆开你的心动档案</h1>
        <p className="mt-2 text-sm font-medium text-[#867783]">捕捉到一只特别的恋爱动物…</p>
      </div>
    </section>
  )
}

export function Result({ rankings, onRestart, isPreview = false }) {
  const [primary, hidden, potential] = rankings
  const rarity = rarityByAnimal[primary.id] ?? rarityByAnimal.dog
  const cardRef = useRef(null)
  const [revealed, setRevealed] = useState(isPreview)
  const [showShareSheet, setShowShareSheet] = useState(false)
  const [exporting, setExporting] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => setRevealed(isPreview), [primary.id, isPreview])

  const createCardCanvas = async () => {
    if (!cardRef.current) return null
    return html2canvas(cardRef.current, { scale: 3, backgroundColor: null, useCORS: true })
  }

  const saveCard = async () => {
    if (exporting) return
    setExporting(true)
    try {
      const canvas = await createCardCanvas()
      if (!canvas) return
      const link = document.createElement('a')
      link.download = `我的恋爱动物人格-${primary.name}.png`
      link.href = canvas.toDataURL('image/png')
      link.click()
    } finally {
      setExporting(false)
    }
  }

  const shareCard = async () => {
    if (exporting) return
    setExporting(true)
    try {
      const canvas = await createCardCanvas()
      if (!canvas) return
      const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/png'))
      const file = blob ? new File([blob], `我的恋爱动物人格-${primary.name}.png`, { type: 'image/png' }) : null
      const shareData = { title: '我的恋爱动物人格', text: `我是${primary.emoji}${primary.name}，来测测你的恋爱动物人格吧～`, files: file ? [file] : [] }
      if (file && navigator.canShare?.(shareData)) {
        await navigator.share(shareData)
      } else {
        const link = document.createElement('a')
        link.download = file?.name ?? `我的恋爱动物人格-${primary.name}.png`
        link.href = canvas.toDataURL('image/png')
        link.click()
      }
    } finally {
      setExporting(false)
    }
  }

  const copyResult = async () => {
    const copyText = `我的恋爱动物人格是 ${primary.emoji}${primary.name}！\n${primary.keywords.join(' · ')}\n隐藏人格：${hidden.emoji}${hidden.name}\n来测测你的恋爱动物人格吧～`
    try {
      await navigator.clipboard.writeText(copyText)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      window.prompt('复制这段文字分享给朋友：', copyText)
    }
  }

  return (
    <main className="relative min-h-dvh overflow-hidden bg-[#fff9f6] px-4 py-7 font-rounded text-ink sm:px-8 sm:py-10">
      <DecorativeBlobs compact />
      {!revealed ? <RevealStage primary={primary} onReveal={() => setRevealed(true)} /> : (
        <section className="relative mx-auto max-w-5xl animate-pop">
          {isPreview && <div className="mx-auto mb-4 w-fit rounded-full bg-[#fff0b5] px-3 py-1 text-xs font-bold text-[#8d742e]">结果页面样张 · 接入题库后将按答题分数生成</div>}
          <header className="text-center">
            <p className="text-xs font-black tracking-[.2em] text-coral">LOVE ANIMAL REPORT</p>
            <h1 className="mt-2 text-2xl font-black sm:text-3xl">你的恋爱动物人格已揭晓</h1>
            <p className="mt-2 text-sm font-medium text-[#8a7c88]">这份心动档案，适合被好好收藏。</p>
          </header>

          <div className="mt-6 grid gap-5 lg:grid-cols-[1.18fr_.82fr] lg:items-start">
            <article className="relative overflow-hidden rounded-[2rem] border border-white/90 bg-white p-5 shadow-float sm:p-8">
              <div className="absolute -right-12 -top-16 h-56 w-56 rounded-full opacity-80 blur-[1px]" style={{ backgroundColor: primary.tint }} />
              <div className="absolute right-9 top-8 rotate-12 text-xl opacity-60">✦</div>
              <div className="relative flex items-start justify-between gap-3">
                <span className="rounded-full px-3 py-1.5 text-xs font-black" style={{ backgroundColor: primary.tint, color: primary.accent }}>稀有度 · {rarity.label}</span>
                <span className="text-xs font-black tracking-[.12em] text-[#aa9ba4]">NO. LOVE-01</span>
              </div>
              <div className="relative mt-6 flex flex-col items-center text-center sm:flex-row sm:text-left">
                <div className="relative grid h-32 w-32 shrink-0 place-items-center rounded-[2.2rem] shadow-[0_14px_28px_rgba(115,75,104,.14)] sm:h-36 sm:w-36" style={{ background: `linear-gradient(145deg, #fff 0%, ${primary.tint} 65%)` }}>
                  <span className="absolute inset-2 rounded-[1.75rem] border border-white/80" />
                  <span className="relative text-7xl sm:text-8xl">{primary.emoji}</span>
                </div>
                <div className="mt-5 sm:ml-7 sm:mt-1">
                  <p className="text-sm font-bold" style={{ color: primary.accent }}>{primary.kind}</p>
                  <h2 className="mt-1 text-4xl font-black tracking-tight sm:text-5xl">{primary.name}</h2>
                  <p className="mt-3 max-w-md text-sm font-medium leading-relaxed text-[#716470]">“{primary.description}”</p>
                </div>
              </div>
              <div className="relative mt-7 rounded-2xl border border-[#f0e7e7] bg-[#fffdfc] p-4">
                <p className="text-[11px] font-black tracking-[.15em] text-[#aa939d]">你的恋爱签名</p>
                <p className="mt-2 text-sm font-bold leading-relaxed" style={{ color: rarity.color }}>{rarity.note}</p>
              </div>
              <div className="relative mt-6 border-t border-[#f0e8e8] pt-5">
                <p className="text-xs font-black tracking-[.14em] text-[#a88f98]">爱情关键词</p>
                <div className="mt-3 flex flex-wrap justify-center gap-2 sm:justify-start">
                  {primary.keywords.map((word, index) => <span key={word} className="rounded-full px-4 py-2 text-sm font-black" style={{ backgroundColor: primary.tint, color: primary.accent }}>{['♡', '✦', '☼'][index]} {word}</span>)}
                </div>
              </div>
            </article>

            <aside className="grid gap-4">
              <article className="relative overflow-hidden rounded-[1.7rem] border border-white bg-white/90 p-5 shadow-soft">
                <span className="absolute -right-3 -top-4 text-6xl opacity-10">♡</span>
                <p className="relative text-xs font-black tracking-[.13em] text-[#aa929b]">B-SIDE LOVE ENERGY</p>
                <h3 className="relative mt-2 text-lg font-black">隐藏人格，正在悄悄发光</h3>
                <div className="relative mt-4 flex items-center gap-3">
                  <span className="grid h-16 w-16 place-items-center rounded-2xl text-4xl shadow-sm" style={{ backgroundColor: hidden.tint }}>{hidden.emoji}</span>
                  <div><p className="text-lg font-black">{hidden.name}</p><p className="mt-0.5 text-xs font-bold" style={{ color: hidden.accent }}>{hidden.kind}</p></div>
                </div>
                <div className="relative mt-4 rounded-xl bg-[#fff7f4] px-3 py-2.5 text-sm font-bold text-[#796b75]">{primary.keywords[0]}表达 × {hidden.keywords[0]}守护</div>
              </article>
              <article className="relative overflow-hidden rounded-[1.7rem] bg-[#34293f] p-5 text-white shadow-soft">
                <span className="absolute -bottom-5 -right-2 text-8xl opacity-10">✦</span>
                <p className="relative text-xs font-bold tracking-[.13em] text-[#cdbed4]">NEXT CHAPTER</p>
                <p className="relative mt-2 text-lg font-black">{potential.emoji} 潜在人格：{potential.name}</p>
                <p className="relative mt-2 text-sm leading-relaxed text-[#e1d8e5]">在刚刚好的时刻，这份{potential.keywords[0]}也会成为你的恋爱彩蛋。</p>
              </article>
            </aside>
          </div>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button onClick={() => setShowShareSheet(true)} className="group w-full rounded-full bg-coral px-7 py-3.5 text-sm font-black text-white shadow-[0_7px_0_#df5d55] transition hover:-translate-y-0.5 active:translate-y-1 active:shadow-none sm:w-auto">生成我的分享卡 <span className="ml-1 inline-block transition group-hover:translate-x-1">→</span></button>
            <button onClick={copyResult} className="w-full rounded-full border-2 border-[#eadfe2] bg-white px-6 py-3 text-sm font-black text-ink transition hover:border-[#c8b1bb] sm:w-auto">{copied ? '已复制，快去分享吧！' : '复制结果文案'}</button>
            <button onClick={onRestart} className="px-5 py-3 text-sm font-bold text-[#8f808a] underline decoration-[#d4bfc6] underline-offset-4">再测一次</button>
          </div>
        </section>
      )}

      {showShareSheet && (
        <div className="fixed inset-0 z-30 grid place-items-center overflow-y-auto bg-[#34293f]/45 px-4 py-6 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="分享卡">
          <div className="relative flex w-full max-w-sm animate-pop flex-col items-center rounded-[2rem] bg-[#fffaf7] p-5 shadow-[0_24px_70px_rgba(34,23,42,.32)] sm:p-6">
            <button onClick={() => setShowShareSheet(false)} className="absolute right-4 top-4 z-10 grid h-8 w-8 place-items-center rounded-full bg-white/80 text-lg font-bold text-[#776875] transition hover:bg-white" aria-label="关闭分享卡">×</button>
            <p className="mb-4 text-sm font-black text-ink">这张卡很适合发给朋友</p>
            <ShareCard ref={cardRef} primary={primary} hidden={hidden} rarity={rarity} />
            <div className="mt-5 grid w-full grid-cols-2 gap-3">
              <button onClick={saveCard} disabled={exporting} className="rounded-full bg-ink px-3 py-3 text-sm font-black text-white transition hover:bg-[#51405f] disabled:opacity-60">{exporting ? '生成中...' : '保存图片'}</button>
              <button onClick={shareCard} disabled={exporting} className="rounded-full bg-coral px-3 py-3 text-sm font-black text-white transition hover:bg-[#ed675b] disabled:opacity-60">分享给朋友</button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
