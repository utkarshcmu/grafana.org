+++
title = "timeShift(GrafanaBuzz, 1w) Issue 70"
author = "trent"
date = "2018-11-30"
keywords = ["Grafana", "Blog", "Roundup", "timeShift", "security", "GrafanaCon"]
cover_image = "/assets/img/blog/timeshift/timeshift_14.jpg"
cover_opacity = "0.4"
cover_blur = "1px"
description = "A weekly roundup of articles and links from Grafana and the surrounding community"
categories = ["timeShift", "Grafana Buzz"]
excerpt = "Logging is coming to Grafana, Monitoring at Stack Overflow, Announcements from AWS re:Invent 2018 and more!"
+++

### Welcome to TimeShift
Lots to catchup on this week after taking a break for Thanksgiving, so let's dive in! This week we share the video from the 'Logging is coming to Grafana' talk, an article on how Stack Overflow tackles monitoring, a shout out from AWS re:Invent 2018, and a plugin preview for Timestream, Amazon's new TSDB for IoT apps.

See an article we missed? [Contact us](mailto:hello@grafana.com)!
<br />
<hr />

<div class="row row--no-gutters">
	<div class="col col--sm-3">
		<img src="/assets/img/blog/timeshift/grafana_release_icon.png" width="170" />
	</div>
	<div class="col col--sm-9">
		<h3>Latest Stable Release: Grafana v5.3.4</h3>
		<h5>Updates in this release</h5>
		<ul>
			<li><strong>Alerting</strong>: Delete alerts when parent folder was deleted <a href="https://github.com/grafana/grafana/issues/13322">#13322</a></li>
			<li><strong>MySQL</strong>: Fix <code>$__timeFilter()</code> should respect local time zone <a href="https://github.com/grafana/grafana/issues/13769">#13769</a></li>
			<li><strong>Dashboard</strong>: Fix datasource selection in panel by enter key <a href="https://github.com/grafana/grafana/issues/13932">#13932</a></li>
			<li><strong>Graph</strong>: Fix table legend height when positioned below graph and using Internet Explorer 11 <a href="https://github.com/grafana/grafana/issues/13903">#13903</a></li>
			<li><strong>Dataproxy</strong>: Drop origin and referer http headers <a href="https://github.com/grafana/grafana/issues/13328">#13328</a> <a href="https://github.com/grafana/grafana/issues/13949">#13949</a>, thx <a href="https://github.com/roidelapluie">@roidelapluie</a></li>
		</ul>
		<p>This release also includes the <a href="https://community.grafana.com/t/grafana-5-3-3-and-4-6-5-security-update/11961" target="_blank">file exfiltration vulnerability</a> security fix (added to 5.3.3)</p>
		<a href="https://grafana.com/grafana/download?utm_source=blog&utm_campaign=timeshift_70" target="_blank" class="btn btn--primary">Download Grafana v5.3.4 Now</a>
	</div>
</div>

<br />
<hr />

#### From the Blogosphere
[**VIDEO - Logging is Coming to Grafana**](https://www.youtube.com/watch?v=vDXAVZY7rB0): In our last issue of TimeShift we shared the [slides](https://speakerdeck.com/davkal/osmc-2018-logging-is-coming-to-grafana) from David Kaltschmidt's recent OSMC talk that showed off some of the new Prometheus inspired logging he's been working on. You can now watch the video of the talk and see it in action.

[**VIDEO - AWS re:Invent 2018: Chris Dyl, Director of Platform at Epic Games, Speaks at Monday Night Live**](https://www.youtube.com/watch?v=MCLrA401vHw): We always love to get shout-outs from companies using Grafana, esp at events like AWS re:Invent 2018. In this talk, Chris shows off Epic Games' epic analytics pipeline infra, which includes Grafana.

[**Pro Tips: Using Grafana in Quality Assurance**](https://grafana.com/blog/2018/11/29/pro-tips-using-grafana-in-quality-assurance/?utm_source=blog&utm_campaign=timeshift_70): Quality assurance is a priority at Evolution Gaming, the world leader in live casino gaming, and as Andrejs Kalnacs, Lead Software Developer in Test, said during his GrafanaCon EU talk in March, Grafana has been a game changer.

[**carbon-relay-ng v0.11.0 Available**](https://github.com/graphite-ng/carbon-relay-ng/releases): A new veresion of carbon-relay-ng has been released that includes a memory leak fix, a connection pooling fix, better logging, major input refactors and more.

[**Stack Overflow: How We Do Monitoring - 2018 Edition**](https://nickcraver.com/blog/2018/11/29/stack-overflow-how-we-do-monitoring/): A very comprehensive article in a series about Stack Overflow's architecture. This article goes in-depth into their monitoring stack. In 2016 Kyle Brandt discussed the [culture and reality of monitoring at Stack Overflow](https://www.youtube.com/watch?v=BvFQoAF2bFo) at GrafanaCon NYC - might also be worth a watch

[**VIDEO - How to use Grafana with AWS CloudWatch**](https://www.youtube.com/watch?v=tuhOdtsvoNY): Step-by-step video guide on how to connect AWS Cloudwatch to Grafana. There's also a [written article](https://www.ceos3c.com/cloud/use-grafana-with-aws-cloudwatch-easy-fast/) to use for reference.

[**Monitoring docker containers on Windows using Prometheus + Grafana**](https://medium.com/@mahesh.mahadevan/monitoring-docker-containers-on-windows-using-prometheus-grafana-c32bbb7ed04): Microsoft has made installing Docker on the latest version of Windows easier. In the latest version of Docker CE you can now try out kubectl operations via the "Enable Kubernetes" option. This article will show you how to get everything up and running.

<br />
<hr />

<div class="row row--internal-gutters">
	<div class="col col--sm-8">
		<a href="https://www.grafanacon.org/" target="_blank"><img src="/assets/img/blog/timeshift/grafanacon_ga_tickets_tweet.jpg" width="600" /></a>
	</div>
	<div class="col col--sm-4">
		<h4>Get your GrafanaCon LA Tickets Now!</h4>
		<p>Join us in Los Angeles, California February 25-26, 2019 for 2 days of talks focused on Grafana and the open source monitoring ecosystem. Learn about Grafana and new/upcoming features and projects in the broader ecosystem like <strong>Prometheus</strong>, <strong>Graphite</strong>, <strong>InfluxDB</strong>, <strong>Kubernetes</strong>, and more.</p>
		<a class="btn btn--outline" href="https://www.grafanacon.org/" target="_blank"><strong>Register Now</strong></a>
	</div>
	<div class="col col--sm-12">
		<h4>Join us at GrafanaCon LA and learn about:</h4>
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

<div class="speaker">
	<div class="row row--md-gutters">
		<div class="col col--sm-12 text-center">
			<h4>We've already confirmed these awesome speakers and will be adding more!</h4>
		</div>
		<div class="col col--sm-3">
			<img class="speaker-photo"  src="/assets/img/blog/timeshift/grafanacon/headshots/brendan_burns.jpg" />
			<div class="speaker-name">Brendan Burns</div>
			<div class="speaker-detail">Distinguished Engineer & Kubernetes co-founder</div>
			<div class="speaker-detail">Microsoft</div>
			<a href="https://microsoft.com/" target="_blank"><img class="speaker-logo" src="/assets/img/blog/timeshift/microsoft_logo.png" /></a>
		</div>
		<div class="col col--sm-3">
			<img class="speaker-photo" src="/assets/img/blog/timeshift/grafanacon/headshots/stig_sorensen.jpg" />
			<div class="speaker-name">Stig Sorensen</div>
			<div class="speaker-detail">HEAD OF TELEMETRY</div>
			<div class="speaker-detail">BLOOMBERG</div>
			<a href="https://www.bloomberg.com/" target="_blank"><img class="speaker-logo" src="/assets/img/blog/timeshift/grafanacon/logos/bloomberg_logo.png" /></a>
		</div>
		<div class="col col--sm-3">
			<img class="speaker-photo"  src="/assets/img/blog/timeshift/grafanacon/headshots/sean_hanson.jpg" />
			<div class="speaker-name">Sean Hanson</div>
			<div class="speaker-detail">SOFTWARE DEVELOPER</div>
			<div class="speaker-detail">BLOOMBERG</div>
			<a href="https://www.bloomberg.com/" target="_blank"><img class="speaker-logo" src="/assets/img/blog/timeshift/grafanacon/logos/bloomberg_logo.png" /></a>
		</div>
		<div class="col col--sm-3">
			<img class="speaker-photo"  src="/assets/img/blog/timeshift/grafanacon/headshots/dave_cadwallader.jpg" />
			<div class="speaker-name">Dave Cadwallader</div>
			<div class="speaker-detail">Site Reliability Architect</div>
			<div class="speaker-detail">DNANEXUS</div>
			<a href="https://www.dnanexus.com/" target="_blank"><img class="speaker-logo" src="/assets/img/blog/timeshift/dnanexus_logo.png" /></a>
		</div>
		<br />
		<div class="col col--sm-3 col--sm-offset-3">
			<img class="speaker-photo"  src="/assets/img/blog/timeshift/grafanacon/headshots/ben_kochie.jpg" />
			<div class="speaker-name">Ben Kochie</div>
			<div class="speaker-detail">Staff Backend Engineer, Monitor</div>
			<div class="speaker-detail">GitLab</div>
			<a href="https://www.gitlab.com/" target="_blank"><img class="speaker-logo" src="/assets/img/blog/timeshift/gitlab_logo.png" /></a>
		</div>
		<div class="col col--sm-3">
			<img class="speaker-photo"  src="/assets/img/blog/timeshift/grafanacon/headshots/paul_dix.jpg" />
			<div class="speaker-name">Paul Dix</div>
			<div class="speaker-detail">Co-Founder | CTO</div>
			<div class="speaker-detail">InfluxData</div>
			<a href="https://influxdata.com/" target="_blank"><img class="speaker-logo" src="/assets/img/blog/timeshift/influxdata_logo_rev.png" /></a>
		</div>
	</div>
	<br />
</div>

<br />
<hr />

<div class="row row--internal-gutters">
	<div class="col col--sm-4">
		<h4>Featured Job</h4>
	<p>As Grafana continues to grow we’re building our European sales team and are hiring <strong><a href="http://workable.com/j/13A62D8DED" target="_blank">Business Development Representatives</a></strong> based in our Stockholm office. This is a rare opportunity to join an early stage startup and take an instrumental role in helping to build the sales function. <a href="http://workable.com/j/13A62D8DED" target="_blank">Apply now</a>.</p>
	<a class="btn btn-outline" href="https://grafana.com/about/hiring?utm_source=blog&utm_campaign=timeshift_70" target="_blank">View All our Open Positions</a>
	</div>
	<div class="col col--sm-8">
		<a href="https://grafana.com/about/hiring?utm_source=blog&utm_campaign=timeshift_70" target="_blank">
			<img src="/assets/img/blog/timeshift/careers_section.jpg" />
		</a>
	</div>
</div>

<br />
<hr />
<br />

#### Grafana Plugin Update
A new premium plugin, a new polystat panel plugin, plus some updates to Instana and the Akumuli datasouce plugins. To update any of your plugins in your on-prem Grafana, use the <a href="http://docs.grafana.org/administration/cli/#grafana-cli?utm_source=blog&utm_campaign=timeshift_63" target="_blank">grafana-cli tool</a>, or for <a href="https://grafana.com/cloud/grafana?utm_source=blog&utm_campaign=timeshift_63" target="_blank">Hosted Grafana</a> update with one-click.
<br />
<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/grafana-timestream-datasource/versions/0.0.1/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-premium-plugin-tag"><strong>NEW PREMIUM PLUGIN</strong></div><br/>
				<strong>Amazon Timestream</strong> - Amazon announced their new TSDB called Timestream at AWS re:Invent 2018. If you're a Grafana Enterprise customer, you will have an opportunity to get a preview of the Timestream plugin for Grafana.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/grafana-timestream-datasource?utm_source=blog&utm_campaign=timeshift_70" target="_blank"><strong>Install</strong></a>
			</p>
		</div>
	</div>
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/grafana-polystat-panel/versions/1.0.14/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>NEW PLUGIN</strong></div><br/>
				<strong>Polystat Panel</strong> - This new panel is a multi-stat panel in the hexagonal (honeycomb) style. Each hexagon represents a metric, and colors are used to signal the state making this an effective way to visualize multiple metrics. The composites feature allows you to combine Hexagons/metrics into one hexagon. The panel has lots of options for layout, setting thresholds and styling. 
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/grafana-polystat-panel?utm_source=blog&utm_campaign=timeshift_70" target="_blank"><strong>Install</strong></a>
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
				<strong>Instana Datasource</strong> - Version v1.3.1 adds support for changing legend format to adjust the legend display. Also, it is now possible to customize legend keys in the Graph panel. The new Legend format field lets you combine different variables like the Service label or Entity type with your own custom text.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/instana-datasource?utm_source=blog&utm_campaign=timeshift_70" target="_blank"><strong>Install</strong></a>
			</p>
		</div>
	</div>
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/akumuli-datasource/versions/1.2.6/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong>Akumuli Datasource</strong> - This plugin received a general update which includes a number of small bugfixes.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/akumuli-datasource?utm_source=blog&utm_campaign=timeshift_70" target="_blank"><strong>Install</strong></a>
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
			<img style="border-radius: 50%;" class="large" src="/assets/img/blog/timeshift/webinar.png" />
		</div>
		<div class="col col--md-8 col--sm-offset-1">
			<p>
				<strong><a href="https://register.gotowebinar.com/register/1892519390489349387" target="_blank">Visualizing Time-Series Data with Grafana | Webinar - December 4, 2018, 12:00pm EST</a>:</strong>
				<strong>Matt Toback and Diana Hsieh</strong> - Visualization is a key component for generating meaningful insights from time-series data. Grafana, an opensource visualization platform, is a great option for users looking to create dynamic dashboards that can be shared across teams. In recent releases, Grafana has introduced tighter integrations with both TimescaleDB and PostgreSQL. This includes a graphical query builder easier iteration when working with complex SQL queries. 
			</p>
			<p>
				In this webinar, we will discuss how visualization coupled with a flexible full SQL interface can drive powerful insights that inform both technical and business decisions. Additionally, the webinar will include a demo covering basic dashboards that users can use to jumpstart their own internal visualization systems.
			</p>
			<a href="https://register.gotowebinar.com/register/1892519390489349387" target="_blank" class="btn btn--outline">Register Now</a>
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

<div>
	<div class="row row--no-gutters">
		<div class="col col--sm-12">
			<h4>Tweet of the Week</h4>
			We scour Twitter each week to find an interesting/beautiful dashboard or monitoring related tweet and show it off! <a href="https://twitter.com/hashtag/monitoringlove?src=hash" target="_blank">#monitoringLove</a>
			<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Just had some fun working on this <a href="https://t.co/vJKI44MTT8">https://t.co/vJKI44MTT8</a><br><br>Nothing crazy but just a simple app that downloads raw data, feed it to elasticsearch and fetches it from grafana. Sounds fun, huh?<br><br>Spend $0 except my Friday night hours which is awesome! 😎 <a href="https://t.co/VAVOXVNjvR">pic.twitter.com/VAVOXVNjvR</a></p>&mdash; bluemarble.studio (@bluemarblestdo) <a href="https://twitter.com/bluemarblestdo/status/1066219966309916673?ref_src=twsrc%5Etfw">November 24, 2018</a></blockquote>
			<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
			<p>This is awesome! Maybe *cough*<a href="https://voyager.gsfc.nasa.gov/_recent/v2la1.html" target="_blank">NASA</a>*cough* should consider an update. ;)</p>
		</div>
	</div>
</div>

<hr />
<br />

#### How are we doing?
Thats a wrap for another issue of TimeShift. What do you think? Are there other types of content you'd like to see here? Submit a comment on this issue below, or post something at our [community forum](http://community.grafana.com?utm_source=blog&utm_campaign=timeshift_70).

Follow us on [Twitter](http://twitter.com/grafana), like us on [Facebook](http://facebook.com/grafana), and join the [Grafana Labs community](http://grafana.com/signup?utm_source=blog&utm_campaign=timeshift_70).
