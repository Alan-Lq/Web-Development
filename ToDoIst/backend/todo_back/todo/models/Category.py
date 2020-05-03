from django.db import models


class Category(models.Model):
    title = models.CharField(max_length=100, null=False, unique=True)

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

    def __str__(self):
        return self.title


