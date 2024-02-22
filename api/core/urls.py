from django.urls import path, include
from rest_framework.routers import DefaultRouter
from core.views import AirlineViewSet, AirportViewSet, RunwayViewSet, FlightViewSet

router = DefaultRouter()
router.register(r'airports', AirportViewSet)
router.register(r'airlines', AirlineViewSet)
router.register(r'flights', FlightViewSet)
router.register(r'runways', RunwayViewSet)

urlpatterns = [
    path('', include(router.urls))
]


