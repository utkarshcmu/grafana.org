+++
title = "Moving to packages.grafana.com"
author = "leonard_gram"
date = "2019-01-04"
keywords = ["Grafana", "Blog"]
cover_image = "/assets/img/blog/timeshift/timeshift_14.jpg"
cover_opacity = "0.4"
cover_blur = "1px"
description = "Moving our Ubuntu/Debian and Centos/Redhat packages to a new repository that includes both amd64 and arm packages."
categories = ["Grafana"]
excerpt = "To make it even easier for you to get the debian and rpm packages you need we're moving to our own repository. Armv7 and arm64 included."
+++

# Moving to packages.grafana.com

## Introduction

To make it even easier for you to get the debian and rpm packages you need we're moving to our own repository.

The previous repository over at [packagecloud](https://packagecloud.io/grafana/stable) will stop working on the 7th of January 2019.

## Packages for arm

A lot of you run Grafana on Raspberry Pi or other arm-based devices, now you can finally get the packages directly from the repository just like everyone else. Both `armv7` and `arm64` are available if you add the repository according to the instructions below.

## Usage

Either, check the docs, or follow along below.

- [Ubuntu/Debian](http://docs.grafana.org/installation/debian/)
- [Centos/Redhat](http://docs.grafana.org/installation/rpm/)

### Ubuntu/Debian
Trust our GPG key:
```bash
curl https://packages.grafana.com/gpg.key | sudo apt-key add -
```

Create `/etc/apt/sources.list.d/grafana.list`
```bash
deb https://packages.grafana.com/oss/deb stable main
```

#### Install Grafana
```bash
sudo apt-get update
sudo apt-get install grafana
```

### Centos/Redhat

Create `/etc/yum.repos.d/grafana.repo`

```
[grafana]
name=grafana
baseurl=https://packages.grafana.com/oss/rpm
repo_gpgcheck=1
enabled=1
gpgcheck=1
gpgkey=https://packages.grafana.com/gpg.key
sslverify=1
sslcacert=/etc/pki/tls/certs/ca-bundle.crt
```

#### Install Grafana
```bash
yum install grafana
```