from flask import Flask, request, jsonify
from flask_login import LoginManager, UserMixin, login_user, logout_user, login_required
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS
from db import add_user

app = Flask(__name__)
CORS(app)
app.secret_key = 'your_secret_key'  # Set your secret key for session management

# Configure Flask-Login
login_manager = LoginManager()
login_manager.init_app(app)

class User(UserMixin):
    def __init__(self, user_id):
        self.id = user_id
        
@app.route('/login', methods=['POST'])
def login():
    # Retrieve login credentials from request data
    data = request.get_json()
    username = data['username']
    password = data['password']

    if username == "user" and password == "password":
        user = User(user_id=username) 
        login_user(user)
        return {'message': 'Logged in successfully'}
    else:
        return {'message': 'Failed login'}

@app.route('/logout', methods=['POST'])
def logout():
    logout_user()  # Log the user out
    return {'message': 'Logged out successfully'}

# -------------APP RUNNING--------------------
if __name__ == "__main__":
    app.run(debug=True)