n = int(input())
m= int(input())
if(n%2==0):
    for n in range(n, m+1, 2):
      print(n)
else:
     n=n+1
     for n in range(n, m+1, 2):
         print(n)