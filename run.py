# Google API Key: AIzaSyAobm6dBFn5DIsxxlaaMoDSUKYpsA0yBHA

from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def google_map():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True)