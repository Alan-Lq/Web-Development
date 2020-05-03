def make_chocolate(small, big, goal):
  g = goal//5
  if g>=big:
    goal -= big*5
    if small<goal:
      return -1
    else:
      return goal
  else:
    goal -= goal//5*5
    if goal>small:
      return -1
    else:
      return goal