# Generated by Django 4.0.2 on 2022-02-28 07:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0004_orderitem_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='OrderItemInOrder',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('order_item_qty', models.IntegerField()),
            ],
        ),
        migrations.RemoveField(
            model_name='order',
            name='order_menu_item',
        ),
        migrations.DeleteModel(
            name='OrderItem',
        ),
        migrations.AddField(
            model_name='orderiteminorder',
            name='order',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='base.order'),
        ),
        migrations.AddField(
            model_name='orderiteminorder',
            name='order_item',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='base.menuitem'),
        ),
    ]