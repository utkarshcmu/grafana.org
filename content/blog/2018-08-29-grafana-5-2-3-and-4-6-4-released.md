+++
title = "Grafana 5.2.3 and 4.6.4 released with important security fix"
author = "torkel"
date = "2018-08-29"
keywords = ["Grafana", "Release", "Security", "Patch"]
cover_opacity = "0.4"
cover_blur = "1px"
description = "Grafana 5.2.3 and 4.6.4 containing an important security fix released"
categories = ["Grafana", "Release", "Security"]
excerpt = "Today we release Grafana 5.2.3 and 4.6.4 which include an important security fix. We urge everyone using LDAP or OAuth authentication to upgrade immediately."
draft = false
+++

Today we are releasing Grafana 5.2.3 and Grafana 4.6.4. These patch releases includes a very important security fix for all Grafana installations which are configured to use LDAP or OAuth authentication.

Latest stable release in 5.x:

- [Download Grafana 5.2.3](https://grafana.com/grafana/download/5.2.3)
- [Release notes](https://community.grafana.com/t/release-notes-v5-2-x/7894)

Latest stable release in 4.x:

- [Download Grafana 4.6.4](https://grafana.com/grafana/download/4.6.4)
- [Release notes](https://community.grafana.com/t/release-notes-v4-6-x/3179)


## LDAP & OAuth login vulnerability (CVE-2018-558213)

On the 20th of August at 1800 CEST we were contacted about a potential security issue with the “remember me” cookie Grafana sets upon login. The issue targeted users without a local Grafana password (LDAP & OAuth users) and enabled a potential attacker to generate a valid cookie knowing only a username. We immediately recognized the high severity of this vulnerability and quickly developed a patch for 5.x and 4.x.

### Affected versions

Grafana releases 2.0 through 5.2.2 are affected by this vulnerability. All instances
on [Grafana Cloud](https://grafana.com/cloud) have already been updated to 5.2.3.

### Solutions and mitigations

All installations which use the Grafana LDAP or OAuth authentication features must be upgraded as soon as possible. If you cannot upgrade, you should switch authentication mechanisms or put additional protections in front of Grafana such as a reverse proxy.

**CVE ID**: CVE-2018-558213

We would like to thank Sebastian Solnica for reporting this issue.

### Timeline and postmortem

Here is a detailed timeline starting from when we originally learned of the issue. This is the first significant security issue that Grafana Labs has dealt with; we have used this incident as an opportunity to learn from, and will be improving our incident response going forward.

- 20 Aug 2018 1800 CEST
  - Torkel Ödegaard received request via twitter DM for contact details
  - Received details of vulnerability from Sebastian Solnica 1 hour later
- 21 Aug 2018 08:00 CEST
  - Confirmed issue and began developing a fix.
  - Fix required a minor new feature in db migration system so commit message did not mention that it had any security implications.
  - Backported fix to 5.2.x branch
- 22 Aug 2018 11:00 CEST
  - Researched vulnerability disclosure handling
  - Started preparing 5.2.3 release
- 22 Aug 2018 20:33 CEST
  - Got outside counsel on how to handle vulnerability fixes. Learned that it’s best to request CVE, prepare fix in private, and to give non-public heads up to customers, distributions, etc while maintaining strict public embargo until release time.
  - Requested & received CVE ID CVE-2018-558213
  - Started preparations to handle future vulnerabilities better
- 23 Aug 2018
  - Started rolling out 5.2.3 to Grafana Cloud customers
  - Worked on backport of fix for old 4.6.x release branch.
  - Decided on making release public on Wed Aug 29 13:00 CEST. The date was chosen to give people time to prepare and not run into the weekend. The time was chosen to fall into main work time of the EU and US while still giving Asia a fair chance to react.
- 23 Aug 2018 22:05 CEST
  - Proactively contacted Grafana Enterprise customers with details and download links.
  - Completed rollout of 5.2.3 to Grafana Cloud.
- 29 Aug 2018 13:00 CEST
  - Publish of release & this blog post.

## Future considerations

We are not sure if omitting the security nature of the change in the commit message was correct or not. Apache [VULNERABILITY HANDLING](https://www.apache.org/security/committers.html#vulnerability-handling) guidelines state: “*No reference should be made to the commit being related to a security vulnerability*.”

We did do a private release that we circulated beforehand but the fix (and tag of v5.2.3) was then already in the public repo. The ordering here was obviously wrong. If doing a private release before going public, the fix should also stay private.

We are also putting in new processes for submitting and handling security incidents as you can see in the next section.

## Reporting security Issues

If you think you have found a security vulnerability please send a report to [security@grafana.com](mailto:security@grafana.com). This address can be used for all of
Grafana Labs's open source and commercial products (including but not limited to Grafana, Grafana Cloud, Grafana Enterprise, and grafana.com). We can accept only vulnerability reports at this address. We would prefer if you encrypted your message to us, please use our PGP key. The key fingerprint is

<code>F988 7BEA 027A 049F AE8E  5CAA D125 8932 BE24 C5CA</code>

The key is available from [pgp.mit.edu](https://pgp.mit.edu/pks/lookup?op=get&search=0xF9887BEA027A049FAE8E5CAAD1258932BE24C5CA) search for [grafana](https://pgp.mit.edu/pks/lookup?search=grafana&op=index).

## Security Announcements

We have created a new category on the community site named [Security Announcements](https://community.grafana.com/c/security-announcements)
where we will post a summary, remediation, and mitigation details for any patch containing security fixes. You can also subscribe to email updates to this category if you have a grafana.com account and sign on the community site or via track updates via an [RSS feed](https://community.grafana.com/c/security-announcements.rss).

## Conclusion

If you run a Grafana installation which uses LDAP or OAuth please upgrade to Grafana [5.2.3](https://grafana.com/grafana/download/5.2.3) or [4.6.4](https://grafana.com/grafana/download/4.6.4) as soon as possible.




