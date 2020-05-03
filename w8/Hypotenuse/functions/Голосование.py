b= input().split()
def election(a,b,c):
  d=0
  if(a==0):
      d+=1
  if(b==0):
      d+=1
  if(c==0):
      d+=1
  if(d>1):
      return 0
  else:
      return 1

print(election(int(b[0]),int(b[1]),int(b[2]) ))
