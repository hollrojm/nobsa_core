from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    ROLE_CHOICES = [
        ('admin', 'Admin'),
        ('merchant', 'Merchant'),
        ('tourist', 'Tourist'),
    ]
    role = models.CharField(max_length=10, choices=ROLE_CHOICES)


class Merchant(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='merchant_profile')
    business_name = models.CharField(max_length=150)
    business_type = models.CharField(max_length=50)
    location = models.CharField()
    phone_number = models.CharField(max_length=15)

    def __str__(self):
        return self.user.username
