b= input().split()


def power(a,b):
   c=1
   for i in range(0,b,1):
       c*=a
   return c

print(power(float(b[0]),int(b[1])))
