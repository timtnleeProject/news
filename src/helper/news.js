import { Store } from './store';
import CONFIG from '../config'
const origin = CONFIG.api.origin
const apiKey = CONFIG.api.token;

const store = new Store()
const anHour = 60 * 60 * 1000
const dateAfter = (milisec) => {
  return new Date(Date.now() + milisec)
}

export function resetTopHeadlines () {
  store.remove('headlines')
}

export function getTopHeadlines ({ country }) {
  const url = `${origin}top-headlines?` +
      `country=${country || 'us'}&` +
      `apiKey=${apiKey}`
  const localHeadlines = store.get('headlines')
  if (localHeadlines) return Promise.resolve(localHeadlines)
  return fetch(url)
    .then(res => res.json())
    .then(res => {
      if (res.status === 'ok'){
        const headlines = res.articles
        store.save({
          key: 'headlines',
          value: headlines,
          expired: dateAfter(anHour)
        })
        return headlines
      }
    })
}