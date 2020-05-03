def is_leap(n):
    leap = False
    if (n % 400) == 0:
        leap = True
    elif n % 100 == 0:
        leap = False
    elif n % 4 == 0:
        leap = True
    else:
        leap = False

    return leap


year = int(input())
print
is_leap(year)