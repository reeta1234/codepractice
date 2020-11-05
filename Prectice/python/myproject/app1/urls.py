from django.urls import path
from .views import User,CityList

urlpatterns = [
    path('user',User.as_view(),name="user"),
    path('city',CityList.as_view(),name="city")
]