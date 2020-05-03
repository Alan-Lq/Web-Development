def sum67(nums):
  sum = 0
  b = True
  for i in nums:
    if i==6:
      b=False
    elif i==7 and b==False:
      b=True
    elif b==True:
      sum+=i
  return sum
