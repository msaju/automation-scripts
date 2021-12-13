Please follow the below steps for the dashboard script setup in google spreasheet.

1. create a new spreadsheet and name it as Dashboard
2. Create a new sheet and name it as clang-scan
3. Put this code into the first line of the clang-scan sheet -[ = IMPORTXML("https://build.gluster.org/job/clang-scan/lastBuild","//td") ]
4. Create a new sheet and name it as coverity
5. Put this code into the first line of the coverity sheet - [ = IMPORTXML("https://scan.coverity.com/projects/gluster-glusterfs","//dd | //dt") ]
6. Create a new sheet and name it as line-cov
7. Put this code into the first line of the line-cov sheet - [ = IMPORTXML("https://build.gluster.org/job/line-coverage/lastCompletedBuild/Line_20Coverage_20Report/index.html","//td") ]
8. Create a new sheet and name it as history
9. Add these heading into the first row - "Date,Clang Scan,Coverity,Line Coverage,Function Coverage" A1:E1
10. Create a new sheet and name it as email
11. Add these headings into the first row - "Name,Email-sending"
12. Add these data into the second row - "Gluster-Devel,gluster-devel@gluster.org"
13. Create a new sheet and name it as Dashboard
14. Add text "Gluster Code Metrics" into B1
15. Add code "=TODAY()" into B2
16. Add text "Metrics" into B5
17. Add text "Values" into C5
18. Add text "Clang Scan,Coverity,Line Cov,Func Cov" into B6:B9
19. Go-to Menu=>Extensions->Apps Script
20. Add the files in the current directory - "dashboard"
