'''#аккаунт гитхаб

'''

"""  #Say "Hello, World!" With Python
print("Hello, World!")
"""

"""  #Python If-Else
n = int(input())

if n%2!=0:
    print("Weird")
if n%2==0 and 2<n<5:
    print("Not Weird")
if n%2==0 and 6<n<=20:
    print("Weird")
if n%2==0 and n>20:
    print("Not Weird")        
"""

""" #Arithmetic Operators
a = int(input())
b = int(input())

print(a+b)
print(a-b)
print(a*b)
"""

""" #Python: Division
a = int(input())
b = int(input())

print(a//b)
print(float(a/b))
"""

""" #Loops
n=int(input())
for i in range(n):
 print(i**2)
"""

""" #Write a function
def is_leap(year):
    leap = False
    if year % 4 == 0:
        if year % 100 == 0:
            if year % 400 == 0:
                return True
            return False
        return True
    else:
        return False

    return leap

year = int(input())
print(is_leap(year))
"""

""" # Print Function
if __name__ == '__main__':
    n = int(input())
  from __future__ import print_function
print(*range(1, input() + 1), sep="")  
"""

""" # Find the Runner-Up Score!
if __name__ == '__main__':
    n = int(input())
  

  
nums = map(int, input().split())    
print(sorted(list(set(nums)))[-2])
"""


























