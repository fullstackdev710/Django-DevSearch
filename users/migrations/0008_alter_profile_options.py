# Generated by Django 4.1.6 on 2023-02-20 19:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0007_alter_profile_user'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='profile',
            options={'ordering': ['created']},
        ),
    ]
