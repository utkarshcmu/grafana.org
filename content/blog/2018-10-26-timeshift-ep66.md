+++
title = "timeShift(GrafanaBuzz, 1w) Issue 66"
author = "trent"
date = "2018-10-26"
keywords = ["Grafana", "Blog", "Roundup", "timeShift", "Stackdriver", "Postgres", "GrafanaCon"]
cover_image = "/assets/img/blog/timeshift/timeshift_14.jpg"
cover_opacity = "0.4"
cover_blur = "1px"
description = "A weekly roundup of articles and links from Grafana and the surrounding community"
categories = ["timeShift", "Grafana Buzz"]
excerpt = "Grafana v5.3.2, monitoring your AKS clusters, tracking your service availability and more."
+++

### Welcome to TimeShift
All Things Open, a conference focused on open source technologies, was held in Raleigh, NC this week and was bursting at the seams with over 4,500 attendees. Grafana Labs' own Tom Wilkie gave his [RED Method: How to instrument your services](https://grafana.com/blog/2018/08/02/the-red-method-how-to-instrument-your-services/?utm_source=blog&utm_campaign=timeshift_66) talk to a standing-room only crowd. We were excited to speak at and sponsor ATO and look forward to next year.

We only have a handful of [early bird tickets](https://ti.to/grafanacon/grafanacon-la-2019) left for **GrafanaCon LA**. Be sure to grab your ticket before Oct. 31 when prices go up.

Have an article you'd like shared here? [Contact us](mailto:hello@grafana.com)!
<br />
<hr />

<div class="row row--no-gutters">
	<div class="col col--sm-3">
		<img src="/assets/img/blog/timeshift/grafana_release_icon.png" width="170" />
	</div>
	<div class="col col--sm-9">
		<h3>Latest Stable Release: Grafana v5.3.2</h3>
		<h5>Updates in this release</h5>
		<ul>
			<li><strong>InfluxDB/Graphite/Postgres</strong>: Prevent cross site scripting (XSS) in query editor <a href="https://github.com/grafana/grafana/issues/13667">#13667</a>, thx <a href="https://github.com/svenklemm">@svenklemm</a></li>
			<li><strong>Postgres</strong>: Fix template variables error <a href="https://github.com/grafana/grafana/issues/13692">#13692</a>, thx <a href="https://github.com/svenklemm">@svenklemm</a></li>
			<li><strong>Cloudwatch</strong>: Fix service panic because of race conditions <a href="https://github.com/grafana/grafana/issues/13674">#13674</a>, thx <a href="https://github.com/mtanda">@mtanda</a></li>
			<li><strong>Cloudwatch</strong>: Fix check for invalid percentile statistics <a href="https://github.com/grafana/grafana/issues/13633">#13633</a>, thx <a href="https://github.com/apalaniuk">@apalaniuk</a></li>
			<li><strong>Stackdriver/Cloudwatch</strong>: Allow user to change unit in graph panel if cloudwatch/stackdriver datasource response doesn’t include unit <a href="https://github.com/grafana/grafana/issues/13718">#13718</a>, thx <a href="https://github.com/mtanda">@mtanda</a></li>
			<li><strong>Stackdriver</strong>: stackdriver user-metrics duplicated response when multiple resource types <a href="https://github.com/grafana/grafana/issues/13691">#13691</a></li>
			<li><strong>Variables</strong>: Fix text box template variable doesn’t work properly without a default value <a href="https://github.com/grafana/grafana/issues/13666">#13666</a></li>
			<li><strong>Variables</strong>: Fix variable dependency check when using <code>${var}</code> format <a href="https://github.com/grafana/grafana/issues/13600">#13600</a></li>
			<li><strong>Dashboard</strong>: Fix kiosk=1 url parameter should put dashboard in kiosk mode <a href="https://github.com/grafana/grafana/pull/13764">#13764</a></li>
			<li><strong>LDAP</strong>: Fix super admins can also be admins of orgs <a href="https://github.com/grafana/grafana/issues/13710">#13710</a>, thx <a href="https://github.com/adrien-f">@adrien-f</a></li>
			<li><strong>Provisioning</strong>: Fix deleting provisioned dashboard folder should cleanup provisioning meta data <a href="https://github.com/grafana/grafana/issues/13280">#13280</a></li>
			<li><strong>Docker</strong>: adds curl back into the docker image for utility. <a href="https://github.com/grafana/grafana/pull/13794">#13794</a></li>
		</ul>
		<a href="https://grafana.com/grafana/download?utm_source=blog&utm_campaign=timeshift_66" target="_blank" class="btn btn--primary">Download Grafana v5.3.2 Now</a>
	</div>
</div>

<br />
<hr />

<div class="row row--internal-gutters">
	<div class="col col--sm-8">
		<a href="https://www.grafanacon.org/" target="_blank"><img src="/assets/img/blog/timeshift/grafanacon_earlybird.jpg" width="600" /></a>
	</div>
	<div class="col col--sm-4">
		<h4>GrafanaCon LA <br />Early Bird Tickets Now on Sale</h4>
		<p>Join us in Los Angeles, California February 25-26, 2019 for 2 days of talks focused on Grafana and the open source monitoring ecosystem. Learn about Grafana and new/upcoming features and projects in the broader ecosystem like <strong>Prometheus</strong>, <strong>Graphite</strong>, <strong>InfluxDB</strong>, <strong>Kubernetes</strong>, and more.</p>
		<a class="btn btn--outline" href="https://www.grafanacon.org/" target="_blank"><strong>Get Your Ticket Now</strong></a>
	</div>
</div>

<br />
<hr />

#### From the Blogosphere
[**Implementing SLOs Using Prometheus and Grafana**](https://engineering.bitnami.com/articles/implementing-slos-using-prometheus.html):  This article discusses general service availability terms like SLAs, SLOs, and SLIs, and shows you how to use Prometheus to collect the data and Grafana to build an overview dashboard. There's also a shout out to Tom Wilkie's RED Method concept.

[**[VIDEO] Devops basics: Monitoring your operations**](https://www.youtube.com/watch?v=Ah0DvHzTb5M):  In this video, Kai Hendry shows how he's using Grafana for his dashboards and alerts to keep an eye on his CloudWatch metrics.

[**[Video] Monitor AKS cluster with Container Monitoring Solution using OMS**](https://www.youtube.com/watch?v=aq_pd2c4dqc):  The Engineers.sg Meetup recently posted a video demo of different ways to monitor AKS clusters.

[**Deploying Helm / Tiller, Prometheus, AlertManager, Grafana, Elasticsearch On Your kubernetes Cluster – Part 2**](https://www.youtube.com/watch?v=aq_pd2c4dqc):  In part 2 of this series, Eli walks us through the installation and configuration of Prometheus and Grafana. This walkthrough is part of a broader series of posts on how to configure and monitor a Kubernetes 3 Master Node cluster.

<br />
<hr />

<div class="row row--internal-gutters">
	<div class="col col--sm-8">
		<a href="https://grafana.com/about/hiring?utm_source=blog&utm_campaign=timeshift_66" target="_blank">
			<img src="/assets/img/blog/timeshift/careers_section.jpg" />
		</a>
	</div>
	<div class="col col--sm-4">
		<h4>We're Hiring!</h4>
	<p>We've added new open positions at Grafana Labs! Do you love open source software? Do you thrive on tackling complex challenges to build the future? Want to work with awesome people? Be the next to join our team!</p>
	<a class="btn btn-outline" href="https://grafana.com/about/hiring?utm_source=blog&utm_campaign=timeshift_66" target="_blank">View our Open Positions</a>
	</div>
</div>

<br />
<hr />
<br />

#### Grafana Plugin Update
We're sharing a few plugin updates this week, including updates to one of our [premium plugins](https://grafana.com/plugins?premium=1&utm_source=blog&utm_campaign=timeshift_66). To update any of your plugins in your on-prem Grafana, use the <a href="http://docs.grafana.org/administration/cli/#grafana-cli?utm_source=blog&utm_campaign=timeshift_63" target="_blank">grafana-cli tool</a>, or for <a href="https://grafana.com/cloud/grafana?utm_source=blog&utm_campaign=timeshift_63" target="_blank">Hosted Grafana</a> update with one-click.
<br />
<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/kentik-app/versions/1.3.0/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UDPATED PLUGIN</strong></div><br/>
				<strong>Kentik Connect Pro</strong> - <a href="https://www.kentik.com/platform/kentik-detect/" target="_blank">Kentik Detect</a> is a SAAS service for network analytics and DDoS detection. The Grafana App recently got a new update with two new features: 
			</p>
			<ul>
				<li>Support for custom dimensions (user-specific columns) when doing adhoc filtering in Grafana.</li>
				<li>Support for using Saved Filters from the Kentik portal to do adhoc filtering in Grafana.</li>
			</ul>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/kentik-app?utm_source=blog&utm_campaign=timeshift_66" target="_blank"><strong>Install</strong></a>
			</p>
		</div>
	</div>
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/instana-datasource/versions/1.2.1/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UDPATED PLUGIN</strong></div><br/>
				<strong>Instana Datasource</strong> - This update adds some new metrics to the metrics catalog. 
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/instana-datasource?utm_source=blog&utm_campaign=timeshift_66" target="_blank"><strong>Install</strong></a>
			</p>
		</div>
	</div>
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/grafana-dynatrace-datasource/versions/0.4.0/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-premium-plugin-tag"><strong>UPDATED PREMIUM PLUGIN</strong></div><span class="icon-premium-plugin"><img src="/assets/img/icon_diamond.svg" /></span><br/>
				<strong>Dynatrace Datasource</strong> - The recent update of the Dynatrace Datasource plugin adds support for regex filtering of series. 
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/grafana-dynatrace-datasource?utm_source=blog&utm_campaign=timeshift_66" target="_blank"><strong>Install</strong></a>
			</p>
		</div>
	</div>
</div>

<br />
<hr />
<br />

#### Upcoming Events
In between code pushes we like to speak at, sponsor and attend all kinds of conferences and meetups. We also like to make sure we mention other Grafana-related events happening all over the world. If you're putting on just such an event, let us know and we'll list it here.

<div class="blog-plugin">
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
				We are also a proud sponsor of the Cloud Native Computing Foundation's flagship conference. Join Kubernetes, Prometheus, Cortex, OpenTracing, Fluentd, gRPC, containerd, rkt, CNI, Envoy, Jaeger, Notary, TUF, Vitess, CoreDNS, NATS, Linkerd and Helm as the community gathers for four days to further the education and advancement of cloud native computing.
			</p>
			<a href="https://events.linuxfoundation.org/events/kubecon-cloudnativecon-north-america-2018/" target="_blank" class="btn btn--outline">Register Now</a>
		</div>
	</div>
	<br />
</div>
<hr />
<br />

#### How are we doing?
Hope you enjoyed this issue of TimeShift. What do you think? Are there other types of content you'd like to see here? Submit a comment on this issue below, or post something at our [community forum](http://community.grafana.com?utm_source=blog&utm_campaign=timeshift_66).

Follow us on [Twitter](http://twitter.com/grafana), like us on [Facebook](http://facebook.com/grafana), and join the [Grafana Labs community](http://grafana.com/signup?utm_source=blog&utm_campaign=timeshift_66).

