+++
title = "timeShift(GrafanaBuzz, 1w) Issue 60"
author = "trent"
date = "2018-09-14"
keywords = ["Grafana", "Blog", "Roundup", "timeShift"]
cover_image = "/assets/img/blog/timeshift/timeshift_14.jpg"
cover_opacity = "0.4"
cover_blur = "1px"
description = "A weekly roundup of articles and links from Grafana and the surrounding community"
categories = ["timeShift", "Grafana Buzz"]
excerpt = "Plugin updates and articles on monitoring mixins, cloud native monitoring, monitoring your microservices, and a unique way to know when your software license is going to expire."
+++

### Welcome to TimeShift
This week we're sharing articles on monitoring mixins, cloud native monitoring, monitoring your microservices, and a unique way to know when your software license is going to expire.
See something we missed? Know of an article that might be a good fit for an upcoming issue? [Contact us](mailto:hello@grafana.com)!
<br />
<hr />

<div class="row row--no-gutters">
	<div class="col col--sm-3">
		<img src="/assets/img/blog/timeshift/grafana_release_icon.png" width="170" />
	</div>
	<div class="col col--sm-9">
		<h3>Latest Stable Release: Grafana 5.2.4</h3>
		<h5>Bug Fixes</h5>
		<ul>
			<li>
<strong>GrafanaCli</strong>: Fixed issue with grafana-cli install plugin resulting in corrupt http response from source error. Fixes <a href="https://github.com/grafana/grafana/issues/13079">#13079</a></li>
			</ul>
		<p>
			<a href="https://community.grafana.com/t/release-notes-v5-2-x/7894?utm_source=blog&utm_campaign=timeshift_60" target="_blank">See everything new in Grafana v5.2.4</a>.
		</p>
		<a href="https://grafana.com/grafana/download?utm_source=blog&utm_campaign=timeshift_60" target="_blank" class="btn btn--primary">Download Grafana 5.2.4 Now</a>
		<br />
		<hr />
	</div>
</div>
<div class="row row--no-gutters">
	<br />
	<div class="col col--sm-9 col--sm-offset-3">
		<h3>Latest Beta Release: Grafana 5.3.0beta-1</h3>
		<h5>Major New Features</h5>
		<ul>
<li><strong>Alerting</strong>: Notification reminders <a href="https://github.com/grafana/grafana/issues/7330">#7330</a>, thx <a href="https://github.com/jbaublitz">jbaublitz</a></li>
<li><strong>Dashboard</strong>: TV &amp; Kiosk mode changes, new cycle view mode button in dashboard toolbar <a href="https://github.com/grafana/grafana/pull/13025">#13025</a></li>
<li><strong>OAuth</strong>: Gitlab OAuth with support for filter by groups <a href="https://github.com/grafana/grafana/issues/5623">#5623</a>, thx <a href="https://github.com/BenoitKnecht">BenoitKnecht</a></li>
<li><strong>Postgres</strong>: Graphical query builder <a href="https://github.com/grafana/grafana/issues/10095">#10095</a>, thx <a href="https://github.com/svenklemm">svenklemm</a></li>
</ul>
		<p>
			There are a lot of other new features and fixes including the grafana-cli fix included in 5.2.4, so please check out the <a href="https://community.grafana.com/t/release-notes-v5-3-x/10244?utm_source=blog&utm_campaign=timeshift_60" target="_blank">release notes</a> to see everything that's new in Grafana 5.3.0beta-1.
		</p>
		<a href="https://grafana.com/grafana/download/beta?utm_source=blog&utm_campaign=timeshift_60" target="_blank" class="btn btn--primary">Download Grafana 5.3.0beta-1 Now</a>
	</div>
</div>


<br />
<hr />

<div class="row row--no-gutters">
	<div class="col col--sm-3">
		<h4>GrafanaCon LA <br />CFP Now Open!</h4>
		<p>Join us in Los Angeles, California February 25-26, 2019 for 2 days of talks focused on Grafana and the open source monitoring ecosystem.</p>
		<a class="btn btn--outline" href="https://www.grafanacon.org/2019/cfp" target="_blank"><strong>Submit You CFP Today</strong></a>
	</div>
	<div class="col col--sm-9">
		<a href="https://www.grafanacon.org/2019/cfp" target="_blank"><img src="/assets/img/blog/timeshift/grafanacon_cfp_timeshift.png" width="600" /></a>
	</div>
</div>

<br />
<hr />

#### From the Blogosphere
[**Everything You Need to Know About Monitoring Mixins**](https://grafana.com/blog/2018/09/13/everything-you-need-to-know-about-monitoring-mixins/?utm_source=blog&utm_campaign=timeshift_60):  In this recap from the most recent PromCon in Munich, Tom Wilkie dives into monitoring mixins – a solution for packaging together templates for Grafana dashboards and Prometheus alerts related to a specific piece of software. In addition to the recap, we've included the video demo and his presentation slides.

[**Reporting End of License on Temp Products with Chocolatey, Python, Telegraf and Grafana**](https://medium.com/@fabienlenoir/reporting-end-of-license-on-temp-products-with-chocolatey-python-telegraf-and-grafana-7ca0a558f372): Fabien walks us through how he uses Grafana alerts to let him know when his software licenses are about to expire.

[**IoT / SmartHome - Send EnOcean Sensor Data to Kafka**](https://m-button.blogspot.com/2018/09/iot-smarthome-send-enocean-sensor-data.html):  This article walks you through the steps to get your IoT sensor data visualized in Grafana. An EnOcean sensor will send data to Jeedom, which will feed a MQTT broker and then a synchronizer will send each received message to a Kafka topic. Then the latest value will be exposed to Prometheus and displayed on a Grafana dashboard.

[**Cloud Native Monitoring and Visualization with Prometheus and Grafana**](https://blogs.oracle.com/cloudnative/monitoring-and-visualization-prometheus-and-grafana/): A brief article on setting up a cloud native monitoring solution. Learn the basics of monitoring and observability, and get familiar with Prometheus and Grafana to make use of them in your Kubernetes environment.  

[**Go Microservices Blog Series, Part 15 - Monitoring with Prometheus.**](http://callistaenterprise.se/blogg/teknik/2018/09/12/go-blog-series-part15/):  Part 15 in the Go Microservices blog series tackles monitoring with Prometheus and Grafana. You'll learn about service discovery, adding endpoints, setting up the stack, and see some example queries to get you going.

[**Helm Chart Exporter**](https://kubedex.com/kubedex-helm-chart-exporter-for-prometheus/):  Ever wanted to know what versions of software are running on your Kubernetes cluster? Now, assuming you’re using Helm to install everything, you can.

<br />
<hr />

#### Grafana Plugin Update
We have four plugin updates to share this week. Updating Grafana plugins is easy – for on-prem Grafana, use the <a href="http://docs.grafana.org/administration/cli/#grafana-cli?utm_source=blog&utm_campaign=timeshift_60" target="_blank">grafana-cli tool</a>, or for <a href="https://grafana.com/cloud/grafana?utm_source=blog&utm_campaign=timeshift_60" target="_blank">Hosted Grafana</a> update with one-click at grafana.com.
<br />
<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/natel-usgs-datasource/versions/0.0.2/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong>USGS Water Services Data Source</strong> - The most important change is that USGS moved their service URL and this now avoids the 301 error. Also, this now nicely picks the mean daily value when you zoom out the instantaneous service to a large time window.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/natel-usgs-datasource?utm_source=blog&utm_campaign=timeshift_60" target="_blank"><strong>Install</strong></a>
			</p>
		</div>
	</div>
</div>
<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/vertamedia-clickhouse-datasource/versions/1.7.0/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong>Clickhouse Data Source</strong> - Updates to Clickhouse Data Source 1.7 include:
			</p>
			<ul>
				<li>Provide <code>$adhoc</code> macros for using ad-hoc filters in inner queries (thx to <a href="https://github.com/vavrusa" target="_blank">@vavrusa</a>)</li>
				<li>Allow to set custom query for ad-hoc filter via <code>adhoc_query_filter</code> variable</li>
				<li>Provide new Round value <code>$step</code> for auto-rounding according to graph resolution changes</li>
			</ul>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/vertamedia-clickhouse-datasource?utm_source=blog&utm_campaign=timeshift_60" target="_blank"><strong>Install</strong></a>
			</p>
		</div>
	</div>
</div>
<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/akumuli-datasource/versions/1.2.4/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong>Akumuli Data Source</strong> - Minor bug fixed in the latest issue. Limit on number of returned data-points was set using the <code>maxDataPoints</code> value. That values was too small in some cases.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/akumuli-datasource?utm_source=blog&utm_campaign=timeshift_60" target="_blank"><strong>Install</strong></a>
			</p>
		</div>
	</div>
</div>
<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/digiapulssi-breadcrumb-panel/versions/1.1.4/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong>Breadcrumb Panel</strong> - The Breadcrumb Panel received some minor style tweaks and fixed an issue with the display of the panel title.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/digiapulssi-breadcrumb-panel?utm_source=blog&utm_campaign=timeshift_60" target="_blank"><strong>Install</strong></a>
			</p>
		</div>
	</div>
</div>
<br />
<hr />

<div style=" padding: 20px; background: url(/assets/img/blog/timeshift/polygon_texture_black.jpg); background-size: cover; border-radius: 4px;">
	<h4>We're Hiring!</h4>
	<p>We've added new open positions at Grafana Labs! Do you love open source software? Do you thrive on tackling complex challenges to build the future? Want to work with awesome people? Be the next to join our team!
	</p>
	<a class="btn btn-outline" href="https://grafana.com/about/hiring?utm_source=blog&utm_campaign=timeshift_60" target="_blank">View our Open Positions</a>
</div>

<br />
<hr />
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
			<img style="border-radius: 50%;" class="large" src="/assets/img/blog/timeshift/meetup.jpg" />
		</div>
		<div class="col col--md-8 col--sm-offset-1">
			<p>
				<strong><a href="https://www.meetup.com/Cloud-Native-Computing-Stockholm/events/254618193/" target="_blank">Cloud Native Computing Stockholm | Stockholm, Sweden - September 25, 2018</a>:</strong>
				<br />
				<strong>Torkel Ödegaard: What's Going On at Grafana</strong> - In this session Torkel will provide an update on the project and discuss what’s new/what's coming in the future. He'll also cover some “best practices/interesting things seen in the wild,” and save some time for Q&A.
			</p>
			<a href="https://www.meetup.com/Cloud-Native-Computing-Stockholm/events/254618193/" target="_blank" class="btn btn--outline">RSVP Now</a>
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
			<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Forget servers. Grafana looks much better monitoring particle accelerators. (wip) <a href="https://t.co/4WLsOpeI9M">pic.twitter.com/4WLsOpeI9M</a></p>&mdash; Laurence Stant (@laurence_stant) <a href="https://twitter.com/laurence_stant/status/1039896419828736001?ref_src=twsrc%5Etfw">September 12, 2018</a></blockquote>
			<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
			<p>Indeed! Be sure to checkout talks from the fine folks at <a href="https://youtu.be/JR7HZ2LTozg" target="_blank">FermiLab</a> and <a href="https://www.youtube.com/watch?v=ksjDBjApl6Q" target="_blank">CERN</a> from previous GrafanaCons too.</p>
		</div>
	</div>
</div>

<hr />
<br />


#### How are we doing?
Hope you enjoyed this issue of TimeShift. What do you think? Are there other types of content you'd like to see here? Submit a comment on this issue below, or post something at our [community forum](http://community.grafana.com?utm_source=blog&utm_campaign=timeshift_60).

Follow us on [Twitter](http://twitter.com/grafana), like us on [Facebook](http://facebook.com/grafana), and join the [Grafana Labs community](http://grafana.com/signup?utm_source=blog&utm_campaign=timeshift_60).

