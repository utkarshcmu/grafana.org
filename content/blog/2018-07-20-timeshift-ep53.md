+++
title = "timeShift(GrafanaBuzz, 1w) Issue 53"
author = "trent"
date = "2018-07-20"
keywords = ["Grafana", "Blog", "Roundup", "timeShift"]
cover_image = "/assets/img/blog/timeshift/timeshift_14.jpg"
cover_opacity = "0.4"
cover_blur = "1px"
description = "A weekly roundup of articles and links from Grafana and the surrounding community"
categories = ["timeShift", "Grafana Buzz"]
excerpt = "With summer holidays approaching and upcoming vacations on the calendar, TimeShift is going to take next week off. We look forward to returning the week after next."
+++

### Welcome to TimeShift

This week we're showing off a couple of new plugins, plus a case study showing how PingCAP troubleshoots more than a thousand metrics from their TiDB clusters. Also, Tweet of the Week returns with a graph celebrating France's World Cup victory. Enjoy!

Have an article you'd like included in an upcoming TimeShift? [Contact Us](mailto:hello@grafana.com).

<br />
<hr />

#### Latest Stable Release: Grafana 5.2.1
<div class="row row--no-gutters">
	<div class="col col--sm-3">
		<img src="/assets/img/blog/timeshift/grafana_release_icon.png" width="170" />
	</div>
	<div class="col col--sm-9">
		<h4>New Features</h4>
		<ul>
			<li><a href="http://docs.grafana.org/guides/whats-new-in-v5-2/#elasticsearch-alerting">Elasticsearch alerting</a> it’s finally here!</li>
			<li><a href="http://docs.grafana.org/guides/whats-new-in-v5-2/#native-builds-for-arm">Native builds for ARM native builds of Grafana for many more platforms!</li>
			<li><a href="http://docs.grafana.org/guides/whats-new-in-v5-2/#improved-docker-image">Improved Docker image</a> with support for docker secrets</li>
			<li><a href="http://docs.grafana.org/guides/whats-new-in-v5-2/#security">Security</a> make your Grafana instance more secure</li>
			<li><a href="http://docs.grafana.org/guides/whats-new-in-v5-2/#prometheus">Prometheus</a> with alignment enhancements</li>
			<li><a href="http://docs.grafana.org/guides/whats-new-in-v5-2/#influxdb">InfluxDB</a> with support for a new function</li>
			<li><a href="http://docs.grafana.org/guides/whats-new-in-v5-2/#alerting">Alerting</a> with alert notification channel type for Discord</li>
			<li><a href="http://docs.grafana.org/guides/whats-new-in-v5-2/#dashboards-panels">Dashboards &amp; Panels</a> with save &amp; import enhancements</li>
		</ul>
		<p>
			<a href="https://community.grafana.com/t/release-notes-v5-2-x/7894?utm_source=blog&utm_campaign=timeshift_53" target="_blank">See everything new in Grafana v5.2.1</a>.
		</p>
		<a href="https://grafana.com/grafana/download?utm_source=blog&utm_campaign=timeshift_53" target="_blank" class="btn btn--primary">Download Grafana 5.2.1 Now</a>
	</div>
</div>


<br />
<hr />

#### From the Blogosphere
[**How Grafana Helps PingCAP Troubleshoot TiDB Deployments**](https://grafana.com/grafana/ping-cap-case-study?utm_source=blog&utm_campaign=timeshift_53): A case study on how PingCAP diagnoses and troubleshoots issues from a thousand metrics on their open source TiDB clusters using Grafana.

[**Azure Log into Grafana using Stream Analytics jobs**](https://www.linkedin.com/pulse/azure-log-grafana-using-stream-analytics-jobs-matthieu-rossi/): Learn how to export data using Azure Stream Analytics jobs in Azure SQL and visualize the data in Grafana.

[**How to Monitor ArangoDB using collectd, Prometheus and Grafana**](https://www.arangodb.com/tutorials/monitoring-collectd-prometheus-grafana/): The folks from ArangoDB have put together a tutorial on how to install, configure and visualize metrics for ArangoDB.

[**Room temperature monitoring with Philips Hue, Node-RED and Grafana**](https://www.linkedin.com/pulse/room-temperature-monitoring-philips-hue-node-red-j%C3%BCrgen-breitenbaumer/): This how-to guide explains how to use a Philips Hue Smart Home lighting system to measure the temperature in a room and visualize the data in a Grafana Dashboard.

[**Visualizing Data using Grafana**](https://selfhostedhome.com/visualizing-data-using-grafana/): We've seen an explosion of interest in using Grafana to visualize data for home automation. This tutorial shows you how to install and run Grafana on a Raspberry Pi with InfluxDB, and Home Assistant.

<br />
<hr />

#### Grafana Plugins
This week we have an update to the Clickhouse data source and 2 new plugins to share. Depending on your installation, there are 2 ways to update plugins – for on-prem Grafana, use the <a href="http://docs.grafana.org/administration/cli/#grafana-cli?utm_source=blog&utm_campaign=timeshift_49" target="_blank">grafana-cli tool</a>, or for <a href="https://grafana.com/cloud/grafana?utm_source=blog&utm_campaign=timeshift_49" target="_blank">Hosted Grafana</a> update with one-click.
<br />
<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/akumuli-datasource/versions/1.0.3/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="new-plugin-tag"><strong>NEW PLUGIN</strong></div><br/>
				<strong>Akumuli Data source</strong> - The <a href="https://akumuli.org/" target="_blank">Akumuli timeseries database</a> now has a published Grafana datasource plugin. It contains a full-featured query editor and supports templating.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/akumuli-datasource?utm_source=blog&utm_campaign=timeshift_53" target="_blank"><strong>Install</strong></a>
			</p>
		</div>
	</div>
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/smartmakers-trafficlight-panel/versions/1.0.0/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="new-plugin-tag"><strong>NEW PLUGIN</strong></div><br/>
				<strong>TrafficLight Panel</strong> - A new status panel with traffic lights has been published. The TrafficLight Panel allows you to add a traffic light per query and place it on an image background.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/smartmakers-trafficlight-panel?utm_source=blog&utm_campaign=timeshift_53" target="_blank"><strong>Install</strong></a>
			</p>
		</div>
	</div>
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/vertamedia-clickhouse-datasource/versions/1.5.1/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong>Clickhouse Data source</strong> - Added a performance improvement that optimizes memory use for range time series. See this <a href="https://github.com/Vertamedia/clickhouse-grafana/pull/61" target="_blank">PR</a> for more details.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/vertamedia-clickhouse-datasource?utm_source=blog&utm_campaign=timeshift_53" target="_blank"><strong>Install</strong></a>
			</p>
		</div>
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
			<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">When you support France but only have Grafana <a href="https://twitter.com/hashtag/FRA?src=hash&amp;ref_src=twsrc%5Etfw">#FRA</a> <a href="https://t.co/tKMpD1WxYI">pic.twitter.com/tKMpD1WxYI</a></p>&mdash; Louis (@lpoinsig) <a href="https://twitter.com/lpoinsig/status/1018921407839813632?ref_src=twsrc%5Etfw">July 16, 2018</a></blockquote>
			<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
			<p>Laissez le bon temps rouler!</p>
		</div>
	</div>
</div>

<br />
<hr />
<br />

<div style=" padding: 20px; background: url(/assets/img/blog/timeshift/polygon_texture_black.jpg); background-size: cover; border-radius: 4px;">
	<h4>We're Hiring!</h4>
	<p>We're looking for passionate and talented engineers for positions in New York/Stockholm and remote! Do you love open source software? Do you thrive on tackling complex challenges to build the future? Want to work with awesome people? Be the next to join our team!
	</p>
	<a class="btn btn-outline" href="https://grafana.com/about/hiring?utm_source=blog&utm_campaign=timeshift_53" target="_blank">View our Open Positions</a>
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
Hope you enjoyed this issue of TimeShift. What do you think? Are there other types of content you'd like to see here? Submit a comment on this issue below, or post something at our [community forum](http://community.grafana.com?utm_source=blog&utm_campaign=timeshift_53).

Follow us on [Twitter](http://twitter.com/grafana), like us on [Facebook](http://facebook.com/grafana), and join the [Grafana Labs community](http://grafana.com/signup?utm_source=blog&utm_campaign=timeshift_53).

