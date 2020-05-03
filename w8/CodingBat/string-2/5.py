def end_other(a, b):
  a = a.lower()
  b = b.lower()
  if len(a)==len(b) and a==b:
    return True
  elif len(a)>len(b):
    if a[len(a)-len(b):]==b:
      return True
    else:
      return False
  elif len(a)<len(b):
    if b[len(b)-len(a):]==a:
      return True
    else:
      return False
  else:
    return False
