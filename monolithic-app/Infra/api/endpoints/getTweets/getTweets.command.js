const dependencies = {
  GetTweets: require('Domain/UseCases/GetTweets')
}

module.exports = (req, res, injection) => {
  const { GetTweets } = Object.assign({}, dependencies, injection)

  return GetTweets(injection)
}
