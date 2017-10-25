from bottle import response
import json

def json_response(data):
  response.set_header('Content-type', 'application/json')

  return json.dumps(data)
