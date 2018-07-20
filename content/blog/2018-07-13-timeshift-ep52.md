+++
title = "timeShift(GrafanaBuzz, 1w) Issue 52"
author = "trent"
date = "2018-07-13"
keywords = ["Grafana", "Blog", "Roundup", "timeShift"]
cover_image = "/assets/img/blog/timeshift/timeshift_14.jpg"
cover_opacity = "0.4"
cover_blur = "1px"
description = "A weekly roundup of articles and links from Grafana and the surrounding community"
categories = ["timeShift", "Grafana Buzz"]
excerpt = "Articles on the world's fastest internet (with a shout out to Prometheus and Grafana), visualizing real-time and historic weather data, making teams more autonomous, and Grafana + Prometheus + Postgres + TimescaleDB."
+++

### Welcome to TimeShift
It's good to be back from our short holiday break. This week we have articles on the world's fastest internet (with a shout out to Prometheus and Grafana), visualizing real-time and historic weather data, making teams more autonomous, and Grafana + Prometheus + Postgres + TimescaleDB. Hope you have a happy and safe Friday the 13th - see you next week!

Have an article you'd like included in an upcoming TimeShift? [Contact Us](mailto:hello@grafana.com).

<br />
<hr />

#### Latest Stable Release: Grafana 5.2.1
<div class="row row--no-gutters">
	<div class="col col--sm-3">
		<img src="/assets/img/blog/timeshift/grafana_release_icon.png" width="170" />
	</div>
	<div class="col col--sm-9">
		<h4>New Features</h4>
		<ul>
			<li><a href="http://docs.grafana.org/guides/whats-new-in-v5-2/#elasticsearch-alerting">Elasticsearch alerting</a> it’s finally here!</li>
			<li><a href="http://docs.grafana.org/guides/whats-new-in-v5-2/#native-builds-for-arm">Native builds for ARM native builds of Grafana for many more platforms!</li>
			<li><a href="http://docs.grafana.org/guides/whats-new-in-v5-2/#improved-docker-image">Improved Docker image</a> with support for docker secrets</li>
			<li><a href="http://docs.grafana.org/guides/whats-new-in-v5-2/#security">Security</a> make your Grafana instance more secure</li>
			<li><a href="http://docs.grafana.org/guides/whats-new-in-v5-2/#prometheus">Prometheus</a> with alignment enhancements</li>
			<li><a href="http://docs.grafana.org/guides/whats-new-in-v5-2/#influxdb">InfluxDB</a> with support for a new function</li>
			<li><a href="http://docs.grafana.org/guides/whats-new-in-v5-2/#alerting">Alerting</a> with alert notification channel type for Discord</li>
			<li><a href="http://docs.grafana.org/guides/whats-new-in-v5-2/#dashboards-panels">Dashboards &amp; Panels</a> with save &amp; import enhancements</li>
		</ul>
		<p>
			<a href="https://community.grafana.com/t/release-notes-v5-2-x/7894?utm_source=blog&utm_campaign=timeshift_52" target="_blank">See everything new in Grafana v5.2.1</a>.
		</p>
		<a href="https://grafana.com/grafana/download?utm_source=blog&utm_campaign=timeshift_52" target="_blank" class="btn btn--primary">Download Grafana 5.2.1 Now</a>
	</div>
</div>


<br />
<hr />

#### From the Blogosphere
[**Ballerina Makeover with Grafana**](https://grafana.com/blog/2018/07/12/guest-blog-post-ballerina-makeover-with-grafana/?utm_source=blog&utm_campaign=timeshift_52): In this guest blog post, the folks from cloud-native programming language Ballerina show you how you can easily visualize metrics from a Ballerina service with Grafana, walking you step by step through the installation and configuration of the components.

[**How Grafana gives our teams more autonomy with their data**](https://www.linkedin.com/pulse/how-grafana-gives-our-teams-more-autonomy-data-vitor-godoy-pagan/): As the saying goes, "Give a man a fish and you feed him for a day; teach a man to fish and you feed him for a lifetime," Vitor shows how using Grafana has empowered teams across Intuit to get hands on and explore their own data, and provides a step by step guide to starting this in your organization.

[**World's Fastest Internet - 1.6 TERABITS per Second**](https://www.youtube.com/watch?v=WXt2gD4fS_k): Get an inside look at the world's fastest internet connection which powered a recent LAN party in Sweden (monitored by Prometheus and Grafana)!

[**Visualize your data with Grafana**](https://niolabs.com/blog/visualize-your-data-with-grafana): Learn how to visualize some real-time and historical weather data in a Grafana dashboard using the nio platform, Elasticsearch  and the OpenWeatherMap API. Very cool stuff.

[**Uniting SQL and NoSQL for Monitoring: Why PostgreSQL is the ultimate data store for Prometheus**](https://blog.timescale.com/sql-nosql-data-storage-for-prometheus-devops-monitoring-postgresql-timescaledb-time-series-3cde27fd1e07): This article shows you how to use Prometheus, PostgreSQL + TimescaleDB, and Grafana for storing, analyzing, and visualizing metrics. If you're not familiar with TimescaleDB, they spoke at our last GrafanaCon - checkout [Erik's talk](https://www.youtube.com/watch?v=OQ9dXf6lBjU).

[**Introducing Pagination for Grafana Scripted Dashboards**](https://www.neteye-blog.com/2018/07/introducing-pagination-for-grafana-scripted-dashboards/): The new release of Würth Phoenix's NetEye 4 takes advantage of Grafana's scripted dashboards, but adds some new functionality. Sometimes when you have a large number of panels on a single dashboard it can be slow to load. Würth Phoenix has added the concept of pagination to their default analytics dashboard and they show you how they did it.

[**Highly Available Grafana running on AWS Fargate and RDS Aurora**](https://medium.com/247sports-engineering/highly-available-grafana-running-on-aws-fargate-and-rds-aurora-2bbea9d41b50): Set up a fully operational Grafana that's load balanced and backed by Amazon Aurora.
<br />
<hr />

<br />

<div style=" padding: 20px; background: url(/assets/img/blog/timeshift/polygon_texture_black.jpg); background-size: cover; border-radius: 4px;">
	<h4>We're Hiring!</h4>
	<p>We're looking for passionate and talented engineers for positions in New York/Stockholm and remote! Do you love open source software? Do you thrive on tackling complex challenges to build the future? Want to work with awesome people? Be the next to join our team!
	</p>
	<a class="btn btn-outline" href="https://grafana.com/about/hiring?utm_source=blog&utm_campaign=timeshift_52" target="_blank">View our Open Positions</a>
</div>

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
				<strong><a href="https://www.meetup.com/Time-Series-Boston/events/249366642/" target="_blank">TimeSeries Boston | Boston, MA – July 17, 2018</a>:</strong>
				<br />
				<strong>Jacob Lisi: What does Kubernetes Look Like? Performance Monitoring & Visualization with Grafana</strong> - Monitoring Kubernetes is vital to understanding the health and performance of a cluster, but which metrics are most important to add to your dashboards and alert on? Jacob will discuss how to most effectively monitor and visualize your Kubernetes cluster using the Grafana Kubernetes plugin and PromQL. Some of the topics of discussion include(1) how and what to collect when monitoring Kubernetes, (2) how to bring your Grafana dashboards to the next level by using Kubernetes as a data-source, and (3) what to do when managing multiple clusters. All of these topics and more will be discussed to help people get the most out of their Kubernetes monitoring.
			</p>
			<a href="https://www.meetup.com/Time-Series-Boston/events/249366642/" target="_blank" class="btn btn--outline">RSVP</a>
		</div>
	</div>
	<br />
	<div class="row row--md-gutters">
		<div class="col col--md-3">
			<img style="border-radius: 50%;" class="large" src="/assets/img/blog/timeshift/prometheus_logo.svg" />
		</div>
		<div class="col col--md-8 col--sm-offset-1">
			<p>
				<strong><a href="https://sensu.io/summit" target="_blank">PromCon 2018 | Munich, Germany - August 9-10, 2018</a>:</strong>
				<br />
				<strong>Tom Wilkie: Prometheus Monitoring Mixins: Using Jsonnet to Package Together Dashboards, Alerts, and Exporters</strong> - Prometheus offers powerful open source monitoring and alerting - but that comes with higher degrees of freedom, making pre-configured monitoring "packages" hard to build. Simultaneously, it's becoming accepted wisdom that the developers of a given software package are best placed to operate said software, or at least construct the basic monitoring configuration.
				<br />
				In this talk we present a technique for using Jsonnet (a configuration language from Google) for packaging and deploying "Monitoring Mixins" - extensible and customisable combinations of dashboards, alert definitions and exporters. This technique allows developers of open source projects to publish best-practice monitoring configurations alongside their code, and for users to consume it, customise it and stay up to date. We will present example Mixins for Kubernetes and other services such as Consul, Vault, and Cassandra.
			</p>
			<p>
				<strong>David Kaltschmidt: Explore Your Prometheus Data in Grafana</strong> – Grafana is the de-facto dashboarding solution for Prometheus. Now imagine you received a page. Grafana is often the starting point for your incident response. You look at a time series panel, form a hypothesis, and would like to dive deeper. We've built a whole new section that allows you to do just that by iterating quickly through Prometheus queries while leaving your dashboards intact. I'll show-case our new Explore UI and how it can fit into your workflows for both troubleshooting and data exploration.
			</p>
			<p>
				We're also a proud PromCon 2018 sponsor of the evening social event and a diversity scholarship. We hope to see you there!
			</p>
			<a href="https://promcon.io/2018-munich/register/" target="_blank" class="btn btn--outline">Register Now</a>
		</div>
	</div>
	<br />
	<div class="row row--md-gutters">
		<div class="col col--md-3">
			<img style="border-radius: 50%;" class="large" src="/assets/img/blog/timeshift/sensu_summit.jpg" />
		</div>
		<div class="col col--md-8 col--sm-offset-1">
			<p>
				<strong><a href="https://sensu.io/summit" target="_blank">2018 Sensu Summit | Portland, OR - August 22-23, 2018</a>:</strong>
				<br />
				We are a proud sponsor of this year's Sensu Summit! Come enjoy Portland in the summer and learn a ton from the sharpest operations engineers in monitoring!
			</p>
			<a href="https://sensu.io/summit" target="_blank" class="btn btn--outline">More Info</a>
		</div>
	</div>
	<div class="row row--md-gutters">
		<div class="col col--md-3">
			<img style="border-radius: 50%;" class="large" src="/assets/img/blog/timeshift/cloudnative_london.jpg" />
		</div>
		<div class="col col--md-8 col--sm-offset-1">
			<p>
				<strong><a href="https://skillsmatter.com/conferences/10160-cloudnative-london-2018#overview" target="_blank">CloudNative London 2018 | London, United Kingdom - September 26-28, 2018</a>:</strong>
				<br />
				<strong>Tom Wilkie: Monitoring Kubernetes With Prometheus</strong> – In this talk Tom will explore all the moving part for a working Prometheus-on-Kubernetes monitoring system, including kube-state-metrics, node-exporter, cAdvisor and Grafana. You will learn about the various methods for getting to a working setup: the manual approach, using CoreOS's Prometheus Operator, or using Prometheus Ksonnet Mixin.
				<br />
				Tom will also share some little tips and tricks for getting the most out of your Prometheus monitoring, including the common pitfalls and what you should be alerting on.
			</p>
			<a href="https://skillsmatter.com/conferences/10160-cloudnative-london-2018#overview" target="_blank" class="btn btn--outline">Register Now</a>
		</div>
	</div>
	<br />
</div>
<hr />
<br />

#### How are we doing?
Hope you enjoyed this issue of TimeShift. What do you think? Are there other types of content you'd like to see here? Submit a comment on this issue below, or post something at our [community forum](http://community.grafana.com?utm_source=blog&utm_campaign=timeshift_52).

Follow us on [Twitter](http://twitter.com/grafana), like us on [Facebook](http://facebook.com/grafana), and join the [Grafana Labs community](http://grafana.com/signup?utm_source=blog&utm_campaign=timeshift_52).

