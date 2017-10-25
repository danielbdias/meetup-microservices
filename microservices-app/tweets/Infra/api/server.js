const apiConfiguration = require('Infra/config/api')

const initDatabase = require('./init/server/database')

const configureExpress = require('./init/server/express')

const notifyServerHasStarted = (api) => {
  api.listen(apiConfiguration.port, () => console.log(`Api is running on port ${apiConfiguration.port}`))
}

initDatabase()
  .then(configureExpress)
  .then(notifyServerHasStarted)
