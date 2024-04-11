# Filename - server.py

# Import flask and datetime module for showing date and time
from flask import Flask
from flask_cors import CORS
import datetime

x = datetime.datetime.now()

# Initializing flask app
app = Flask(__name__)
cors = CORS(app, origins='*')

# Route for seeing a data
@app.route('/data')
def get_time():

    # Returning an api for showing in  reactjs
    return {
        'name':"geek", 
        "age":"22",
        "date":x, 
        "programming":"python"
    }

# Running app
if __name__ == '__main__':
    app.run(debug=True, port=8080)