from rest_framework import serializers

from tourism_admin.admin_panel.models import User, Merchant


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'role']
class MerchantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Merchant
        fields = ['id', 'user', 'business_name', 'business_type', 'location', 'phone_number']