const path = require('path')
const ghpages = require('gh-pages')
const rootDir = path.resolve(__dirname, '../')
const distDir = path.resolve(rootDir, './build')
const simpleGit = require('simple-git')(rootDir)

const getLatestHash = () => new Promise((resolve, reject) => {
  simpleGit.log((err, log) => {
    if (err) reject(err)
    const latestHash = log.latest.hash
    resolve(latestHash)
  })
})

getLatestHash().then(hash => {
  const options = {
    message: `Auto Deploy ${hash}`
  }
  ghpages.publish(distDir, options, function(err) {
    if (!err) console.log(`Deploy Success ${hash}`)
  })
})

