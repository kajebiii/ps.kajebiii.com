# Generated by Django 2.1 on 2018-09-07 02:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('problems', '0001_initial'),
        ('boj', '0005_auto_20180907_1123'),
    ]

    operations = [
        migrations.AddField(
            model_name='problem',
            name='tags',
            field=models.ManyToManyField(to='problems.Tag'),
        ),
    ]
