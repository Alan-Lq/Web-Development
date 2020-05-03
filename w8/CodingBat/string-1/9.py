def combo_string(a, b):
  m = min(len(a),len(b))
  if len(a)==m:
    return a+b+a
  else:
    return b+a+b
