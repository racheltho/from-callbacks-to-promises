from flask import Flask
import time
import random
app = Flask(__name__)


@app.route('/', methods=['POST'])
def get_rand():
    time.sleep(0.3)
    return str(random.random())


if __name__ == '__main__':
    app.debug = True
    app.run(threaded=True)
