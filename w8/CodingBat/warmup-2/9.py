def string_match(a, b):
  cnt = 0
  m = min(len(a),len(b))
  for i in range(m-1):
    if a[i]==b[i] and a[i+1]==b[i+1]:
      cnt+=1
  return cnt