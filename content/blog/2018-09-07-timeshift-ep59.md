+++
title = "timeShift(GrafanaBuzz, 1w) Issue 59"
author = "trent"
date = "2018-09-07"
keywords = ["Grafana", "Blog", "Roundup", "timeShift"]
cover_image = "/assets/img/blog/timeshift/timeshift_14.jpg"
cover_opacity = "0.4"
cover_blur = "1px"
description = "A weekly roundup of articles and links from Grafana and the surrounding community"
categories = ["timeShift", "Grafana Buzz"]
excerpt = "Notes on the important security update for 5.2.3+ and 4.6.4, the new 5.2.4 stable release &amp; 5.3.0-beta1, plus your weekly roundup of Grafana related articles from around the Web."
+++

### Welcome to TimeShift
Last week TimeShift took a vacation, but the Grafana Labs team stayed busy. We announced an important security fix for 5.2.3 and 4.6.4 specifically for LDAP and OAuth authentication. Please [read the announcement](https://grafana.com/blog/2018/08/29/grafana-5.2.3-and-4.6.4-released-with-important-security-fix/) and upgrade immediately if you haven't already. 

This week we released Grafana 5.2.4 stable and 5.3.0-beta1. More on those releases in the section below.

Come across an article you think might be a good fit for an upcoming issue? Suggestions for new content? [Contact us](mailto:hello@grafana.com)!
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
			<a href="https://community.grafana.com/t/release-notes-v5-2-x/7894?utm_source=blog&utm_campaign=timeshift_59" target="_blank">See everything new in Grafana v5.2.4</a>.
		</p>
		<a href="https://grafana.com/grafana/download?utm_source=blog&utm_campaign=timeshift_59" target="_blank" class="btn btn--primary">Download Grafana 5.2.4 Now</a>
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
			There are a lot of other new features and fixes including the grafana-cli fix included in 5.2.4, so please check out the <a href="https://community.grafana.com/t/release-notes-v5-3-x/10244?utm_source=blog&utm_campaign=timeshift_59" target="_blank">release notes</a> to see everything that's new in Grafana 5.3.0beta-1.
		</p>
		<a href="https://grafana.com/grafana/download/beta?utm_source=blog&utm_campaign=timeshift_59" target="_blank" class="btn btn--primary">Download Grafana 5.3.0beta-1 Now</a>
	</div>
</div>


<br />
<hr />

<div class="row row--no-gutters">
	<div class="col col--sm-9">
		<a href="https://www.grafanacon.org/2019/cfp" target="_blank"><img src="/assets/img/blog/timeshift/grafanacon_cfp_timeshift.png" width="600" /></a>
	</div>
	<div class="col col--sm-3">
		<h4>GrafanaCon LA <br />CFP Now Open!</h4>
		<p>Join us in Los Angeles, California February 25-26, 2019 for 2 days of talks focused on Grafana and the open source monitoring ecosystem.</p>
		<a class="btn btn--outline" href="https://www.grafanacon.org/2019/cfp" target="_blank"><strong>Submit You CFP Today</strong></a>
	</div>
</div>

<br />
<hr />

#### From the Blogosphere
[**Building Telemetry for Tea aka Tealemetry**](https://blog.benjojo.co.uk/post/tealemetry-IOT-tea-coaster):  In the search for true observability Ben is tackling the important issues; the proper temperature to consume tea. Using a temperature sensor, Grafana and its built-in alerting feature, he's found the sweet spot between scalding your taste buds and something fit to dump down the drain. Very entertaining article.

[**Deploying Helm / Tiller, Prometheus, AlertManager, Grafana, Elasticsearch On Your Kubernetes Cluster**](http://www.devtech101.com/2018/09/04/deploying-helm-tiller-prometheus-alertmanager-grafana-elasticsearch-on-your-kubernetes-cluster/):  Part 8 in the series on configuring a 3 node Kubernetes master cluster. This article tackles installing and configuring Helm, Prometheus, Alertmanager, Grafana, and Elasticsearch.

[**Monitoring Vault on Kubernetes Using Cloud Native Technologies**](https://banzaicloud.com/blog/monitoring-vault-grafana/):  Bank Vaults is a core building block of the Pipeline PaaS. This post is about monitoring Vault with Prometheus (on Kubernetes) and displaying metrics on Grafana.

<br />
<hr />

<div style=" padding: 20px; background: url(/assets/img/blog/timeshift/polygon_texture_black.jpg); background-size: cover; border-radius: 4px;">
	<h4>We're Hiring!</h4>
	<p>We've added new open positions at Grafana Labs! Do you love open source software? Do you thrive on tackling complex challenges to build the future? Want to work with awesome people? Be the next to join our team!
	</p>
	<a class="btn btn-outline" href="https://grafana.com/about/hiring?utm_source=blog&utm_campaign=timeshift_59" target="_blank">View our Open Positions</a>
</div>

<br />
<hr />
<br />

#### Upcoming Events
In between code pushes we like to speak at, sponsor and attend all kinds of conferences and meetups. We also like to make sure we mention other Grafana-related events happening all over the world. If you're putting on just such an event, let us know and we'll list it here.

<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--md-3">
			<img style="border-radius: 50%;" class="large" src="/assets/img/blog/timeshift/meetup.jpg" />
		</div>
		<div class="col col--md-8 col--sm-offset-1">
			<p>
				<strong><a href="https://www.meetup.com/DevOps-Belfast/events/250817922/" target="_blank">Meetup Workshop: Monitoring with Prometheus and Grafana | Belfast, Northern Ireland - September 18, 2018</a>:</strong>
				<br />
				If you're in Belfast, or are going to be in September, this could be a great Meetup to attend. Topics include: Architecture, Prometheus, Alertmanager, Pushgateway, Telegraf, JMX exporter, Grafana, and more!
			</p>
			<a href="https://www.meetup.com/DevOps-Belfast/events/250817922/" target="_blank" class="btn btn--outline">RSVP Now</a>
		</div>
	</div>
	<br />
	<div class="row row--md-gutters">
		<div class="col col--md-3">
			<img style="border-radius: 50%;" class="large" src="/assets/img/blog/timeshift/cloudnative_london.jpg" />
		</div>
		<div class="col col--md-8 col--sm-offset-1">
			<p>
				<strong><a href="https://skillsmatter.com/conferences/10160-cloudnative-london-2018#overview" target="_blank">CloudNative London 2018 | London, United Kingdom - September 26-28, 2018</a>:</strong>
				<br />
				<strong>Tom Wilkie: Monitoring Kubernetes With Prometheus</strong> – In this talk Tom will explore all the moving part for a working Prometheus-on-Kubernetes monitoring system, including kube-state-metrics, node-exporter, cAdvisor and Grafana. You will learn about the various methods for getting to a working setup: the manual approach, using CoreOS's Prometheus Operator, or using Prometheus Ksonnet Mixin.
			</p>
			<p>
				Tom will also share some little tips and tricks for getting the most out of your Prometheus monitoring, including the common pitfalls and what you should be alerting on.
			</p>
			<a href="https://skillsmatter.com/conferences/10160-cloudnative-london-2018#overview" target="_blank" class="btn btn--outline">Register Now</a>
		</div>
	</div>
	<br />
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
</div>
<hr />
<br />

#### How are we doing?
Hope you enjoyed this issue of TimeShift. What do you think? Are there other types of content you'd like to see here? Submit a comment on this issue below, or post something at our [community forum](http://community.grafana.com?utm_source=blog&utm_campaign=timeshift_59).

Follow us on [Twitter](http://twitter.com/grafana), like us on [Facebook](http://facebook.com/grafana), and join the [Grafana Labs community](http://grafana.com/signup?utm_source=blog&utm_campaign=timeshift_59).

