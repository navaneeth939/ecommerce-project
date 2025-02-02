from django.urls import path
from .import views

urlpatterns = [
    path('register',views.register,name='register'),
    path('login',views.user_login,name='login'),
    path('logout',views.user_logout,name='logout'),
    path('home',views.home,name='home'),
    path('custemerd',views.custemerd,name='custemerd'),
    path('onlywatches/', views.onlywatches, name='onlywatches'),
    path('contactus',views.contactus,name='contactus'),
    path('iphones',views.iphones,name='iphones'),
    path('Accesseries',views.Accesseries,name='Accesseries'),
    path('macbook',views.macbook,name='macbook'),
    path('airpodmax',views.airpodmax,name='airpodmax')
]