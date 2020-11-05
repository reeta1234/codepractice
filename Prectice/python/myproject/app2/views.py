from django.shortcuts import render
from django.http import JsonResponse
from django.http import HttpResponse
import requests
import json


def staticData(request):
    data = {
        'name': 'Vitor',
        'location': 'Finland',
        'is_active': True,
        'count': 28
    }
    #return JsonResponse(data,safe=False)
    return JsonResponse([1, 2, 3, 4], safe=False)

def user(request):
    res = requests.get("https://jsonplaceholder.typicode.com/posts")
    return HttpResponse(res,content_type="application/json")