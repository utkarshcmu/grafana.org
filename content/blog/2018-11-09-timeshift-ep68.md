+++
title = "timeShift(GrafanaBuzz, 1w) Issue 68"
author = "trent"
date = "2018-11-09"
keywords = ["Grafana", "Blog", "Roundup", "timeShift", "Stackdriver", "Postgres", "GrafanaCon"]
cover_image = "/assets/img/blog/timeshift/timeshift_14.jpg"
cover_opacity = "0.4"
cover_blur = "1px"
description = "A weekly roundup of articles and links from Grafana and the surrounding community"
categories = ["timeShift", "Grafana Buzz"]
excerpt = "Check out the slides from the 'Logging is coming to Grafana' presentation, get Grafana running in AWS OpsWorks, new and updated plugins and more."
+++

### Welcome to TimeShift
The team was busy speaking at events in Europe and the US this week, showing off new Grafana features and talking about what's to come. Check out the presentation on logging in Grafana below; we'll share the video once it's available. Also in this week's issue we have 2 new plugins to share, and your weekly dose of Grafana related blog articles and videos.

See an article you think should be shared here? [Contact us](mailto:hello@grafana.com)!
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
		<a href="https://grafana.com/grafana/download?utm_source=blog&utm_campaign=timeshift_68" target="_blank" class="btn btn--primary">Download Grafana v5.3.2 Now</a>
	</div>
</div>

<br />
<hr />

#### From the Blogosphere
[**Logging is coming to Grafana**](https://speakerdeck.com/davkal/osmc-2018-logging-is-coming-to-grafana): This week Grafana Labs' Director, UX - David Kaltschmidt spoke at OSMC in Nuremberg to give a quick overview of Grafana, outline some of the new features since v5, discuss the new explore UI and logging functionality, and tease a few new features in the works.

[**How to create a high availability Grafana 5.3 environment in AWS OpsWorks**](https://ulyaoth.com/tutorials/how-to-create-a-high-availability-grafana-5-3-environment-in-aws-opsworks/):  This tutorial will tell you everything you need to know to set up Grafana in AWS OpsWorks.

[**Microservices monitoring with Envoy service mesh, Prometheus & Grafana**](https://hackernoon.com/microservices-monitoring-with-envoy-service-mesh-prometheus-grafana-a1c26a8595fc):  This is the second post in the *Observability with Envoy service mesh* series. You can read the first post about Distributed Tracing [here](https://medium.com/@dnivra26/distributed-tracing-with-envoy-service-mesh-jaeger-c365b6191592). This article explains what Envoy service mesh does, and how to get Envoy metrics into Prometheus and visualize the data in Grafana.

[**[VIDEO] Bonobo, Airflow And Grafana To Visualize Your Business**](https://www.youtube.com/watch?v=UUrk1K45Euw):  At PyConDE, Romain Dorgueil shows us how to use a few different tools to build valuable dashboards to monitor business metrics and the steps that will set us up for success: 1. Plan, 2. Implement, 3. Monitor, 4. Iterate.

<br />
<hr />

<div class="row row--internal-gutters">
	<div class="col col--sm-8">
		<a href="https://www.grafanacon.org/" target="_blank"><img src="/assets/img/blog/timeshift/grafanacon_earlybird.jpg" width="600" /></a>
	</div>
	<div class="col col--sm-4">
		<h4>GrafanaCon LA <br />General Admission On Sale Now!</h4>
		<p>Join us in Los Angeles, California February 25-26, 2019 for 2 days of talks focused on Grafana and the open source monitoring ecosystem. Learn about Grafana and new/upcoming features and projects in the broader ecosystem like <strong>Prometheus</strong>, <strong>Graphite</strong>, <strong>InfluxDB</strong>, <strong>Kubernetes</strong>, and more.</p>
		<p>We've already posted the <a href="https://www.grafanacon.org/2019/speakers" target="_blank">first batch of speakers</a>, and will be adding more shortly, so keep checking <a href="https://www.grafanacon.org/" target="_blank">grafanacon.org</a>.</p>
		<a class="btn btn--outline" href="https://www.grafanacon.org/" target="_blank"><strong>Get Your Ticket Now</strong></a>
	</div>
</div>

<br />
<hr />

<div class="row row--internal-gutters">
	<div class="col col--sm-4">
		<h4>Featured Job</h4>
	<p>As Grafana continues to grow we’re building our European sales team and are hiring <strong><a href="http://workable.com/j/13A62D8DED" target="_blank">Business Development Representatives</a></strong> based in our Stockholm office. This is a rare opportunity to join an early stage startup and take an instrumental role in helping to build the sales function. <a href="http://workable.com/j/13A62D8DED" target="_blank">Apply now</a>.</p>
	<a class="btn btn-outline" href="https://grafana.com/about/hiring?utm_source=blog&utm_campaign=timeshift_68" target="_blank">View All our Open Positions</a>
	</div>
	<div class="col col--sm-8">
		<a href="https://grafana.com/about/hiring?utm_source=blog&utm_campaign=timeshift_68" target="_blank">
			<img src="/assets/img/blog/timeshift/careers_section.jpg" />
		</a>
	</div>
</div>

<br />
<hr />
<br />

#### Grafana Plugin Update
This week we have 2 new plugins to share and an update to the Clickhouse datasource plugin. To update any of your plugins in your on-prem Grafana, use the <a href="http://docs.grafana.org/administration/cli/#grafana-cli?utm_source=blog&utm_campaign=timeshift_63" target="_blank">grafana-cli tool</a>, or for <a href="https://grafana.com/cloud/grafana?utm_source=blog&utm_campaign=timeshift_63" target="_blank">Hosted Grafana</a> update with one-click.
<br />
<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/sbueringer-consul-datasource/versions/0.1.5/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="new-plugin-tag"><strong>NEW PLUGIN</strong></div><br/>
				<strong>Consul Datasource</strong> - <a href="https://www.consul.io/" target="_blank">Consul</a> is a distributed service mesh, and this new datasource integrates Consul KV (key value) data with Grafana. It can be used in Singlestat and Table panels. 
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/sbueringer-consul-datasource?utm_source=blog&utm_campaign=timeshift_68" target="_blank"><strong>Install</strong></a>
			</p>
		</div>
	</div>
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/ovh-warp10-datasource/versions/2.1.1/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="new-plugin-tag"><strong>NEW PLUGIN</strong></div><br/>
				<strong>Warp 10 Datasource</strong> - The <a href="http://www.warp10.io" target="_blank">Warp 10 Platform</a> is designed to collect, store and manipulate sensor data (timeseries data combined with location data). The new Warp 10 datasource plugin allows you to query the Warp 10 database using the WarpScript query language and visualize the results in Grafana. It also integrates well with the Worldmap panel plugin.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/ovh-warp10-datasource?utm_source=blog&utm_campaign=timeshift_68" target="_blank"><strong>Install</strong></a>
			</p>
		</div>
	</div>
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/vertamedia-clickhouse-datasource/versions/1.8.0/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong>Clickhouse Datasource</strong> - Two new macros that convert query results as "change rate per interval" for Counter-like(growing only) metrics have been added to this latest version.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/vertamedia-clickhouse-datasource?utm_source=blog&utm_campaign=timeshift_68" target="_blank"><strong>Install</strong></a>
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

<div>
	<div class="row row--no-gutters">
		<div class="col col--sm-12">
			<h4>Tweet of the Week</h4>
			We scour Twitter each week to find an interesting/beautiful dashboard or monitoring related tweet and show it off! <a href="https://twitter.com/hashtag/monitoringlove?src=hash" target="_blank">#monitoringLove</a>
			<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">🤩 I&#39;m speaking at <a href="https://twitter.com/hashtag/GrafanaCon?src=hash&amp;ref_src=twsrc%5Etfw">#GrafanaCon</a> 2019! 🤩  <br><br>Explain it Like I’m Five - What I Learned Teaching <a href="https://twitter.com/grafana?ref_src=twsrc%5Etfw">@Grafana</a> to My Son<br><br>He&#39;s already mastered observing temperature over time.  Now we&#39;ve got three months to instrument a trampoline to count jumps-per-minute! 📈 <a href="https://t.co/WfFdGFBbpH">https://t.co/WfFdGFBbpH</a> <a href="https://t.co/4pcUSgOyFT">pic.twitter.com/4pcUSgOyFT</a></p>&mdash; Dave Cadwallader (@geek_dave) <a href="https://twitter.com/geek_dave/status/1058477170371125249?ref_src=twsrc%5Etfw">November 2, 2018</a></blockquote>
			<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
			<p>That sounds awesome Dave! We're excited to have you speaking at GrafanaCon LA and look forward to hearing more about this trampoline experiment!</p>
		</div>
	</div>
</div>

<hr />
<br />


#### How are we doing?
Thats a wrap for another issue of TimeShift. What do you think? Are there other types of content you'd like to see here? Submit a comment on this issue below, or post something at our [community forum](http://community.grafana.com?utm_source=blog&utm_campaign=timeshift_68).

Follow us on [Twitter](http://twitter.com/grafana), like us on [Facebook](http://facebook.com/grafana), and join the [Grafana Labs community](http://grafana.com/signup?utm_source=blog&utm_campaign=timeshift_68).
