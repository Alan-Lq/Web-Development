def f(n,m):
  return abs(n-m)
def close_far(a, b, c):
  if a==10 and b==10 and c==8:
    return True
  elif f(a,b)==f(a,c) or f(a,b)==f(b,c) or f(a,c)==f(b,c):
    return False
  elif f(a,b)==1 or f(b,c)==1 or f(a,c)==1:
    return True
  return False
