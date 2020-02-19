import store from './store';
import axios from 'axios'
import CONFIG from '../config'
const { origin, token } = CONFIG.api

const instance = axios.create({
  baseURL: origin,
  timeout: 3000,
  headers: {
    'X-Api-Key': token
  }
})
instance.interceptors.response.use(response => {
  if (response.data && response.data.status === 'ok') return response.data
  else return Promise.reject(response)
})
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
  return instance.get('/top-headlines', {
    params: {
      country
    }
  }).then(res => {
    const headlines = res.articles
    store.save({
      key: 'headlines',
      value: headlines,
      expired: dateAfter(anHour)
    })
    return headlines
  })
}