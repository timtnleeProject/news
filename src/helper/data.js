import store from './store';
import { fetchHeadlines, fetchEverything } from './api'

const anHour = 60 * 60 * 1000
const dateAfter = (milisec) => {
  return new Date(Date.now() + milisec)
}

export function resetTopHeadlines () {
  store.remove('headlines')
}

export function getTopHeadlines () {
  const setting = store.get('setting')
  const { country:lang, category:topic } = setting
  const localHeadlines = store.get('headlines')
  if (localHeadlines) return Promise.resolve(localHeadlines)
  return fetchHeadlines({ lang, topic }).then(res => {
    const headlines = res.articles
    store.save({
      key: 'headlines',
      value: headlines,
      expired: dateAfter(anHour / 2)
    })
    return headlines
  })
}

const isSame = (ob1, ob2) => {
  const keys = Object.keys({...ob1, ob2})
  const inconsist = keys.some(key => {
    return ob1[key] !== ob2[key]
  })
  return !inconsist
}
export function getEverything (params) {
  const localParams = store.get('params')
  if (isSame(localParams, params)) {
    const localEverything = store.get('everything')
    if (localEverything) return Promise.resolve(localEverything)
  }
  return fetchEverything(params).then(res => {
    const articles = res.articles
    store.save({
      key: 'everything',
      value: articles
    })
    store.save({
      key: 'params',
      value: params
    })
    return articles
  })
}