from flask import Flask
app = Flask(__name__)

import config
from blueprints import jobs, knowledges, proyects


app.register_blueprint(jobs.jobs)
app.register_blueprint(proyects.proyects)
app.register_blueprint(knowledges.knowledges)


if __name__ == '__main__':
    configuration = {
        'host': '0.0.0.0',
        'port': config.FLASK_PORT,
        'debug': config.FLASK_DEBUG
    }
    app.run(**configuration)
