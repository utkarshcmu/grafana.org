+++
title = "timeShift(GrafanaBuzz, 1w) Issue 73"
author = "trent"
date = "2018-12-20"
keywords = ["Grafana", "Blog", "Roundup", "timeShift", "Loki", "Cortex", "GrafanaCon"]
cover_image = "/assets/img/blog/timeshift/timeshift_14.jpg"
cover_opacity = "0.4"
cover_blur = "1px"
description = "A weekly roundup of articles and links from Grafana and the surrounding community"
categories = ["timeShift", "Grafana Buzz"]
excerpt = "Last issue of TimeShift for 2018. News on GrafanaCon LA day 2 workshops, Grafana Loki, and learn about Cortex: the platform that powers Grafana Cloud."
+++

### Welcome to TimeShift
As 2018 draws to a close, we'd like to thank all of our readers for their support and feedback. We look forward to returning in 2019 and sharing more articles about Grafana and the open source monitoring community.

Also, **[GrafanaCon LA](http://grafanacon.org)** is coming up Feb 25-26, 2019 and we're excited to announce **day 2** is going to be packed with **TSDB-focused tracks and hands-on workshops**. Learn how to get the most out of Grafana, how to extend Grafana's visualization capabilities and get instruction from the experts. We're also putting together an IoT session where you can get hands-on visualizing sensor data. It's going to be a blast, so [grab your ticket](http://www.grafanacon.org/) before they're sold out!

<div class="row row--internal-gutters">
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
See an article we missed? [Contact us](mailto:hello@grafana.com).

<br />
<hr />

<div class="row row--no-gutters">
	<div class="col col--sm-3">
		<img src="/assets/img/blog/timeshift/grafana_release_icon.png" width="170" />
	</div>
	<div class="col col--sm-9">
		<h3>Latest Stable Release: Grafana v5.4.2</h3>
		<h5>Release Highlights</h5>
		<ul>
			<li><strong>Datasource admin</strong>: Fix for issue creating new data source when same name exists <a href="https://github.com/grafana/grafana/issues/14467" rel="nofollow noopener">#14467</a></li>
			<li><strong>OAuth</strong>: Fix for oauth auto login setting, can now be set using env variable <a href="https://github.com/grafana/grafana/issues/14435" rel="nofollow noopener">#14435</a></li>
			<li><strong>Dashboard search</strong>: Fix for searching tags in tags filter dropdown.</li>
		</ul>
		<a href="https://grafana.com/grafana/download?utm_source=blog&utm_campaign=timeshift_73" target="_blank" class="btn btn--primary">Download Grafana v5.4.2 Now</a>
	</div>
</div>

<br />
<hr />

#### From the Blogosphere
[**[VIDEO] On the path to full observability with OSS (and launch of Loki)**](https://www.youtube.com/watch?v=U7C5SpRtK74): The video from David Kaltschmidt's KubeCon 2018 presentation is now available. Learn how to instrument an app with Prometheus and Jaeger, how to debug your app, and get a sneak peek at Grafana Loki, our new Prometheus-inspired open source logging project.

[**Cortex: a multi-tenant, horizontally scalable Prometheus-as-a-Service**](https://www.cncf.io/blog/2018/12/18/cortex-a-multi-tenant-horizontally-scalable-prometheus-as-a-service/): Dive into Cortex, the open source Prometheus-as-a-Service platform that powers Grafana Cloud. Learn about the history of the project, architecture, the gaps it helps fill, and common use-cases.

[**Marvel at Grafana Loki: The Prometheus of open source log backends**](https://jaxenter.com/grafana-loki-log-aggregation-streams-153520.html): Jane Elizabeth distills much of the information we've released on Loki into a recap of what Loki is, what it does and how to try it out today. She also slips in a few references to the mischevious Norse God and the Marvel Cinematic Universe.

[**How to graph IDRAC temperature, power usage and fan speed measurements in Grafana**](https://www.lahilabs.com/2018/12/15/how-to-graph-idrac-temperature-power-usage-and-fan-speed-measurements-in-grafana/): Learn how to get your Idrac sensor metrics into Grafana to visualize metrics for temperature, power, and fan speed in 20 minutes.

[**[Cosmos] How to Set Up Your Own Network Monitoring Dashboard**](https://medium.com/cypher-core/cosmos-how-to-set-up-your-own-network-monitoring-dashboard-fe49c63a8271): A quick walkthrough on how to install and configure Grafana and Prometheus to monitor and visualize data on the Cosmos network.

<br />
<hr />

#### Grafana Plugin Update
The Kentik Connect Pro app got an update this week to better display API errors. Read more and install the update below. To update any of your plugins in your on-prem Grafana, use the <a href="http://docs.grafana.org/administration/cli/#grafana-cli?utm_source=blog&utm_campaign=timeshift_73" target="_blank">grafana-cli tool</a>, or for <a href="https://grafana.com/cloud/grafana?utm_source=blog&utm_campaign=timeshift_73" target="_blank">Grafana Cloud</a> update with one-click.
<br />
<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/kentik-app/versions/1.3.2/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong>Kentik Connect Pro</strong> - Version 1.3.2 of the Kentik Connect Pro App was released and updates:
				<ul>
					<li>Easier troubleshooting when configuring the app: API errors will now be displayed in an alert-box.</li>
					<li>API query errors encountered by a panel will now be displayed in the dialog box available on the top-left corner diagnostic panel.</li>
				</ul>
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/kentik-app?utm_source=blog&utm_campaign=timeshift_73" target="_blank"><strong>Install</strong></a>
			</p>
		</div>
	</div>
</div>
 
<br />
<hr />
<br />

<div class="row row--internal-gutters">
	<div class="col col--sm-4">
		<h4>We're Hiring</h4>
	<p>Do you love open source software? Do you thrive on tackling complex challenges to build the future? Want to work with awesome people? Be the next to join our team!</p>
	<a class="btn btn-outline" href="https://grafana.com/about/hiring?utm_source=blog&utm_campaign=timeshift_73" target="_blank">View All our Open Positions</a>
	</div>
	<div class="col col--sm-8">
		<a href="https://grafana.com/about/hiring?utm_source=blog&utm_campaign=timeshift_73" target="_blank">
			<img src="/assets/img/blog/timeshift/careers_section.jpg" />
		</a>
	</div>
</div>

<br />
<hr />
<br />

<div>
	<div class="row row--no-gutters">
		<div class="col col--sm-12">
			<h4>Tweet of the Week</h4>
			We scour Twitter each week to find an interesting/beautiful dashboard or monitoring related tweet and show it off! <a href="https://twitter.com/hashtag/monitoringlove?src=hash" target="_blank">#monitoringLove</a>
			<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Grafana v6 Preview: The new Panel Edit UX just landed in master! You can now easily change visualization type. This will be refined further in coming weeks, but try it out now in nightly builds! <a href="https://t.co/p0k40Hyo55">pic.twitter.com/p0k40Hyo55</a></p>&mdash; Grafana (@grafana) <a href="https://twitter.com/grafana/status/1074753267790479361?ref_src=twsrc%5Etfw">December 17, 2018</a></blockquote>
			<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
			<p>We're really excited at all the new enhancements and UX tweaks we're making in Grafana v6.0 - all focused on making Grafana more intuitive and easy to use. Grafana v6.0 stable won't be ready until February, but you can give the new functionality a try in the <a href="https://grafana.com/grafana/download?utm_source=blog&utm_campaign=timeshift_73" target="_blank">nightly builds</a>.</p>
		</div>
	</div>
</div>

<hr />
<br />

#### How are we doing?
That wraps up TimeShift for 2018. We hope you've enjoyed reading our weekly roundups. What would you like to see here in 2019? Email or send us a tweet, or post something at our [community forum](http://community.grafana.com?utm_source=blog&utm_campaign=timeshift_73).

Follow us on [Twitter](http://twitter.com/grafana), like us on [Facebook](http://facebook.com/grafana), and join the [Grafana Labs community](http://grafana.com/signup?utm_source=blog&utm_campaign=timeshift_73).
