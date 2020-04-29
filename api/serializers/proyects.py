from marshmallow import Schema, fields, validate
from serializers.knowledges import KnowledgeSchema


class ProyectSchema(Schema):
    id = fields.Int(required=False)
    name = fields.Str(required=True)
    description = fields.Str(required=True)
    date_started = fields.Str(required=True)
    date_finished = fields.Str(required=False)
    knowledges = fields.List(fields.Nested('KnowledgeSchema', only=('name', 'id')))
    knowledges_id = fields.List(fields.Int(required=False))

