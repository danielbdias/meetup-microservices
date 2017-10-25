from bottle import Bottle, response

from infra.api.endpoints.router import register_routes
from infra.api.middlewares.cors import enable_cors
from infra.api.middlewares.error import enable_error_handler

class Server(object):
  def __init__(self):
    self.internal_server = Bottle()

    # enable routers
    register_routes(self.internal_server)

    # enable middlewares
    enable_cors(self.internal_server)
    enable_error_handler(self.internal_server)

  def run(self):
    self.internal_server.run(host='0.0.0.0', port=5000, debug=True)
