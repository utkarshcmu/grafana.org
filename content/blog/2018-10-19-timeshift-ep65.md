+++
title = "timeShift(GrafanaBuzz, 1w) Issue 65"
author = "trent"
date = "2018-10-19"
keywords = ["Grafana", "Blog", "Roundup", "timeShift"]
cover_image = "/assets/img/blog/timeshift/timeshift_14.jpg"
cover_opacity = "0.4"
cover_blur = "1px"
description = "A weekly roundup of articles and links from Grafana and the surrounding community"
categories = ["timeShift", "Grafana Buzz"]
excerpt = "Notes on the new Grafana v5.3 stable release, and description of new featues, an upcoming Graphite webinar you don't want to miss, and announcing the closing of GrafanaCon CFP."
+++

### Welcome to TimeShift
This week the Grafana Labs team was busy prepping for the **[Grafana v5.3 stable release](https://grafana.com/grafana/download?utm_source=blog&utm_campaign=timeshift_65)**! Grafana v5.3 adds Stackdriver as a core datasource, a new graphical query editor for Postgres, enhancements to TV and kiosk mode, and a lot more. See the release section for a list of all the new features.

#### GrafanaCon
**The GrafanaCon CFP window is scheduled to close Oct 15.** Be sure and [submit your talk](http://www.grafanacon.org/2019/cfp) before it's too late.
Also, don't forget to grab an [early bird ticket](http://grafanacon.org) to GrafanaCon before they're sold out! 

Know of an article that might be a good fit for an upcoming issue? [Contact us](mailto:hello@grafana.com)!
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

<div class="row row--no-gutters">
	<div class="col col--sm-3">
		<img src="/assets/img/blog/timeshift/grafana_release_icon.png" width="170" />
	</div>
	<div class="col col--sm-9">
		<h3>Latest Stable Release: Grafana v5.3</h3>
		<h5>Updates in this stable release</h5>
		<ul>
			<li><strong>Stackdriver</strong>: Filter wildcards and regex matching are not yet supported <a href="https://github.com/grafana/grafana/issues/13495">#13495</a></li>
			<li><strong>Stackdriver</strong>: Support the distribution metric type for heatmaps <a href="https://github.com/grafana/grafana/issues/13559">#13559</a></li>
			<li><strong>Cloudwatch</strong>: Automatically set graph yaxis unit <a href="https://github.com/grafana/grafana/issues/13575">#13575</a>, thx <a href="https://github.com/mtanda">@mtanda</a></li>
		</ul>
		<p>
			<a href="https://community.grafana.com/t/release-notes-v5-3-x/10244?utm_source=blog&utm_campaign=timeshift_65" target="_blank">See everything new in Grafana v5.3</a>.
		</p>
		<a href="https://grafana.com/grafana/download?utm_source=blog&utm_campaign=timeshift_65" target="_blank" class="btn btn--primary">Download Grafana v5.3 Now</a>
	</div>
</div>

<br />
<hr />

#### From the Blogosphere
[**Grafana v5.3 Released**](https://grafana.com/blog/2018/10/10/grafana-v5.3-released/):  Carl Bergquist wrote an article that dives into the new features of Grafana v5.3 and how to get started using them.

[**Building a more reliable infrastructure with new Stackdriver tools and partners**](https://cloud.google.com/blog/products/management-tools/building-a-more-reliable-infrastructure-with-new-stackdriver-tools-and-partners):  This post from the Google Cloud team discusses Stackdriver and announces our partnership developing the Stackdriver datasource for Grafana.

[**Setting up Prometheus/Grafana Monitoring Dashboard for ForgeRock IDM**](https://identitybrandwag.blogspot.com/2018/10/setting-up-prometheusgrafana-monitoring.html):  This installation walkthrough shows you how to visualize data from ForgeRock Identity Management using Prometheus and Grafana.

[**Monitor using Grafana and Prometheus.**](https://medium.com/@niteshagarwal_/monitor-using-grafana-and-prometheus-93788ae7296c):  In the first in a new series on monitoring with Grafana and Prometheus, Nitesh discusses basic components you might need to get a simple monitoring system for your servers up and running.

<br />
<hr />

<div class="row row--internal-gutters">
	<div class="col col--sm-8">
		<a href="https://attendee.gotowebinar.com/register/6890462743886537729" target="_blank"><img src="/assets/img/blog/timeshift/graphite_webinar_tweet.png" /></a>
	</div>
	<div class="col col--sm-4">
		<h2 class="event-type">WEBINAR - Oct 16, 1pm EDT</h2>
		<h4>Making the most out of your upgrade to Graphite 1.1</h4>
		<p>In this webinar, Graphite project maintainer Dan Cech will provide some history of the project, outline new features of Graphite 1.x, and show you how to best make use of them. Good for Graphite users of all levels, whether you've already upgraded to 1.1 or are still on an older version. Hope you can join us!</p>
		<a class="btn btn--outline" href="https://attendee.gotowebinar.com/register/6890462743886537729" target="_blank"><strong>Register Now</strong></a>
	</div>
</div>

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
			<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Google is including drivers for graphana on GCP. <a href="https://twitter.com/cosmotechweb?ref_src=twsrc%5Etfw">@cosmotechweb</a> too we are using <a href="https://twitter.com/grafana?ref_src=twsrc%5Etfw">@grafana</a> <br> <a href="https://twitter.com/hashtag/googlenext18?src=hash&amp;ref_src=twsrc%5Etfw">#googlenext18</a> <a href="https://t.co/lqCjOuPwF3">pic.twitter.com/lqCjOuPwF3</a></p>&mdash; Jean-Baptiste Briaud (@jbbriaud) <a href="https://twitter.com/jbbriaud/status/1050317852912349185?ref_src=twsrc%5Etfw">October 11, 2018</a></blockquote>
			<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
			<p>We are thrilled to be mentioned at Google Cloud Next London '18!</p>
		</div>
	</div>
</div>

<hr />
<br />

#### How are we doing?
Hope you enjoyed this issue of TimeShift. What do you think? Are there other types of content you'd like to see here? Submit a comment on this issue below, or post something at our [community forum](http://community.grafana.com?utm_source=blog&utm_campaign=timeshift_65).

Follow us on [Twitter](http://twitter.com/grafana), like us on [Facebook](http://facebook.com/grafana), and join the [Grafana Labs community](http://grafana.com/signup?utm_source=blog&utm_campaign=timeshift_65).

