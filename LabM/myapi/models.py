from django.db import models
from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin

class AppUserManager(BaseUserManager):
	def create_user(self, email, password=None):
		if not email:
			raise ValueError('An email is required.')
		if not password:
			raise ValueError('A password is required.')
		email = self.normalize_email(email)
		user = self.model(email=email)
		user.set_password(password)
		user.save()
		return user
	def create_superuser(self, email, password=None):
		if not email:
			raise ValueError('An email is required.')
		if not password:
			raise ValueError('A password is required.')
		user = self.create_user(email, password)
		user.is_superuser = True
		user.save()
		return user


class AppUser(AbstractBaseUser, PermissionsMixin):
	user_id = models.AutoField(primary_key=True)
	email = models.EmailField(max_length=50, unique=True)
	username = models.CharField(max_length=50)
	USERNAME_FIELD = 'email'
	REQUIRED_FIELDS = ['username']
	objects = AppUserManager()
	def __str__(self):
		return self.username


class Floors(models.Model):
	floor_name=models.CharField(max_length=30,unique=True , null=False)
	floor_id=models.AutoField(primary_key=True)
 
 
'''
class FloorPlan(models.Model):
	Floors = models.ForeignKey()
 
'''

class Labs(models.Model):
    lab_name=models.CharField(max_length=30, unique=True , null=False)
    lab_id=models.AutoField(primary_key=True)
    last_updated=models.DateTimeField(auto_now=True)
    lab_assistant=models.ForeignKey(AppUser,on_delete=models.CASCADE)
    lab_floor=models.ForeignKey(Floors,on_delete=models.CASCADE)

class PCs(models.Model):
	status={
		"G":"Green",
		"O":"Orange",
		"R":"Red",
		"B":"Black",
	}
	lab=models.ForeignKey(Labs, on_delete=models.CASCADE)
	assistant=models.ForeignKey(Labs,on_delete=models.CASCADE)
	pc_id=models.AutoField(primary_key=True)
	pc_status=models.CharField(max_length=1,choices=status)
	pc_position=models.IntegerField()
	pc_requirements=models.ForeignKey()
 
class Requirments(models.Model):
	lab=models.ForeignKey(Labs,on_delete=models.CASCADE)
	pc_id=models.ForeignKey(Labs,on_delete=models.CASCADE)
	software=models.CharField(max_length=25)
	version=models.CharField(max_length=20)
	check=models.BooleanField()
	