+++
title = "timeShift(GrafanaBuzz, 1w) Issue 4"
author = "trent"
date = "2017-07-14"
keywords = ["Grafana", "Blog", "Roundup", "timeShift"]
cover_image = "/assets/img/blog/timeshift/timeshift_3.jpg"
cover_opacity = "0.6"
cover_blur = "1px"
description = "A roundup of articles and links form Grafana and the community from the past week"
categories = ["timeShift", "Grafana Buzz"]
draft = true
+++

The summer seems to be flying by! This week's timeShift highlights Kubernetes monitoring, dashboard exports and backups via grafcli, and scaling Graphite on AWS. If you know of a recent article about Grafana, or are writing one yourself, please [get in touch](mailto:hello@grafana.com), we'd be happy to feature it here.
<br />
<hr />
<br />
#### From the Blogosphere
- [**Kubernetes, Prometheus and Grafana**](https://labs.commercetools.com/kubernetes-prometheus-and-grafana-974372008caf): In this blog post + video, Thaddeus Elms explores autoscaling in Kubernetes and monitoring the environment when placed under heavy load.

- [**Export/backup all Grafana dashboards at once**](https://blog.dictvm.org/export-all-grafana-graphs/): Daniel shows off [grafcli](https://github.com/m110/grafcli) - a Grafana command line tool written in Python that can export all of your dashboards at once.

- [**Scaling Graphite on AWS**](https://community.zuora.com/t5/Engineering-Blog/Scaling-Graphite-on-AWS/ba-p/18621): This article chronicles Zuora's journey to scale Graphite in their hybrid environment. There's also a shoutout to our friend Jason Dixon and his book [Monitoring Graphite](http://shop.oreilly.com/product/0636920035794.do), as well as a Graphite Carbon Metrics dashboard he created that you can [import into Grafana now](https://grafana.com/dashboards/311?utm_source=blog&utm_campaign=timeshift_4).

- [**InfluxDB+Grafana Persistence and Graphing**](https://community.openhab.org/t/influxdb-grafana-persistence-and-graphing/13761): This tutorial walks you through installing InfluxDB, Grafana and connecting it to openHAB to monitor devices in your smart home.

- [**Introducing Matomy’s New Monitoring Solution: InfluxDB – Grafana**](http://www.matomy.com/blog/meet-matomys-new-monitoring-solution-influxdb-grafana/): Matomy takes you through their journey of updating their Graphite monitoring stack for better performance, accuracy and storage.



<br />
#### Plugins and Dashboards
We are excited that there have been over 100,000 plugin installations since we launched the new plugable architecture in Grafana v3. You can discover and install plugins in your own on-premises or Hosted Grafana instance from our [website](https://grafana.com/plugins?utm_source=blog&utm_campaign=timeshift_4). Below are some recent additions and updates.


<div class="blog-plugin">
	<div class="row row--md-gutters blog-plugin-grid">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img src="https://grafana.com/api/plugins/ayoungprogrammer-finance-datasource/versions/1.0.0/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<a href="https://grafana.com/plugins/ayoungprogrammer-finance-datasource?utm_source=blog&utm_campaign=timeshift_4" target="_blank">Finance Data Source</a> This new plugin charts financial data from quandl.com and maps the data to a timeseries.
			</p>
		</div>
	</div>
</div>

In addition to the plugins available for download, there are hundreds of [pre-made dashboards](https://grafana.com/dashboards?utm_source=blog&utm_campaign=timeshift_4) ready for you to import into Grafana to get up and running quickly. Check out some of the popular dashboards.

<div class="blog-plugin">
	<div class="row row--md-gutters blog-plugin-grid">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 0; border: 1px solid #666;" src="https://grafana.com/api/dashboards/311/logos/small?lastmod=1473363608000" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<a href="https://grafana.com/dashboards/311?utm_source=blog&utm_campaign=timeshift_4" target="_blank">Graphite Carbon Metrics</a> This is a more exhaustive take on the original Graphite Carbon Metrics dashboard. Aside from some minor metric fixes, it adds new panels for memory footprint and cache details (keys &amp; datapoints in cache, avg number of datapoints per key, etc). 
				<br/>
				<strong>Data Source:</strong> Graphite | <strong>Collector:</strong> Collectd
			</p>
		</div>
	</div>
</div>

<div class="blog-plugin">
	<div class="row row--md-gutters blog-plugin-grid">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 0; border: 1px solid #666;" src="https://grafana.com/api/dashboards/804/logos/small?lastmod=1478023973000" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<a href="https://grafana.com/dashboards/804?utm_source=blog&utm_campaign=timeshift_4" target="_blank">01 - Performance Ambiente Zabbix</a> A dashboard that shows the current performance of the server and its 3 proxys.
				<br/>
				<strong>Data Source:</strong> Zabbix
			</p>
		</div>
	</div>
</div>

<div class="blog-plugin">
	<div class="row row--md-gutters blog-plugin-grid">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img src="https://grafana.com/api/dashboards/179/logos/small?lastmod=1497944079000" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<a href="https://grafana.com/dashboards/179?utm_source=blog&utm_campaign=timeshift_4" target="_blank">Docker Dashboard</a> This dashboard is based off of the Kubernetes Dashboard but has been updated to work with Docker directly.
				<br/>
				<strong>Data Source:</strong> Prometheus | <strong>Collector:</strong> Nodeexporter
			</p>
		</div>
	</div>
</div>


<br />
#### This week's MVC (Most Valuable Contributor)
Each week we'll recognize a Grafana contributor and thank them for all of their PRs, bug reports and feedback. Many of the fixes and improvements come from our fantastic community!

<img class="mvc" src="https://avatars2.githubusercontent.com/u/1405049?v=3&s=460" />
##### [jiamliang](https://github.com/jiamliang) (Liang Jiameng)
Thanks for adding the DingTalk Notifier!

<br />
<br />
#### What do you think?
Anything in particular you'd like to see in this series of posts? Too long? Too short? Boring? Let us know. Comment on this article below, or post something at our [community forum](http://community.grafana.com?utm_source=blog&utm_campaign=timeshift_4). With your help, we can make this a worthwhile resource.

Follow us on [Twitter](http://twitter.com/grafana), like us on [Facebook](http://facebook.com/grafana), and join the [Grafana Labs community](http://grafana.com/signup?utm_source=blog&utm_campaign=timeshift_4).