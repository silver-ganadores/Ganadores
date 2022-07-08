from django.db import models

class User(models.Model):
	username = models.CharField(max_length = 200)
	email = models.CharField(max_length = 200, null = True, default = "")
	career = models.CharField(max_length = 200, null = True, default = "")

	def __str__(self):
		return self.username

class Parts(models.Model):
	processor = models.CharField(max_length = 200)
	motherboard = models.CharField(max_length = 200) 
	powersupply = models.CharField(max_length = 200) 
	ram = models.CharField(max_length = 200) 
	storage = models.CharField(max_length = 200) 
	fan = models.CharField(max_length = 200) 
	graphicscard = models.CharField(max_length = 200) 
	chassis = models.CharField(max_length = 200) 

class Build(models.Model):
	builder_info = models.ForeignKey(User, on_delete = models.CASCADE)
	computer_parts = models.ForeignKey(Parts, on_delete = models.CASCADE)
	purpose = models.CharField(max_length=200, blank = True, null = True)
	price = models.IntegerField(blank = True, null = True)
	date = models.DateField(auto_now_add = True)
