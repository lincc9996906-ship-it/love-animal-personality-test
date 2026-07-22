import { useEffect, useMemo, useRef, useState } from 'react'
import { Home } from './components/Home'
import { Quiz } from './components/Quiz'
import { Analyzing } from './components/Analyzing'
import { Result } from './components/Result'
import { EmptyQuestions } from './components/EmptyQuestions'
import { questions } from './data/questions'
import { animalTypes } from './data/animalTypes'
import { addScores, createInitialScores, rankAnimals } from './utils/scoring'

const isQuestionSetReady = questions.length >= 20 && questions.every((item) => item.question && Array.isArray(item.options) && item.options.length === 4 && item.options.every((option) => option.text && option.scores))

function App() {
  const [screen, setScreen] = useState('home')
  const [questionIndex, setQuestionIndex] = useState(0)
  const [scores, setScores] = useState(createInitialScores)
  const [answers, setAnswers] = useState([])
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [preview, setPreview] = useState(false)
  const nextTimer = useRef(null)

  const rankings = useMemo(() => rankAnimals(scores, answers), [scores, answers])
  const previewRankings = [animalTypes.dog, animalTypes.hamster, animalTypes.fox]

  useEffect(() => () => window.clearTimeout(nextTimer.current), [])

  useEffect(() => {
    if (screen !== 'analyzing') return undefined
    const timer = window.setTimeout(() => setScreen('result'), 2500)
    return () => window.clearTimeout(timer)
  }, [screen])

  const start = () => {
    if (!isQuestionSetReady) { setScreen('empty'); return }
    setQuestionIndex(0)
    setScores(createInitialScores())
    setAnswers([])
    setSelectedIndex(null)
    setPreview(false)
    setScreen('quiz')
  }

  const selectAnswer = (option, optionIndex) => {
    if (selectedIndex !== null) return
    setSelectedIndex(optionIndex)
    setScores((current) => addScores(current, option.scores))
    setAnswers((current) => [...current, { scores: option.scores }])
    nextTimer.current = window.setTimeout(() => {
      if (questionIndex === questions.length - 1) {
        setScreen('analyzing')
      } else {
        setQuestionIndex((current) => current + 1)
        setSelectedIndex(null)
      }
    }, 480)
  }

  if (screen === 'quiz') return <Quiz question={questions[questionIndex]} index={questionIndex} total={questions.length} selectedIndex={selectedIndex} onSelect={selectAnswer} />
  if (screen === 'analyzing') return <Analyzing />
  if (screen === 'result') return <Result rankings={preview ? previewRankings : rankings} isPreview={preview} onRestart={start} />
  if (screen === 'empty') return <EmptyQuestions onBack={() => setScreen('home')} onPreview={() => { setPreview(true); setScreen('result') }} />
  return <Home onStart={start} questionCount={questions.length} />
}

export default App
