import os

class Development(object):
    DEBUG = True
    TESTING = False
    JWT_SECRET_KEY = 'bioportal'
    SQLALCHEMY_DATABASE_URI = 'postgres:///bioportal:bioportal@35.202.231.38/bioportal_db'


app_config = {
    'development': Development
}
