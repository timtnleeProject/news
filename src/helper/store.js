const isExpired = (date) => {
  if (!date) return false
  return Date.now() > new Date(date).getTime()
}

export class Store {
  constructor (initialStore) {
    this.initialStore = initialStore
  }
  save ({ key, value, expired }) {
    if (!value || typeof value !== 'object') throw new Error('value must be an object')
    const str = JSON.stringify({
      value,
      expired
    })
    localStorage.setItem(key, str)
  }
  get (key) {
    const str = localStorage.getItem(key)
    if (!str) return this.initialStore[key] || null
    const parsed = JSON.parse(str)
    if (isExpired(parsed.expired)) {
      return this.initialStore[key] || null
    } else {
      return parsed.value
    }
  }
  remove (key) {
    localStorage.removeItem(key)
  }
  clear () {
    localStorage.clear()
  }
}

const globalStore = new Store({
  setting: {
    country: 'tw'
  }
})
// developing
// store.clear()
export default globalStore
