const CommandRouterBuilder = require('../../commandRouterBuilder')

const getRouter = () => {
  const getTweetsRouter = new CommandRouterBuilder()

  getTweetsRouter.get('/', require('./getTweets.command'))

  return getTweetsRouter.build()
}

module.exports = getRouter
