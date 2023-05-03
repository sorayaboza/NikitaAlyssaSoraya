from flask import Flask, request, jsonify
from flask_login import LoginManager, UserMixin, login_user, logout_user, login_required
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS
from flask_admin import Admin
from flask_admin.contrib.sqla import ModelView
from flask_sqlalchemy import SQLAlchemy
from db import add_user, find_user

app = Flask(__name__)
CORS(app)
app.secret_key = 'your_secret_key'  # Set your secret key for session management

# #-----ADMIN CODE-----
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///../mydatabase.db'
# db = SQLAlchemy(app)

# class User(db.Model):
#     __tablename__ = 'users'
#     id = db.Column(db.Integer, primary_key=True)
#     username = db.Column(db.String(50), unique=True, nullable=False)
#     password = db.Column(db.String(50), nullable=False)

# admin = Admin(app, name='Admin Panel')
# admin.add_view(ModelView(User, db.session))

# @login_manager.user_loader
# def load_user(user_id):
#     # Load the user from the database
#     user = User.query.get(int(user_id))
    
#     # If the user is not found, return None
#     if not user:
#         return None
#     return user
# #-----ADMIN CODE-----

# Configure Flask-Login
login_manager = LoginManager()
login_manager.init_app(app)

class User(UserMixin):
    def __init__(self, user_id):
        self.id = user_id

@login_manager.user_loader
def load_user(user_id):
    return User(user_id)

#----------------LOGIN-------------------
@app.route('/login', methods=['POST'])
def login():
    # Retrieve login dentials from request data
    data = request.get_json()
    username = data['username']
    password = data['password']
    fetched = find_user(username, password)
    if fetched is not None:
        login_user(User(fetched[0]))
        return {'message': 'Logged in successfully'}
    else:
        return {'message': 'Failed login'}

@app.route('/logout', methods=['POST'])
def logout():
    logout_user()  # Log the user out
    return {'message': 'Logged out successfully'}

#----------------REGISTRATION-------------------
@app.route('/register', methods=['POST'])
def register():
    # Retrieve login credentials from request data
    data = request.get_json()
    username = data['username']
    password = data['password']
    try: 
        add_user(username, password)
        return {'message': 'Registered successfully'}
    except:
        return {'message': 'Failed Register'}




# -------------APP RUNNING--------------------
if __name__ == "__main__":
    app.run(debug=True)