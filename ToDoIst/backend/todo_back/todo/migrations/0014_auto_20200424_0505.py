# Generated by Django 3.0.5 on 2020-04-23 23:05

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0013_auto_20200424_0500'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='date',
            field=models.DateField(default=datetime.datetime(2020, 4, 24, 5, 5, 4, 220653)),
        ),
    ]
