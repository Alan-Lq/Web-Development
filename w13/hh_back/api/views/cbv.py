from django.http.response import JsonResponse
from api.models import Company, Vacancy
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from api.serializers import CompanySerializer, VacancySerializer


class CompanyDetailAPIView(APIView):
  #  permission_classes = (IsAuthenticated,)
    def get_object(self, id):
        try:
            return Company.objects.get(id=id)
        except Company.DoesNotExist as e:
            return Response({'error': str(e)})

    def get(self, request, id):
        company = self.get_object(id)
        serializer = CompanySerializer(company)
        return Response(serializer.data)

    def put(self, request, id):
        company = self.get_object(id)
        serializer = CompanySerializer(instance=company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({'error': serializer.errors})

    def delete(self, request, id):
        company = self.get_object(id)
        company.delete()

        return Response({'deleted': True})
class VacancyDetailAPIView(APIView):
    def get_object(self, id):
        try:
            return Vacancy.objects.get(id=id)
        except Vacancy.DoesNotExist as e:
            return Response({'error': str(e)})

    def get(self, request, id):
        vacancy = self.get_object(id)
        serializer = VacancySerializer(vacancy)
        return Response(serializer.data)

    def put(self, request, id):
        vacancy = self.get_object(id)
        serializer = VacancySerializer(instance=vacancy, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({'error': serializer.errors})

    def delete(self, request, id):
        vacancy = self.get_object(id)
        vacancy.delete()

        return Response({'deleted': True})

