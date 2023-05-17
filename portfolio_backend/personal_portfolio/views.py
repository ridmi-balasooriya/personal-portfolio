import json
import os
from django.shortcuts import render
from django.http import JsonResponse

def home(request):

    BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    portfolio_data_file_path = os.path.join(BASE_DIR, 'personal_portfolio/portfolio_data', 'portfolio.json' )

    with open(portfolio_data_file_path) as json_file:
        portfolio = json.load(json_file)

    return JsonResponse({'portfolio': portfolio})
