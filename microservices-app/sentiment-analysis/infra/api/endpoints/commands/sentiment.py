from bottle import request

from infra.api.endpoints.response import json_response

class SentimentEndpointCommand(object):
  def register(self, app):
    app.route('/sentiment', 'POST', self.execute_post_query)

  def execute_post_query(self):
    post_content = request.json
    text_to_analyse = post_content['text']

    output = {
      'analysedText': text_to_analyse,
      'sentiment': 'neutral'
    }

    return json_response(output)
