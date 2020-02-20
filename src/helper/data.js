import store from './store';
import { fetchHeadlines } from './api'

const anHour = 60 * 60 * 1000
const dateAfter = (milisec) => {
  return new Date(Date.now() + milisec)
}

export function resetTopHeadlines () {
  store.remove('headlines')
}

export function getTopHeadlines () {
  const country = store.get('setting').country
  const localHeadlines = store.get('headlines')
  if (localHeadlines) return Promise.resolve(localHeadlines)
  return fetchHeadlines({ country }).then(res => {
    const headlines = res.articles
    store.save({
      key: 'headlines',
      value: headlines,
      expired: dateAfter(anHour)
    })
    return headlines
  })
}