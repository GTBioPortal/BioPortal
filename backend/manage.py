import os
from main import app
from models import db
from flask_script import Manager
from flask_migrate import Migrate, MigrateCommand

#env_name = os.getenv('FLASK_ENV')
#app = create_app(env_name)


manager = Manager(app)
migrate = Migrate(app, db)

manager.add_command('db', MigrateCommand)


if __name__ == '__main__':
    manager.run()