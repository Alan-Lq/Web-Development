from django.db import models

class Priority(models.Model):
    title = models.CharField(max_length=50,unique=True,null=False)
    color = models.CharField(max_length=50,unique=True,null=False)

    class Meta:
        verbose_name_plural = 'Priorities'
