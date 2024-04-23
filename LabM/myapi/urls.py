from django.urls import path
from . import views

urlpatterns = [
    path('hello-world/', views.hello_world),
    path('',views.homepage)
]