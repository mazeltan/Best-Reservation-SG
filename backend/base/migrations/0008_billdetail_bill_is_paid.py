# Generated by Django 4.0.2 on 2022-02-28 13:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0007_profile_email_notification_profile_sms_notification'),
    ]

    operations = [
        migrations.AddField(
            model_name='billdetail',
            name='bill_is_paid',
            field=models.BooleanField(default=False),
        ),
    ]
