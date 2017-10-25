const localConfig = {
  url: 'http://sentiment:5000/sentiment'
}

const remoteConfig = {
  url: process.env.SENTIMENT_URL
}

const api = {
  development: localConfig,
  test: localConfig,
  qa: remoteConfig,
  production: remoteConfig
}

module.exports = api[require('./environment')]
