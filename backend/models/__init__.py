from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

#db = SQLAlchemy()
from application import db

ma = Marshmallow()

from .JobPosting import JobPosting, JobPostingSchema
from .User import User, ExpiredToken