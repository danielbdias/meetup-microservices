from bottle import request

from infra.api.endpoints.response import json_response
from domain.useCases.sentimentClassifier import classifyText

class SentimentEndpointCommand(object):
  def register(self, app):
    app.route('/sentiment', 'POST', self.execute_post_query)

  def execute_post_query(self):
    post_content = request.json
    text_to_analyse = post_content['text']

    output = {
      'analysedText': text_to_analyse,
      'sentiment': classifyText(text_to_analyse)
    }

    return json_response(output)
