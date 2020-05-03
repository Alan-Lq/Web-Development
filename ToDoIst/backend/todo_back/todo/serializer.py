from rest_framework import serializers
from .models import Category, Task, Priority


class CategorySerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)

    class Meta:
        model = Category
        fields = ['id', 'title']


class PrioritySerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)

    class Meta:
        model = Priority
        fields = ['id', 'title', 'color']


class TaskSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    category = CategorySerializer(read_only=True)
    category_id = serializers.IntegerField(write_only=True)
    priority = PrioritySerializer(read_only=True)
    priority_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = Task
        fields = ['id', 'title', 'completed', 'date', 'priority', 'priority_id', 'category', 'category_id']


