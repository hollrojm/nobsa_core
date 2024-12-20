from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Merchant, User
from django.contrib.auth.hashers import make_password
from rest_framework.permissions import AllowAny
from rest_framework.viewsets import ModelViewSet
from .serializers import  MerchantSerializer
from rest_framework.permissions import IsAuthenticated



class MerchantView(ModelViewSet):
     queryset =Merchant.objects.all()
     serializer_class = MerchantSerializer
     permission_classes = [IsAuthenticated]
     
class RegisterUserView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        try:
            data = request.data
            if User.objects.filter(username=data['username']).exists():
                return Response({"error": "Username already exists"}, status=status.HTTP_400_BAD_REQUEST)

            user = User.objects.create(
                username=data['username'],
                email=data['email'],
                password=make_password(data['password']),
            )
            return Response({"message": "User registered successfully"}, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)