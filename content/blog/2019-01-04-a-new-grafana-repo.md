+++
title = "Moving to packages.grafana.com"
author = "leonard_gram"
draft = true
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

A lot of you run Grafana on Raspberry Pi or other arm-based devices, now you can finally get the packages directly from the repository just like everyone else. Both `armv7` and `arm64` are available.

## Usage

You can find everything you need to know in the documention. 

- [Ubuntu/Debian](http://docs.grafana.org/installation/debian/)
- [Centos/Redhat](http://docs.grafana.org/installation/rpm/)