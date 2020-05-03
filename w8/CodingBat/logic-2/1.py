def make_bricks(small, big, goal):
  if goal%5>small:
    return False
  small -= goal%5
  goal -= goal%5
  small = (small//5+big)*5
  if goal<=small:
    return True
  return False
