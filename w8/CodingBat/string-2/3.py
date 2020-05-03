def cat_dog(str):
  cnt1 = 0
  cnt2 = 0
  for i in range(len(str)-2):
    if str[i:i+3]=="cat":
      cnt1+=1
    elif str[i:i+3]=="dog":
      cnt2+=1
  if cnt1==cnt2:
    return True
  else:
    return False
      