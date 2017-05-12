+++
title = "Grafana 4.3 Beta Release"
author = "daniellee"
date = "2017-05-12"
keywords = ["Grafana", "Blog", "v4.3", "Beta"]
cover_image = "/assets/img/blog/v4/heatmap.JPG"
description = "Grafana 4.3 Beta Release Highlights"
draft = true
+++

## Grafana v4.3 Beta

Grafana v4.3 Beta is now [available for download](https://grafana.com/grafana/download/4.3.0-beta1).

This release contains some exciting new highlights - the [Heatmap Panel](http://docs.grafana.org/features/panels/heatmap/) and the alpha [MySQL Data Source](http://docs.grafana.org/features/datasources/mysql/) just to name a few. Grafana 4.3 beta also includes lots of small fixes and improvements, most of them contributed by our fantastic community!

Try out [the Heatmap Panel and MySQL Data Source Demo](http://play.grafana.org/dashboard/db/new-features-in-v4-3?orgId=1) on the Grafana Play site.

![](/img/docs/v43/heatmap_panel.png)

## Histogram Support

A Histogram is a kind of bar chart that groups numbers into ranges, often called buckets or bins. Taller bars show that more data falls in that range.

The Graph Panel now supports Histograms.

![](/img/docs/v43/heatmap_histogram.png)

## Histogram Aggregation Support for Elasticsearch

Elasticsearch is the only supported data source that can return pre-bucketed data (data that is already grouped into ranges). With other data sources there is a risk of returning inaccurate data in a histogram due to using already aggregated data rather than raw data. This release adds support for Elasticsearch pre-bucketed data that can be visualized with the new [Heatmap Panel](http://docs.grafana.org/features/panels/heatmap/).

## Heatmap Panel

The Histogram support in the Graph Panel does not show changes over time - it aggregates all the data together for the chosen time range. To visualize a histogram over time, we have built a new [Heatmap Panel](http://docs.grafana.org/features/panels/heatmap/).

Every column in a Heatmap is a histogram snapshot. Instead of visualizing higher values with higher bars, a heatmap visualizes higher values with color. The histogram shown above is equivalent to one column in the heatmap shown below.

![](/img/docs/v43/heatmap_histogram_over_time.png)

## MySQL Data Source - Alpha Release

4.3 includes a [new core data source for MySQL](http://docs.grafana.org/features/datasources/mysql/). The query result can be returned in the Time Series format or the Table Data format allowing it be used with the Graph Panel, Table Panel and SingleStat Panel.

This is an alpha release of the [MySQL Data Source](http://docs.grafana.org/features/datasources/mysql/). It is still in an early phase of development and we will be making lots of improvements. So please try it out and let us know what you think on [twitter](https://twitter.com/intent/tweet?text=.%40grafana&source=4_3_beta_blog&related=blog) or on our [community forum](https://community.grafana.com/c/releases). Is this a feature that you would use? How can we make it better?

**The query editor can show the generated and interpolated SQL that is sent to the MySQL server.**

![](/img/docs/v43/mysql_table_query.png)

**The query editor will also show any errors that resulted from running the query (very useful when you have a syntax error!).**

![](/img/docs/v43/mysql_query_error.png)

## Health Check Endpoint

Now you can monitor the monitoring with the Health Check Endpoint! The new `/api/health` endpoint returns HTTP 200 OK if everything is up and HTTP 503 Error if the Grafana database cannot be pinged.

## Lazy Load Panels

Grafana now delays loading panels until they become visible (scrolled into view). This means panels out of view are not sending requests thereby reducing the load on your time series database.

## Prometheus - Table Data (column per label)

The Prometheus data source now supports the Table Data format by automatically assigning a column to a label. This makes it really easy to browse data in the table panel.

![](/img/docs/v43/prom_table_cols_as_labels.png)

## Other Highlights From The Changelog

Changes:

- **Table**: Support to change column header text [#3551](https://github.com/grafana/grafana/issues/3551)
- **InfluxDB**: influxdb query builder support for ORDER BY and LIMIT (allows TOPN queries) [#6065](https://github.com/grafana/grafana/issues/6065) Support influxdb's SLIMIT Feature [#7232](https://github.com/grafana/grafana/issues/7232) thx [@thuck](https://github.com/thuck)
- **Graph**: Support auto grid min/max when using log scale [#3090](https://github.com/grafana/grafana/issues/3090), thx [@bigbenhur](https://github.com/bigbenhur)
- **Prometheus**: Make Prometheus query field a textarea [#7663](https://github.com/grafana/grafana/issues/7663), thx [@hagen1778](https://github.com/hagen1778)
- **Server**: Support listening on a UNIX socket [#4030](https://github.com/grafana/grafana/issues/4030), thx [@mitjaziv](https://github.com/mitjaziv)

Fixes:

- **MySQL**: 4-byte UTF8 not supported when using MySQL database (allows Emojis in Dashboard Names) [#7958](https://github.com/grafana/grafana/issues/7958)
- **Dashboard**: Description tooltip is not fully displayed [#7970](https://github.com/grafana/grafana/issues/7970)

Lots more enhancements and fixes can be found in the [Changelog](https://github.com/grafana/grafana/blob/master/CHANGELOG.md).

## Download

Head to the [v4.3 download page](https://grafana.com/grafana/download) for download links & instructions.

## Thanks

A big thanks to all the Grafana users who contribute by submitting PRs, bug reports, helping out on our [community site](https://community.grafana.com/) and providing feedback!