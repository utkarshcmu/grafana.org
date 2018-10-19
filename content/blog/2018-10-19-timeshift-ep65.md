+++
title = "timeShift(GrafanaBuzz, 1w) Issue 65"
author = "trent"
date = "2018-10-19"
keywords = ["Grafana", "Blog", "Roundup", "timeShift", "Stackdriver", "Postgres", "GrafanaCon"]
cover_image = "/assets/img/blog/timeshift/timeshift_14.jpg"
cover_opacity = "0.4"
cover_blur = "1px"
description = "A weekly roundup of articles and links from Grafana and the surrounding community"
categories = ["timeShift", "Grafana Buzz"]
excerpt = "This week we dive into the new Google Stackdriver core datasource in Grafana and go into detail about the new Postgres query editor and best practices to write efficient queries. Also, GrafanaCon early bird tickets are going fast and we're closing the call for papers tonight (Oct 19)."
+++

### Welcome to TimeShift
This week we dive into the new Google Stackdriver core datasource in Grafana, go into detail on the new Postgres query editor and share some best practices.

#### GrafanaCon
**The GrafanaCon CFP window is scheduled to close TODAY.** Be sure and [submit your talk](http://www.grafanacon.org/2019/cfp) before it's too late.
Also, don't forget to grab an [early bird ticket](http://grafanacon.org) they're going fast, and you don't want to miss out on this price! 

Have an article you'd like shared here? [Contact us](mailto:hello@grafana.com)!
<br />
<hr />

<div class="row row--no-gutters">
	<div class="col col--sm-3">
		<img src="/assets/img/blog/timeshift/grafana_release_icon.png" width="170" />
	</div>
	<div class="col col--sm-9">
		<h3>Latest Stable Release: Grafana v5.3.1</h3>
		<h5>Updates in this release</h5>
		<ul>
			<li><strong>Render</strong>: Fix PhantomJS render of graph panel when legend displayed as table to the right <a href="https://github.com/grafana/grafana/issues/13616">#13616</a></li>
			<li><strong>Stackdriver</strong>: Filter option disappears after removing initial filter <a href="https://github.com/grafana/grafana/issues/13607">#13607</a></li>
			<li><strong>Elasticsearch</strong>: Fix no limit size in terms aggregation for alerting queries <a href="https://github.com/grafana/grafana/issues/13172">#13172</a>, thx <a href="https://github.com/Yukinoshita-Yukino">@Yukinoshita-Yukino</a></li>
			<li><strong>InfluxDB</strong>: Fix for annotation issue that caused text to be shown twice <a href="https://github.com/grafana/grafana/issues/13553">#13553</a></li>
			<li><strong>Variables</strong>: Fix nesting variables leads to exception and missing refresh <a href="https://github.com/grafana/grafana/issues/13628">#13628</a></li>
			<li><strong>Variables</strong>: Prometheus: Single letter labels are not supported <a href="https://github.com/grafana/grafana/issues/13641">#13641</a>, thx <a href="https://github.com/olshansky">@olshansky</a></li>
			<li><strong>Graph</strong>: Fix graph time formatting for Last 24h ranges <a href="https://github.com/grafana/grafana/issues/13650">#13650</a></li>
			<li><strong>Playlist</strong>: Fix cannot add dashboards with long names to playlist <a href="https://github.com/grafana/grafana/issues/13464">#13464</a>, thx <a href="https://github.com/neufeldtech">@neufeldtech</a></li>
			<li><strong>HTTP API</strong>: Fix /api/org/users so that query and limit querystrings works</li>
		</ul>
		<p>
			<a href="https://community.grafana.com/t/release-notes-v5-3-x/10244?utm_source=blog&utm_campaign=timeshift_65" target="_blank">See everything new in Grafana v5.3.1</a>.
		</p>
		<a href="https://grafana.com/grafana/download?utm_source=blog&utm_campaign=timeshift_65" target="_blank" class="btn btn--primary">Download Grafana v5.3.1 Now</a>
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
[**Introducing Stackdriver as a datasource for Grafana**](https://cloud.google.com/blog/products/management-tools/introducing-stackdriver-as-a-data-source-for-grafana):  The Google Cloud team received lots of requests from customers wanting to view Stackdriver data in Grafana, so we worked closely with them to build and release the Stackdriver plugin for Grafana in v5.3. This article gives you some background on Stackdriver and shows how you can get started using this beta plugin. Please give it a try, we're looking forward to your feedback.

[**Make time-series exploration easier with the PostgreSQL/TimescaleDB query editor**](https://grafana.com/blog/2018/10/15/make-time-series-exploration-easier-with-the-postgresql/timescaledb-query-editor/):  Grafana v5.3 includes a new visual query editor for the PostgreSQL datasource. The folks from TimescaleDB did a lot of work on this feature (thanks [@svenklemm](https://github.com/svenklemm)), and put together a great writeup on using the new query builder and some best practices.

[**Azure Monitor – Combine Azure Monitor And Azure Log Analytics Data In Grafana**](https://www.stefanroth.net/2018/10/12/azure-monitor-combine-azure-monitor-and-azure-log-analytics-data-in-grafana/):  In this article, Stefan walks you through the steps to combine Azure Monitor and Azure LogAnalytics Data and embed the graphs in Grafana.

[**Bit v. Byte Episode 41 - Google & Facebook Hacks, Pixel 3 & Home Hub, Grafana**](https://anchor.fm/bit-v-byte/episodes/Episode-41---Google--Facebook-Hacks--Pixel-3--Home-Hub--GrafanaFontAwesomeDNSControlRestic-e2dd5b/a-a5rsro):  The release of Grafana 5.3 was mentioned in last week's Bit v. Byte podcast where Adam discussed some of the new features. Always a good series to stay up to date on the latest tools and techniques.

[**Graph top N time series in Grafana**](https://www.robustperception.io/graph-top-n-time-series-in-grafana):  Brian Brazil explains how to graph the top N series over a duration in Grafana v5.3.

<br />
<hr />

<div style=" padding: 20px; background: url(/assets/img/blog/timeshift/polygon_texture_black.jpg); background-size: cover; border-radius: 4px;">
	<h4>We're Hiring!</h4>
	<p>We've added new open positions at Grafana Labs! Do you love open source software? Do you thrive on tackling complex challenges to build the future? Want to work with awesome people? Be the next to join our team!
	</p>
	<a class="btn btn-outline" href="https://grafana.com/about/hiring?utm_source=blog&utm_campaign=timeshift_65" target="_blank">View our Open Positions</a>
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
			<img style="border-radius: 50%;" class="large" src="/assets/img/blog/timeshift/meetup.jpg" />
		</div>
		<div class="col col--md-8 col--sm-offset-1">
			<p>
				<strong><a href="https://www.meetup.com/Docker-London/events/249221928/" target="_blank">Docker London Meetup | London, United Kingdom - November 22, 2018</a>:</strong>
				<br />
				<strong>Tom Wilkie: Monitoring Docker with Prometheus</strong> – Prometheus has become the defacto monitoring system for cloud native applications, with many systems natively exposing Prometheus metrics. In this talk Tom will explore all the moving part for a working Prometheus-on-Docker monitoring system, including service discovery, node-exporter, cAdvisor and Grafana. Tom will also share some little tips and tricks for getting the most out of your Prometheus monitoring, including the common pitfalls and what you should be alerting on.
			</p>
			<a href="https://www.meetup.com/Docker-London/events/249221928/" target="_blank" class="btn btn--outline">Register Now</a>
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
			<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Real time traffic visualization from <a href="https://twitter.com/hashtag/tmobile?src=hash&amp;ref_src=twsrc%5Etfw">#tmobile</a> app <a href="https://twitter.com/hashtag/grafana?src=hash&amp;ref_src=twsrc%5Etfw">#grafana</a> <a href="https://twitter.com/hashtag/elastic?src=hash&amp;ref_src=twsrc%5Etfw">#elastic</a> CXLab team killing it <a href="https://t.co/YiNbw5AgQt">pic.twitter.com/YiNbw5AgQt</a></p>&mdash; Ram (@rprakashg) <a href="https://twitter.com/rprakashg/status/1053082141716672512?ref_src=twsrc%5Etfw">October 19, 2018</a></blockquote>
			<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
			<p>Very cool! The worldMap panel is one of my favorites - looks like something they'd use in the NORAD command center.</p>
		</div>
	</div>
</div>

<hr />
<br />

#### How are we doing?
Hope you enjoyed this issue of TimeShift. What do you think? Are there other types of content you'd like to see here? Submit a comment on this issue below, or post something at our [community forum](http://community.grafana.com?utm_source=blog&utm_campaign=timeshift_65).

Follow us on [Twitter](http://twitter.com/grafana), like us on [Facebook](http://facebook.com/grafana), and join the [Grafana Labs community](http://grafana.com/signup?utm_source=blog&utm_campaign=timeshift_65).

