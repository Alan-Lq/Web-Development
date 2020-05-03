def xyz_there(str):
  s = str[0:1]
  for i in range(1,len(str)):
    if str[i-1]=='.':
      ss=''
    else:
      s+=str[i]
  return "xyz" in s
