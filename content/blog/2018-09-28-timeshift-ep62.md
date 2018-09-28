+++
title = "timeShift(GrafanaBuzz, 1w) Issue 62"
author = "trent"
date = "2018-09-28"
keywords = ["Grafana", "Blog", "Roundup", "timeShift"]
cover_image = "/assets/img/blog/timeshift/timeshift_14.jpg"
cover_opacity = "0.4"
cover_blur = "1px"
description = "A weekly roundup of articles and links from Grafana and the surrounding community"
categories = ["timeShift", "Grafana Buzz"]
excerpt = "How to get your company to send you to GrafanaCon, monitoring Kubernetes, automating your dashboards, and more. "
+++

### Welcome to TimeShift
Big news this week - GrafanaCon early bird tickets are [now on sale](http://grafanacon.org)! We've released a limited number of early bird tickets, so grab yours before they're sold out. Also, call for proposals is open until October 15, so don't wait until the last minute to submit your talk. We've gotten some great proposals already, but the more the merrier. Keep an eye out at [grafanacon.org](http://grafanacon.org) for more updates.

See something we missed? Know of an article that might be a good fit for an upcoming issue? [Contact us](mailto:hello@grafana.com)!

And now, on to the show!
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
			<a href="https://community.grafana.com/t/release-notes-v5-2-x/7894?utm_source=blog&utm_campaign=timeshift_62" target="_blank">See everything new in Grafana v5.2.4</a>.
		</p>
		<a href="https://grafana.com/grafana/download?utm_source=blog&utm_campaign=timeshift_62" target="_blank" class="btn btn--primary">Download Grafana 5.2.4 Now</a>
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
			There are a lot of other new features and fixes including the grafana-cli fix included in 5.2.4, so please check out the <a href="https://community.grafana.com/t/release-notes-v5-3-x/10244?utm_source=blog&utm_campaign=timeshift_62" target="_blank">release notes</a> to see everything that's new in Grafana 5.3.0beta-1.
		</p>
		<a href="https://grafana.com/grafana/download/beta?utm_source=blog&utm_campaign=timeshift_62" target="_blank" class="btn btn--primary">Download Grafana 5.3.0beta-1 Now</a>
	</div>
</div>


<br />
<hr />

<div class="row row--no-gutters">
	<div class="col col--sm-9">
		<a href="https://www.grafanacon.org/" target="_blank"><img src="/assets/img/blog/timeshift/grafanacon_earlybird.jpg" width="600" /></a>
	</div>
	<div class="col col--sm-3">
		<h4>GrafanaCon LA <br />Early Bird Tickets Now on Sale</h4>
		<p>Join us in Los Angeles, California February 25-26, 2019 for 2 days of talks focused on Grafana and the open source monitoring ecosystem.</p>
		<a class="btn btn--outline" href="https://www.grafanacon.org/" target="_blank"><strong>Get Your Ticker Now</strong></a>
	</div>
</div>

<br />
<hr />

#### From the Blogosphere
[**8 Reasons Why You Should Attend GrafanaCon (and how to get your boss to send you)**](http://localhost:3002/2018/09/27/8-reasons-why-you-should-attend-grafanacon-and-how-to-get-your-boss-to-send-you/?utm_source=blog&utm_campaign=timeshift_62):  We understand – conferences can be expensive. But the things you learn, people you meet, and memories you make are priceless. This article covers some of the major benefits of attending GrafanaCon, which we hope will convince your company they'd be silly not to send you.

[**Instrumenting Porcupine With Prometheus & Grafana)**](https://blog.sebastian-daschner.com/entries/porcupine-metrics-grafana):  Adam Bien’s Porcupine library makes it easy to configure dedicated executor services that act as application bulkheads. Sebastian has created an extension that exposes the Porcupine statistics via MicroProfile Metrics, which can be visualized in Grafana via Prometheus.

[**Getting Started on Monitoring with Prometheus and Grafana)**](https://technology.amis.nl/2018/09/25/getting-started-on-monitoring-with-prometheus-and-grafana/):  This presentation from a recent meetup on monitoring with Prometheus touches on the "hows" and "whys" of monitoring as well as diving into that particulars of Prometheus and Grafana. Presentation slides from the meetup are included.

[**[Video] Boskey Savla - Monitoring VKE Kubernetes clusters with Prometheus/Grafana)**](https://www.youtube.com/watch?v=TGA95ritIYc):  In this video from VMware {code} Power Sessions you'll see how a K8s cluster deployed with VMware Kubernetes Engine can be monitored using Prometheus and Grafana.

[**Automate Grafana Dashboard Import Process**](https://blogcodevalue.wordpress.com/2018/09/16/automate-grafana-dashboard-import-process/):  This article talks about the components and process to automatically import dashboards into Grafana to monitor an application running on a Kubernetes cluster.

<br />
<hr />

#### Grafana Plugin Update
This week we have an update to one of our [premium plugins](https://grafana.com/plugins?premium=1&utm_source=blog&utm_campaign=timeshift_62). To update any of your plugins in your on-prem Grafana, use the <a href="http://docs.grafana.org/administration/cli/#grafana-cli?utm_source=blog&utm_campaign=timeshift_62" target="_blank">grafana-cli tool</a>, or for <a href="https://grafana.com/cloud/grafana?utm_source=blog&utm_campaign=timeshift_62" target="_blank">Hosted Grafana</a> update with one-click.
<br />
<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/grafana-newrelic-datasource/versions/1.0.0/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong>New Relic Datasource</strong> - The New Relic Datasource premium plugin now has full support for the Insights API and the NQRL query language. The latest release adds support for annotation queries for the Insights API. 
				<br />
				<br />
				Annotations in Grafana provide a way to mark points on the graph with rich events (like an outage or a deploy). When you hover over an annotation you can get event description and event tags.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/grafana-newrelic-datasource?utm_source=blog&utm_campaign=timeshift_62" target="_blank"><strong>Install</strong></a>
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
	<a class="btn btn-outline" href="https://grafana.com/about/hiring?utm_source=blog&utm_campaign=timeshift_62" target="_blank">View our Open Positions</a>
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
			<img style="border-radius: 50%;" class="large" src="/assets/img/blog/kubecon.png" />
		</div>
		<div class="col col--md-8 col--sm-offset-1">
			<p>
				<strong><a href="https://events.linuxfoundation.org/events/kubecon-cloudnativecon-north-america-2018/" target="_blank">KubeCon + CloudNativeCon North America 2018 | Seattle, WA - December 10-13, 2018</a>:</strong>
				<strong>David Kaltschmidt: On the OSS Path to Full Observability with Grafana</strong> - Grafana is coming &quot;off the wall&quot;. To make it more useful for interactive debugging, David and his team have already integrated two pillars of observability - metrics and logs. They are currently adding tracing to complete the incident response experience. All to minimise the cost of context switching during those crucial minutes after getting paged.
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


#### How are we doing?
Hope you enjoyed this issue of TimeShift. What do you think? Are there other types of content you'd like to see here? Submit a comment on this issue below, or post something at our [community forum](http://community.grafana.com?utm_source=blog&utm_campaign=timeshift_62).

Follow us on [Twitter](http://twitter.com/grafana), like us on [Facebook](http://facebook.com/grafana), and join the [Grafana Labs community](http://grafana.com/signup?utm_source=blog&utm_campaign=timeshift_62).

