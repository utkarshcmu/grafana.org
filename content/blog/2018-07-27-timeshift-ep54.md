+++
title = "timeShift(GrafanaBuzz, 1w) Issue 54"
author = "trent"
date = "2018-07-27"
keywords = ["Grafana", "Blog", "Roundup", "timeShift"]
cover_image = "/assets/img/blog/timeshift/timeshift_14.jpg"
cover_opacity = "0.4"
cover_blur = "1px"
description = "A weekly roundup of articles and links from Grafana and the surrounding community"
categories = ["timeShift", "Grafana Buzz"]
excerpt = "Details on the new Grafana v5.2.2 release, notes on our new Flux data source plugin, and playing with weather APIs"
+++

### Welcome to TimeShift
This week's big news is that Grafana v5.2.2 was released and includes fixes for Prometheus graphs, dashboard links, loading external plugins, SQL connection leaks, and more. Also, check out our new Grafana Flux plugin and monitor temperature and forecasts using Grafana and the openweathermap API.

Have an article you'd like included in an upcoming TimeShift? [Contact Us](mailto:hello@grafana.com).

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
			<a href="https://community.grafana.com/t/release-notes-v5-2-x/7894?utm_source=blog&utm_campaign=timeshift_54" target="_blank">See everything new in Grafana v5.2.2</a>.
		</p>
		<a href="https://grafana.com/grafana/download?utm_source=blog&utm_campaign=timeshift_54" target="_blank" class="btn btn--primary">Download Grafana 5.2.2 Now</a>
	</div>
</div>


<br />
<hr />

#### From the Blogosphere
[**How the New Influx Query Engine Was Designed—And How to Use It With Grafana**](https://grafana.com/blog/2018/07/26/how-the-new-influx-query-engine-was-designedand-how-to-use-it-with-grafana/?utm_source=blog&utm_campaign=timeshift_54): Learn about the design of InfluxData's new functional query engine Flux in a recap from GrafanaCon EU, and check out the new Flux plugin for Grafana to start using it today!

[**How to Collect Docker Daemon Metrics**](https://ops.tips/gists/how-to-collect-docker-daemon-metrics/): Docker ships with native Prometheus integration - the Docker daemon can generate metrics about it and let you scrape that. Check out how to gather Docker daemon metrics in Linux and MacOS.

[**Grafana + Prometheus = Awesome**](https://www.olivercoding.com/2018-07-24-grafana/): A walkthrough of setting up and configuring a Prometheus/Grafana stack with a few example queries to get you started with your first dashboard.

[**Playing with Grafana and weather APIs**](https://gonzalo123.com/2018/07/23/playing-with-grafana-and-weather-apis/): After receiving a [Beewi](http://www.bee-wi.com/produits/capteurs/capteur-de-temperature/) temperature sensor, Gonzalo wanted to visualize the data from the [openweathermap](https://openweathermap.org/) API using Grafana. This article shows you how to collect the data and visualize temperature, UV index, current weather conditions, and forecast in a Grafana dashboard.

[**Monitoring temperature and humidity with a Raspberry Pi 3, DHT22 sensor, InfluxDB and Grafana**](https://www.definit.co.uk/2018/07/monitoring-temperature-and-humidity-with-a-raspberry-pi-3-dht22-sensor-influxdb-and-grafana/): In a second weather related article, Sam needed to track the temperature of his garage for a very important reason - brewing beer. He shares his equipment, setup, scripts and how he intends to improve the setup in the future.

[**Integration for ServiceNow table API and Grafana**](https://funinit.wordpress.com/2018/07/20/integration-for-servicenow-table-api-and-grafana/): In a follow up on the article about [integrating ServiceNow with Grafana](https://funinit.wordpress.com/2018/02/20/simple-integration-of-servicenow-and-grafana/), we learn about the newly re-written snow-grafana-proxy plugin, along with the new configuration options, parameters and command line options.

<br />
<hr />

#### Grafana Plugins
OpenNMS updated their Helm app this week. Depending on your Grafana installation, there are 2 ways to update your plugins – for on-prem Grafana, use the <a href="http://docs.grafana.org/administration/cli/#grafana-cli?utm_source=blog&utm_campaign=timeshift_54" target="_blank">grafana-cli tool</a>, or for <a href="https://grafana.com/cloud/grafana?utm_source=blog&utm_campaign=timeshift_54" target="_blank">Hosted Grafana</a> update with one-click.
<br />
<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/opennms-helm-app/versions/2.0.0/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong>OpenNMS Helm App</strong> - Version 2.0.0 has been released. It includes a new datasource for querying flow data from OpenNMS and requires Grafana 5.x or greater.
			</p>
			<p>
				<strong>Other new features are:</strong>
			</p>
			<ul>
				<li>Support for "fallback" attributes to the performance datasource.</li>
				<li>The ability to configure query timeouts for all of the datasources in the OpenNMS helm plugin.</li>
			</ul>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/opennms-helm-app?utm_source=blog&utm_campaign=timeshift_54" target="_blank"><strong>Install</strong></a>
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
			<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Last Thursday, wrote a custom data streaming stack as a POC and used <a href="https://twitter.com/grafana?ref_src=twsrc%5Etfw">@grafana</a> to visualize the output. Forgot to turn it off before I left work for a long weekend. Here&#39;s where the ISS went all that time: <a href="https://t.co/qy6UqAzXAb">pic.twitter.com/qy6UqAzXAb</a></p>&mdash; Drew Furgiuele (@Pittfurg) <a href="https://twitter.com/Pittfurg/status/1021366018915078147?ref_src=twsrc%5Etfw">July 23, 2018</a></blockquote>
			<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
			<p>This is awesome! Thanks for sharing.</p>
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
	<a class="btn btn-outline" href="https://grafana.com/about/hiring?utm_source=blog&utm_campaign=timeshift_54" target="_blank">View our Open Positions</a>
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
Hope you enjoyed this issue of TimeShift. What do you think? Are there other types of content you'd like to see here? Submit a comment on this issue below, or post something at our [community forum](http://community.grafana.com?utm_source=blog&utm_campaign=timeshift_54).

Follow us on [Twitter](http://twitter.com/grafana), like us on [Facebook](http://facebook.com/grafana), and join the [Grafana Labs community](http://grafana.com/signup?utm_source=blog&utm_campaign=timeshift_54).

