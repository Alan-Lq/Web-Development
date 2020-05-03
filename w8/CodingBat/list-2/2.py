def big_diff(nums):
  mi = nums[0]
  ma = nums[0]
  for i in nums:
    if i<mi:
      mi = i
    if i>ma:
      ma = i
  return ma-mi
