const CommandRouterBuilder = require('../../commandRouterBuilder')

const getRouter = () => {
  const retrieveTweetsRouter = new CommandRouterBuilder()

  retrieveTweetsRouter.get('/', require('./retrieveTweets.command'))

  return retrieveTweetsRouter.build()
}

module.exports = getRouter
