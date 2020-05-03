v = int(input())
t = int(input())
n=109
s=v*t
if v>0 :
   print(s%109)
else:
    n=n+s
    while n<0 :
        n+=109
    else:
        print(n)
