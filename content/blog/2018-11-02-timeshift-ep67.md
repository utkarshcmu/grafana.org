+++
title = "timeShift(GrafanaBuzz, 1w) Issue 67"
author = "trent"
date = "2018-11-02"
keywords = ["Grafana", "Blog", "Roundup", "timeShift", "Stackdriver", "Postgres", "GrafanaCon"]
cover_image = "/assets/img/blog/timeshift/timeshift_14.jpg"
cover_opacity = "0.4"
cover_blur = "1px"
description = "A weekly roundup of articles and links from Grafana and the surrounding community"
categories = ["timeShift", "Grafana Buzz"]
excerpt = "This week we highlight Grafana project contributors from Hacktoberfest, share an article we published earlier this week on monitoring devices in your home with Prometheus and Grafana, how SoftwareMill manages their dashboards across environments and more."
+++

### Welcome to TimeShift
This week we highlight Grafana project contributors from Hacktoberfest, share an article we published earlier this week on monitoring devices in your home with Prometheus and Grafana, how SoftwareMill manages their dashboards across environments and more.

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
		<a href="https://grafana.com/grafana/download?utm_source=blog&utm_campaign=timeshift_67" target="_blank" class="btn btn--primary">Download Grafana v5.3.2 Now</a>
	</div>
</div>

<br />
<hr />

<div class="row row--internal-gutters">
	<div class="col col--sm-4">
		<h4>Hacktoberfest</h4>
		<p>Hacktoberfest is a month-long celebration of open source software run by DigitalOcean in partnership with GitHub and Twilio. The rules are simple - make five PRs between October 1–31 to any public Github repo and get an awesome t-shirt.</p>
		<p>We'd like to thank the following amazing people for contributing to the Grafana project during Hacktoberfest:</p>
		<ul>
			<li><a href="https://github.com/olshansky" target="_blank">olshansky</a> - 1 contribution</li>
			<li><a href="https://github.com/praveensastry" target="_blank">praveensastry</a> - 3 contributions</li>
			<li><a href="https://github.com/miqh" target="_blank">miqh</a> - 4 contributions</li>
			<li><a href="https://github.com/mondras" target="_blank">mondras</a> - 1 contribution</li>
			<li><a href="https://github.com/neufeldtech" target="_blank">neufeldtech</a> - 1 contribution</li>
		</ul>
	</div>
	<div class="col col--sm-8">
		<a href="https://hacktoberfest.digitalocean.com/" target="_blank"><img src="/assets/img/blog/timeshift/hacktoberfest.jpg" width="600" /></a>
	</div>
</div>
<div class="row row--internal-gutters">
	<div class="col col--sm-12">
		<p>We'll reach out each of you personally, but as a thank you, we want to send you an official Grafana shirt.</p>
	</div>
</div>

<br />
<hr />

#### From the Blogosphere
[**Pro Tips: Using Prometheus and Grafana for Monitoring Power Usage**](https://grafana.com/blog/2018/11/01/pro-tips-using-prometheus-and-grafana-for-monitoring-power-usage/?utm_source=blog&utm_campaign=timeshift_67):  Erwin de Keijzer, a Linux engineer at the Dutch consulting firm Snow, gave a talk at GrafanaCon EU about how he used Prometheus and Grafana to monitor the power usage… of his washing machine. A great presentation about montioring on a totally different scale.

[**Managing multiple Grafana instances**](https://blog.softwaremill.com/managing-multiple-grafana-instances-75d999625c15):  This article dives into how [SoftwareMill](https://softwaremill.com/) uses [Wizzy](https://github.com/utkarshcmu/wizzy) created by [Utkarsh Bhantagar](https://github.com/utkarshcmu/) to manage Grafana dashbord storage, management, and syncing over multiple environments.

[**Raspberry Pi Weather Station**](http://nessy.info/?p=1306): Nessy shows off the SensorTag configuration in a Raspberry Pi 3 Model B weather station he recently built. If you're interseted in building something similar, you might also be interseted in checking out his article on [getting Grafana 5.x running on a Raspberry Pi](http://nessy.info/?p=1298) as well.

[**Monitoring Spring Boot application using Actuator, Micrometer, Prometheus and Grafana**](http://dhaval-shah.com/monitoring-spring-boot-application/):  Dhaval delves into the nuances of monitoring and observability of distributed systems and constructs a system with hypothetical requirements to understand Spring Boot Actuator and its usage in real world monitoring applications. He includes details on the exposed endpoints, available metrics, and how to configure Prometheus and Grafana.

<br />
<hr />

<div class="row row--internal-gutters">
	<div class="col col--sm-4">
		<h4>GrafanaCon LA <br />General Admission Now on Sale</h4>
		<p>Join us in Los Angeles, California February 25-26, 2019 for 2 days of talks focused on Grafana and the open source monitoring ecosystem. Learn about Grafana and new/upcoming features and projects in the broader ecosystem like <strong>Prometheus</strong>, <strong>Graphite</strong>, <strong>InfluxDB</strong>, <strong>Kubernetes</strong>, and more.</p>
		<p>We've already posted the <a href="https://www.grafanacon.org/2019/speakers" target="_blank">first batch of speakers</a>, and will be adding more shortly, so keep checking <a href="https://www.grafanacon.org/" target="_blank">grafanacon.org</a>.</p>
		<a class="btn btn--outline" href="https://www.grafanacon.org/" target="_blank"><strong>Get Your Ticket Now</strong></a>
	</div>
	<div class="col col--sm-8">
		<a href="https://www.grafanacon.org/" target="_blank"><img src="/assets/img/blog/timeshift/grafanacon_earlybird.jpg" width="600" /></a>
	</div>
</div>

<br />
<hr />

<div class="row row--internal-gutters">
	<div class="col col--sm-8">
		<a href="https://grafana.com/about/hiring?utm_source=blog&utm_campaign=timeshift_67" target="_blank">
			<img src="/assets/img/blog/timeshift/careers_section.jpg" />
		</a>
	</div>
	<div class="col col--sm-4">
		<h4>We're Hiring!</h4>
	<p>We've added new open positions at Grafana Labs! Do you love open source software? Do you thrive on tackling complex challenges to build the future? Want to work with awesome people? Be the next to join our team!</p>
	<a class="btn btn-outline" href="https://grafana.com/about/hiring?utm_source=blog&utm_campaign=timeshift_67" target="_blank">View our Open Positions</a>
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

<div>
	<div class="row row--no-gutters">
		<div class="col col--sm-12">
			<h4>Tweet of the Week</h4>
			We scour Twitter each week to find an interesting/beautiful dashboard or monitoring related tweet and show it off! <a href="https://twitter.com/hashtag/monitoringlove?src=hash" target="_blank">#monitoringLove</a>
			<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">I must said that I’m really enjoying using the <a href="https://twitter.com/grafana?ref_src=twsrc%5Etfw">@grafana</a> Explore UI. I know that this is still a WIP/beta, but it’s really good! 😎 <a href="https://t.co/w6ZemZywqx">pic.twitter.com/w6ZemZywqx</a></p>&mdash; Jorge Luis (@jorgelbgm) <a href="https://twitter.com/jorgelbgm/status/1057666565783646209?ref_src=twsrc%5Etfw">October 31, 2018</a></blockquote>
			<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
			<p>Glad that you're liking the beta. Please reach out to <a href="http://twitter.com/davkals" target="_blank">@davkals</a> with any feedback you may have.</p>
		</div>
	</div>
</div>

<hr />
<br />


#### How are we doing?
Thats a wrap for another issue of TimeShift. What do you think? Are there other types of content you'd like to see here? Submit a comment on this issue below, or post something at our [community forum](http://community.grafana.com?utm_source=blog&utm_campaign=timeshift_67).

Follow us on [Twitter](http://twitter.com/grafana), like us on [Facebook](http://facebook.com/grafana), and join the [Grafana Labs community](http://grafana.com/signup?utm_source=blog&utm_campaign=timeshift_67).

