+++
title = "timeShift(GrafanaBuzz, 1w) Issue 76"
author = "trent"
date = "2019-01-18"
keywords = ["Grafana", "Blog", "Roundup", "timeShift", "Azure Log Analytics", "GrafanaCon"]
cover_image = "/assets/img/blog/timeshift/timeshift_14.jpg"
cover_opacity = "0.4"
cover_blur = "1px"
description = "A weekly roundup of articles and links from Grafana and the surrounding community"
categories = ["timeShift", "Grafana Buzz"]
excerpt = "News about the Azure Data Explorer plugin for Grafana, updates to the GrafanaCon LA speaker list, new functionality to the polystat panel plugin and more."
+++

### Welcome to TimeShift
This week we share news about the Azure Data Explorer plugin for Grafana, updates to the [GrafanaCon LA speaker list](http://grafanacon.org), new functionality to the [polystat panel plugin](https://grafana.com/plugins/grafana-polystat-panel?utm_source=blog&utm_campaign=timeshift_76) and more.

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
		<a href="https://grafana.com/grafana/download?utm_source=blog&utm_campaign=timeshift_76" target="_blank" class="btn btn--primary">Download Grafana v5.4.3 Now</a>
	</div>
</div>

<br />
<hr />

#### From the Blogosphere
[**Azure Data Explorer plugin for Grafana dashboards**](https://azure.microsoft.com/en-us/blog/azure-data-explorer-plugin-for-grafana-dashboards/): The Grafana and Azure Data Explorer teams have created a dedicated plugin which enables you to connect to and visualize data from Azure Data Explorer using its intuitive and powerful Kusto Query Language. This article will walk you through the steps to get you started and have you up and running in a few minutes. 

[**Monitor Apache Kafka Using Grafana and Prometheus**](https://medium.com/@mousavi310/monitor-apache-kafka-using-grafana-and-prometheus-873c7a0005e2): Learn about JMX, how to use Prometheus to store Kafka JMX metrics, and how to visualize those metrics using Grafana to monitor your Kafka broker.

[**Building My Own Telemetry System for F1 2017 (Game) Using Golang, InfluxDB and Grafana.**](https://medium.com/coinmonks/building-my-own-telemetry-system-for-f1-2017-game-using-golang-influxdb-and-grafana-48dedbd2cdc1): Rafael noticed a UDP Telemetry option in the settings for [F1 2017](https://en.wikipedia.org/wiki/F1_2017_(video_game)) on his Playstation 4, which got him thinking how he could better track this data. The following post chronicles his journey to set up and configure a monitoring stack using Grafana to visualize the speed of his F1 car.

[**Leveraging OpenShift or Kubernetes for automated performance tests (part 3)**](https://developers.redhat.com/blog/2019/01/16/openshift-kubernetes-automated-performance-tests-part-3/): In the third article in this series, dive into the details for building an environment for automating performance testing with JMeter and Jenkins. Also, check out [part 1](https://developers.redhat.com/blog/2018/11/22/automated-performance-testing-kubernetes-openshift/) and [part 2](https://developers.redhat.com/blog/2019/01/03/leveraging-openshift-or-kubernetes-for-automated-performance-tests-part-2/).

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
<hr />
<br />

#### Grafana Plugin Update
This week we added drilldown link functionality to the Polystat panel plugin. To update or install this update (or any plugin) on your on-prem Grafana, use the <a href="http://docs.grafana.org/administration/cli/#grafana-cli?utm_source=blog&utm_campaign=timeshift_72" target="_blank">grafana-cli tool</a>, or for <a href="https://grafana.com/cloud/grafana?utm_source=blog&utm_campaign=timeshift_72" target="_blank">Hosted Grafana</a> update with one-click.
<br />
<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/grafana-polystat-panel/versions/1.0.15/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong>Polstat Panel</strong> - Version 1.0.15 of the Polystat panel plugin includes new clickthrough template variable evaluation and "cell" based name and value referencing.
				See [https://github.com/grafana/grafana-polystat-panel#templating](https://github.com/grafana/grafana-polystat-panel#templating) for new templating options and examples.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/grafana-polystat-panel?utm_source=blog&utm_campaign=timeshift_76" target="_blank"><strong>Install</strong></a>
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
	<p>We're kicking off our 2019 hiring with some new opportunities to join the team! If you work in Technical Customer Support or want to check out all of our open positions, check our careers section.</p>
	<a class="btn btn-outline" href="https://grafana.com/about/hiring?utm_source=blog&utm_campaign=timeshift_76" target="_blank">View All our Open Positions</a>
	</div>
	<div class="col col--sm-8">
		<a href="https://grafana.com/about/hiring?utm_source=blog&utm_campaign=timeshift_76" target="_blank">
			<img src="/assets/img/blog/timeshift/careers_section.jpg" />
		</a>
	</div>
</div>

<hr />
<br />

#### How are we doing?
What would you like to see here in 2019? Email or send us a tweet, or post something at our [community forum](http://community.grafana.com?utm_source=blog&utm_campaign=timeshift_76).

Follow us on [Twitter](http://twitter.com/grafana), like us on [Facebook](http://facebook.com/grafana), and join the [Grafana Labs community](http://grafana.com/signup?utm_source=blog&utm_campaign=timeshift_76).
