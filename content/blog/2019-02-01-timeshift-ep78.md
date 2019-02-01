+++
title = "timeShift(GrafanaBuzz, 1w) Issue 78"
author = "trent"
date = "2019-02-01"
keywords = ["Grafana", "Blog", "Roundup", "timeShift", "GrafanaCon"]
cover_image = "/assets/img/blog/timeshift/timeshift_14.jpg"
cover_opacity = "0.4"
cover_blur = "1px"
description = "A weekly roundup of articles and links from Grafana and the surrounding community"
categories = ["timeShift", "Grafana Buzz"]
excerpt = "Updates to the GrafanaCon LA speaker list and schedule, new features in the Azure Monitor Data Source, getting up and running with Grafana and Prometheus, plus learn how you can connect your Fitbit Blaze to Grafana."
+++

### Welcome to TimeShift
We've added more info on the upcoming talks at [GrafanaCon LA](http://grafanacon.org) and are excited to see the schedule shaping up. Grab your ticket while the last and join us February 25-26 for two days of great talks and hands-on workshops. 

This week we're happy to share articles on how to view Azure Monitor Log Analytics data in Grafana, a proof of concept to visualize Fitbit data, how to quickly get up and running with Prometheus and more.

See an article we missed? [Contact us](mailto:hello@grafana.com).

<br />
<hr />

<div class="row row--no-gutters">
	<div class="col col--sm-3">
		<img src="/assets/img/blog/timeshift/grafana_release_icon.png" width="170" />
	</div>
	<div class="col col--sm-9">
		<h3>Latest Stable Release: Grafana v5.4.3</h3>
		<h5>Tech Highlights</h5>
		<ul>
			<li><strong>Docker</strong>: Build and publish Docker images for ARMv7 and ARM64 <a href="https://github.com/grafana/grafana/pull/14617" rel="nofollow noopener">#14617</a>, thx <a href="https://github.com/johanneswuerbach" rel="nofollow noopener">@johanneswuerbach</a></li>
			<li><strong>Backend</strong>: Upgrade to golang 1.11.4 <a href="https://github.com/grafana/grafana/issues/14580" rel="nofollow noopener">#14580</a></li>
			<li><strong>MySQL</strong>: Only update session in MySQL database when required <a href="https://github.com/grafana/grafana/pull/14540" rel="nofollow noopener">#14540</a></li>
		</ul>
		<h5>Bug Fixes</h5>
		<ul>
			<li><strong>Alerting</strong>: Invalid frequency causes division by zero in alert scheduler <a href="https://github.com/grafana/grafana/issues/14810" rel="nofollow noopener">#14810</a></li>
			<li><strong>Dashboard</strong>: Dashboard links do not update when time range changes <a href="https://github.com/grafana/grafana/issues/14493" rel="nofollow noopener">#14493</a></li>
			<li><strong>Limits</strong>: Support more than 1000 datasources per org <a href="https://github.com/grafana/grafana/issues/13883" rel="nofollow noopener">#13883</a></li>
			<li><strong>Backend</strong>: Fix signed in user for orgId=0 result should return active org id <a href="https://github.com/grafana/grafana/pull/14574" rel="nofollow noopener">#14574</a></li>
			<li><strong>Provisioning</strong>: Adds orgId to user dto for provisioned dashboards <a href="https://github.com/grafana/grafana/pull/14678" rel="nofollow noopener">#14678</a></li>
		</ul>
		<a href="https://grafana.com/grafana/download?utm_source=blog&utm_campaign=timeshift_78" target="_blank" class="btn btn--primary">Download Grafana v5.4.3 Now</a>
	</div>
</div>

<br />
<hr />

#### From the Blogosphere
[**Azure Monitor logs in Grafana - now in public preview**](https://azure.microsoft.com/en-us/blog/azure-monitor-logs-in-grafana-now-in-public-preview/): The latest update to the [Azure Monitor Data Source](https://grafana.com/plugins/grafana-azure-monitor-datasource) plugin allows you to view Azure Monitor Log Analytics data in Grafana. See what's new, learn how to get started, and dive into the [documentation](https://docs.microsoft.com/en-us/azure/azure-monitor/platform/grafana-plugin?toc=%2Fazure%2Fazure-monitor%2Ftoc.json) for more information.

[**[VIDEO] Setting up Prometheus and Grafana for monitoring your servers**](https://www.youtube.com/watch?v=4WWW2ZLEg74): In this video walkthrough, learn how to install and configure Prometheus and import a ready-made Grafana dashboard to quickly visualize your server metrics.

[**Monitoring Java applications with Prometheus and Grafana: Part 2**](http://blog.klocwork.com/open-source/monitoring-java-applications-with-prometheus-and-grafana-part-2/): Part two of monitoring Java applications shows you how to connect Prometheus to Grafana and build your first dashboard. Check out [part one](http://blog.klocwork.com/open-source/monitoring-java-applications-prometheus-grafana-part-1/) to learn how to get your metrics into Prometheus.

[**Analyzing Fitbit Data with Telegraf & Grafana**](https://mike-greene.com/blog/2019/1/21/analyzing-fitbit-data-with-telegraf-grafana): Michael built a proof of concept in order to collect his Fitbit Blaze data and visualize it in Grafana. This article walks you through the script and configs so you can try it yourself.

[**Hyperledger Sawtooth Blockchain Performance Metrics with Grafana**](https://www.hyperledger.org/blog/2019/01/25/hyperledger-sawtooth-blockchain-performance-metrics-with-grafana): Learn how to how to setup Grafana to display Sawtooth and system statistics and see a list of all the available metrics.

[**Grafana Dashboards for SCCM**](https://sccm-zone.com/grafana-sccm-dashboard-part-1-d0af56e94cab): A multi-part series that covers the installation and configuration of Grafana dashboards for Microsoft System Center Configuration Manager (SCCM).

<br />
<hr />

<div class="row row--internal-gutters">
	<div class="col col--sm-8">
		<a href="https://www.grafanacon.org/" target="_blank"><img src="/assets/img/blog/timeshift/grafanacon_ga_tickets_tweet.jpg" width="600" /></a>
	</div>
	<div class="col col--sm-4">
		<h4>Get your tickets while they last!</h4>
		<p>Join us in Los Angeles, California February 25-26, 2019 for 2 days of talks and in-depth workshops on Grafana and the open source monitoring ecosystem. Learn about Grafana and new/upcoming features and projects (*cough* <strong><a href="http://grafana.com/loki" target="_blank">Grafana Loki</a></strong> *cough*) and the broader ecosystem like <strong>Prometheus</strong>, <strong>Graphite</strong>, <strong>InfluxDB</strong>, <strong>Kubernetes</strong>, and more.</p>
		<a class="btn btn--outline" href="http://www.grafanacon.org/" target="_blank"><strong>Register for GrafanaCon</strong></a>
	</div>
</div>
<br />
<br />
<div class="row row--internal-gutters">
	<div class="col col--sm-12">
		<a href="http://grafanacon.org" target="_blank">GrafanaCon LA</a> is coming up Feb 25-26, 2019 and <b>day 2</b> is going to be packed with <b>TSDB-focused tracks and hands-on workshops</b>. Learn how to get the most out of Grafana, how to extend Grafana's visualization capabilities and get instruction from the experts. We're also putting together an IoT session where you can get hands-on visualizing sensor data. It's going to be a blast, so <a href="http://www.grafanacon.org/" target="_blank">grab your ticket</a> before they're sold out!
	</div>
	<div class="col col--sm-12">
		<h4>Class will be in session for topics like:</h4>
	</div>
	<div class="col col--sm-4">
		<img class="topics" src="/assets/img/blog/timeshift/grafana_logo.svg" />
		<img class="topics" src="/assets/img/blog/timeshift/influxdb_logo.svg" />
	</div>
	<div class="col col--sm-4">
		<img class="topics" src="/assets/img/blog/timeshift/prometheus_logo_small.svg" />
		<img class="topics" src="/assets/img/blog/timeshift/graphite_logo.svg" />
	</div>
	<div class="col col--sm-4">
		<img class="topics" src="/assets/img/blog/timeshift/kubernetes_logo.svg" />
		<img class="topics" src="/assets/img/blog/timeshift/elasticsearch_logo.svg" />
	</div>
</div>

<br />
<br />
<div class="sponsors">
	<div class="row row--md-gutters text-center">
		<div class="col col--sm-12 text-center">
			<div class="sponsor-header">Thank you to our sponsors for making this conference possible!</div>
		</div>
	</div>
	<div class="row row--md-gutters text-center">
		<div class="col col--sm-3">
			<a href="https://www.oracle.com/" target="_blank"><img class="speaker-logo" src="/assets/img/blog/timeshift/grafanacon/logos/oracle_sponsor.png" /></a>
		</div>
		<div class="col col--sm-3">
			<a href="http://cloud.google.com" target="_blank"><img class="speaker-logo" src="/assets/img/blog/timeshift/grafanacon/logos/google_cloud_logo.png" /></a>
		</div>
		<div class="col col--sm-3 text-center">
			<a href="http://influxdata.com" target="_blank"><img class="speaker-logo" src="/assets/img/blog/timeshift/grafanacon/logos/influx_data_logo.png" /></a>
		</div>
		<div class="col col--sm-3 text-center">
			<a href="http://timescale.com" target="_blank"><img class="speaker-logo" src="/assets/img/blog/timeshift/grafanacon/logos/timescale_logo.png" /></a>
		</div>
	</div>
	<div class="row row--md-gutters">
		<div class="col col--sm-3 text-center">
			<a href="http://packet.net" target="_blank"><img class="speaker-logo" src="/assets/img/blog/timeshift/grafanacon/logos/packet_logo.png" /></a>
		</div>
		<div class="col col--sm-3 text-center">
			<a href="http://sensu.io" target="_blank"><img class="speaker-logo" src="/assets/img/blog/timeshift/grafanacon/logos/sensu_logo.png" /></a>
		</div>
		<div class="col col--sm-3 text-center">
			<a href="http://victorops.com" target="_blank"><img class="speaker-logo" src="/assets/img/blog/timeshift/grafanacon/logos/victorops_logo.png" /></a>
		</div>
		<div class="col col--sm-3 text-center">
			<a href="http://pagertree.com" target="_blank"><img class="speaker-logo" src="/assets/img/blog/timeshift/grafanacon/logos/pagertree_logo.png" /></a>
		</div>
	</div>
</div>

<br />
<hr />
<br />

<div class="row row--internal-gutters">
	<div class="col col--sm-4">
		<h4>We're Hiring</h4>
	<p>We're kicking off our 2019 hiring with some new opportunities to join the team! If you work in Technical Customer Support or want to check out all of our open positions, check our careers section.</p>
	<a class="btn btn-outline" href="https://grafana.com/about/hiring?utm_source=blog&utm_campaign=timeshift_78" target="_blank">View All our Open Positions</a>
	</div>
	<div class="col col--sm-8">
		<a href="https://grafana.com/about/hiring?utm_source=blog&utm_campaign=timeshift_78" target="_blank">
			<img src="/assets/img/blog/timeshift/careers_section.jpg" />
		</a>
	</div>
</div>

<hr />
<br />

<div>
	<div class="row row--no-gutters">
		<div class="col col--sm-12">
			<h4>Tweet of the Week</h4>
			We scour Twitter each week to find an interesting/beautiful dashboard or monitoring related tweet and show it off! <a href="https://twitter.com/hashtag/monitoringlove?src=hash" target="_blank">#monitoringLove</a>
			<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Pop quiz: What do you think is happening in this <a href="https://twitter.com/hashtag/Grafana?src=hash&amp;ref_src=twsrc%5Etfw">#Grafana</a> metrics graph? <a href="https://twitter.com/hashtag/art?src=hash&amp;ref_src=twsrc%5Etfw">#art</a> <a href="https://t.co/7HgNP5wy6x">pic.twitter.com/7HgNP5wy6x</a></p>&mdash; ᴡɪʟᴅɪꜱʜ ꜱᴜᴍʙɪɴᴏ 🛴 (@sum_ballER) <a href="https://twitter.com/sum_ballER/status/1088467156818411520?ref_src=twsrc%5Etfw">January 24, 2019</a></blockquote>
			<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
			<p>I think you've turned Grafana into a <a href="https://en.wikipedia.org/wiki/Spirograph" target="_blank">Spirograph</a></p>
		</div>
	</div>
</div>

<hr />
<br />

#### How are we doing?
We're always looking to make TimeShift better. If you have feedback, please let us know! Email or send us a tweet, or post something at our [community forum](http://community.grafana.com?utm_source=blog&utm_campaign=timeshift_78).

Follow us on [Twitter](http://twitter.com/grafana), like us on [Facebook](http://facebook.com/grafana), and join the [Grafana Labs community](http://grafana.com/signup?utm_source=blog&utm_campaign=timeshift_78).
