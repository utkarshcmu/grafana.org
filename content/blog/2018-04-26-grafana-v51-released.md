+++
title = "Grafana v5.1 Released"
author = "daniellee"
date = "2018-04-26"
keywords = ["Grafana", "Blog", "v5.1", "Stable", "Release", "Download"]
cover_opacity = "0.4"
cover_blur = "1px"
description = "Grafana 5.1 Stable Release"
categories = ["Release", "Grafana"]
+++

# v5.1 Stable Release

The recent 5.0 major release contained a lot of new features, so the Grafana 5.1 release is focused on smoothing out some rough edges and iterating over some of the new features.

<a href="https://grafana.com/grafana/download/?utm_source=blog&utm_campaign=v51" target="_blank" class="btn btn--primary">Download Grafana 5.1 Now</a>

## Release Highlights

There are two new features included, Heatmap Support for Prometheus and a new core data source for Microsoft SQL Server.

Another highlight is the revamp of the Grafana docker container that makes it easier to run and control but be aware there is a breaking change to file permissions that will affect existing containers with data volumes.

We got tons of useful improvement suggestions, bug reports and Pull Requests from our amazing community. Thank you all! See the [full changelog](https://github.com/grafana/grafana/blob/master/CHANGELOG.md) for more details.

* [Improved scrolling experience]({{< relref "#improved-scrolling-experience" >}})
* [Improved docker image]({{< relref "#improved-docker-image" >}}) with a breaking change!
* [Heatmap support for Prometheus]({{< relref "#heatmap-support-for-prometheus" >}})
* [Microsoft SQL Server]({{< relref "#microsoft-sql-server" >}}) as metric & table datasource!
* [Copy and paste for panels]({{< relref "#adding-new-panels-to-dashboards" >}}) and other improvements when adding panels to dashboards
* [Align Zero-Line for Right and Left Y-axes]({{< relref "#align-zero-line-for-right-and-left-y-axes" >}}) in the Graph Panel

## Improved Scrolling Experience

In Grafana v5.0 we introduced a new scrollbar component. Unfortunately this introduced a lot of issues and in some scenarios removed
the native scrolling functionality. Grafana v5.1 ships with a native scrollbar for all pages together with a scrollbar component for
the dashboard grid and panels that does not override the native scrolling functionality. We hope that these changes and improvements should
make the Grafana user experience much better!

## Improved Docker Image

Grafana v5.1 brings an improved official docker image which should make it easier to run and use the Grafana docker image and at the same time give more control to the user how to use/run it.

We have switched the id of the grafana user running Grafana inside a docker container. Unfortunately this means that files created prior to 5.1 will not have the correct permissions for later versions and thereby introduces a breaking change. We made this change so that it would be easier for you to control what user Grafana is executed as.

Please read the [updated documentation](http://docs.grafana.org/installation/docker/#migration-from-a-previous-version-of-the-docker-container-to-5-1-or-later) which includes migration instructions and more information.

## Heatmap Support for Prometheus

{{< docs-imagebox img="/img/docs/v51/prometheus_heatmap.png" max-width="800px" class="docs-image--right" >}}

The Prometheus datasource now supports transforming Prometheus histograms to the heatmap panel. The Prometheus histogram is a powerful feature, and we're
really happy to finally allow our users to render those as heatmaps. The [Heatmap panel documentation](http://docs.grafana.org/features/panels/heatmap/#pre-bucketed-data)
contains more information on how to use it.

Another improvement is that the Prometheus query editor now supports autocomplete for template variables. More information in the [Prometheus data source documentation](http://docs.grafana.org/features/datasources/prometheus/).

<div class="clearfix"></div>

## Microsoft SQL Server

{{< docs-imagebox img="/img/docs/v51/mssql_query_editor_showcase.png"  max-width= "800px" class="docs-image--right" >}}

Grafana v5.1 now ships with a built-in Microsoft SQL Server (MSSQL) data source plugin that allows you to query and visualize data from any
Microsoft SQL Server 2005 or newer, including Microsoft Azure SQL Database. Do you have metric or log data in MSSQL? You can now visualize
that data and define alert rules on it as with any of Grafana's other core datasources.

The [using Microsoft SQL Server in Grafana documentation](http://docs.grafana.org/features/datasources/mssql/) has more detailed information on how to get started.

<div class="clearfix"></div>

### Adding New Panels to Dashboards

The control for adding new panels to dashboards now includes panel search and it is also now possible to copy and paste panels between dashboards.

By copying a panel in a dashboard it will be displayed in the `Paste` tab. When you switch to a new dashboard you can paste the
copied panel.

{{< docs-imagebox img="/img/docs/v51/dashboard_add_panel.png"  max-width= "800px" class="docs-image--right" >}}

{{< docs-imagebox img="/img/docs/v51/dashboard_panel_copy.png"  max-width= "300px" >}}

<div class="clearfix"></div>

### Align Zero-Line for Right and Left Y-axes

The [feature request](https://github.com/grafana/grafana/issues/1271) to align the zero-line for right and left Y-axes on the Graph panel is more than 3 years old. It has finally been implemented - more information in the [Graph panel documentation](http://docs.grafana.org/features/panels/graph/).

## Other Highlights

- Table Panel: New enhancements includes support for mapping a numeric value/range to text and additional units. More information in the [Table panel documentation](http://docs.grafana.org/features/panels/table_panel/#string).
- New variable interpolation syntax: We now support a new option for rendering variables that gives the user full control of how the value(s) should be rendered. More details in the in the [Variables documentation](http://docs.grafana.org/reference/templating/#advanced-formatting-options).
- Improved workflow for provisioned dashboards. More details [here](http://docs.grafana.org/v5.1/guides/whats-new-in-v5-1/#improved-workflow-for-provisioned-dashboards).

<div class="clearfix"></div>

## Changelog

Checkout the [CHANGELOG.md](https://github.com/grafana/grafana/blob/master/CHANGELOG.md) file for a complete list
of new features, changes, and bug fixes.
