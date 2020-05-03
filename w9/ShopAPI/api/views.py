from django.shortcuts import render
from django.http.response import JsonResponse
from django.http.response import HttpResponse
from api.models import Product, Category

def products(request):
    products_arr = Product.objects.all()
    products_json = [product.to_json() for product in products_arr]
    return JsonResponse(products_json, safe=False)
def products_id(request, id):
    try:
        product = Product.objects.get(id=id)
    except Product.DoesNotExist as e:
        return JsonResponse({'error':str(e)})
    return JsonResponse(product.to_json(),safe=False)
def categories(request):
    categories_arr = Category.objects.all()
    categories_json = [category.to_json() for category in categories_arr]
    return JsonResponse(categories_json,safe=False)
def categories_id(request,id):
    try:
        category= Category.objects.get(id=id)
    except Category.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    return JsonResponse(category.to_json(), safe=False)
def cat_products(request,id):
    products_arr = Product.objects.filter(category_id=id)
    products_json = [product.to_json() for product in products_arr]
    return JsonResponse(products_json,safe=False)