+++
title = "timeShift(GrafanaBuzz, 1w) Issue 48"
author = "trent"
date = "2018-06-08"
keywords = ["Grafana", "Blog", "Roundup", "timeShift"]
cover_image = "/assets/img/blog/timeshift/timeshift_14.jpg"
cover_opacity = "0.4"
cover_blur = "1px"
description = "A weekly roundup of articles and links from Grafana and the surrounding community"
categories = ["timeShift", "Grafana Buzz"]
excerpt = "We were in Portland this week attending Monitorama - one of our favorite annual conferences. We got the chance to catch up with old friends, make some new ones, and be part of an amazing community of passionate data and monitoring aficionados."
+++

### Welcome to TimeShift
We were in Portland this week attending Monitorama - one of our favorite annual conferences. We got the chance to catch up with old friends, make some new ones, and be part of an amazing community of passionate data and monitoring aficionados. Looking forward to Monitorama AMS in September!

Also this week we released Grafana v5.2.0-beta1 and... <strong>Elasticsearch alerting has arrived!</strong> Download it today and let us know what you think. Check out the specifics on the beta release below.
<br />
<hr />

#### Latest Beta Release: Grafana 5.2.0-beta1
<div class="row row--no-gutters">
	<div class="col col--sm-3">
		<img src="/assets/img/blog/timeshift/grafana_release_icon.png" width="170" />
	</div>
	<div class="col col--sm-9">
		<p>In addition to Elasticsearch alerting, we have a number of other enhancements including:
		</p>
		<ul>
			<li>Downloads now available for ARM, Mac platforms</li>
			<li>Improved Docker image</li>
			<li>Prometheus improvements</li>
			<li>Discord alert notifications</li>
			<li>Dashboard and panel improvements</li>
		</ul>
		<p>We're really excited to ship this new beta version and encourage you to try it out and let us know what you think. <a href="http://docs.grafana.org/guides/whats-new-in-v5-2/?utm_source=blog&utm_campaign=timeshift_48" target="_blank">See what else is new in Grafana v5.2.0-beta1</a>.
		</p>
		<a href="https://grafana.com/grafana/download/beta?utm_source=blog&utm_campaign=timeshift_48" target="_blank" class="btn btn--primary">Download Grafana 5.2.0-beta1 Now</a>
	</div>
</div>


<br />
<hr />

#### From the Blogosphere
[**GitLab's Github Importer Dashboard**](https://monitor.gitlab.net/dashboard/db/github-importer?orgId=1&from=now-30d&to=now): It's interesting to see the Github community's reaction to the Microsoft acquisition. In GitLab's public dashboard, you can the initial spike of Github projects being moved to GitLab following the announcement. It looks like it's starting to normalize, but will be fun to keep an eye on.

[**Prometheus and Grafana**](https://xincto.me/2018/05/prometheus-et-grafana.html): This is the third article in a series on spinning up your own Grafana and Prometheus monitoring stack. Part 1 covers the [principles of how Prometheus works](https://xincto.me/2018/05/prometheus-concepts-de-base.html), part 2 shows you how to [instrument your python code](https://xincto.me/2018/05/prometheus-bien-demarrer-en-python.html).

[**Automatic Data Source Configuration with Grafana 5**](https://www.unixdaemon.net/sysadmin/automatic-datasource-config-grafana-5/): A mini blog post on the new timesaving data source provisioning functionality in Grafana 5.

[**Quick Install of Prometheus, node_exporter and Grafana**](https://fritshoogland.wordpress.com/2018/06/06/quick-install-of-prometheus-node_exporter-and-grafana/): A short post on how to install Prometheus, node_exporter and Grafana in 3 steps using Ansible.

[**How to Install Grafana on Ubuntu 18.04 and Debian 9**](https://computingforgeeks.com/how-to-install-grafana-on-ubuntu-18-04-debian-9/): A quick guide to installing and configuring Grafana a few different ways; from the APT repo and via .deb packages.

[**Playing with Docker, MQTT, Grafana, InfluxDB, Python and Arduino**](https://gonzalo123.com/2018/06/04/playing-with-docker-mqtt-grafana-influxdb-python-and-arduino/): As an excuse to dive in and play with Grafana and InfluxDB, Gonzalo wanted to create a prototype of monitoring a sensor (in this example he used a simple potentiometer). He provides a step by step of his process, the source code and a video of the working prototype so you can build something similar.


<br />
<hr />

#### Grafana Plugins
Each week we highlight new and updated plugins that are available at grafana.com. It's important to keep your plugins up to date, since authors are constantly submitting bug fixes and new features. It's easy to update Grafana plugins – for on-prem Grafana, use the <a href="http://docs.grafana.org/administration/cli/#grafana-cli?utm_source=blog&utm_campaign=timeshift_48" target="_blank">grafana-cli tool</a>, or for <a href="https://grafana.com/cloud/grafana?utm_source=blog&utm_campaign=timeshift_48" target="_blank">Hosted Grafana</a> update with one-click.
<br />
<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/blackmirror1-statusbygroup-panel/versions/1.1.1/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="new-plugin-tag"><strong>NEW PLUGIN</strong></div><br/>
				<strong>Status Group By Panel</strong> - This new panel is a fork of the Vonage Status Panel plugin. The difference is that it can hold multiple values from the same data source and group different series, and select one metric as the high level status for the panel.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/blackmirror1-statusbygroup-panel?utm_source=blog&utm_campaign=timeshift_48" target="_blank"><strong>Install</strong></a>
			</p>
		</div>
	</div>
</div>
<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/digiapulssi-breadcrumb-panel/versions/1.1.3/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong>Breadcrumbs Panel</strong> - Updated to work with the new URL structure in Grafana 5.0.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/digiapulssi-breadcrumb-panel?utm_source=blog&utm_campaign=timeshift_48" target="_blank"><strong>Install</strong></a>
			</p>
		</div>
	</div>
</div>
<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/grafana-kairosdb-datasource/versions/3.0.1/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong>KairosDB Data Source</strong> - This used to be in core Grafana, so it is great to finally see some activity and a new update. The update contains some bug fixes as well as support for the KairosDB moving average aggregator (SmaAggregator).
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/grafana-kairosdb-datasource?utm_source=blog&utm_campaign=timeshift_48" target="_blank"><strong>Install</strong></a>
			</p>
		</div>
	</div>
</div>
<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/vertamedia-clickhouse-datasource/versions/1.5.0/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong>Clickhouse Data Source</strong> - Many new changes in this data source including:
				<ul>
					<li>New data source setting - default database. If set it will be prefilled in the query builder and used to make ad-hoc filters more convenient (thx to <a href="https://github.com/vavrusa" target="_blank">@vavrusa</a>)</li>
					<li>Support wildcard ad-hoc filters for dashboards using multiple tables (thx to <a href="https://github.com/vavrusa" target="_blank">@vavrusa</a>)</li>
					<li>Parse dimensions from <code>GROUP BY</code> to simplify querying (see pie chart and worldmap examples) (thx to <a href="https://github.com/vavrusa" target="_blank">@vavrusa</a>)</li>
					<li><code>$timeCol</code> to <code>$dateCol</code> renamed to be more clear with column types (thx to <a href="https://github.com/simPod" target="_blank">@simPod</a>)</li>
				</ul>
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/vertamedia-clickhouse-datasource?utm_source=blog&utm_campaign=timeshift_48" target="_blank"><strong>Install</strong></a>
			</p>
		</div>
	</div>
</div>

<br />

<div style=" padding: 20px; background: url(/assets/img/blog/timeshift/polygon_texture_black.jpg); background-size: cover; border-radius: 4px;">
	<h4>We're Hiring!</h4>
	<p>We're looking for passionate and talented engineers for positions in New York/Stockholm and remote! Do you love open source software? Do you thrive on tackling complex challenges to build the future? Want to work with awesome people? Be the next to join our team!
	</p>
	<a class="btn btn-outline" href="https://grafana.com/about/hiring?utm_source=blog&utm_campaign=timeshift_48" target="_blank">View our Open Positions</a>
</div>

<br />

#### Upcoming Events
In between code pushes we like to speak at, sponsor and attend all kinds of conferences and meetups. We also like to make sure we mention other Grafana-related events happening all over the world. If you're putting on just such an event, let us know and we'll list it here.

<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--md-3">
			<img style="border-radius: 50%;" class="large" src="/assets/img/blog/timeshift/influxdays.png" />
		</div>
		<div class="col col--md-8 col--sm-offset-1">
			<p>
				<strong><a href="https://influxdays.com/" target="_blank">InfluxDays London 2018 | London, United Kingdom - June 14-15, 2018</a>:</strong>
				<br />
				<strong>David Kaltschmidt - Grafana and Flux</strong><br />The new Influx Functional Query Language (now called Flux) super-charges queries both for analytics and data science. David will give a quick overview of the language features as well as the moving parts for a working deployment. Grafana is an open source dashboard solution that shares InfluxData’s passion for analytics and data science. For that reason, they are very excited to showcase the new Flux support within Grafana, and a couple of common analytics use cases to get the most out of your data.
			</p>
			<p>
				We're also a proud sponsor of InfluxDays London -  two days of technical talks around Telegraf, InfluxDB, Chronograf, Kapacitor, Grafana and adjacent technologies.
			</p>
			<a href="https://influxdays.com/" target="_blank" class="btn btn--outline">Register Now</a>
		</div>
	</div>
	<br />
	<div class="row row--md-gutters">
		<div class="col col--md-3">
			<img style="border-radius: 50%;" class="large" src="/assets/img/blog/timeshift/meetup.jpg" />
		</div>
		<div class="col col--md-8 col--sm-offset-1">
			<p>
				<strong><a href="https://www.meetup.com/Time-Series-Boston/events/249366642/" target="_blank">TimeSeries Boston | July 17, 2018</a>:</strong>
				<br />
				<strong>Jacob Lisi: What does Kubernetes Look Like? Performance Monitoring & Visualization with Grafana</strong> - Monitoring Kubernetes is vital to understanding the health and performance of a cluster, but which metrics are most important to add to your dashboards and alert on? Jacob will discuss how to most effectively monitor and visualize your Kubernetes cluster using the Grafana Kubernetes plugin and PromQL. Some of the topics of discussion include(1) how and what to collect when monitoring Kubernetes, (2) how to bring your Grafana dashboards to the next level by using Kubernetes as a data-source, and (3) what to do when managing multiple clusters. All of these topics and more will be discussed to help people get the most out of their Kubernetes monitoring.
			</p>
			<a href="https://www.meetup.com/Time-Series-Boston/events/249366642/" target="_blank" class="btn btn--outline">RSVP</a>
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
</div>
<hr />

<div>
	<div class="row row--no-gutters">
		<div class="col col--sm-12">
			<h4>Tweet of the Week</h4>
			We scour Twitter each week to find an interesting/beautiful dashboard or monitoring related tweet and show it off! <a href="https://twitter.com/hashtag/monitoringlove?src=hash" target="_blank">#monitoringLove</a>
			<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">I realize this is definitely too niche/lame for most everyone to care and I also realize it&#39;s baby&#39;s first monitoring system but look at this fucking grafana dashboard 👌 <a href="https://t.co/tBM36X8klq">pic.twitter.com/tBM36X8klq</a></p>&mdash; Cait (@CaitlinDelia) <a href="https://twitter.com/CaitlinDelia/status/1004444709400530947?ref_src=twsrc%5Etfw">June 6, 2018</a></blockquote>
			<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
			<p>Nice work Caitlin! If you need any help, be sure and let us know.</p>
		</div>
	</div>
</div>

<hr />
<br />

#### How are we doing?
Hope you enjoyed this issue of TimeShift. What do you think? Are there other types of content you'd like to see here? Submit a comment on this issue below, or post something at our [community forum](http://community.grafana.com?utm_source=blog&utm_campaign=timeshift_48).

Follow us on [Twitter](http://twitter.com/grafana), like us on [Facebook](http://facebook.com/grafana), and join the [Grafana Labs community](http://grafana.com/signup?utm_source=blog&utm_campaign=timeshift_48).

