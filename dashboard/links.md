Clang Scan - https://build.gluster.org/job/clang-scan/lastBuild
Coverity Scan - https://scan.coverity.com/projects/gluster-glusterfs
Line & Func Cov - https://build.gluster.org/job/line-coverage/lastCompletedBuild/Line_20Coverage_20Report/index.html

Clang Scan:
= IMPORTXML("https://build.gluster.org/job/clang-scan/lastBuild","//td")
Coverity:
= IMPORTXML("https://scan.coverity.com/projects/gluster-glusterfs","//dd | //dt")
Line Cov:
= IMPORTXML("https://build.gluster.org/job/line-coverage/lastCompletedBuild/Line_20Coverage_20Report/index.html","//td")

Name	Email-sending
Gluster-Devel	gluster-devel@gluster.org
