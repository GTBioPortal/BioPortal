from models import db
from models.JobPosting import JobPosting
from config import app_config
from flask import Flask, request, jsonify



app = Flask(__name__)
app.config.from_object(app_config['development'])

db.init_app(app)

@app.route('/ping/', methods=['GET'])
def index():
    return 'pong'

@app.route('/jobs/create', methods=['POST'])
def create_job():
    data = request.json
    posting = JobPosting(data)
    posting.save()
    response = jsonify({
        'success': True
    })
    response.status_code = 200
    return response

if __name__ == '__main__':
    app.run()