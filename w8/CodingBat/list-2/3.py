def centered_average(nums):
  x = len(nums)-1
  nums.sort()
  avg = 0
  for i in range(1,x):
    avg+=nums[i]
  return avg/(len(nums)-2)
