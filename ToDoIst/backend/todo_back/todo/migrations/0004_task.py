# Generated by Django 3.0.5 on 2020-04-23 20:30

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0003_auto_20200424_0026'),
    ]

    operations = [
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.TextField()),
                ('completed', models.BooleanField(default=False)),
                ('date', models.DateField(default=datetime.datetime(2020, 4, 24, 2, 29, 58, 136628))),
                ('category', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='todo.Category', verbose_name='Category')),
                ('priority', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='todo.Priority', verbose_name='Priority')),
            ],
        ),
    ]
