from rest_framework import authentication
from trignometry.models import TestingT
from .serializers import TestingTSerializer
from rest_framework import viewsets

class TestingTViewSet(viewsets.ModelViewSet):
    serializer_class = TestingTSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = TestingT.objects.all()