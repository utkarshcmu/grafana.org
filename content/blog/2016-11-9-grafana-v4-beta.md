+++
title = "Grafana 4.0 Beta Release"
author = "Torkel Ödegaard"
date = "2016-11-09"
keywords = ["Grafana", "Blog", "v4.0", "Beta"]
description = "Grafana 4.0 Beta Release Highlights"
draft = true
+++

## Grafana v4 Beta available

Grafana v4.0 Beta is now [available for download](http://localhost:3002/download/4_0_0-beta1/). As usual
this release contains a ton of minor new features, fixes and improved UX. But on top of the usual new goodies
is is a core new feature: Alerting! Read on below for a detailed description of what's new in Grafana v4!

## Alerting

{{< imgbox max-width="40%" img="/img/docs/v4/alerting.png" caption="Alerting overview" >}}

Alerting in Grafana allows you to attach rules to your graph panels and have grafana-sever continually
evaluate those rules. When the conditions in an alert rule is evaluated to true it will switch
state to `Alerting` and the configured notifications will triggered, an annotation event wll be stored in
Grafana's internal database which is used to visualize alert history in the graph via annotations.

### Rules

### Notifications

### Annotations

### Alert List Panel

## Ad-hoc filter variable

## Breaking changes

## Changelog





