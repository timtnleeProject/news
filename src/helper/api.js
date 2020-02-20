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

export function fetchHeadlines ({ country }) {
  return instance.get('/top-headlines', {
    params: {
      country
    }
  })
}

export function fetchSources ({ country }) {
  return instance.get('/sources')
}
