a = int(input())
b= input().split()
c=0
for i in range(1, a, 1):
    if((int(b[i])>0  and int(b[i-1])>0) or (int(b[i])<0  and int(b[i-1])<0)):
        print("YES")
        c=1
        break
if(c==0):
    print("NO")