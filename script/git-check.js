const path =require('path')
const rootDir = path.resolve(__dirname, '../')
const simpleGit = require('simple-git')(rootDir)

simpleGit.status((err, status) => {
  for (let key in status) {
    const item = status[key]
    const inValid = (function () {
      if (Array.isArray(item)) {
        return item.length > 0 && 'Local changes not commit'
      } else if (typeof item === 'number') {
        return item !== 0 && `${key} origin ${item} commit(s)` 
      } else if (typeof item === 'string') {
        return false
      }
    }())
    if (inValid) {
      console.error(`exit: ${inValid}`)
      process.exit(99)
    }
  }
}).exec(() => {
  console.log('get-check OK')
})
