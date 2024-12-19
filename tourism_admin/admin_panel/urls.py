from django.urls import path, include
from rest_framework import routers #tomar la vista genera todas la urls
from .views import MerchantView

router = routers.DefaultRouter()
#router.register(r'user', views.User, 'users')
router.register(r'merchants', MerchantView, basename='merchant')

urlpatterns = [
    path('api/v1/', include(router.urls)),
]