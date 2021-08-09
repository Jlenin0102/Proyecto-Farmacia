from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def Farmapp(request):
	return HttpResponse("Hola mundo")

def index(request):
	return render(request, 'HTML/index.html')
	pass