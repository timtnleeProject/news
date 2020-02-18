const isExpired = (date) => {
  if (!date) return false
  return Date.now() > new Date(date).getTime()
}

export class Store {
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
    if (str) {
      const parsed = JSON.parse(str)
      return isExpired(parsed.expired) ? null : parsed.value
    }
    else return str
  }
  remove (key) {
    localStorage.removeItem(key)
  }
}
