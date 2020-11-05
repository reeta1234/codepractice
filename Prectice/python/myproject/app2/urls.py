from . import views
from django.urls import path

urlpatterns=[
    path('static',views.staticData,name="staticData"),
    path('user',views.user,name="user")
]

