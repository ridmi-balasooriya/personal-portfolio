from django.shortcuts import render
from django.http import JsonResponse

def hello(request):
    return JsonResponse({'message': 'Hi, React I am Django. Sending You a Message..!'})
