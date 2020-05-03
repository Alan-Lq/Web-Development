def array_front9(nums):
  if len(nums)<4:
    for i in nums:
      if i==9:
        return True
    return False
  else:
    for i in range(4):
      if nums[i]==9:
        return True
    return False
