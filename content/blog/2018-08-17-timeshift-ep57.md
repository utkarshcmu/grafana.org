+++
title = "timeShift(GrafanaBuzz, 1w) Issue 57"
author = "trent"
date = "2018-08-17"
keywords = ["Grafana", "Blog", "Roundup", "timeShift"]
cover_image = "/assets/img/blog/timeshift/timeshift_14.jpg"
cover_opacity = "0.4"
cover_blur = "1px"
description = "A weekly roundup of articles and links from Grafana and the surrounding community"
categories = ["timeShift", "Grafana Buzz"]
excerpt = "A video demo of the new Explore UI in Grafana, monitoring VMWare's VKE with Prometheus, maintaining your a blog on a budget and more."
+++

### Welcome to TimeShift
August is flying by, but hopefully there'll still be time to enjoy a few more summer evenings. This week we're sharing the video demoing the new Explore UI in Grafana from last week's PromCon, monitoring VMWare's VKE with Prometheus, hosting a blog on a budget and more. 

Come across an article you think might be a good fit for an upcoming issue? Suggestions for new content? [Contact us](mailto:hello@grafana.com).
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
			<a href="https://community.grafana.com/t/release-notes-v5-2-x/7894?utm_source=blog&utm_campaign=timeshift_57" target="_blank">See everything new in Grafana v5.2.2</a>.
		</p>
		<a href="https://grafana.com/grafana/download?utm_source=blog&utm_campaign=timeshift_57" target="_blank" class="btn btn--primary">Download Grafana 5.2.2 Now</a>
	</div>
</div>


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

#### From the Blogosphere
[**Video: David Kaltschmidt: Exploring your Prometheus Data in Grafana**](https://youtu.be/YDkCgQ802aY?t=1798): Last week we shared David's [slides](https://www.slideshare.net/grafana/explore-your-prometheus-data-in-grafana-promcon-2018) from PromCon 2018, but it's so much better to actually see it action.

[**Installing Prometheus and Grafana on VMware Kubernetes Engine**](https://cloud.vmware.com/community/2018/08/14/installing-prometheus-grafana-vmware-kubernetes-engine/): This post details the process of deploying Prometheus as a monitoring framework for Kubernetes, along with Grafana as the visualization layer. Bahubali covers why monitoring K8s is different, building and preparing your cluster, and installing both Prometheus and Grafana.

[**Collecting DHCP Scope Data with Grafana**](https://litefoote.com/2018/08/16/collecting-dhcp-scope-data-with-grafana/): Eric wrote a Python script to help him collect aggregated data about groups of DHCP scopes and how his network users were changing. This lets him total up the number of free and used IPs in each range and visualize them on a graph in Grafana.

[**How I host this blog, CI and tooling**](https://dizzy.zone/2018/08/15/How-I-host-this-blog-CI-and-tooling/): Vik is a budget conscious blogger and developer. In this article he provides a rundown of the infrastructure he uses for his blog and how he keeps it running for $8.53/month.

[**Graphite Grafana: Metrics Monitoring Made Easy**](https://dzone.com/articles/graphite-grafana-metrics-monitoring-made-easy): The first in a series on metrics monitoring made easy, this article gets you started with spinning up a Graphite/Grafana stack. Learn about the components of Graphite, Grafana, and how to get everything installed - the next article will dive into the actual monitoring.

[**System monitoring with Grafana, InfluxDB et Collectd**](https://medium.com/@cristianpb/system-monitoring-with-grafana-influxdb-et-collectd-7827969e1fe): Learn about the components of a responsive dashboard system and how to easily deploy it with Docker.

<br />
<hr />

<div style=" padding: 20px; background: url(/assets/img/blog/timeshift/polygon_texture_black.jpg); background-size: cover; border-radius: 4px;">
	<h4>We're Hiring!</h4>
	<p>We've added new open positions at Grafana Labs! Do you love open source software? Do you thrive on tackling complex challenges to build the future? Want to work with awesome people? Be the next to join our team!
	</p>
	<a class="btn btn-outline" href="https://grafana.com/about/hiring?utm_source=blog&utm_campaign=timeshift_57" target="_blank">View our Open Positions</a>
</div>

<br />
<hr />
<br />

#### Upcoming Events
In between code pushes we like to speak at, sponsor and attend all kinds of conferences and meetups. We also like to make sure we mention other Grafana-related events happening all over the world. If you're putting on just such an event, let us know and we'll list it here.

<div class="blog-plugin">
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
	<br />
	<div class="row row--md-gutters">
		<div class="col col--md-3">
			<img style="border-radius: 50%;" class="large" src="/assets/img/blog/timeshift/meetup.jpg" />
		</div>
		<div class="col col--md-8 col--sm-offset-1">
			<p>
				<strong><a href="https://www.meetup.com/DevOps-Belfast/events/250817922/" target="_blank">Meetup Workshop: Monitoring with Prometheus and Grafana | Belfast, Northern Ireland - September 18, 2018</a>:</strong>
				<br />
				If you're in Belfast, or are going to be in September, this could be a great Meetup to attend. Topics include: Architecture, Prometheus, Alertmanager, Pushgateway, Telegraf, JMX exporter, Grafana, and more!
			</p>
			<a href="https://www.meetup.com/DevOps-Belfast/events/250817922/" target="_blank" class="btn btn--outline">RSVP Now</a>
		</div>
	</div>
	<br />
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
	<div class="row row--md-gutters">
		<div class="col col--md-3">
			<img style="border-radius: 50%;" class="large" src="/assets/img/blog/timeshift/ato.svg" />
		</div>
		<div class="col col--md-8 col--sm-offset-1">
			<p>
				<strong><a href="https://allthingsopen.org/register-now/" target="_blank">All Things Open 2018 | Raleigh, NC - October 21-23, 2018</a>:</strong>
				<br />
				<strong>Tom Wilkie: The RED Method - How to Instrument your Services</strong> – The RED Method defines three key metrics you should measure for every microservice in your architecture; inspired by the USE Method from Brendan Gregg, it gives developers a template for instrumenting their services and building dashboards in a consistent, repeatable fashion.
			</p>
			<p>
				In this talk we will discuss patterns of application instrumentation, where and when they are applicable, and how they can be implemented with Prometheus. We'll cover Google's Four Golden Signals, the RED Method, the USE Method, and Dye Testing. We'll also discuss why consistency is an important approach for reducing cognitive load. Finally we'll talk about the limitations of these approaches and what can be done to overcome them.
			</p>
			<a href="https://allthingsopen.org/register-now/" target="_blank" class="btn btn--outline">Register Now</a>
		</div>
	</div>
	<br />
	<div class="row row--md-gutters">
		<div class="col col--md-3">
			<img style="border-radius: 50%;" class="large" src="/assets/img/blog/timeshift/osmc.jpg" />
		</div>
		<div class="col col--md-8 col--sm-offset-1">
			<p>
				<strong><a href="https://osmc.de/tickets/" target="_blank">OSMC 2018 | Nuremberg, Germany - November 5-8, 2018</a>:</strong>
				<br />
				<strong>David Kaltschmidt: Logging is Coming to Grafana</strong> – Grafana is an OSS dashboarding platform with a focus on visualizing time series data as beautiful graphs. Now we're adding support to show your logs inside Grafana as well. Adding support for log aggregation makes Grafana an even better tool for incident response: First, the metric graphs help in a visual zoning in on the issue. Then you can seamlessly switch over to view and search related log files, allowing you to better understand what your software was doing while the issue was occurring. The main part of this talk shows how to deploy the necessary parts for this integrated experience. In addition I'll show the latest features of Grafana both for creating dashboards and maintaining their configuration. The last 10-15 will be reserved for a Q&A.
			</p>
			<a href="https://osmc.de/tickets/" target="_blank" class="btn btn--outline">Register Now</a>
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
			<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Graph of the day - 95th percentile inter-pod network latency heatmap for one of our control planes, log 2 y axis (min 0s, max 1s). Data from <a href="https://t.co/ViRlSiAW2l">https://t.co/ViRlSiAW2l</a>, <a href="https://twitter.com/grafana?ref_src=twsrc%5Etfw">@grafana</a> for the fanciness <a href="https://t.co/WVIwhD4sEe">pic.twitter.com/WVIwhD4sEe</a></p>&mdash; SALISBURY HEAVY INDUSTRIES (@salisbury_joe) <a href="https://twitter.com/salisbury_joe/status/1030022753066397697?ref_src=twsrc%5Etfw">August 16, 2018</a></blockquote>
			<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
			<p>I love a good heatmap. Let us know if you figure out where that super high latency is coming from.</p>
		</div>
	</div>
</div>

<hr />
<br />

#### How are we doing?
Hope you enjoyed this issue of TimeShift. What do you think? Are there other types of content you'd like to see here? Submit a comment on this issue below, or post something at our [community forum](http://community.grafana.com?utm_source=blog&utm_campaign=timeshift_57).

Follow us on [Twitter](http://twitter.com/grafana), like us on [Facebook](http://facebook.com/grafana), and join the [Grafana Labs community](http://grafana.com/signup?utm_source=blog&utm_campaign=timeshift_57).

