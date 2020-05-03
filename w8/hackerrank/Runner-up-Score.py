n = int(input())
arr = list(map(int, input().split()))
max=-10000
max2=-10000
for i in range(0,n,1):
    if(arr[i]>max):
        max2=max
        max=arr[i]
    if(arr[i]<max and arr[i]>max2):
        max2=arr[i]
print(max2)