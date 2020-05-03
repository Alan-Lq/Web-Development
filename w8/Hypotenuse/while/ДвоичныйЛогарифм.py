a = int(input())
i=1
b=0
while b<a:
    b=1
    for с in range(0,i,1):
        b*=2
    i+=1
if(a==1):
    print(0)
else:
    print(i-1)
