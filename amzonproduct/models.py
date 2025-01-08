from django.db import models
from django.contrib.auth.models import User

class Products(models.Model):
    name = models.CharField(max_length=220)
    price = models.IntegerField()
    quandity = models.IntegerField()
    photo = models.ImageField(upload_to='image/')

    def __str__(self):
        return(self.name)
    

class custemdetails(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE,null=True)
    address = models.CharField(max_length=200)
    pincode = models.IntegerField()
    disctict = models.CharField(max_length=200)
    city = models.CharField(max_length=200)


