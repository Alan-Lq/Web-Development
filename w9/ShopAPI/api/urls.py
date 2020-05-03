from django.urls import path, re_path
from api.views import  products, products_id, categories, categories_id, cat_products

urlpatterns = [
    path('products',products),
    path(r'products/<int:id>/',products_id),
    path('categories',categories),
    path(r'categories/<int:id>/',categories_id),
    path(r'categories/<int:id>/products/',cat_products)
]