+++
title = "timeShift(GrafanaBuzz, 1w) Issue 72"
author = "trent"
date = "2018-12-14"
keywords = ["Grafana", "Blog", "Roundup", "timeShift", "security", "GrafanaCon"]
cover_image = "/assets/img/blog/timeshift/timeshift_14.jpg"
cover_opacity = "0.4"
cover_blur = "1px"
description = "A weekly roundup of articles and links from Grafana and the surrounding community"
categories = ["timeShift", "Grafana Buzz"]
excerpt = "Logging is coming to Grafana, Monitoring at Stack Overflow, Announcements from AWS re:Invent 2018 and more!"
+++

### Welcome to TimeShift
The Grafana Labs team converged on Seattle this week for KubeCon + CloudNativeCon NA 2018 where we announced a new Prometheus-inspired, open source logging project we've been working on named Loki. We've been overwhelmed by the positive response and conversations it's sparked over the past few days. Please give it a try [on-prem or in the cloud](https://grafana.com/loki) and give us your feedback. You can read more about the project, our motivations, and check out the presentation in the blog section below.

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
		<a href="https://grafana.com/grafana/download?utm_source=blog&utm_campaign=timeshift_72" target="_blank" class="btn btn--primary">Download Grafana v5.4.2 Now</a>
	</div>
</div>

<br />
<hr />

#### From the Blogosphere
[**Loki: Prometheus-inspired, open source logging for cloud natives**](https://grafana.com/blog/2018/12/12/loki-prometheus-inspired-open-source-logging-for-cloud-natives/?utm_source=blog&utm_campaign=timeshift_72): An in-depth article on the motivations, architecture of Grafana Loki, and the future of logging in Grafana.

[**[PRESENTATION SLIDES] On the path to full observability with OSS (and launch of Loki)**](https://speakerdeck.com/davkal/on-the-path-to-full-observability-with-oss-and-launch-of-loki): David Kaltschmidt's KubeCon 2018 presentation on how to instrument an app with Prometheus and Jaeger, how do debug an app, and about Grafana's new log aggregation solution: Loki. We'll share the video once it's available.

[**TNS Context: Grafana Loki and KubeCon Takeaways**](https://thenewstack.io/tns-context-grafana-loki-and-kubecon-takeaways/): Tom Wilkie, VP, Product at Grafana Labs sat down for an interview with The New Stack at KubeCon + CloudNativeCon NA 2018 in Seattle to provide some additional information about Grafana Loki, answer questions about Prometheus, and share his takeaways from the sold-out event.

[**Monitoring CrateDB on Kubernetes with Prometheus and Grafana**](https://crate.io/a/monitoring-cratedb-on-kubernetes-with-prometheus-and-grafana/): Learn how to set up Prometheus and Grafana with CrateDB so that you can monitor CPU, memory, and disk usage, as well as CrateDB metrics.

[**Time-series Analysis with TimescaleDB, Grafana and Plotly**](https://corpglory.com/s/timescaledb-grafana-plotly-time-series-analysis/): In this post, the folks at CorpGlory describe how they do time-series analysis with TimescaleDB and Grafana, and the challenges they've overcome working with real-world time-series data.

[**Time Series at ShiftLeft**](https://blog.shiftleft.io/time-series-at-shiftleft-e1f98196909b): Preetam Jinka from ShiftLeft describes their requirements, their preferred TSDB, and the tooling they’ve developed to manage their infrastructure.

<br />
<hr />

<div class="row row--internal-gutters">
	<div class="col col--sm-12">
		<h4>GrafanaCon - We're shaking things up on day 2!</h4>
		<p><strong style="color:#fff;">You spoke and we listened.</strong> Based on your feedback, we're adding <strong style="color:#fff;">TSDB focused tracks and hands-on workshops</strong> to our second day program to give you a chance to dive into the nitty gritty of the most popular open source monitoring tools from the experts who build and maintain them.</p>
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
<div class="row row--internal-gutters">
	<div class="col col--sm-8">
		<a href="https://www.grafanacon.org/" target="_blank"><img src="/assets/img/blog/timeshift/grafanacon_ga_tickets_tweet.jpg" width="600" /></a>
	</div>
	<div class="col col--sm-4">
		<h4>Get your tickets while they last!</h4>
		<p>Join us in Los Angeles, California February 25-26, 2019 for 2 days of talks and in-depth workshops on Grafana and the open source monitoring ecosystem. Learn about Grafana and new/upcoming features and projects in the broader ecosystem like <strong>Prometheus</strong>, <strong>Graphite</strong>, <strong>InfluxDB</strong>, <strong>Kubernetes</strong>, and more.</p>
		<a class="btn btn--outline" href="https://www.grafanacon.org/" target="_blank"><strong>Register Now</strong></a>
	</div>
</div>

<br />
<hr />

#### Grafana Plugin Update
This week we share an update to a panel plugin that adds a number of new visualization options. To update any of your plugins in your on-prem Grafana, use the <a href="http://docs.grafana.org/administration/cli/#grafana-cli?utm_source=blog&utm_campaign=timeshift_72" target="_blank">grafana-cli tool</a>, or for <a href="https://grafana.com/cloud/grafana?utm_source=blog&utm_campaign=timeshift_72" target="_blank">Hosted Grafana</a> update with one-click.
<br />
<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/flant-statusmap-panel/versions/0.0.3/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong>Statusmap Panel</strong> - The Statusmap panel got a new update which adds lots of new visualization options:
				<ul>
					<li>Removes all buttons for discrete color mode.</li>
					<li>Solarized preset for discrete color mode.</li>
					<li>Fixes display null values as zero.</li>
					<li>Separate vertical and horizontal spacing for cards.</li>
					<li>Three sort modes for y axis labels (by metric, ascending and descending sort by name).</li>
				</ul>
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/flant-statusmap-panel?utm_source=blog&utm_campaign=timeshift_72" target="_blank"><strong>Install</strong></a>
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
	<a class="btn btn-outline" href="https://grafana.com/about/hiring?utm_source=blog&utm_campaign=timeshift_72" target="_blank">View All our Open Positions</a>
	</div>
	<div class="col col--sm-8">
		<a href="https://grafana.com/about/hiring?utm_source=blog&utm_campaign=timeshift_72" target="_blank">
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
			<blockquote class="twitter-tweet" data-conversation="none" data-lang="en"><p lang="en" dir="ltr">My grafana graphs are cooler. Thanks for the ad though. <a href="https://t.co/LUO6gOP9lU">pic.twitter.com/LUO6gOP9lU</a></p>&mdash; Greg Furstenwerth (@Stealthwater) <a href="https://twitter.com/Stealthwater/status/1073615044762591232?ref_src=twsrc%5Etfw">December 14, 2018</a></blockquote>
			<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
			<p>Beautiful!</p>
		</div>
	</div>
</div>

<hr />
<br />

#### How are we doing?
Thats a wrap for another issue of TimeShift. What do you think? Are there other types of content you'd like to see here? Submit a comment on this issue below, or post something at our [community forum](http://community.grafana.com?utm_source=blog&utm_campaign=timeshift_72).

Follow us on [Twitter](http://twitter.com/grafana), like us on [Facebook](http://facebook.com/grafana), and join the [Grafana Labs community](http://grafana.com/signup?utm_source=blog&utm_campaign=timeshift_72).
