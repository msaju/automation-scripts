SpreadSheet Starting Lines:
=TODAY()-7
=A1-WEEKDAY(TODAY(),2)+1 #Getting start of the week
=TEXT(A2,"yyyy-mm-dd") #converting date to text for url concatenation
=CONCAT("https://github.com/gluster/glusterfs/pulls?q=is%3Apr+is%3Amerged+closed%3A%3E",A3)
=CONCAT(A4,"+")


