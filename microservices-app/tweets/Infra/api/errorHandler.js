const dependencies = {
  console: console
}

const formatError = (error) => {
  if (error.stack) {
    return {
      message: error.message,
      fullError: error.stack
    }
  }

  return error
}

const errorHandler = (res, error, injection) => {
  const { console } = Object.assign({}, dependencies, injection)

  console.error(error)

  const formattedError = formatError(error)

  return res.status(500).send({ error: formattedError })
}

module.exports = errorHandler
