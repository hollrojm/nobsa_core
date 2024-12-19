from .models import Merchant
from rest_framework.viewsets import ModelViewSet
from .serializers import  MerchantSerializer



class MerchantView(ModelViewSet):
     queryset =Merchant.objects.all()
     serializer_class = MerchantSerializer
     #querysetUser = User.objects.all()
     
