+++
title = "timeShift(GrafanaBuzz, 1w) Issue 71"
author = "trent"
date = "2018-12-07"
keywords = ["Grafana", "Blog", "Roundup", "timeShift", "security", "GrafanaCon"]
cover_image = "/assets/img/blog/timeshift/timeshift_14.jpg"
cover_opacity = "0.4"
cover_blur = "1px"
description = "A weekly roundup of articles and links from Grafana and the surrounding community"
categories = ["timeShift", "Grafana Buzz"]
excerpt = "Logging is coming to Grafana, Monitoring at Stack Overflow, Announcements from AWS re:Invent 2018 and more!"
+++

### Welcome to TimeShift
We're excited to be speaking at and sponsoring KubeCon + CloudNativeCon NA 2018 in Seattle next week and hope we get a chance to hang out. Swing by our booth to check out a new open source project we've been working on, and give us some feedback on Grafana and features you'd like to see. 

As always, we hope you enjoy this week's TimeShift, and don't be shy about telling us how we can make it better. Hope to see you in Seattle! 

See an article we missed? [Contact us](mailto:hello@grafana.com).
<br />
<hr />

<div class="row row--no-gutters">
	<div class="col col--sm-3">
		<img src="/assets/img/blog/timeshift/grafana_release_icon.png" width="170" />
	</div>
	<div class="col col--sm-9">
		<h3>Latest Stable Release: Grafana v5.4</h3>
		<h5>Release Highlights</h5>
		<ul>
			<li><strong><a href="http://docs.grafana.org/guides/whats-new-in-v5-4/#alerting" rel="nofollow noopener">Alerting</a></strong> Limit false positives with the new <code>For</code> setting</li>
			<li><strong><a href="http://docs.grafana.org/guides/whats-new-in-v5-4/#google-stackdriver" rel="nofollow noopener">Google Stackdriver</a></strong> Now with support for templating queries</li>
			<li><strong><a href="http://docs.grafana.org/guides/whats-new-in-v5-4/#mysql-query-builder" rel="nofollow noopener">MySQL</a></strong> gets a new query builder!</li>
			<li><strong><a href="http://docs.grafana.org/guides/whats-new-in-v5-4/#graph-panel-enhancements" rel="nofollow noopener">Graph Panel</a></strong> Highlight time regions and more</li>
			<li><strong><a href="http://docs.grafana.org/guides/whats-new-in-v5-4/#team-preferences" rel="nofollow noopener">Team Preferences</a></strong> Give your teams their own home dashboard</li>
		</ul>
		<p>You can learn more about Grafana v5.4 in the <a href="https://grafana.com/blog/2018/12/03/grafana-v5.4-released/?utm_source=blog&utm_campaign=timeshift_71" target="_blank">release blog post</a>.</p>
		<a href="https://grafana.com/grafana/download?utm_source=blog&utm_campaign=timeshift_71" target="_blank" class="btn btn--primary">Download Grafana v5.4 Now</a>
	</div>
</div>

<br />
<hr />

#### From the Blogosphere
[**Grafana v5.4 Stable released!**](https://grafana.com/blog/2018/12/03/grafana-v5.4-released/?utm_source=blog&utm_campaign=timeshift_71): This release blog post highlights the major enhancements included in Grafana v5.4 and how to use the new features.

[**Step By Step Monitoring Cassandra With Prometheus And Grafana**](https://blog.pythian.com/step-step-monitoring-cassandra-prometheus-grafana/): Check out this step by step guide on how to monitor a Cassandra cluster with Prometheus and Grafana on a VM.

[**Cool Features in Grafana that You Might Missed**](https://medium.com/@hirzani/cool-features-in-grafana-that-you-might-missed-d7f904139dda): In this article, Fairuz discusses how he used Grafana's rendering API to send png snapshots of graph panels to his various services.

[**How to export alerts from Prometheus to Grafana**](https://medium.com/@rdavix/how-to-export-alerts-from-prometheus-to-grafana-8f1de059a8c8): David dives into alerting in this article and explores the method he's found most successful in creating an alerting dashboard in Grafana with Prometheus.

[**Introduction to Kubernetes Monitoring**](https://rancher.com/blog/2018/2018-10-18-monitoring-kubernetes/): This article explores what you should be monitoring in Kubernetes and how to go about it with Rancher, Prometheus, and Grafana.

[**Monitoring Server Power Usage and Cost with Grafana | and How to create the graphs**](https://www.youtube.com/watch?v=yf74W-C5xsM): Building an effective dashboard can be as much art as science. This article shows you how to monitor the server power usage and cost of your homelab, and how to build your own Grafana dashboard to track it.

<br />
<hr />

<div class="row row--internal-gutters">
	<div class="col col--sm-12">
		<h4>GrafanaCon - We're shaking things up on day 2!</h4>
		<p><strong style="color:#fff;">You spoke and we listened.</strong> Based on your feedback, we're adding <strong style="color:#fff;">TSDB focused tracks and hands-on workshops</strong> to our second day program to give you a chance to dive into the nitty gritty of the most popular open source monitoring tools from the experts who build and maintain them.</p>
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
<div class="row row--internal-gutters">
	<div class="col col--sm-8">
		<a href="https://www.grafanacon.org/" target="_blank"><img src="/assets/img/blog/timeshift/grafanacon_ga_tickets_tweet.jpg" width="600" /></a>
	</div>
	<div class="col col--sm-4">
		<h4>Get your tickets while they last!</h4>
		<p>Join us in Los Angeles, California February 25-26, 2019 for 2 days of talks and in-depth workshops on Grafana and the open source monitoring ecosystem. Learn about Grafana and new/upcoming features and projects in the broader ecosystem like <strong>Prometheus</strong>, <strong>Graphite</strong>, <strong>InfluxDB</strong>, <strong>Kubernetes</strong>, and more.</p>
		<a class="btn btn--outline" href="https://www.grafanacon.org/" target="_blank"><strong>Register Now</strong></a>
	</div>
</div>

<br />
<hr />

#### Upcoming Events
In between code pushes we like to speak at, sponsor and attend all kinds of conferences and meetups. We also like to make sure we mention other Grafana-related events happening all over the world. If you're putting on just such an event, let us know and we'll list it here.

<div class="blog-plugin">
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

<div class="row row--internal-gutters">
	<div class="col col--sm-4">
		<h4>Featured Job</h4>
	<p>As Grafana continues to grow we’re building our European sales team and are hiring <strong><a href="http://workable.com/j/13A62D8DED" target="_blank">Business Development Representatives</a></strong> based in our Stockholm office. This is a rare opportunity to join an early stage startup and take an instrumental role in helping to build the sales function. <a href="http://workable.com/j/13A62D8DED" target="_blank">Apply now</a>.</p>
	<a class="btn btn-outline" href="https://grafana.com/about/hiring?utm_source=blog&utm_campaign=timeshift_71" target="_blank">View All our Open Positions</a>
	</div>
	<div class="col col--sm-8">
		<a href="https://grafana.com/about/hiring?utm_source=blog&utm_campaign=timeshift_71" target="_blank">
			<img src="/assets/img/blog/timeshift/careers_section.jpg" />
		</a>
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
			<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Highlighting different time periods on Grafana Graphs is very cool!  <a href="https://twitter.com/hashtag/grafana?src=hash&amp;ref_src=twsrc%5Etfw">#grafana</a> <a href="https://t.co/tpSRoNUDg5">https://t.co/tpSRoNUDg5</a> <a href="https://t.co/We0hBsCTGW">https://t.co/We0hBsCTGW</a></p>&mdash; Peter Zaitsev (@PeterZaitsev) <a href="https://twitter.com/PeterZaitsev/status/1069679414626189313?ref_src=twsrc%5Etfw">December 3, 2018</a></blockquote>
			<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
			<p>Thanks Peter! This was a popular feature request, and we're excited that it made it into this release.</p>
		</div>
	</div>
</div>

<hr />
<br />

#### How are we doing?
Thats a wrap for another issue of TimeShift. What do you think? Are there other types of content you'd like to see here? Submit a comment on this issue below, or post something at our [community forum](http://community.grafana.com?utm_source=blog&utm_campaign=timeshift_71).

Follow us on [Twitter](http://twitter.com/grafana), like us on [Facebook](http://facebook.com/grafana), and join the [Grafana Labs community](http://grafana.com/signup?utm_source=blog&utm_campaign=timeshift_71).
