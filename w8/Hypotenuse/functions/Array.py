a = int(input())
arr = input().split()
printed = False
for i in range(0,len(arr)-1,1):
    if(int(arr[i])>0 and int(arr[i+1])>0):
        print("YES")
        printed=True
        break
    elif(int(arr[i])<0 and int(arr[i+1])<0):
        print("YES")
        printed = True
        break
if(printed==False):
    print("NO")