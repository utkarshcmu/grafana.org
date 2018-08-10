+++
title = "timeShift(GrafanaBuzz, 1w) Issue 56"
author = "trent"
date = "2018-08-10"
keywords = ["Grafana", "Blog", "Roundup", "timeShift"]
cover_image = "/assets/img/blog/timeshift/timeshift_14.jpg"
cover_opacity = "0.4"
cover_blur = "1px"
description = "A weekly roundup of articles and links from Grafana and the surrounding community"
categories = ["timeShift", "Grafana Buzz"]
excerpt = "GrafanaCon LA CFP announced, Monitoring using the RED Method, and a dashboard showing the heatwave that's slamming Europe."
+++

### Welcome to TimeShift
[PromCon](http://promcon.io) was held this week in Munich, Germany, and Grafana Labs was excited to both sponsor and speak at this great conference. If you didn't have a chance to attend, you can watch a [recorded livestream](https://promcon.io/2018-munich/stream/) of the event and download slides in the blog roundup below. We'd also like to congratulate the Prometheus project for moving from the incubation stage to [Graduation](https://www.cncf.io/announcement/2018/08/09/prometheus-graduates/) as an official CNCF project!

![Tom Wilkie and David Kaltschmidt](/assets/img/blog/timeshift/tom_david_promcon.jpg)
<small>Left to right: Tom Wilkie and David Kaltschmidt prepping for their talks - Grafana Labs</small>

Hope you enjoy this week's roundup of articles and plugin updates. If you see an article you think might be a good fit for an upcoming issue of TimeShift, please [contact us](mailto:hello@grafana.com).

<br />
<hr />

#### Latest Stable Release: Grafana 5.2.2
<div class="row row--no-gutters">
	<div class="col col--sm-3">
		<img src="/assets/img/blog/timeshift/grafana_release_icon.png" width="170" />
	</div>
	<div class="col col--sm-9">
		<h4>Bug Fixes</h4>
		<ul>
			<li><strong>Prometheus</strong>: Fix graph panel bar width issue in aligned Prometheus queries <a href="https://github.com/grafana/grafana/issues/12379">#12379</a></li>
			<li><strong>Dashboard</strong>: Dashboard links not updated when changing variables <a href="https://github.com/grafana/grafana/issues/12506">#12506</a></li>
			<li><strong>Postgres/MySQL/MSSQL</strong>: Fix connection leak <a href="https://github.com/grafana/grafana/issues/12636">#12636</a> <a href="https://github.com/grafana/grafana/issues/9827">#9827</a></li>
			<li><strong>Plugins</strong>: Fix loading of external plugins <a href="https://github.com/grafana/grafana/issues/12551">#12551</a></li>
			<li><strong>Dashboard</strong>: Remove unwanted scrollbars in embedded panels <a href="https://github.com/grafana/grafana/issues/12589">#12589</a></li>
			<li><strong>Prometheus</strong>: Prevent error using $__interval_ms in query <a href="https://github.com/grafana/grafana/pull/12533">#12533</a>, thx <a href="https://github.com/mtanda">@mtanda</a></li>
			</ul>
		<p>
			<a href="https://community.grafana.com/t/release-notes-v5-2-x/7894?utm_source=blog&utm_campaign=timeshift_56" target="_blank">See everything new in Grafana v5.2.2</a>.
		</p>
		<a href="https://grafana.com/grafana/download?utm_source=blog&utm_campaign=timeshift_56" target="_blank" class="btn btn--primary">Download Grafana 5.2.2 Now</a>
	</div>
</div>


<br />
<hr />

#### From the Blogosphere
[**David Kaltschmidt: Exploring your Prometheus Data in Grafana**](https://www.slideshare.net/grafana/explore-your-prometheus-data-in-grafana-promcon-2018): David has been working tirelessly on the new explore UI for Grafana. We'll link to the video once it's available, but for now he's made his slides available so you can learn about it, and try the new UI out for yourself.

[**Tom Wilkie: Prometheus Monitoring Mixins - Using Jsonnet to Package Together Dashboards, Alerts, and Exporters**](https://www.slideshare.net/grafana/promcon2018-prometheus-monitoring-mixins-using-jsonnet-to-package-together-dashboards-alerts-and-exporters): Tom discusses a technique for using Jsonnet for packaging and deploying "Monitoring Mixins" - extensible and customizable combinations of dashboards, alert definitions and exporters. This technique allows you to publish best-practice monitoring configurations alongside your code, and for users to consume it, customize it and stay up to date. Also, check out the [video](https://youtu.be/VvJx0WTiGcA?t=7570) of his presentation.

[**Using TimescaleDB + Prometheus to monitor and troubleshoot CockroachDB**](https://medium.com/learning-with-diagrams/using-timescaledb-prometheus-to-monitor-and-troubleshoot-cockroachdb-1b1de10061): Diana, who recently joined the Timescale team outlines how to combine four open source technologies to create a powerful monitoring stack, and provides a high-level tutorial on getting everything set up.

[**Inside Fortnite’s Massive Data Analytics Pipeline**](https://www.datanami.com/2018/07/31/inside-fortnites-massive-data-analytics-pipeline/): Fortnite is a truly massive MMPG with over 125 million users spanning the globe. But pulling together all the servers, databases, and data pipelines to manage 92 million events per minute was no small feat. This article gives you a rundown of their systems, how they keep them running, and what they'd like to optimize in the future.

[**Managing your costs on Kubernetes**](https://karlstoney.com/2018/07/07/managing-your-costs-on-kubernetes/): Cost is often a factor when discussing migrating to a public cloud solution. When the sky's the limit when it comes to resources, your monthly bill could be at risk of poking through the stratosphere. The article shows you how to use Prometheus, Grafana, and Kubernetes to create a dashboard that can help you get a better visualization of the cost of your applications.

[**M3: Uber’s Open Source, Large-scale Metrics Platform for Prometheus**](https://eng.uber.com/m3/):  Rob Skillington, staff software engineer on the Observability team in the Uber New York City provides a deep dive into M3, the metrics platform they've been working on for the past few years. In fact, at our very first GrafanaCon in 2015, Matt Mihic gave a [talk](https://www.youtube.com/watch?v=89H48IwFeV4) about M3.

[**NetEye 3.14 and NetEye 4.2 Release Notes**](https://www.neteye-blog.com/2018/08/neteye-3-14-and-neteye-4-2-release-notes/): The latest version of Würth Phoenix's NetEye Unified Monitoring Solution has been released which includes Grafana 5 and allows you to take advantage of the new dashboard layout engine, folders, provisioning and more.

<br />
<hr />

<div class="row row--no-gutters">
	<div class="col col--sm-9">
		<a href="https://www.grafanacon.org/2019/cfp" target="_blank"><img src="/assets/img/blog/grafanacon_la_cfp.png" width="600" /></a>
	</div>
	<div class="col col--sm-3">
		<h4>GrafanaCon LA <br />CFP Now Open!</h4>
		<p>Join us in Los Angeles, California February 25-26, 2019 for 2 days of talks focused on Grafana and the open source monitoring ecosystem.</p>
		<a class="btn btn--outline" href="https://www.grafanacon.org/2019/cfp" target="_blank"><strong>Submit You CFP Today</strong></a>
	</div>
</div>

<br />
<hr />

#### Grafana Plugin Update
Two new panels to show off this week along with an update to the Clickhouse data source plugin. We've made it simple to update your plugins – for on-prem Grafana, use the <a href="http://docs.grafana.org/administration/cli/#grafana-cli?utm_source=blog&utm_campaign=timeshift_56" target="_blank">grafana-cli tool</a>, or for <a href="https://grafana.com/cloud/grafana?utm_source=blog&utm_campaign=timeshift_56" target="_blank">Hosted Grafana</a> update with one-click at grafana.com.
<br />
<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/fatcloud-windrose-panel/versions/0.7.0/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="new-plugin-tag"><strong>NEW PLUGIN</strong></div><br/>
				<strong>Windrose Panel</strong> - This new panel was developed in a joint effort as part of a research project in Taiwan. A wind rose is a graphic tool used by meteorologists to give a view of how wind speed and direction are distributed at a location.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/fatcloud-windrose-panel?utm_source=blog&utm_campaign=timeshift_56" target="_blank"><strong>Install</strong></a>
			</p>
		</div>
	</div>
</div>
<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/linksmart-sensorthings-datasource/versions/1.0.0/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="new-plugin-tag"><strong>NEW PLUGIN</strong></div><br/>
				<strong>LinkSmart SensorThings Data Source</strong> - This is a new panel that works with any server that implements the OGC SensorThings API. The SensorThings API is a standard for connecting IoT devices, data and applications over the web. An exciting feature of this is the ability to easily integrate into existing Spatial Data Infrastructures (SDI) or Geographic Information Systems (GIS) and means this data source works well with the Worldmap panel.
			</p>
			<p>
				Check out their <a href="https://demo.linksmart.eu/grafana/d/OUQUMYDmz/ogc-sensorthings" target="_blank">live demo dashboard</a> to see what this data source can do.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/linksmart-sensorthings-datasource?utm_source=blog&utm_campaign=timeshift_56" target="_blank"><strong>Install</strong></a>
			</p>
		</div>
	</div>
</div>
<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/vertamedia-clickhouse-datasource/versions/1.6.0/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong>Clickhouse Data Source</strong> - The Clickhouse plugin is being continually improved and the latest release now has support for annotation queries. 
			</p>
			<p>
				Another new feature is the addition of two new macros: <code>$from</code> and <code>$to</code> that can be used in templating queries. If you are using Grafana's provisioning feature there is now a config example included in the readme for the Clickhouse plugin.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/vertamedia-clickhouse-datasource?utm_source=blog&utm_campaign=timeshift_56" target="_blank"><strong>Install</strong></a>
			</p>
		</div>
	</div>
</div>
<br />
<hr />


<div style=" padding: 20px; background: url(/assets/img/blog/timeshift/polygon_texture_black.jpg); background-size: cover; border-radius: 4px;">
	<h4>We're Hiring!</h4>
	<p>We've added new open positions at Grafana Labs! Do you love open source software? Do you thrive on tackling complex challenges to build the future? Want to work with awesome people? Be the next to join our team!
	</p>
	<a class="btn btn-outline" href="https://grafana.com/about/hiring?utm_source=blog&utm_campaign=timeshift_56" target="_blank">View our Open Positions</a>
</div>

<br />
<hr />
<br />

#### Upcoming Events
In between code pushes we like to speak at, sponsor and attend all kinds of conferences and meetups. We also like to make sure we mention other Grafana-related events happening all over the world. If you're putting on just such an event, let us know and we'll list it here.

<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--md-3">
			<img style="border-radius: 50%;" class="large" src="/assets/img/blog/timeshift/meetup.jpg" />
		</div>
		<div class="col col--md-8 col--sm-offset-1">
			<p>
				<strong><a href="https://www.meetup.com/London-HashiCorp-User-Group/events/253542335/" target="_blank">London Hashicorp User Group | London, United Kingdom - August 14, 2018</a>:</strong>
				<br />
				<strong>Tom Wilkie: Monitoring the Hashistack with Prometheus</strong> - Prometheus has become the defacto monitoring system for cloud native applications, but for a while was eschewed by the Hashistack in favour of more traditional technologies. Thats all changing: Hashicorp's project are beginning to export metrics in the native Prometheus format, and many exporters exist to bridge the gap.
			</p>
			<p>
				In this talk Tom will give a brief introduction to Prometheus, show you how to piece it all together, and give some recommendation on what to monitor and alert on.
			</p>
			<a href="https://www.meetup.com/London-HashiCorp-User-Group/events/253542335/" target="_blank" class="btn btn--outline">Register Now</a>
		</div>
	</div>
	<br />
	<div class="row row--md-gutters">
		<div class="col col--md-3">
			<img style="border-radius: 50%;" class="large" src="/assets/img/blog/timeshift/webinar.png" />
		</div>
		<div class="col col--md-8 col--sm-offset-1">
			<p>
				<strong><a href="https://register.gotowebinar.com/register/2744827815391229442?source=GrafanaLabs" target="_blank">How to Use Open Source Projects for Performance Monitoring | Webinar - August 15, 2018</a>:</strong>
				<br />
				Check out how you can use 5 of the most popular open source projects, InfluxDB, Telegraf, Chronograf, Kapacitor and Grafana, for performance monitoring of your Infrastructure, Application, & Cloud faster, easier, and to scale. In this webinar, Leonard Gram from Grafana, and Margo Schaedel from InfluxData, will provide you with step by step instruction from download & configure, to collecting metrics and building dashboards and alerts.
			</p>
			<a href="https://register.gotowebinar.com/register/2744827815391229442?source=GrafanaLabs" target="_blank" class="btn btn--outline">Register Now</a>
		</div>
	</div>
	<br/>
	<div class="row row--md-gutters">
		<div class="col col--md-3">
			<img style="border-radius: 50%;" class="large" src="/assets/img/blog/timeshift/sensu_summit.jpg" />
		</div>
		<div class="col col--md-8 col--sm-offset-1">
			<p>
				<strong><a href="https://sensu.io/summit" target="_blank">2018 Sensu Summit | Portland, OR - August 22-23, 2018</a>:</strong><br />
				<strong>Brian Gann: The Sensu Plugin for Grafana</strong> - Brian will be showing a demo of the new Sensu plugin for Grafana on August 22, and conducting a 30 minute Grafana tutorial on the 23rd!
			</p>
			<p>
				We are a proud sponsor of this year's Sensu Summit! Come enjoy Portland in the summer and learn a ton from the sharpest operations engineers in monitoring!
			</p>
			<a href="https://sensu.io/summit" target="_blank" class="btn btn--outline">More Info</a>
		</div>
	</div>
	<div class="row row--md-gutters">
		<div class="col col--md-3">
			<img style="border-radius: 50%;" class="large" src="/assets/img/blog/timeshift/cloudnative_london.jpg" />
		</div>
		<div class="col col--md-8 col--sm-offset-1">
			<p>
				<strong><a href="https://skillsmatter.com/conferences/10160-cloudnative-london-2018#overview" target="_blank">CloudNative London 2018 | London, United Kingdom - September 26-28, 2018</a>:</strong>
				<br />
				<strong>Tom Wilkie: Monitoring Kubernetes With Prometheus</strong> – In this talk Tom will explore all the moving part for a working Prometheus-on-Kubernetes monitoring system, including kube-state-metrics, node-exporter, cAdvisor and Grafana. You will learn about the various methods for getting to a working setup: the manual approach, using CoreOS's Prometheus Operator, or using Prometheus Ksonnet Mixin.
			</p>
			<p>
				Tom will also share some little tips and tricks for getting the most out of your Prometheus monitoring, including the common pitfalls and what you should be alerting on.
			</p>
			<a href="https://skillsmatter.com/conferences/10160-cloudnative-london-2018#overview" target="_blank" class="btn btn--outline">Register Now</a>
		</div>
	</div>
	<br />
</div>
<hr />
<br />

<div>
	<div class="row row--no-gutters">
		<div class="col col--sm-12">
			<h4>Tweet of the Week</h4>
			We scour Twitter each week to find an interesting/beautiful dashboard or monitoring related tweet and show it off! <a href="https://twitter.com/hashtag/monitoringlove?src=hash" target="_blank">#monitoringLove</a>
			<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Hallelujah! <a href="https://twitter.com/grafana?ref_src=twsrc%5Etfw">@grafana</a> is making it easier to try out PromQL queries. Choose a drop-down of metrics, alerts, recording rules etc. Gives corrections. Tells you when you last used a query. Suggests labels. Split view, multiple queries per graph 😍😍😍 <a href="https://twitter.com/hashtag/promcon2018?src=hash&amp;ref_src=twsrc%5Etfw">#promcon2018</a> <a href="https://t.co/LYgBvtxuGa">pic.twitter.com/LYgBvtxuGa</a></p>&mdash; Emily Labram (@emilylabram) <a href="https://twitter.com/emilylabram/status/1027831732182106113?ref_src=twsrc%5Etfw">August 10, 2018</a></blockquote>
			<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
			<p>So glad to hear you're excited about the new explore UI. It's still pre-alpha, so there's lots more to come!</p>
		</div>
	</div>
</div>

<hr />
<br />

#### How are we doing?
Hope you enjoyed this issue of TimeShift. What do you think? Are there other types of content you'd like to see here? Submit a comment on this issue below, or post something at our [community forum](http://community.grafana.com?utm_source=blog&utm_campaign=timeshift_56).

Follow us on [Twitter](http://twitter.com/grafana), like us on [Facebook](http://facebook.com/grafana), and join the [Grafana Labs community](http://grafana.com/signup?utm_source=blog&utm_campaign=timeshift_56).

