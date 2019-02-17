import os

class Development(object):
    DEBUG = True
    TESTING = False
    JWT_SECRET_KEY = 'bioportal'
    SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://bioportal:bioportal@35.222.53.63:3306/bioportal_db'


app_config = {
    'development': Development
}
