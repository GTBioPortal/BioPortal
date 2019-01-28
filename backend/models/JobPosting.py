import datetime

from . import db


class JobPosting(db.Model):
    __tablename__ = 'job_postings'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.Text, nullable=False)
    company = db.Column(db.String(128), nullable=False)
    start_date = db.Column(db.DateTime, default=db.func.current_timestamp())
    description = db.Column(db.Text, nullable=False)
    deadline = db.Column(db.DateTime, default=db.func.current_timestamp())
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())

    def __init__(self, data):
        self.title = data.get('title')
        self.company = data.get('company')
        self.description = data.get('description')
        
    
    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self, data):
        for key, item in data.items():
            setattr(self, key, item)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    @staticmethod
    def get_all_jobs():
        return JobPosting.query.all()

    @staticmethod
    def get_job(id):
        return JobPosting.query.get(id)