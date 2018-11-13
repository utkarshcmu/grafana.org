
+++
title = "Grafana 5.3.3 and 4.6.5 released with important security fix"
author = "carlb"
date = "2018-11-13"
keywords = ["Grafana", "Release", "Security", "Patch"]
cover_opacity = "0.4"
cover_blur = "1px"
description = "Grafana 5.3.3 and 4.6.5 containing an important security fix released"
categories = ["Grafana", "Release", "Security"]
excerpt = "Today we release Grafana 5.3.3 and 4.6.5 which include an important security fix. We recommend that you install this version "
draft = false
+++

Today we are releasing Grafana 5.3.3 and 4.6.5. These patch releases include an important security fix for all Grafana installations between 4.1.0 and 5.3.2

We also release 5.3.4 at the same time containing some fixes and improvements that we have been holding off for a while to release 5.3.3.


Release 5.3.3 only containing a security fix:

- [Download Grafana 5.3.3](https://grafana.com/grafana/download/5.3.3)
- [Release notes](https://community.grafana.com/t/release-notes-v5-3-x/10244)

Latest stable release in 4.x:

- [Download Grafana 4.6.5](https://grafana.com/grafana/download/4.6.5)
- [Release notes](https://community.grafana.com/t/release-notes-v4-6-x/3179)

Latest stable release in 5.x:

- [Download Grafana 5.3.4](https://grafana.com/grafana/download/5.3.4)
- [Release notes](https://community.grafana.com/t/release-notes-v5-3-x/10244)


### File Exfiltration vulnerability (CVE-2018-19039)

On the 5th of November at we were contacted about a potential security issue that could allow any users with Editor or Admin permissions in Grafana to read any file that the Grafana process can read from the filesystem. Note, that in order to exploit this you would need to be logged in to the system as a legitimate user with Editor or Admin permissions.


#### Affected versions

Grafana releases 4.1.0 through 5.3.2 are affected by this vulnerability.

#### Solutions and mitigations

All installations between 4.1.0 and 5.3.2 that have users that should not have access to the filesystem where Grafana is running must be upgraded as soon as possible. If you can not upgrade, you should set all users to viewers and remove all dashboards that contain text panels.

All instances of [Grafana Cloud](https://grafana.com/cloud) have already been updated to 5.3.3. Grafana Enterprise customers have been provided with fixed binaries ahead of this disclosure.

**CVE ID**:  CVE-2018-19039

### Timeline and postmortem

Here is a detailed timeline starting from when we originally learned of the issue.

5 Nov 2018 16:30 CET
Received details of vulnerability from Sebastian Solnica.
6 Nov 2018 13:00 CET
Confirmed issue.
Started working on a fix for latest stable in a private mirror.
Backported the fix to 4.6.5 in private mirror.
6 Nov 2018 16:00 CET
Received CVE-2018-19039
Started preparing 5.3.3 and 4.6.5 release from private mirror.
6 Nov 2018  17:33 CET
Started rolling out 5.3.3 to Grafana Cloud customers.
Decided on making release public on Tuesday Nov 13 13:00 CET. The date was chosen to give people time to prepare and not run into the weekend. The time was chosen to fall into main work time of the EU and US while still giving Asia a fair chance to react.
7 Nov 2018 22:05 CET
Proactively provided Grafana Enterprise customers with details and download links.
Completed rollout of 5.3.3 to Grafana Cloud.
13 Nov 2018 13:00 CET
Publish of release & this blog post.

### Reporting security Issues

If you think you have found a security vulnerability please send a report to [security@grafana.com](mailto:security@grafana.com). This address can be used for all of
Grafana Labs's open source and commercial products (including but not limited to Grafana, Grafana Cloud, Grafana Enterprise, and grafana.com). We can accept only vulnerability reports at this address. We would prefer if you encrypted your message to us, please use our PGP key. The key fingerprint is

F988 7BEA 027A 049F AE8E  5CAA D125 8932 BE24 C5CA

The key is available from [pgp.mit.edu](https://pgp.mit.edu/pks/lookup?op=get&search=0xF9887BEA027A049FAE8E5CAAD1258932BE24C5CA) by searching for [grafana](https://pgp.mit.edu/pks/lookup?search=grafana&op=index).

### Security Announcements

We maintain a category on the community site named [Security Announcements](https://community.grafana.com/c/security-announcements)
where we will post a summary, remediation, and mitigation details for any patch containing security fixes. You can also subscribe to email updates to this category if you have a grafana.com account and sign on the community site or via track updates via an [RSS feed](https://community.grafana.com/c/security-announcements.rss).

### Conclusion

If you run a Grafana between version 4.1.0 and 5.3.2 with users that should not have access to the filesystem where Grafana is running, please upgrade to Grafana [5.3.3](https://grafana.com/grafana/download/5.3.3) or [4.6.5](https://grafana.com/grafana/download/4.6.5) as soon as possible.

We would like to thank Daniele Costa, NCC Group for reporting this issue.
