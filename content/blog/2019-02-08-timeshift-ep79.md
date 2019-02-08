+++
title = "timeShift(GrafanaBuzz, 1w) Issue 79"
author = "trent"
date = "2019-02-08"
keywords = ["Grafana", "Blog", "Roundup", "timeShift", "GrafanaCon"]
cover_image = "/assets/img/blog/timeshift/timeshift_14.jpg"
cover_opacity = "0.4"
cover_blur = "1px"
description = "A weekly roundup of articles and links from Grafana and the surrounding community"
categories = ["timeShift", "Grafana Buzz"]
excerpt = "This week we have a Loki presentation video from FOSDEM, using Grafana and Prometheus with Ansible, real-time heart monitoring during a presentation and info on GrafanaCon LA day 2 tracks and workshops."
+++

### Welcome to TimeShift
Time is running out to get your ticket to GrafanaCon LA, but you can still [grab one of the last remaining seats](http://grafanacon.org).

Day 2 is going to be filled with morning tracks on:

* Real-time analytics in IoT
* Cloud Native observability
* SQL and business analytics

Also, we'll have hands-on workshops and talks:

* Become a contributor - Get started developing Grafana
* Writing React plugins
* Grafana feature deep dives
* Grafana plugin demos and showcases

We're really excited how the schedule has shaped up and hope you can join us!
<hr />

<div class="row row--no-gutters">
	<div class="col col--sm-3">
		<img src="/assets/img/blog/timeshift/grafana_release_icon.png" width="170" />
	</div>
	<div class="col col--sm-9">
		<h3>Latest Beta Release: Grafana v6.0 Beta1</h3>
		<h5>New Features</h5>
		<ul>
			<li><strong>Explore</strong>: A whole new way to do ad-hoc metric queries and exploration. Split view in half and compare metrics &amp; logs and much much more. <a href="http://docs.grafana.org/features/explore/" rel="nofollow noopener">Read more here</a></li>
			<li><strong>Alerting</strong>: Adds support for Google Hangouts Chat notifications <a href="https://github.com/grafana/grafana/issues/11221" rel="nofollow noopener">#11221</a>, thx <a href="https://github.com/PatrickSchuster" rel="nofollow noopener">@PatrickSchuster</a></li>
			<li><strong>Elasticsearch</strong>: Support bucket script pipeline aggregations <a href="https://github.com/grafana/grafana/issues/5968" rel="nofollow noopener">#5968</a></li>
			<li><strong>Influxdb</strong>: Add support for time zone (<code>tz</code>) clause <a href="https://github.com/grafana/grafana/issues/10322" rel="nofollow noopener">#10322</a>, thx <a href="https://github.com/cykl" rel="nofollow noopener">@cykl</a></li>
			<li><strong>Snapshots</strong>: Enable deletion of public snapshot <a href="https://github.com/grafana/grafana/issues/14109" rel="nofollow noopener">#14109</a></li>
			<li><strong>Provisioning</strong>: Provisioning support for alert notifiers <a href="https://github.com/grafana/grafana/issues/10487" rel="nofollow noopener">#10487</a>, thx <a href="https://github.com/pbakulev" rel="nofollow noopener">@pbakulev</a></li>
		</ul>
		<p>For a full list of changes, be sure to read through the <a href="https://community.grafana.com/t/release-notes-v6-0-x/14010" target="_blank">release notes</a> and get more in-depth info about the features in the <a href="http://docs.grafana.org/guides/whats-new-in-v6-0/?utm_source=blog&utm_campaign=timeshift_79" target="_blank">documentation</a>.</p>
		<a href="https://grafana.com/grafana/download/beta?utm_source=blog&utm_campaign=timeshift_79" target="_blank" class="btn btn--primary">Download Grafana v6.0 Beta1 Now</a>
	</div>
</div>

<br />
<hr />

#### From the Blogosphere
[**[VIDEO] Grafana Loki: Like Prometheus, but for logs**](https://ftp.osuosl.org/pub/fosdem/2019/UB2.252A/loki_prometheus_for_logs.mp4): Loki author and Grafana Labs VP, Product Tom Wilkie spoke at fosdemDEM last week on his latest stop on the Loki road show. The organizers of FOSDEM were in top form and had the video of his talk up the next day! That's a high bar to set as we prep for GrafanaCon LA and get videos published in a timely manner.

[**FOSDEM Public Dashboards**](https://dashboard.fosdem.org/d/q4EXc9lik/noisy-rooms?orgId=1&from=1549075554720&to=1549232280301): The organizers of FOSDEM track tons of different metrics and visualize them in Grafana - from amount of conference swag remaining, to room capacity, and even the noise level of rooms. 

[**Prometheus with Grafana Using Ansible**](https://itnext.io/prometheus-with-grafana-using-ansible-549e575c9dfa): This walkthrough shows you how to setup Grafana using Ansible. After Grafana is set up, Mitesh shows you how to add a data source and create a dashboard with Prometheus metrics.

[**Visualizing my heart rate on stage using a Hue lamp and a heart rate sensor and .NET**](https://danielwertheim.se/visualising-my-heart-rate-on-stage-using-a-hue-lamp-and-a-heart-rate-sensor-and-net/): At the Swetugg conference in Stockholm this week, Daniel tracked his heart rate in real time using a sensor and ANT+ SDK, which was published via NATS. He then visualised this data in 2 ways– first, on a Grafana dashboard, and second via a smart lightbulb that changed hues depending on his stress level. This article walks through how he did it, and the reactions he received after the talk.

[**Couchbase Monitoring Integration with Prometheus and Grafana**](https://blog.couchbase.com/couchbase-monitoring-integration-with-prometheus-and-grafana/): Using the new Couchbase exporter for Prometheus, you can visualize the performance of your Couchbase clusters in Grafana. This tutorial shows you how install and configure the components and import your first dashboard.


<br />
<hr />

<div class="row row--internal-gutters">
	<div class="col col--sm-8">
		<a href="https://www.grafanacon.org/" target="_blank"><img src="/assets/img/blog/timeshift/grafanacon_ga_tickets_tweet.jpg" width="600" /></a>
	</div>
	<div class="col col--sm-4">
		<h4>Get your tickets while they last!</h4>
		<p>Join us in Los Angeles, California February 25-26, 2019 for 2 days of talks and in-depth workshops on Grafana and the open source monitoring ecosystem. Learn about Grafana and new/upcoming features and projects (*cough* <strong><a href="http://grafana.com/loki/?utm_source=blog&utm_campaign=timeshift_79" target="_blank">Grafana Loki</a></strong> *cough*) and the broader ecosystem like <strong>Prometheus</strong>, <strong>Graphite</strong>, <strong>InfluxDB</strong>, <strong>Kubernetes</strong>, and more.</p>
		<a class="btn btn--outline" href="http://www.grafanacon.org/" target="_blank"><strong>Register Now!</strong></a>
	</div>
</div>
<br />
<br />

<div class="sponsors">
	<div class="row row--md-gutters text-center">
		<div class="col col--sm-12 text-center">
			<div class="sponsor-header">Thank you to our sponsors for making GrafanaCon possible!</div>
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
	<p>We're looking for passionate people from every corner of the world who want to solve interesting and challenging problems in a fun, supportive environment. Join us! Check out all of our open positions.</p>
	<a class="btn btn-outline" href="https://grafana.com/about/hiring?utm_source=blog&utm_campaign=timeshift_79" target="_blank">View All our Open Positions</a>
	</div>
	<div class="col col--sm-8">
		<a href="https://grafana.com/about/hiring?utm_source=blog&utm_campaign=timeshift_79" target="_blank">
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
			<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Our brand new 70&quot; displays for all of our lovely <a href="https://twitter.com/hashtag/Grafana?src=hash&amp;ref_src=twsrc%5Etfw">#Grafana</a> dashboards using <a href="https://twitter.com/hashtag/elastic?src=hash&amp;ref_src=twsrc%5Etfw">#elastic</a> <a href="https://twitter.com/hashtag/influxdb?src=hash&amp;ref_src=twsrc%5Etfw">#influxdb</a> <a href="https://twitter.com/hashtag/metricbeat?src=hash&amp;ref_src=twsrc%5Etfw">#metricbeat</a> <a href="https://twitter.com/hashtag/filebeat?src=hash&amp;ref_src=twsrc%5Etfw">#filebeat</a> and much more 😍 <a href="https://t.co/72LuVndY8v">pic.twitter.com/72LuVndY8v</a></p>&mdash; Alex Gläser (@APGlaeser) <a href="https://twitter.com/APGlaeser/status/1093507232782839808?ref_src=twsrc%5Etfw">February 7, 2019</a></blockquote>
			<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
			<p>Those displays look great! Nice shirt too!</p>
		</div>
	</div>
</div>

<hr />
<br />

#### How are we doing?
We're always looking to make TimeShift better. If you have feedback, please let us know! Email or send us a tweet, or post something at our [community forum](http://community.grafana.com?utm_source=blog&utm_campaign=timeshift_79).

Follow us on [Twitter](http://twitter.com/grafana), like us on [Facebook](http://facebook.com/grafana), and join the [Grafana Labs community](http://grafana.com/signup?utm_source=blog&utm_campaign=timeshift_79).
