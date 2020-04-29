import json
import logging

from flask import Blueprint, abort, request, make_response, jsonify
from marshmallow import ValidationError
from sqlalchemy.exc import SQLAlchemyError

from models.proyect import Proyect
from serializers.proyects import ProyectSchema


proyects = Blueprint('proyects', __name__)


@proyects.route('/proyects', methods=['GET'])
def get_proyects():
    # Get and return all the proyects I had
    try:
        proyect = Proyect.get_all()
        proyect_dump = ProyectSchema(many=True).dump(proyect)
        return make_response(jsonify(proyect_dump))
    except ValidationError as err:
        return make_response(jsonify(err.messages), 500)


@proyects.route('/proyect', methods=['POST'])
def create_proyect():
    try:
        proyect_data = request.json
        proyect_load = ProyectSchema().load(proyect_data)
        proyect = Proyect(**proyect_load)
        proyect.save()
        proyect_dump = ProyectSchema().dump(proyect)
        return make_response(jsonify(proyect_dump), 201)
    except ValidationError as err:
        return make_response(jsonify(err.messages), 500)
    except SQLAlchemyError as err:
        logging.error('Error in Proyect creation: {}'.format(list(err.args)))
        return make_response(jsonify({
            'Error Message': 'There was an error, we coudn\'t create the new Proyect'
        }), 500)
