+++
title = "timeShift(GrafanaBuzz, 1w) Issue 42"
author = "trent"
date = "2018-04-27"
keywords = ["Grafana", "Blog", "Roundup", "timeShift"]
cover_image = "/assets/img/blog/timeshift/timeshift_14.jpg"
cover_opacity = "0.4"
cover_blur = "1px"
description = "A weekly roundup of articles and links from Grafana and the surrounding community"
categories = ["timeShift", "Grafana Buzz"]
+++

### Welcome to TimeShift
Grafana v5.1 Stable is available! Two of the biggest new features include a native data source for MSSQL Server and heatmap support for Prometheus. Download the latest release and checkout other new features and fixes below.

Heading to [KubeCon + CloudNativeCon Europe 2018](https://events.linuxfoundation.org/events/kubecon-cloudnativecon-europe-2018/) in Copenhagen, Denmark, May 2-4? Come by our booth and say hi! Also don't miss Tom Wilkie's talk on [Prometheus Monitoring Mixins: Using Jsonnet to Package Together Dashboards, Alerts and Exporters](https://kccnceu18.sched.com/event/Dqvp/prometheus-monitoring-mixins-using-jsonnet-to-package-together-dashboards-alerts-and-exporters-tom-wilkie-kausal-intermediate-skill-level), and Goutham Veeramanchaneni's talks: [TSDB: The Engine behind Prometheus](https://kccnceu18.sched.com/event/Dqwc/lightning-talk-tsdb-the-engine-behind-prometheus-goutham-veeramachaneni-iit-hyderabad-beginner-skill-level) and [TSDB: The Past, Present and the Future
 ](https://kccnceu18.sched.com/event/ENwd/tsdb-the-past-present-and-the-future-goutham-veeramachaneni-iit-hyderabad-advanced-skill-level)
<br />
<hr />

#### Latest Release
<div class="row row--no-gutters">
	<div class="col col--sm-3">
		<img src="/assets/img/blog/timeshift/grafana_release_icon.png" width="170" />
	</div>
	<div class="col col--sm-9">
		<p>We received a lot of great suggestions, bug reports and pull requests from our amazing community – Thank you all! See the <a href="https://github.com/grafana/grafana/blob/master/CHANGELOG.md" target="_blank">full changelog</a> for more details.
			<ul>
				<li><a href="https://grafana.com/blog/2018/04/26/grafana-v5.1-released/#improved-scrolling-experience" target="_blank">Improved scrolling experience</a></li>
				<li><a href="https://grafana.com/blog/2018/04/26/grafana-v5.1-released/#improved-docker-image" target="_blank">Improved docker image</a> with a breaking change!</li>
				<li><a href="https://grafana.com/blog/2018/04/26/grafana-v5.1-released/#heatmap-support-for-prometheus" target="_blank">Heatmap support for Prometheus</a></li>
				<li><a href="https://grafana.com/blog/2018/04/26/grafana-v5.1-released/#microsoft-sql-server" target="_blank">Microsoft SQL Server</a> as metric &amp; table data source!</li>
				<li><a href="https://grafana.com/blog/2018/04/26/grafana-v5.1-released/#adding-new-panels-to-dashboards" target="_blank">Copy and paste for panels</a> and other improvements when adding panels to dashboards</li>
				<li><a href="https://grafana.com/blog/2018/04/26/grafana-v5.1-released/#align-zero-line-for-right-and-left-y-axes" target="_blank">Align Zero-Line for Right and Left Y-axes</a> in the Graph Panel</li>
			</ul>
		</p>
		<p>
			Check out the <a href="https://grafana.com/blog/2018/04/26/grafana-v5.1-released/?utm_source=blog&utm_campaign=timeshift_42" target="_blank">release blog post</a> for an in-depth look at what's new.
		</p>
		<a href="https://grafana.com/grafana/download?utm_source=blog&utm_campaign=timeshift_42" target="_blank" class="btn btn--primary">Download Grafana 5.1 Stable Now</a>
	</div>
</div>


<br />
<hr />

#### From the Blogosphere
[**What's New is Grafana v5.1**](https://grafana.com/blog/2018/04/26/grafana-v5.1-released/?utm_source=blog&utm_campaign=timeshift_42): Daniel put together a comprehensive blog post on the updates included in Grafana v5.1 stable. He reviews the new features, bug fixes, and other notable highlights.

[**Special Report: New York’s enterprise infrastructure ecosystem**](https://techcrunch.com/2018/04/21/new-yorks-enterprise-infrastructure-ecosystem/): TechCrunch wrote a special report on the NYC enterprise tech ecosystem and the explosion of burgeoning startups in the city. It makes mention of the "Voxel Mafia" from which awesome companies like [NS1](https://ns1.com), [Packet](https://packet.net), and Grafana Labs were born.

[**Brain Monitoring with Kafka, OpenTSDB, and Grafana**](https://www.svds.com/brain-monitoring-kafka-opentsdb-grafana/): This interesting article from July, 2016 resurfaced recently and discusses how a group of data scientists used Grafana to visualize brain wave EEG data.

[**Kubernetes, Local to Production with Django: 6— Add Prometheus & Grafana Monitoring With Helm**](https://medium.com/@markgituma/kubernetes-local-to-production-with-django-6-add-prometheus-grafana-monitoring-with-helm-926fafbe1d): The sixth tutorial in the series covers how to integrate Prometheus and Grafana for k8s resource and application monitoring. Be sure and check out the [rest of the series](https://medium.com/@markgituma/kubernetes-local-to-production-with-django-1-introduction-d73adc9ce4b4).

[**Istio 101 with Minikube**](https://medium.com/google-cloud/istio-101-with-minikube-9a748ec59546): Learn how to install Istio and add-ons like Prometheus and Grafana on Minikube. Minikube gives you a local k8s cluster, which is perfect for doing things like conducting live demos when conference Wifi is sketchy.

[**Interactive polished to a high gloss**](https://www.becon.de/interaktiv-auf-hochglanz-poliert/): Andre discusses modern dashboards tools like Grafana and the evolution of monitoring from the MRTG days of the past.

<br />
<hr />

#### Upcoming Events
In between code pushes we like to speak at, sponsor and attend all kinds of conferences and meetups. We also like to make sure we mention other Grafana-related events happening all over the world. If you're putting on just such an event, let us know and we'll list it here.

<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--md-3">
			<img style="border-radius: 50%;" class="large" src="/assets/img/blog/timeshift/kubecon_18.png" />
		</div>
		<div class="col col--md-8 col--sm-offset-1">
			<p>
				<strong><a href="https://events.linuxfoundation.org/events/kubecon-cloudnativecon-europe-2018/" target="_blank">KubeCon + CloudNativeCon Europe 2018 | Copenhagen, Denmark - May 2-4, 2018</a>:</strong> <br />
				<strong>Tom Wilkie – Prometheus Monitoring Mixins: Using Jsonnet to Package Together Dashboards, Alerts and Exporters</strong><br />In this talk we present a technique for using Jsonnet (a configuration language from Google) for packaging and deploying “Monitoring Mixins” - extensible and customizable combinations of dashboards, alert definitions and exporters. This technique allows developers of open source projects to publish best-practice monitoring configurations alongside their code, and for users to consume it, customize it and stay up to date. We will present example Mixins for Kubernetes and other services such as Consul and Cassandra.
			</p>
			<p>
				<strong>Goutham Veeramanchaneni - The Engine behind Prometheus</strong><br /> This talk will introduce TSDB, its high-level usage and guarantees, and will show people how, with a little Go knowledge, they can introduce a solid time-series database into their stack.
			</p>
			<p>
				<strong>Goutham Veeramanchaneni - TSDB: The Past, Present and the Future</strong><br /> TSDB is the storage engine that powers Prometheus 2.0 and brought most of the drastic improvements in speed and utilization across the board. But it is also a golang library that Prometheus imports and is a solid time-series database that anyone can use.<br />
				It is undergoing active development and this talk will take you through the journey, benchmarks, new features, ghastly bugs and moonshot ideas. This will also help the audience understand the library and hopefully get them to use and contribute to it.
			</p>
			<p>
				We're also sponsoring KubeCon + CloudNativeCon as a Startup Sponsor. Swing by our booth to learn how to monitor Kubernetes with GrafanaCloud.
			</p>
			<a href="https://events.linuxfoundation.org/events/kubecon-cloudnativecon-europe-2018/" target="_blank" class="btn btn--outline">Register Now</a>
		</div>
	</div>
	<br/>
	<div class="row row--md-gutters">
		<div class="col col--md-3">
			<img style="border-radius: 50%;" class="large" src="/assets/img/blog/timeshift/monitorama_18.png" />
		</div>
		<div class="col col--md-8 col--sm-offset-1">
			<p>
				<strong><a href="http://monitorama.com/" target="_blank">Monitorama 2018 PDX | Portland, OR - June 4-6, 2018</a>:</strong> <br />
				Join us again to hear talks from industry experts and community leaders discuss the newest approaches in monitoring and observability. Find out which tools and techniques are in use at some of the largest web architectures in the world.
			</p>
			<a href="http://monitorama.com/" target="_blank" class="btn btn--outline">Register Now</a>
		</div>
	</div>
	<br/>`
	<div class="row row--md-gutters">
		<div class="col col--md-3">
			<img style="border-radius: 50%;" class="large" src="/assets/img/blog/timeshift/influxdays.png" />
		</div>
		<div class="col col--md-8 col--sm-offset-1">
			<p>
				<strong><a href="https://influxdays.com/" target="_blank">InfluxDays London 2018 | London, United Kingdom - June 14, 2018</a>:</strong>
				<br />
				<strong>David Kaltschmidt - Grafana and IFQL</strong>
				<br />
				We're also a proud sponsor of InfluxDays London -  two days of technical talks around Telegraf, InfluxDB, Chronograf, Kapacitor, Grafana and adjacent technologies.
			</p>
			<a href="https://influxdays.com/" target="_blank" class="btn btn--outline">Register Now</a>
		</div>
	</div>
</div>
<hr />

<div>
	<div class="row row--no-gutters">
		<div class="col col--sm-12">
			<h4>Tweet of the Week</h4>
			We scour Twitter each week to find an interesting/beautiful dashboard or monitoring related tweet and show it off! <a href="https://twitter.com/hashtag/monitoringlove?src=hash" target="_blank">#monitoringLove</a>
			<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Finally Igot the iSpindel to communicate with my InfluxDB and Grafana. The sunday batch of DIPA will hopefully be monitored of temp and SG throughout the fermentation. I love these technical devices. ;) Does it make better beer. Absolutely not. ;)<br>.<br>.<br>Use hashtag <a href="https://twitter.com/hashtag/hillbillyb?src=hash&amp;ref_src=twsrc%5Etfw">#hillbillyb</a>… <a href="https://t.co/yje8ZguKNR">pic.twitter.com/yje8ZguKNR</a></p>&mdash; Hillbilly Brewery (@breweryhill) <a href="https://twitter.com/breweryhill/status/989550700651798528?ref_src=twsrc%5Etfw">April 26, 2018</a></blockquote>
			<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


			<p>Let us be the judge of that - feel free to send a few bottles to <strong>29 Broadway, FL 31, New York, NY 10006</strong> ;).</p>
		</div>
	</div>
</div>

<hr />

<div style=" padding: 20px; background: url(/assets/img/blog/timeshift/polygon_texture_black.jpg); background-size: cover; border-radius: 4px;">
	<h4>Grafana Labs is Hiring!</h4>
	<p>We are passionate about open source software and thrive on tackling complex challenges to build the future. We ship code from every corner of the globe and love working with the community. If this sounds exciting, you're in luck – <strong>WE'RE HIRING!</strong></p>
	<p>Check out our <a class="btn btn-outline" href="https://grafana.com/about/hiring?utm_source=blog&utm_campaign=timeshift_42" target="_blank">Open Positions</a></p>
</div>


<hr />
<br />
#### See You Next Week!
Thanks for reading another issue of timeShift. What would you like to see here? Submit a comment on this issue below, or post something at our [community forum](http://community.grafana.com?utm_source=blog&utm_campaign=timeshift_42).

Follow us on [Twitter](http://twitter.com/grafana), like us on [Facebook](http://facebook.com/grafana), and join the [Grafana Labs community](http://grafana.com/signup?utm_source=blog&utm_campaign=timeshift_42).



