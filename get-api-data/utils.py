import time
import sys

START = time.time()

def progress(index, total):
    """This method prints a progress bar"""
    percent = (100*index)/total
    elapsed = time.time()-START
    try:
        remaining = elapsed*100/percent-elapsed
    except ZeroDivisionError:
        remaining = 999999999999999
    line1 = "--[%-50s] %.2f%% \n"
    line2 = "--Elapsed \t: %.0f s -- (%.0f min) -- (%.2f h)\n"
    line3 = "--Remaining \t: %.0f s -- (%.0f min) -- (%.2f h)"
    up_two_lines = "\033[F\033[F"
    sys.stdout.write('\r')
    sys.stdout.write(line1 % ('='*int((percent/2)), percent))
    sys.stdout.write(line2 % (elapsed, elapsed/60, elapsed/3600))
    sys.stdout.write(line3 % (remaining, remaining/60, remaining/3600))
    sys.stdout.write(up_two_lines)
    sys.stdout.flush()