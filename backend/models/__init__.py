from flask_sqlalchemy import SQLAlchemy

#db = SQLAlchemy()
from main import db

from .JobPosting import JobPosting
from .User import User, ExpiredToken