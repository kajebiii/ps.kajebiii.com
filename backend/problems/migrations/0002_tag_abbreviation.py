# Generated by Django 2.1 on 2018-09-07 04:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('problems', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='tag',
            name='abbreviation',
            field=models.CharField(default='undefined', max_length=19),
            preserve_default=False,
        ),
    ]
