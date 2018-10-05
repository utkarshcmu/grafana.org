+++
title = "timeShift(GrafanaBuzz, 1w) Issue 63"
author = "trent"
date = "2018-10-05"
keywords = ["Grafana", "Blog", "Roundup", "timeShift"]
cover_image = "/assets/img/blog/timeshift/timeshift_14.jpg"
cover_opacity = "0.4"
cover_blur = "1px"
description = "A weekly roundup of articles and links from Grafana and the surrounding community"
categories = ["timeShift", "Grafana Buzz"]
excerpt = "How to get your company to send you to GrafanaCon, monitoring Kubernetes, automating your dashboards, and more. "
+++

### Welcome to TimeShift
This week we released Grafana 5.3.0beta-3 in prep for a stable release that should be available next week. In addition to details on the new beta, we have a lot of new and updated plugins to share, and our weekly roundup of Grafana-related articles from around the Internet.

**Don't forget to grab an [early bird ticket](http://grafanacon.org) to GrafanaCon before they're sold out!** Also, the CFP will close in a little less than two weeks so don't wait until the last minute to submit a talk. If your talk is selected, we'll comp your ticket or refund one you've already purchased. We've received some great proposals, but keep them coming! See [grafanacon.org](http://grafanacon.org) for more information.

Know of an article that might be a good fit for an upcoming issue? [Contact us](mailto:hello@grafana.com)!

Enjoy!
<br />
<hr />


<div class="row row--no-gutters">
	<div class="col col--sm-9">
		<a href="https://www.grafanacon.org/" target="_blank"><img src="/assets/img/blog/timeshift/grafanacon_earlybird.jpg" width="600" /></a>
	</div>
	<div class="col col--sm-3">
		<h4>GrafanaCon LA <br />Early Bird Tickets Now on Sale</h4>
		<p>Join us in Los Angeles, California February 25-26, 2019 for 2 days of talks focused on Grafana and the open source monitoring ecosystem.</p>
		<a class="btn btn--outline" href="https://www.grafanacon.org/" target="_blank"><strong>Get Your Ticket Now</strong></a>
	</div>
</div>

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
			<a href="https://community.grafana.com/t/release-notes-v5-2-x/7894?utm_source=blog&utm_campaign=timeshift_63" target="_blank">See everything new in Grafana v5.2.4</a>.
		</p>
		<a href="https://grafana.com/grafana/download?utm_source=blog&utm_campaign=timeshift_63" target="_blank" class="btn btn--primary">Download Grafana 5.2.4 Now</a>
		<br />
		<hr />
	</div>
</div>
<div class="row row--no-gutters">
	<br />
	<div class="col col--sm-9 col--sm-offset-3">
		<h3>Latest Beta Release: Grafana 5.3.0-beta3</h3>
		<h5>Major New Features</h5>
		<ul>
			<li><strong>Stackdriver</strong>: Fix for missing ngInject <a href="https://github.com/grafana/grafana/pull/13511">#13511</a></li>
			<li><strong>Permissions</strong>: Fix for broken permissions selector <a href="https://github.com/grafana/grafana/issues/13507">#13507</a></li>
			<li><strong>Alerting</strong>: Alert reminders deduping not working as expected when running multiple Grafana instances <a href="https://github.com/grafana/grafana/issues/13492">#13492</a></li>
		</ul>
		<a href="https://grafana.com/grafana/download/beta?utm_source=blog&utm_campaign=timeshift_63" target="_blank" class="btn btn--primary">Download Grafana 5.3.0-beta3 Now</a>
	</div>
</div>


<br />
<hr />

#### From the Blogosphere
[**How to gather and display metrics in Red Hat OpenShift**](https://www.redhat.com/en/blog/how-gather-and-display-metrics-red-hat-openshift):  Learn how to use Apache Spark Metrics and Prometheus to gather and display metrics with Grafana on Red Hat OpenShift.

[**Pillars of Observability**](https://tasdikrahman.me/2018/10/01/pillars-of-observability/): The first in an upcoming series to serve as an introduction to observability and what it means. This post discusses metrics, logs, and tracing and common solutions for each.

[**Lab #1 – Migrating to Grafana/InfluxDB**](https://blog.abc-arbitrage.com/2018/09/28/lab-1-migrating-to-grafana-influxdb/):  While switching from a monolithic approach to a services-oriented architecture, ABC Arbitrage also needed a monitoring tool to gather and report application metrics. This post walks through the decisions they made to build their new monitoring stack.

[**Real Time Analytics for IoT Data using Mosquitto, AWS Kinesis and InfluxDB**](https://velotio.com/blog/2018/9/26/real-time-analytics-for-iot-data-using-mosquitto-aws-kinesis-and-influxdb): IoT devices generate a large amount of data. Learn how build a data pipeline through common open source components and gain actionable insight from this data.

<br />
<hr />

#### Grafana Plugin Update
Lots of new plugin and plugin updates were published this week, including updates to two of our [premium plugins](https://grafana.com/plugins?premium=1&utm_source=blog&utm_campaign=timeshift_63). To update any of your plugins in your on-prem Grafana, use the <a href="http://docs.grafana.org/administration/cli/#grafana-cli?utm_source=blog&utm_campaign=timeshift_63" target="_blank">grafana-cli tool</a>, or for <a href="https://grafana.com/cloud/grafana?utm_source=blog&utm_campaign=timeshift_63" target="_blank">Hosted Grafana</a> update with one-click.
<br />
<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="/assets/img/blog/timeshift/darkskylogo.png" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="new-plugin-tag"><strong>NEW PLUGIN</strong></div><br/>
				<strong>Dark Sky Datasource</strong> - This new datasource plugin allows you to graph historical weather conditions and forecast data from the <a href="https://darksky.net" target="_blank">Dark Sky</a> weather service in Grafana.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/andig-darksky-datasource?utm_source=blog&utm_campaign=timeshift_63" target="_blank"><strong>Install</strong></a>
			</p>
		</div>
	</div>
</div>
<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/flant-statusmap-panel/versions/0.0.1/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="new-plugin-tag"><strong>NEW PLUGIN</strong></div><br/>
				<strong>Statusmap Panel</strong> - The new Statusmap panel plugin allows you to visualize multiple time series in one panel. The panel has several display modes. Discrete mode allows you to map discrete values to colors. The opacity and spectrum modes are similar to the heatmap panel.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/flant-statusmap-panel?utm_source=blog&utm_campaign=timeshift_63" target="_blank"><strong>Install</strong></a>
			</p>
		</div>
	</div>
</div>
<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/ryantxu-annolist-panel/versions/0.0.1/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="new-plugin-tag"><strong>NEW PLUGIN</strong></div><br/>
				<strong>Annotation List Panel</strong> - This new panel shows a table of Grafana user annotations. The annotations in the list are clickable and will navigate to the panel and time range of the chosen annotation. 
				This can be very useful if you want an overview of events that have occurred and to be able to quickly navigate to that event.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/ryantxu-annolist-panel?utm_source=blog&utm_campaign=timeshift_63" target="_blank"><strong>Install</strong></a>
			</p>
		</div>
	</div>
</div>
<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/grafana-datadog-datasource/versions/1.1.0/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-premium-plugin-tag"><strong>UPDATED PREMIUM PLUGIN</strong></div><span class="icon-premium-plugin"><img src="/assets/img/icon_diamond.svg" /></span><br/>
				<strong>Datadog Datasource</strong> - The latest release of the Datadog Datasource now supports some additional functions. Single metric arithmetic allows you to multiply a metric value by a number (<code>value * 100</code> for example). The following three functions are now also supported:</p>
					<ul>					
						<li>Arithmetic -> Log10 function</li>
						<li>Smoothing -> Auto Smoother</li>
						<li>Regression -> Trend Line</li>
					</ul>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/grafana-datadog-datasource?utm_source=blog&utm_campaign=timeshift_63" target="_blank"><strong>Install</strong></a>
			</p>
		</div>
	</div>
</div>
<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/grafana-splunk-datasource/versions/1.0.0/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-premium-plugin-tag"><strong>UPDATED PREMIUM PLUGIN</strong></div><span class="icon-premium-plugin"><img src="/assets/img/icon_diamond.svg" /></span><br/>
				<strong>Splunk Datasource</strong> - A bug for relative date ranges in Grafana has been fixed in the Splunk Datasource. Date ranges like <code>Yesterday</code> and <code>Previous week</code> should now always work.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/grafana-splunk-datasource?utm_source=blog&utm_campaign=timeshift_63" target="_blank"><strong>Install</strong></a>
			</p>
		</div>
	</div>
</div>
<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/btplc-trend-box-panel/versions/0.1.9/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong>Trend Box and Alarm Box</strong> - The <a href="https://grafana.com/plugins/btplc-trend-box-panel" target="_blank">Trend Box</a> and <a href="https://grafana.com/plugins/btplc-alarm-box-panel" target="_blank">Alarm Box</a> panels both received a fix for a visual bug in Grafana 5.x. 
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/btplc-trend-box-panel?utm_source=blog&utm_campaign=timeshift_63" target="_blank"><strong>Install Trend Box</strong></a>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/btplc-alarm-box-panel?utm_source=blog&utm_campaign=timeshift_63" target="_blank"><strong>Install Alarm Box</strong></a>
			</p>
		</div>
	</div>
</div>
<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/akumuli-datasource/versions/1.2.6/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong>Akumuli Datasource</strong> - The latest release of the Akumuli Datasource includes a new feature and a bug fix. The new feature is support for template variables of type <code>interval</code> that can be used with <code>Downsample</code> control.
			</p>
			<p>
				Queries using the Top N feature now work properly when using aliasing (formatting the legend key). 
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/akumuli-datasource?utm_source=blog&utm_campaign=timeshift_63" target="_blank"><strong>Install</strong></a>
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
	<a class="btn btn-outline" href="https://grafana.com/about/hiring?utm_source=blog&utm_campaign=timeshift_63" target="_blank">View our Open Positions</a>
</div>

<br />
<hr />
<br />

#### Upcoming Events
In between code pushes we like to speak at, sponsor and attend all kinds of conferences and meetups. We also like to make sure we mention other Grafana-related events happening all over the world. If you're putting on just such an event, let us know and we'll list it here.

<div class="blog-plugin">
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
	<div class="row row--md-gutters">
		<div class="col col--md-3">
			<img style="border-radius: 50%;" class="large" src="/assets/img/blog/timeshift/influxdays.png" />
		</div>
		<div class="col col--md-8 col--sm-offset-1">
			<p>
				<strong><a href="https://influxdays.com/" target="_blank">InfluxDays 2018 | San Francisco - November 7-8, 2018</a>:</strong>
				<br />
				<strong>Matt Toback: Optimizing the Grafana Platform for Flux</strong> – Flux, the new InfluxData Data Scripting Language (formerly IFQL), super-charges queries both for analytics and data science. Matt will give a quick overview of the language features as well as the moving parts for a working deployment. Grafana is an open source dashboard solution that shares Flux’s passion for analytics and data science. For that reason, they are very excited to showcase the new Flux support within Grafana, and a couple of common analytics use cases to get the most out of your data.
			</p>
			<p>
				In this talk, Matt Toback from Grafana Labs will share the latest updates they have made with their Flux builder in Grafana.
			</p>
			<a href="https://influxdays.com/" target="_blank" class="btn btn--outline">Register Now</a>
		</div>
	</div>
	<br />
	<div class="row row--md-gutters">
		<div class="col col--md-3">
			<img style="border-radius: 50%;" class="large" src="/assets/img/blog/kubecon.png" />
		</div>
		<div class="col col--md-8 col--sm-offset-1">
			<p>
				<strong><a href="https://events.linuxfoundation.org/events/kubecon-cloudnativecon-north-america-2018/" target="_blank">KubeCon + CloudNativeCon North America 2018 | Seattle, WA - December 10-13, 2018</a>:</strong>
				<strong>David Kaltschmidt: On the OSS Path to Full Observability with Grafana</strong> - Grafana is coming &quot;off the wall&quot;. To make it more useful for interactive debugging, David and his team have already integrated two pillars of observability - metrics and logs. They are currently adding tracing to complete the incident response experience. All to minimize the cost of context switching during those crucial minutes after getting paged.
			</p>
			<p>
				This talk will demonstrate the various methods we&apos;ve used to link the data together. Prometheus is providing the metrics. Via its histograms, request latencies can be extracted to inform each tracing span from Jaeger. Grafana also ensures that lines from your log aggregation system are annotated with span and trace IDs, as well as the other way around: associating logged values with spans.
			</p>
			<p>
				David will show how these OSS parts should be deployed to achieve full observability in an engaging user experience that saves valuable minutes.
			</p>
			<p>
				We are also a proud sponsor of the Cloud Native Computing Foundation's flagship conference. Join Kubernetes, Prometheus, OpenTracing, Fluentd, gRPC, containerd, rkt, CNI, Envoy, Jaeger, Notary, TUF, Vitess, CoreDNS, NATS, Linkerd and Helm as the community gathers for four days to further the education and advancement of cloud native computing.
			</p>
			<a href="https://events.linuxfoundation.org/events/kubecon-cloudnativecon-north-america-2018/" target="_blank" class="btn btn--outline">Register Now</a>
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
			<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">The <a href="https://twitter.com/grafana?ref_src=twsrc%5Etfw">@grafana</a> project has grown so much lately. In core &amp; external contributors. 39 contributors last month! Exited about starting work on Grafana v6.0 to launch at GrafanaCon LA 2019! <a href="https://t.co/c6TbGNUsAb">pic.twitter.com/c6TbGNUsAb</a></p>&mdash; Torkel Ödegaard (@torkelo) <a href="https://twitter.com/torkelo/status/1047508560626798593?ref_src=twsrc%5Etfw">October 3, 2018</a></blockquote>
			<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
			<p>We are extremely proud of the Grafana open source community. Thank you!!</p>
		</div>
	</div>
</div>

<hr />
<br />

#### How are we doing?
Hope you enjoyed this issue of TimeShift. What do you think? Are there other types of content you'd like to see here? Submit a comment on this issue below, or post something at our [community forum](http://community.grafana.com?utm_source=blog&utm_campaign=timeshift_63).

Follow us on [Twitter](http://twitter.com/grafana), like us on [Facebook](http://facebook.com/grafana), and join the [Grafana Labs community](http://grafana.com/signup?utm_source=blog&utm_campaign=timeshift_63).

