from django.urls import path
from . import views

urlpatterns = [
	path('', views.Farmapp, name='Hola'),
]