from bottle import response

def handle_404_error(http_error):
  response.content_type = "text/plain"
  return 'Not found'

def handle_405_error(http_error):
  response.content_type = "text/plain"
  return 'Http Method not allowed for this route'

# def handle_500_error(http_error):
#   response.content_type = "text/plain"
#   print(http_error)
#   return 'An internal error occurred'

def enable_error_handler(app):
  app.error_handler = {
    404: handle_404_error,
    405: handle_405_error,
    # 500: handle_500_error
  }
