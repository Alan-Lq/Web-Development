from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response

from ..serializer import PrioritySerializer
from ..models import Priority


class PriorityViews(APIView):

    def get(self, request):
        serializer = PrioritySerializer(Priority.objects.all(), many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = PrioritySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.error_messages, status=status.HTTP_400_BAD_REQUEST)


class PriorityDetailView(APIView):

    def get_object(self, priority_id):
        try:
            return Priority.objects.get(id=priority_id)
        except Exception as e:
            return Response(dict(error=str(e)))

    def get(self, request, priority_id):
        c = self.get_object(priority_id)
        serializer = PrioritySerializer(c)
        return Response(serializer.data)

    def put(self, request, priority_id):
        c = self.get_object(priority_id)
        serializer = PrioritySerializer(c, request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.error_messages, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, priority_id):
        c = self.get_object(priority_id)
        c.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
