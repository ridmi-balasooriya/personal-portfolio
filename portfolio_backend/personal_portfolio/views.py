import json
import os
from django.middleware.csrf import get_token
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from django.http import JsonResponse


def home(request):

    BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    portfolio_data_file_path = os.path.join(BASE_DIR, 'personal_portfolio/portfolio_data', 'portfolio.json' )

    with open(portfolio_data_file_path) as json_file:
        portfolio = json.load(json_file)

    return JsonResponse({'portfolio': portfolio})

def get_csrf_token(request):
    token = get_token(request)
    return JsonResponse({'csrf_token': token})

@csrf_exempt
def sendmessage(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        yourmessage = request.POST.get('message')
        csrftoken = request.POST.get('csrftoken')
        message = f"Thank you for sending a message {name}. I will reach to you soon.!"
        return JsonResponse({'message': message})
    else:
        return JsonResponse({'error': 'Invalid Request Method'}, status = 400)
