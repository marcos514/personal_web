"""first migration

Revision ID: 3b5b0d664a85
Revises: 
Create Date: 2020-04-23 22:23:17.804425

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3b5b0d664a85'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
        'jobs',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('company_name', sa.String(50), nullable=False),
        sa.Column('description', sa.String(500), nullable=False),
        sa.Column('date_from', sa.String(50), nullable=False),
        sa.Column('date_to', sa.String(50), nullable=True),
        sa.Column('job_type', sa.String(50), nullable=False)
    )

    op.create_table(
        'knowledges',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('name', sa.String(50), nullable=False, unique=True),
        sa.Column('level', sa.Integer, nullable=False),
        sa.Column('parent_knowledge', sa.Integer, sa.ForeignKey("knowledges.id"), nullable=True),
        sa.CheckConstraint('level >= 0', name='level_negative'),
        sa.CheckConstraint('level <= 100', name='level_overpowered')
    )

    op.create_table(
        'proyects',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('name', sa.String(50), nullable=False),
        sa.Column('description', sa.String(500), nullable=False),
        sa.Column('date_started', sa.String(50), nullable=False),
        sa.Column('date_finished', sa.String(50), nullable=True)
    )

    op.create_table(
        'proyect_knowledges',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('knowledge_id', sa.Integer, sa.ForeignKey('knowledges.id')),
        sa.Column('proyect_id', sa.Integer, sa.ForeignKey('proyects.id'))
    )


def downgrade():
    op.drop_table('jobs')
    op.drop_table('knowledges')
    op.drop_table('proyects')
    op.drop_table('proyect_knowledges')
