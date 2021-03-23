import axios from 'axios'
import CONFIG from '../config'
const { origin, token } = CONFIG.api

const instance = axios.create({
  baseURL: origin,
  timeout: 3000,
  headers: {
    "x-rapidapi-key": token,
    "x-rapidapi-host": "newscatcher.p.rapidapi.com",
  }
})
instance.interceptors.response.use(response => {
  if (response.data && response.data.status === 'ok') return response.data
  else return Promise.reject(response)
})

export function fetchHeadlines (params) {
  return instance.get('/latest_headlines', {
    params
  })
}

// export function fetchSources ({ country }) {
//   return instance.get('/sources')
// }

export function fetchEverything ({ q }) {
  return instance.get('/search', {
    params: {
      q
    }
  })
}