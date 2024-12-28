from django.test import TestCase

from django.urls import reverse, resolve
from rest_framework.test import APITestCase
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import MerchantView, RegisterUserView

# FILE: tourism_admin/admin_panel/test_urls.py


class TestUrls(APITestCase):

    def test_register_url(self):
        url = reverse('register')
        self.assertEqual(resolve(url).func.view_class, RegisterUserView)

    def test_token_obtain_pair_url(self):
        url = reverse('token_obtain_pair')
        self.assertEqual(resolve(url).func.view_class, TokenObtainPairView)

    def test_token_refresh_url(self):
        url = reverse('token_refresh')
        self.assertEqual(resolve(url).func.view_class, TokenRefreshView)

    def test_merchants_url(self):
        url = reverse('merchant-list')
        self.assertEqual(resolve(url).func.view_class, MerchantView)
