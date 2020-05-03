
from django.http.response import JsonResponse
from django.http.response import HttpResponse
from api.models import Company, Vacancy

def companies(request):
    companies_arr = Company.objects.all()
    companies_json = [company.to_json() for company in companies_arr]
    return JsonResponse(companies_json, safe=False)
def companies_id(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error':str(e)})
    return JsonResponse(company.to_json(),safe=False)
def vacancies(request):
    vacancies_arr = Vacancy.objects.all()
    vacancies_json = [vacancy.to_json() for vacancy in vacancies_arr]
    return JsonResponse(vacancies_json,safe=False)
def vacancies_id(request,id):
    try:
        vacancy= Vacancy.objects.get(id=id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    return JsonResponse(vacancy.to_json(), safe=False)
def comp_vacancies(request,id):
    vacancies_arr = Vacancy.objects.filter(company=id)
    vacancies_json = [vacancy.to_json() for vacancy in vacancies_arr]
    return JsonResponse(vacancies_json,safe=False)
def top_ten(request):
    vacancies_arr = Vacancy.objects.all().order_by("-salary")[:10]
    vacancies_json = [vacancy.to_json() for vacancy in vacancies_arr]
    return JsonResponse(vacancies_json,safe=False)
