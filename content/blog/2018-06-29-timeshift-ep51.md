+++
title = "timeShift(GrafanaBuzz, 1w) Issue 51"
author = "trent"
date = "2018-06-29"
keywords = ["Grafana", "Blog", "Roundup", "timeShift"]
cover_image = "/assets/img/blog/timeshift/timeshift_14.jpg"
cover_opacity = "0.4"
cover_blur = "1px"
description = "A weekly roundup of articles and links from Grafana and the surrounding community"
categories = ["timeShift", "Grafana Buzz"]
+++

### Welcome to TimeShift
With summer holidays approaching and upcoming vacations on the calendar, TimeShift is going to take next week off. We look forward to returning the week after next. 

This week we're proud to announce Grafana v5.2.1 stable is now available! Learn more and download the new stable release below, install the latest plugin updates, and check out this week's collection of articles from around the web. Enjoy!

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
			<a href="https://community.grafana.com/t/release-notes-v5-2-x/7894?utm_source=blog&utm_campaign=timeshift_51" target="_blank">See everything new in Grafana v5.2.1</a>. 
		</p>
		<a href="https://grafana.com/grafana/download?utm_source=blog&utm_campaign=timeshift_51" target="_blank" class="btn btn--primary">Download Grafana 5.2.1 Now</a>
	</div>
</div>


<br />
<hr />

#### From the Blogosphere
[**Evolution of Telemetry at Bloomberg**](https://grafana.com/blog/2018/06/28/evolution-of-telemetry-at-bloomberg): This recap from GrafanaCon EU takes us through the twists and turns a company at the scale of Bloomberg has taken to achieve the robust monitoring system they have now. You can also [watch the entire presentation](https://youtu.be/v6AoyEovSa4) and [download the slides](https://grafana.com/files/grafanacon_eu_2018/Bloomberg_GrafanaCon_EU_2018.pdf).

[**Be a Grafana/Graphite Power User**](https://www.hidefsoftware.co.uk/2018/06/28/be-a-grafana-power-user/): Knowing the basics of a tool doesn't prevent you from experiencing [frustrating issues and gotchas](https://grafana.com/blog/2016/03/03/25-graphite-grafana-and-statsd-gotchas/) from time to time. Robert put together a list of recommendations that should get you well on your way to becoming a Graphite and Grafana power user.

[**Production Monitoring at Scale**](https://eng.leanplum.com/production-monitoring-at-scale-b9bed6ac9725): Leanplumb's monitoring stack was falling short in a couple of areas. This article provides an overview of their current environment and a list of must-haves for their next monitoring system. After a successful proof of concept, they're embracing an open source monitoring stack.

[**Monitoring Kubernetes with Prometheus 2.1+, Grafana 5.1+ and Helm**](https://rohanc.me/monitoring-kubernetes-prometheus-grafana/): A quick install guide for Prometheus 2.1.x, Grafana 5.1.x and Helm that includes some of the new dashboard and data source provisioning features.

[**Monitoring HiveMQ with Prometheus and Grafana**](https://www.hivemq.com/blog/monitoring-hivemq-prometheus): Learn how to install and configure Prometheus and Grafana for monitoring HiveMQ metrics.

[**Spring Boot Actuator Metrics Monitoring with Prometheus and Grafana**](https://www.callicoder.com/spring-boot-actuator-metrics-monitoring-dashboard-prometheus-grafana/): In [part 1](https://www.callicoder.com/spring-boot-actuator/) Rajeev covered what a spring-boot-actuator module does and how to configure it in a Spring Boot application. This article will teach you how to add monitoring to your Spring Boot application.


[**Check Output Metric Extraction with InfluxDB & Grafana**](http://blog.sensu.io/check-output-metric-extraction-with-influxdb-grafana): At Grafana Labs we believe strongly in interoperability to provide a tool to monitor your data no matter where it lives – a value also shared by our friends at Sensu. This article discusses how to connect different tools together and visualize the data in Grafana to create a custom monitoring solution. 

<br />
<hr />

#### Grafana Plugins
We have two new visualization panels to share as well as updates to the Worldmap Panel and Prometheus Alert Manager Data Source. To install and update your on-prem Grafana, use the <a href="http://docs.grafana.org/administration/cli/#grafana-cli?utm_source=blog&utm_campaign=timeshift_51" target="_blank">grafana-cli tool</a>, or do it with one click on <a href="https://grafana.com/cloud/grafana?utm_source=blog&utm_campaign=timeshift_51" target="_blank">Hosted Grafana</a>.
<br />
<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/marcuscalidus-svg-panel/versions/0.1.1/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="new-plugin-tag"><strong>NEW PLUGIN</strong></div><br/>
				<strong>SVG Panel</strong> - With the new SVG Panel you can build your own SVG images or animations that use metric data. It is like a mini-IDE where using <a href="http://snapsvg.io/" target="_blank">Snap.svg</a> and JavaScript, you can program your SVG's to change or respond to values from your metric query.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/marcuscalidus-svg-panel?utm_source=blog&utm_campaign=timeshift_51" target="_blank"><strong>Install</strong></a>
			</p>
		</div>
	</div>
</div>

<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/snuids-trafficlights-panel/versions/1.4.2/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="new-plugin-tag"><strong>NEW PLUGIN</strong></div><br/>
				<strong>Traffic Lights Panel</strong> - This new multistat visualizes thresholds for multiple metrics using traffic lights. With one query, you can see the status of multiple servers, for example.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/snuids-trafficlights-panel?utm_source=blog&utm_campaign=timeshift_51" target="_blank"><strong>Install</strong></a>
			</p>
		</div>
	</div>
</div>

<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/grafana-worldmap-panel/versions/0.1.1/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong>Worldmap Panel</strong> - A new update thanks to some Pull Requests from the Grafana community:
			</p>
			<ul>
				<li>New mapping option for table data that contains latitude and longitude columns. Thanks <a href="https://github.com/kylios" target="_blank">@kylios</a></li>
				<li>More mapping options for table data for data sources that cannot alias/rename the columns to the names that the Worldmap panel expects (e.g. `metric` for the metric column)</li>
				<li>Configuration option for turning mouse wheel zoom on or off. Thanks <a href="https://github.com/Perlovka" target="_blank">@Perlovka</a></li>
				<li>Upgrade of Leaflet JS. Thanks <a href="https://github.com/cbarbier" target="_blank">@cbarbier</a></li>
			</ul>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/grafana-worldmap-panel?utm_source=blog&utm_campaign=timeshift_51" target="_blank"><strong>Install</strong></a>
			</p>
		</div>
	</div>
</div>

<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/camptocamp-prometheus-alertmanager-datasource/versions/0.0.6/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong>Prometheus Alert Manager Data Source</strong> - In this latest update, the license is switched from MIT to Apache 2.0. The release also contains a workaround for a bug in Grafana so that the plugin should now work with provisioning.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/camptocamp-prometheus-alertmanager-datasource?utm_source=blog&utm_campaign=timeshift_51" target="_blank"><strong>Install</strong></a>
			</p>
		</div>
	</div>
</div>

<br />

<div style=" padding: 20px; background: url(/assets/img/blog/timeshift/polygon_texture_black.jpg); background-size: cover; border-radius: 4px;">
	<h4>We're Hiring!</h4>
	<p>We're looking for passionate and talented engineers for positions in New York/Stockholm and remote! Do you love open source software? Do you thrive on tackling complex challenges to build the future? Want to work with awesome people? Be the next to join our team!
	</p>
	<a class="btn btn-outline" href="https://grafana.com/about/hiring?utm_source=blog&utm_campaign=timeshift_51" target="_blank">View our Open Positions</a>
</div>

<br />

#### Upcoming Events
In between code pushes we like to speak at, sponsor and attend all kinds of conferences and meetups. We also like to make sure we mention other Grafana-related events happening all over the world. If you're putting on just such an event, let us know and we'll list it here.

<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--md-3">
			<img style="border-radius: 50%;" class="large" src="/assets/img/blog/timeshift/meetup.jpg" />
		</div>
		<div class="col col--md-8 col--sm-offset-1">
			<p>
				<strong><a href="https://www.meetup.com/Time-Series-Boston/events/249366642/" target="_blank">TimeSeries Boston | Boston, MA – July 17, 2018</a>:</strong>
				<br />
				<strong>Jacob Lisi: What does Kubernetes Look Like? Performance Monitoring & Visualization with Grafana</strong> - Monitoring Kubernetes is vital to understanding the health and performance of a cluster, but which metrics are most important to add to your dashboards and alert on? Jacob will discuss how to most effectively monitor and visualize your Kubernetes cluster using the Grafana Kubernetes plugin and PromQL. Some of the topics of discussion include(1) how and what to collect when monitoring Kubernetes, (2) how to bring your Grafana dashboards to the next level by using Kubernetes as a data-source, and (3) what to do when managing multiple clusters. All of these topics and more will be discussed to help people get the most out of their Kubernetes monitoring.
			</p>
			<a href="https://www.meetup.com/Time-Series-Boston/events/249366642/" target="_blank" class="btn btn--outline">RSVP</a>
		</div>
	</div>
	<br />
	<div class="row row--md-gutters">
		<div class="col col--md-3">
			<img style="border-radius: 50%;" class="large" src="/assets/img/blog/timeshift/prometheus_logo.svg" />
		</div>
		<div class="col col--md-8 col--sm-offset-1">
			<p>
				<strong><a href="https://sensu.io/summit" target="_blank">PromCon 2018 | Munich, Germany - August 9-10, 2018</a>:</strong>
				<br />
				PromCon is an event to connect Prometheus users and developers from around the world to exchange knowledge, best practices, and gain experience using Prometheus. Grafana Labs is one of the sponsors of the evening reception the diversity scholarship. More details to come - hope to see you there!
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
Hope you enjoyed this issue of TimeShift. What do you think? Are there other types of content you'd like to see here? Submit a comment on this issue below, or post something at our [community forum](http://community.grafana.com?utm_source=blog&utm_campaign=timeshift_51).

Follow us on [Twitter](http://twitter.com/grafana), like us on [Facebook](http://facebook.com/grafana), and join the [Grafana Labs community](http://grafana.com/signup?utm_source=blog&utm_campaign=timeshift_51).

