const dependencies = {
  RetrieveTweets: require('Domain/UseCases/RetrieveTweets')
}

module.exports = (req, res, injection) => {
  const { RetrieveTweets } = Object.assign({}, dependencies, injection)

  const hashtag = req.query.hashtag
  const tweetsToRetrieve = req.query.tweetsToRetrieve

  return RetrieveTweets(hashtag, tweetsToRetrieve, injection)
}
