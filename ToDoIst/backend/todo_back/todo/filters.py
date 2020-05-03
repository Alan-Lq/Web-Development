from django_filters import rest_framework as filters

from .models import *

class TaskFilter(filters.FilterSet):
    id = filters.NumberFilter(lookup_expr='exact')
    title = filters.CharFilter(lookup_expr='contains')
    completed = filters.BooleanFilter(lookup_expr='exact')
    category = filters.NumberFilter(lookup_expr='exact')
    priority = [
        filters.CharFilter(lookup_expr='exact')
    ]

    class Meta:
        model = Task
        fields = ['title', 'completed', 'id', 'category', 'priority']