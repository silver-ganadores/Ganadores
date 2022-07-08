# Generated by Django 3.1.6 on 2022-07-08 05:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Parts',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('processor', models.CharField(max_length=200)),
                ('motherboard', models.CharField(max_length=200)),
                ('powersupply', models.CharField(max_length=200)),
                ('ram', models.CharField(max_length=200)),
                ('storage', models.CharField(max_length=200)),
                ('fan', models.CharField(max_length=200)),
                ('graphicscard', models.CharField(max_length=200)),
                ('chassis', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=200)),
                ('email', models.CharField(default='', max_length=200, null=True)),
                ('career', models.CharField(default='', max_length=200, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Build',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('purpose', models.CharField(blank=True, max_length=200, null=True)),
                ('price', models.IntegerField(blank=True, null=True)),
                ('date', models.DateField(auto_now_add=True)),
                ('builder_info', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='myApp.user')),
                ('computer_parts', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='myApp.parts')),
            ],
        ),
    ]
