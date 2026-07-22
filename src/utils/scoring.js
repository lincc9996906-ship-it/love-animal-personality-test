import { animalList } from '../data/animalTypes'

export function createInitialScores() {
  return Object.fromEntries(animalList.map(({ id }) => [id, 0]))
}

export function addScores(currentScores, increments = {}) {
  return Object.entries(increments).reduce(
    (next, [id, value]) => ({ ...next, [id]: (next[id] ?? 0) + value }),
    currentScores
  )
}

// 同分时根据第一道将该类型加分的题目位置决定先后，使结果稳定且可复现。
export function rankAnimals(scores, answers) {
  const firstHit = (id) => {
    const index = answers.findIndex(({ scores }) => Boolean(scores?.[id]))
    return index === -1 ? Number.MAX_SAFE_INTEGER : index
  }
  return animalList
    .map((animal) => ({ ...animal, score: scores[animal.id] ?? 0, firstHit: firstHit(animal.id) }))
    .sort((a, b) => b.score - a.score || a.firstHit - b.firstHit || a.id.localeCompare(b.id))
}
