import os

class Development(object):
    DEBUG = True
    TESTING = False
    JWT_SECRET_KEY = 'bioportal'
    SQLALCHEMY_DATABASE_URI = 'postgres:///bioportal_db'


app_config = {
    'development': Development
}
