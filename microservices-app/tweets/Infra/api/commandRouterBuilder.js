const dependencies = {
  Router: require('express').Router,
  outputHandler: require('./outputHandler'),
  errorHandler: require('./errorHandler')
}

const defaultOptions = { handleError: true, handleOutput: true }

class CommandRouterBuilder {
  constructor (injection) {
    const { Router, outputHandler, errorHandler } = Object.assign({}, dependencies, injection)

    Object.assign(this, { internalRouter: new Router(), outputHandler, errorHandler })
  }

  decorateCommand (command, options = defaultOptions) {
    return (req, res, injection) => {
      const { handleOutput, handleError } = options

      let promise = command(req, res, injection)

      if (handleOutput) {
        promise = promise.then(result => this.outputHandler(res, result))
      }

      if (handleError) {
        promise = promise.catch(error => this.errorHandler(res, error))
      }

      return promise
    }
  }

  get (routeName, command, options) {
    this.internalRouter.get(routeName, this.decorateCommand(command, options))
  }

  post (routeName, command, options) {
    this.internalRouter.post(routeName, this.decorateCommand(command, options))
  }

  put (routeName, command, options) {
    this.internalRouter.put(routeName, this.decorateCommand(command, options))
  }

  build () {
    return this.internalRouter
  }
}

module.exports = CommandRouterBuilder
