import math
a = int(input())
b= int(input())
for a in range(a, b + 1, 1):
      if(math.sqrt(a).is_integer()):
            print(a)