a = int(input())
b= input().split()
c=0
for i in range(0, a, 1):
    if(int(b[i])>0):
        c+=1
print(c)