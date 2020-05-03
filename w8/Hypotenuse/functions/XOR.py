b= input().split()
def xor(a,b):
   if(a==1 and b==0):
       return 1
   elif(a==0 and b==1):
       return 1
   else:
       return 0

print(xor(int(b[0]),int(b[1])))
