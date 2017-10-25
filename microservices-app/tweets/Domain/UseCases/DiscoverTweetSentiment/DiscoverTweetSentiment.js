const dependencies = {
  sentimentClient: require('Infra/clients/sentiment')
}

module.exports = async function DiscoverTweetSentiment (tweetText, injection) {
  const { sentimentClient } = Object.assign({}, dependencies, injection)

  const result = await sentimentClient.classifyText(tweetText, injection)

  return result.sentiment
}
