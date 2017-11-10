+++
title = "Grafana and Microsoft Azure"
author = "raj"
date = "2017-11-10"
keywords = ["Grafana", "Blog", "Microsoft", "Azure"]
cover_image = "/assets/img/blog/azure_blog_hero.png"
cover_opacity = "0.5"
cover_blur = "0px"
description = "Announcing an official Microsoft Azure data source plugin for Grafana"
categories = ["Grafana", "Plugins"]
+++

## Grafana to Launch Microsoft Azure Data Source

Microsoft is a whole new company. When I started Voxel in 1999, they were vehemently anti-Linux, even going so far as to call open source a “cancer”. I’ve been watching with a sense of astonishment and admiration at some of their recent moves. I’ve been particularly impressed with the rise of Azure, and how they’ve embraced open source and open standards.

We got a chance to talk to the Azure metrics team a few months ago, and they shared some of their strategy and vision for metrics and observability. They're all about interoperability and making the data easy to consume; whatever is best for the customer. The Grafana Labs team quickly realized there was a lot of alignment.

We both wanted to help Azure users bring their valuable metrics into Grafana, so they can unify them with their existing data, and get a complete understanding. Beautifully. As Grafana does. Other solutions that integrate with Azure generally require you to ETL all that data out, and deal with the associated pain and cost. A native data source for Grafana could be really cool.

One thing led to another, and I’m pleased to report that we now have an official [Microsoft Azure data source](https://grafana.com/plugins/grafana-azure-monitor-datasource?utm_source=blog&utm_campaign=azure_article) for Grafana.

<div class="row row--no-gutters">
	<div class="col col--md-6"><img src="/assets/img/blog/azure_dash_1.png" width="450" /></div>
	<div class="col col--md-6"><img src="/assets/img/blog/azure_dash_3.png" width="450" /></div>
</div>
<br />

This data source is the result of collaboration between Microsoft and our own Daniel Lee. It’s a preview version, so it’s at the beginning of what will hopefully be a fruitful journey, and we’d love your feedback to help shape future development. This plugin can be installed into your self-hosted Grafana or GrafanaCloud. Visit the [plugin page](https://grafana.com/plugins/grafana-azure-monitor-datasource?utm_source=blog&utm_campaign=azure_article) for installation instruction. If you'd like to dig in a bit more and learn how to setup a Grafana dashboard with Azure Monitor and Application Insights metrics, [check out the documentation](https://docs.microsoft.com/en-us/azure/monitoring-and-diagnostics/monitor-send-to-grafana).

At Grafana Labs, we're dead serious about bringing together ALL your time series data, wherever it lives. We're now at 43 [data sources](https://grafana.com/plugins?type=datasource) and counting. 


Ending sentence here about how awesome and completing Azure is going to be...