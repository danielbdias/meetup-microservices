const dependencies = {
  config: require('Infra/config/sentiment'),
  axios: require('axios')
}

const classifyText = async (text, injection) => {
  const { axios, config } = Object.assign({}, dependencies, injection)

  const postData = { text }

  const response = await axios.post(config.url, postData)

  return response.data
}

module.exports = {
  classifyText
}
