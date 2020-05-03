a = int(input())
b= input().split()
c=0
for i in range(0, int(a/2), 1):
    x = b[i]
    b[i] = b[len(b)-1-i]
    b[len(b) - 1 - i] = x

for i in b: print(i, end = " ")
