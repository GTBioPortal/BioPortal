import datetime

from . import db


class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(255), unique=True, nullable=False)
    email = db.Column(db.String(255), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=db.func.current_timestamp())
    account_type = db.Column(db.Integer, nullable=False)
    is_approved = db.Column(db.Boolean, nullable=False, default=False)
    name = db.Column(db.String(255), nullable=False)

    def __init__(self, name, email, username, password, account_type=0):
        self.name = name
        self.email = email
        self.username = username
        self.password = bcrypt.generate_password_hash(
            password, app.config.get('BCRYPT_LOG_ROUNDS')
        ).decode()
        self.account_type = account_type

    def encode_auth_token(self, uid):
        try:
            payload = {
                'expiration': datetime.datetime.utcnow() + datetime.timedelta(hours=2),
                'issued_at': datetime.datetime.utcnow(),
                'uid': uid
            }
            return jwt.encode(
                payload,
                app.config.get('SECRET_KEY'),
                algorithm='HS256'
            )
        except Exception as e:
            return e

    @staticmethod
    def decode_auth_token(token):
        try:
            payload = jwt.decode(token, app.config.get('SECRET_KEY'))
            is_expired = ExpiredToken.check_expired(token)
            if is_expired:
                return 'Expired Token'
            else:
                return payload['uid']
        except jwt.ExpiredSignatureError:
            return 'Expired Signature'
        except jwt.InvalidTokenError:
            return 'Invalid JWT'


class ExpiredToken(db.model):
    __tablename__ = 'jwt_tokens'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    token = db.Column(db.String(256), unique=True, nullable=False)
    expiration_time = db.Column(db.DateTime, nullable=False)

    def __init__(self, token):
        self.token = token
        self.expiration_time = datetime.datetime.now()

    @staticmethod
    def check_expired(token):
        res = ExpiredToken.query.filter_by(token=str(token)).first()
        if res:
            return True
        else:
            return False