# Generated by Django 3.1.3 on 2020-12-01 00:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lanchonetes', '0003_auto_20201129_1519'),
    ]

    operations = [
        migrations.AlterField(
            model_name='produto',
            name='imagem',
            field=models.ImageField(upload_to='api/lanchonetes/assets/imagens/'),
        ),
    ]