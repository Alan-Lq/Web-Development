def alarm_clock(day, vacation):
  if vacation==True:
    if day==0 or day==6:
      return "off"
    else:
      return "10:00"
  else:
    if day==0 or day==6:
      return "10:00"
    else:
      return "7:00"
