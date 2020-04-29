import os

from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base


def strtobool(text):
    return text.lower() == 'true'


#FLASK CONFIGURATIONS
FLASK_PORT   = int(os.environ.get('FLASK_PORT', 5000))
FLASK_DEBUG  = bool(strtobool(os.environ.get('FLASK_DEBUG', 'False')))


Base = declarative_base()

db_url = 'postgresql://{user}:{password}@{host}/{dbname}'.format(
    user=os.environ.get('POSTGRES_USER', 'marcos'),
    password=os.environ.get('POSTGRES_PASSWORD','marcos123'),
    host=os.environ.get('POSTGRES_HOST','db'),
    # port=os.environ.get('DB_PORT','5432'),
    dbname=os.environ.get('POSTGRES_NAME', 'web-db')
)
engine = create_engine(db_url,echo=True)
session_factory = sessionmaker(bind=engine)
Session = scoped_session(session_factory)

# Se tiene que hacer import Session y luego ejecutar la siguiente linea para tener la session
# session = Session()
