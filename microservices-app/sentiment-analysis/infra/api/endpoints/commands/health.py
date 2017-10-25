from datetime import datetime
from infra.api.endpoints.response import json_response

class HealthEndpointCommand(object):
  def register(self, app):
    app.route('/health', [ 'GET' ], self.execute)

  def execute(self):
    health_data = {
      'message': 'I am alive !',
      'currentDate': datetime.now().isoformat()
    }

    return json_response(health_data)
