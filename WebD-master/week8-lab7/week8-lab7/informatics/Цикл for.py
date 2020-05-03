
""" # Задача A
a = int(input())
b = int(input())
 s = ''
 
while a<=b:
    if a%2==0: 
        s = s + str(a) + " "
    a += 1
 
print(s)
"""



""" # Задача C
from math import sqrt

a = int(input())
b = int(input())
c = [ x for x in range(a, b+1) if int(sqrt(x)) == sqrt(x) ]
print(c)
"""



""" # Задача H
x=int(input())

for i in range(1,x+1):

 if x%i==0:
     print(i)
"""

""" # Задача I
x=int(input())
d_int = 0
for i in range(1,x+1):
    if(x%i==0):
        d_int+=1
print(d_int)     
"""

"""  # Задача J
n = int(input())  
s_int = 0   
for i in range(1,n+1):      
      
      s_int=i+s_int   
     
      print(s_int)
"""

"""  # Задача K
n = int(input())
sum = 0
for i in range(n):
    sum += int(input())
print(sum)
"""

"""  # Задача М
number_zeroes = 0
for i in range(int(input())):
    if int(input()) == 0:
        num_zeroes += 1
print(num_zeroes)
"""






