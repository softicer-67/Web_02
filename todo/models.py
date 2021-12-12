from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):

    url = models.EmailField(max_length=100)
    username = models.CharField(max_length=64)
    firstname = models.CharField(max_length=64, blank=True)
    lastname = models.CharField(max_length=64, blank=True)
    email = models.EmailField(max_length=70, unique=True)

    def __str__(self):
        return f'{self.username} {self.email}'
