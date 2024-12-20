from django.urls import path, include
from rest_framework import routers #tomar la vista genera todas la urls
from .views import MerchantView, RegisterUserView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

router = routers.DefaultRouter()
#router.register(r'user', views.User, 'users')
router.register(r'merchants', MerchantView, basename='merchant')

urlpatterns = [
    path('api/v1/', include(router.urls)),
    #path('docs/', include_docs_urls(title=('Merchants Api')))
    path('api/v1/register/', RegisterUserView.as_view(), name='register'),
    path('api/v1/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/v1/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]