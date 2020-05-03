from django.db import models

class Category(models.Model):
    name=models.CharField(max_length=200)
    def to_json(self):
        return {
            'id':self.id,
            'name':self.name
        }

class Product(models.Model):
    name=models.CharField(max_length=200)
    price=models.FloatField()
    description=models.TextField()
    count=models.IntegerField()
    category_id = models.ForeignKey(Category, on_delete=models.DO_NOTHING, default=1)
    def to_json(self):
        return {
            'id':self.id,
            'name':self.name,
            'description':self.description,
            'price':self.price,
            'count':self.count,
            'category_id':self.category_id.__str__()
        }
