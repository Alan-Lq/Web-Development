from django.http.response import JsonResponse
from rest_framework.decorators import api_view
from api.models import Company, Vacancy
from rest_framework import status
from rest_framework.response import Response
from api.serializers import CompanySerializer, VacancySerializer,CompanyWithVacancySerializer

@api_view(['GET', 'POST'])
def company_list(request):
    if request.method == 'GET':
        categories = Company.objects.all()
        serializer = CompanyWithVacancySerializer(categories, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = CompanyWithVacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': serializer.errors},
                        status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET', 'POST'])
def vacancy_list(request):
    if request.method == 'GET':
        categories = Vacancy.objects.all()
        serializer = VacancySerializer(categories, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': serializer.errors},
                        status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET'])
def top_ten(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all().order_by("-salary")[:10]
        serializer = VacancySerializer(vacancies, many=True)

        return Response(serializer.data)

@api_view(['GET'])
def comp_vacancies(request,id):
    if request.method == 'GET':
        vacancies = Vacancy.objects.filter(company=id)
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)




