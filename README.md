h1 Web Development course based on Angular and Django
***
1)virtualenv env
***
2)env\Scripts\activate.bat
***
3)django-admin startproject hh_back
***
4)pycharm . 
***
5)Открывается pycharm нажимаешь на manage.py , он предупреждает тебя настроить interpreter , нажимаешь на configure interpreter, нажимаешь на гайку в выходящем списке на Add
 В вышедшем окне нажимаешь Existing Environment и указываешь путь до env\Scripts\python.exe
 Нажимаешь ок, открываешь терминал пишешь
 ***
6)pip install django
***
7)python manage.py runserver
***
8)открываешь localhost:8000 и радуешься
***
**Миграция базы данных:**
***
python manage.py makemigrations
***
python manage.py migrate
***
**Консоль для взаимодействия с базой данных:**
***
python manage.py shell
***
from api.models import Company
***
c = Company(1,"Apple")
***
c.save()
