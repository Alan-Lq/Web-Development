a = input()
for i in range(0,len(a),1):
    if(ord(a[i])<=ord('Z') and ord(a[i])>=ord('A') or ord(a[i])<=ord('z') and ord(a[i])>=ord('a')  ):
        if(ord(a[i])>ord('Z')):
            b = chr(ord(a[i])-32)
            a = a[:i] + b + a[i+1:]

        else:
            b =  chr(ord(a[i]) + 32)
            a = a[:i] + b + a[i + 1:]
print(a)