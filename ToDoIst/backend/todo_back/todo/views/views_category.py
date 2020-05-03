from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response

from ..serializer import CategorySerializer
from ..models import Category
from ..models import Task


class CategoryView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CategoryDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_url_kwarg = 'category_id'


class CategoryProductView(APIView):

    def get(self, request, category_id):
        try:
            cat = Category.objects.get(id=category_id)
            serializer = CategorySerializer(
                Task.objects.filter(category=cat),
                many=True
            )
            return Response(serializer.data)
        except Exception as e:
            return Response(dict(error=str(e)))

