const express = require('express')

const configureExpressMiddlewares = api => {
  const cors = require('cors')
  const cookieParser = require('cookie-parser')

  const bodyMiddleware = require('Infra/api/init/middlewares/body')
  const winstonMiddleware = require('Infra/api/init/middlewares/winston')

  bodyMiddleware(api)
  winstonMiddleware(api)

  api.use(cookieParser())

  api.use(cors({
    origin: true,
    credentials: true
  }))
}

const configureEndpoints = (api) => {
  const router = require('./router')

  api.use(router())
}

module.exports = function configure () {
  const api = express()

  configureExpressMiddlewares(api)
  configureEndpoints(api)

  return api
}
