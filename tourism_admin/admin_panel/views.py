from rest_framework.response import Response
from rest_framework.views import APIView

from tourism_admin.admin_panel.models import Merchant
from tourism_admin.admin_panel.serializers import MerchantSerializer


class MerchantListView(APIView):
    def get(self, request):
        merchants = Merchant.objects.all()
        serializer = MerchantSerializer(merchants, many=True)
        return Response(serializer.data)
