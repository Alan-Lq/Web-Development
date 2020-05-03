from django.db import models
from .Priority import Priority
from .Category import Category
from django.utils import timezone


class Task(models.Model):
    title = models.TextField(null=False, unique=True)
    priority = models.ForeignKey(Priority, default=1, verbose_name='Priority', on_delete=models.CASCADE)
    completed = models.BooleanField(default=False)
    category = models.ForeignKey(Category, default='Без категорий', verbose_name='Category', on_delete=models.CASCADE, related_name='tasks')
    date = models.DateField(default=timezone.now().today)

    class Meta:
        ordering = ["-date"]
