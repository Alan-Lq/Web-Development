def sum13(nums):
  sum = 0
  nums.append(0)
  if len(nums)==0:
    return sum
  for i in range(len(nums)-1):
    if nums[i-1]==13:
      sum-=13
    else:
      sum+=nums[i]
  if nums[len(nums)-2]==13:
    sum-=13
  if sum==-13:
    return 0
  return sum
