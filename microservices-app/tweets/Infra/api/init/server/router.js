const { Router } = require('express')

const getTweetsRouter = require('../../endpoints/getTweets/getTweets.router')
const retrieveTweetsRouter = require('../../endpoints/retrieveTweets/retrieveTweets.router')

const getRouter = () => {
  const router = new Router()

  router.use('/getTweets', getTweetsRouter())
  router.use('/retrieveTweets', retrieveTweetsRouter())

  return router
}

module.exports = getRouter
