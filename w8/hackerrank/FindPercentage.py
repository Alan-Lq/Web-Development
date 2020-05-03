n = int(input())
a=[]
def avg(b):
    c=0
    for i in range(1,4,1):
       c+=float(b[i])
    return c/3

for i in range(0,n,1):
    a.append(input().split())
name=input()
for i in range(0,n,1):
    b= a[i]
    if(b[0]==name):
        print(round(avg(b), 2))