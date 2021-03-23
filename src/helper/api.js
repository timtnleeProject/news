import axios from 'axios'
import CONFIG from '../config'
const { origin, token } = CONFIG.api

const instance = axios.create({
  baseURL: origin,
  timeout: 3000,
  headers: {
    'x-api-key': token
  }
})
instance.interceptors.response.use(response => {
  if (response.data && response.data.status === 'ok') return response.data
  else return Promise.reject(response)
})

export function fetchHeadlines (params) {
  return instance.get('/top-headlines', {
    params
  })
}

export function fetchSources ({ country }) {
  return instance.get('/sources')
}

export function fetchEverything ({ q }) {
  return instance.get('/everything', {
    params: {
      q
    }
  })
}