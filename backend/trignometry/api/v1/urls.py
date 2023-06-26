
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import TestingTViewSet
router = DefaultRouter()
router.register('testingt', TestingTViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
