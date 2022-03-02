# Generated by Django 4.0.2 on 2022-02-28 06:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_menu_menuitem'),
    ]

    operations = [
        migrations.CreateModel(
            name='OrderItem',
            fields=[
                ('menuitem_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='base.menuitem')),
                ('order_item_qty', models.IntegerField()),
            ],
            bases=('base.menuitem',),
        ),
        migrations.RenameField(
            model_name='menuitem',
            old_name='menu_item_menu',
            new_name='menu_item_menu_restaurant',
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('order_menu_item', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='base.orderitem')),
                ('order_reservation', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='base.reservation')),
            ],
        ),
    ]
