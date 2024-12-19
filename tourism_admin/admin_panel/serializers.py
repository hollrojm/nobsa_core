from rest_framework import serializers

from .models import User, Merchant


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
class MerchantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Merchant
        fields = '__all__'