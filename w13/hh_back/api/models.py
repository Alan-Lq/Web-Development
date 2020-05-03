from django.db import models

class Company(models.Model):
    name=models.CharField(max_length=200)
    description=models.TextField(default='Some company')
    city=models.CharField(max_length=200, default='Redcliff')
    address=models.CharField(max_length=200,default='Wall street 56/4')

    def to_json(self):
        return {
            'id':self.id,
            'name':self.name,
            'description':self.description,
            'city':self.city,
            'address':self.address
        }

class Vacancy(models.Model):
    name=models.CharField(max_length=200)
    salary=models.FloatField(default=1200)
    description=models.TextField(default='some vacancy')
    company = models.ForeignKey(Company, on_delete=models.CASCADE, default="Apple",related_name='vacancies')
    def to_json(self):
        return {
            'id':self.id,
            'name':self.name,
            'description':self.description,
            'salary':self.salary,
            'company':self.company.__str__()
        }