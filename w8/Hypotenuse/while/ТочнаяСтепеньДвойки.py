a = int(input())
i=1
b = 0
while 1:
    if(i==a):
        print("YES")
        b=1
        break
    elif i>a:
        break
    i*=2
if(b==0):
    print("NO")

