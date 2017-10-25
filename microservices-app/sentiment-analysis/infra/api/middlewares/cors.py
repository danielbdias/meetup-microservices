from bottle import response

def enable_cors(app):
  app.hook('after_request')(add_cors_headers)

def add_cors_headers():
  # Don't use the wildcard '*' for Access-Control-Allow-Origin in production.
  response.headers['Access-Control-Allow-Origin'] = '*'
  response.headers['Access-Control-Allow-Methods'] = 'PUT, GET, POST, DELETE, OPTIONS'
  response.headers['Access-Control-Allow-Headers'] = 'Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token'
