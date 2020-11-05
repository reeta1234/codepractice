from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from django.views import View
from .models import Country,City
import requests
import json

class User(View):
    def get(self,request):
        res = requests.get("https://jsonplaceholder.typicode.com/posts")
        return JsonResponse(res.json(),safe=False)

    def post(self,request):
        pass

class CityList(View):
    def get(self,request):
        res = City.objects.all()[0:5]
        return HttpResponse(res,content_type="application/json")