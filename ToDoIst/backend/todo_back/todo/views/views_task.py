from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response

from ..serializer import TaskSerializer
from ..models import Task


class TaskViews(generics.ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    filter_backends = (DjangoFilterBackend)


class TaskDetailViews(generics.RetrieveUpdateDestroyAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    lookup_url_kwarg = 'task_id'
