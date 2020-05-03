import math
a = int(input())
i=1
while i<=a:
    if(math.sqrt(i).is_integer()):
        print(i)
    i+=1
