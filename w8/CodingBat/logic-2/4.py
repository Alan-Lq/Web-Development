def no_teen_sum(a, b, c):
  sum = 0
  if a==15 or a==16:
    sum+=a
  if b==15 or b==16:
    sum+=b
  if c==15 or c==16:
    sum+=c
  if a<13 or a>19:
    sum+=a
  if b<13 or b>19:
    sum+=b
  if c<13 or c>19:
    sum+=c
  return sum
    
