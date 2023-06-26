from rest_framework import serializers
from trignometry.models import TestingT

class TestingTSerializer(serializers.ModelSerializer):

    class Meta:
        model = TestingT
        fields = "__all__"