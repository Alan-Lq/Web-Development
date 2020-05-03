import math
a = int(input())
x=0
for b in range(1, int(math.sqrt(a)), 1):
      if(a%b==0):
            x+=1
print(x)