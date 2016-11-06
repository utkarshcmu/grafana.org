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

<div class="clearfix"></div>

### Rules

{{< imgbox max-width="40%" img="/img/docs/v4/alerting_conditions.png" caption="Alerting Conditions" >}}

And alert rule is added to graph panel and allows you to specify a name for the rule, how frequently
it should be evaluated and a series of conditions that all need to be true for the alert rule
to fire.

Currently the only condition type that exists is a `Query` condition that allowes you to
specify a query letter, time range and an aggregation function. The letter referes to
a query you already have added in the **Metrics** tab. The result from the
query and the aggregation function is a single value that is then used in the threshold check.

We plan to add other condition types in the future, like `Other Alert`, where you can include the state
of another alert in your conditions, and `Time Of Day`.

### Notifications

{{< imgbox max-width="40%" img="/img/docs/v4/slack_notification.png" caption="Alerting Slack Notification" >}}

Alerting would not be very useful if there was no way to send notiications when rules trigger and change state. You
can setup notifications of different types, like `Slack`, `Email`, `Webhook`. The notifications can then
be added your alert rules. If you have configured an external image store in the grafana.ini config file
(s3 and webdav options available) you can get very rich notifications with an image of the graph and the metric
values all included in the notification.

### Annotations

Alert state changes are recorded in a new annotation store that is built into Grafana. This store
currently only supports storing annotations in Grafana's own internal database (mysql, postgres or sqlite).
The Grafana annotation storage is currently only used for alert state changes but we hope to add the ability for users
to add graph comments in the form of annotations directly from within Grafana in a future release.

### Alert List Panel

{{< imgbox max-width="40%" img="/img/docs/v4/alert_list_panel.png" caption="Alert List Panel" >}}

This new panel allows you to show alert rules or a history of alert rule state changes. You can filter based on states your
interested in. Very useful panel for overview style dashboards.

## Ad-hoc filter variable

## Breaking changes

## Changelog





