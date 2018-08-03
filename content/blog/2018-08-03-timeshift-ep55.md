+++
title = "timeShift(GrafanaBuzz, 1w) Issue 55"
author = "trent"
date = "2018-08-03"
keywords = ["Grafana", "Blog", "Roundup", "timeShift"]
cover_image = "/assets/img/blog/timeshift/timeshift_14.jpg"
cover_opacity = "0.4"
cover_blur = "1px"
description = "A weekly roundup of articles and links from Grafana and the surrounding community"
categories = ["timeShift", "Grafana Buzz"]
excerpt = "Details on the new Grafana v5.2.2 release, notes on our new Flux data source plugin, and playing with weather APIs"
+++

### Welcome to TimeShift
This week we announced the dates for [GrafanaCon LA](https://www.grafanacon.org/) and officially opened up the [CFP](https://www.grafanacon.org/2019/cfp)! While we can't predict the weather, we can be almost certain it will be blizzard-free this time around. Also, if you're going to be in Munich next week for [PromCon](http://promcon.io), please be sure and say hello! 

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
			<li><strong>Prometheus</strong>: Fix graph panel bar width issue in aligned prometheus queries <a href="https://github.com/grafana/grafana/issues/12379">#12379</a></li>
			<li><strong>Dashboard</strong>: Dashboard links not updated when changing variables <a href="https://github.com/grafana/grafana/issues/12506">#12506</a></li>
			<li><strong>Postgres/MySQL/MSSQL</strong>: Fix connection leak <a href="https://github.com/grafana/grafana/issues/12636">#12636</a> <a href="https://github.com/grafana/grafana/issues/9827">#9827</a></li>
			<li><strong>Plugins</strong>: Fix loading of external plugins <a href="https://github.com/grafana/grafana/issues/12551">#12551</a></li>
			<li><strong>Dashboard</strong>: Remove unwanted scrollbars in embedded panels <a href="https://github.com/grafana/grafana/issues/12589">#12589</a></li>
			<li><strong>Prometheus</strong>: Prevent error using $__interval_ms in query <a href="https://github.com/grafana/grafana/pull/12533">#12533</a>, thx <a href="https://github.com/mtanda">@mtanda</a></li>
			</ul>
		<p>
			<a href="https://community.grafana.com/t/release-notes-v5-2-x/7894?utm_source=blog&utm_campaign=timeshift_55" target="_blank">See everything new in Grafana v5.2.2</a>.
		</p>
		<a href="https://grafana.com/grafana/download?utm_source=blog&utm_campaign=timeshift_55" target="_blank" class="btn btn--primary">Download Grafana 5.2.2 Now</a>
	</div>
</div>


<br />
<hr />

#### From the Blogosphere
[**The RED Method: How to Instrument Your Services**](https://grafana.com/blog/2018/08/02/the-red-method-how-to-instrument-your-services/?utm_source=blog&utm_campaign=timeshift_55): Grafana Labs' very own Tom Wilkie gave a fantastic talk at GrafanaCon EU on his microservices-oriented monitoring philosophy called the Red Method, and how to use it in combination with other methods to gain insight on the happiness of both your users and machines.

[**Plaid.com’s Monitoring System for 9600+ Integrations**](https://www.infoq.com/news/2018/08/plaid-monitoring-scaling): [Plaid.com](http://plaid.com) is a fintech company that integrates with over 9,600 financial institutions. This article discusses how Plaid.com used AWS Kinesis, Prometheus, Alertmanager and Grafana to solve the challenges of scalability and latency to monitor their vast number of integrations.

[**How to Monitor an Ubuntu Server with Grafana & Prometheus**](https://oastic.com/how-to-monitor-an-ubuntu-server-with-grafana-prometheus/): This installation guide will have you up and running and monitoring your Linux servers in no time.

[**Efficient IoT with the ESP8266, Protocol Buffers, Grafana, Go, and Kubernetes**](https://medium.com/@vladimirvivien/efficient-iot-with-the-esp8266-protocol-buffers-grafana-go-and-kubernetes-a2ae214dbd29): Efficient storage and serialization of data can have a large impact on the battery life and performance of your IoT devices. This write up discusses Protocol Buffers for efficient binary data encoding with IoT devices and getting that data into a TSDB and onto a Grafana dashboard.

[**Build a Homelab Dashboard: Part 6, Grafana Introduction**](https://www.epmmarshall.com/grafana-homelab-dashboard/): Part 6 of the Homelab dashboard series walks us through installing and configuring Grafana and building the first dashboard. You may want to start at [part 1](https://www.epmmarshall.com/homelab-dashboard-01/) to get up to speed.

<br />
<hr />

<div class="row row--no-gutters">
	<div class="col col--sm-3">
		<h4>GrafanaCon LA <br />CFP Now Open!</h4>
		<p>Join us in Los Angeles, California February 25-26, 2019 for 2 days of talks focused on Grafana and the open source monitoring ecosystem.</p>
		<a class="btn btn--outline" href="https://www.grafanacon.org/2019/cfp" target="_blank"><strong>Submit You CFP Today</strong></a>
	</div>
	<div class="col col--sm-9">
		<a href="https://www.grafanacon.org/2019/cfp" target="_blank"><img src="/assets/img/blog/grafanacon_la_cfp.png" width="600" /></a>
	</div>
</div>

<br />
<hr />

#### Grafana Plugin Update
This week, Instana updated their plugin to add additional functionality. There are 2 easy ways to update the Instana (or any) plugin – for on-prem Grafana, use the <a href="http://docs.grafana.org/administration/cli/#grafana-cli?utm_source=blog&utm_campaign=timeshift_55" target="_blank">grafana-cli tool</a>, or for <a href="https://grafana.com/cloud/grafana?utm_source=blog&utm_campaign=timeshift_55" target="_blank">Hosted Grafana</a> update with one-click at grafana.com.
<br />
<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/instana-datasource/versions/1.1.0/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong>Instana Data Source</strong> - Version 1.1.0 has been released which adds a configuration that lets users enable the new Instana application model, yielding new/additional entity types and metrics.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/instana-datasource?utm_source=blog&utm_campaign=timeshift_55" target="_blank"><strong>Install</strong></a>
			</p>
		</div>
	</div>
</div>
<br />
<hr />


<div>
	<div class="row row--no-gutters">
		<div class="col col--sm-12">
			<h4>Tweet of the Week</h4>
			We scour Twitter each week to find an interesting/beautiful dashboard or monitoring related tweet and show it off! <a href="https://twitter.com/hashtag/monitoringlove?src=hash" target="_blank">#monitoringLove</a>
			<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">When it&#39;s so <a href="https://twitter.com/hashtag/hot?src=hash&amp;ref_src=twsrc%5Etfw">#hot</a> that you set a dashboard in <a href="https://twitter.com/grafana?ref_src=twsrc%5Etfw">@grafana</a> to keep up with it <a href="https://twitter.com/hashtag/Grafana?src=hash&amp;ref_src=twsrc%5Etfw">#Grafana</a> <a href="https://twitter.com/hashtag/HeatWave?src=hash&amp;ref_src=twsrc%5Etfw">#HeatWave</a> <a href="https://t.co/8EaDnaxMVZ">pic.twitter.com/8EaDnaxMVZ</a></p>&mdash; João Trigo Soares (@suvl) <a href="https://twitter.com/suvl/status/1025027413561036800?ref_src=twsrc%5Etfw">August 2, 2018</a></blockquote>
			<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
			<p>Uh....</p>
			<img src="https://i.dailymail.co.uk/i/pix/2017/02/10/03/3D077E3100000578-4210070-image-a-5_1486696105654.jpg" width="400" />
		</div>
	</div>
</div>

<br />
<hr />
<br />

<div style=" padding: 20px; background: url(/assets/img/blog/timeshift/polygon_texture_black.jpg); background-size: cover; border-radius: 4px;">
	<h4>We're Hiring!</h4>
	<p>We've added new open positions at Grafana Labs! Do you love open source software? Do you thrive on tackling complex challenges to build the future? Want to work with awesome people? Be the next to join our team!
	</p>
	<a class="btn btn-outline" href="https://grafana.com/about/hiring?utm_source=blog&utm_campaign=timeshift_55" target="_blank">View our Open Positions</a>
</div>

<br />
<hr />
<br />

#### Upcoming Events
In between code pushes we like to speak at, sponsor and attend all kinds of conferences and meetups. We also like to make sure we mention other Grafana-related events happening all over the world. If you're putting on just such an event, let us know and we'll list it here.

<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--md-3">
			<img style="border-radius: 50%;" class="large" src="/assets/img/blog/timeshift/prometheus_logo.svg" />
		</div>
		<div class="col col--md-8 col--sm-offset-1">
			<p>
				<strong><a href="https://sensu.io/summit" target="_blank">PromCon 2018 | Munich, Germany - August 9-10, 2018</a>:</strong>
				<br />
				<strong>Tom Wilkie: Prometheus Monitoring Mixins: Using Jsonnet to Package Together Dashboards, Alerts, and Exporters</strong> - Prometheus offers powerful open source monitoring and alerting - but that comes with higher degrees of freedom, making pre-configured monitoring "packages" hard to build. Simultaneously, it's becoming accepted wisdom that the developers of a given software package are best placed to operate said software, or at least construct the basic monitoring configuration.
				<br />
				In this talk we present a technique for using Jsonnet (a configuration language from Google) for packaging and deploying "Monitoring Mixins" - extensible and customisable combinations of dashboards, alert definitions and exporters. This technique allows developers of open source projects to publish best-practice monitoring configurations alongside their code, and for users to consume it, customise it and stay up to date. We will present example Mixins for Kubernetes and other services such as Consul, Vault, and Cassandra.
			</p>
			<p>
				<strong>David Kaltschmidt: Explore Your Prometheus Data in Grafana</strong> – Grafana is the de-facto dashboarding solution for Prometheus. Now imagine you received a page. Grafana is often the starting point for your incident response. You look at a time series panel, form a hypothesis, and would like to dive deeper. We've built a whole new section that allows you to do just that by iterating quickly through Prometheus queries while leaving your dashboards intact. I'll show-case our new Explore UI and how it can fit into your workflows for both troubleshooting and data exploration.
			</p>
			<p>
				We're also a proud PromCon 2018 sponsor of the evening social event and a diversity scholarship. We hope to see you there!
			</p>
			<a href="https://promcon.io/2018-munich/register/" target="_blank" class="btn btn--outline">Register Now</a>
		</div>
	</div>
	<br />
	<div class="row row--md-gutters">
		<div class="col col--md-3">
			<img style="border-radius: 50%;" class="large" src="/assets/img/blog/timeshift/sensu_summit.jpg" />
		</div>
		<div class="col col--md-8 col--sm-offset-1">
			<p>
				<strong><a href="https://sensu.io/summit" target="_blank">2018 Sensu Summit | Portland, OR - August 22-23, 2018</a>:</strong>
				<br />
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
				<br />
				Tom will also share some little tips and tricks for getting the most out of your Prometheus monitoring, including the common pitfalls and what you should be alerting on.
			</p>
			<a href="https://skillsmatter.com/conferences/10160-cloudnative-london-2018#overview" target="_blank" class="btn btn--outline">Register Now</a>
		</div>
	</div>
	<br />
</div>
<hr />
<br />

#### How are we doing?
Hope you enjoyed this issue of TimeShift. What do you think? Are there other types of content you'd like to see here? Submit a comment on this issue below, or post something at our [community forum](http://community.grafana.com?utm_source=blog&utm_campaign=timeshift_55).

Follow us on [Twitter](http://twitter.com/grafana), like us on [Facebook](http://facebook.com/grafana), and join the [Grafana Labs community](http://grafana.com/signup?utm_source=blog&utm_campaign=timeshift_55).

