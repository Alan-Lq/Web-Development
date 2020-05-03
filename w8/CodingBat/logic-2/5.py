def r(n):
  m = n%10
  if m>=5:
    return ((n//10)+1)*10
  else:
    return n//10*10
def round_sum(a, b, c):
  return r(a)+r(b)+r(c)
  
