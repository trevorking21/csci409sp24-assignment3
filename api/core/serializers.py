from rest_framework import serializers 
from core.models import Airline, Airport, Runway, Flight 

class AirlineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Airline
        fields = ['airport', 'runway_number', 'length', 'width']
        read_only_fields = ['id']

class RunwaySerializer(serializers.ModelSerializer):
    class Meta:
        model = Runway
        fields = ['airport', 'runway_number', 'runway_designation', 'length', 'width']
        read_only_fields = ['id']