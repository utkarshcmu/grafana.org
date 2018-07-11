+++
title = "timeShift(GrafanaBuzz, 1w) Issue 49"
author = "trent"
date = "2018-06-15"
keywords = ["Grafana", "Blog", "Roundup", "timeShift"]
cover_image = "/assets/img/blog/timeshift/timeshift_14.jpg"
cover_opacity = "0.4"
cover_blur = "1px"
description = "A weekly roundup of articles and links from Grafana and the surrounding community"
categories = ["timeShift", "Grafana Buzz"]
excerpt = "This week's roundup highlights videos from Monitorama, making your own Grafana Plugins, NetApp's fully open source monitoring stack and more."
+++

### Welcome to TimeShift
This week's roundup highlights videos from Monitorama, making your own Grafana Plugins, NetApp's fully open source monitoring stack and more. Have an article you'd like to have included in an upcoming TimeShift? [Contact Us](mailto:hello@grafana.com).

<br />
<hr />

#### Latest Beta Release: Grafana 5.2.0-beta1
<div class="row row--no-gutters">
	<div class="col col--sm-3">
		<img src="/assets/img/blog/timeshift/grafana_release_icon.png" width="170" />
	</div>
	<div class="col col--sm-9">
		<p>In addition to Elasticsearch alerting, we have a number of other enhancements including:
		</p>
		<ul>
			<li>Downloads now available for ARM, Mac platforms</li>
			<li>Improved Docker image</li>
			<li>Prometheus improvements</li>
			<li>Discord alert notifications</li>
			<li>Dashboard and panel improvements</li>
		</ul>
		<p>Please try it out and let us know what you think. <a href="http://docs.grafana.org/guides/whats-new-in-v5-2/?utm_source=blog&utm_campaign=timeshift_49" target="_blank">See what else is new in Grafana v5.2.0-beta1</a>.
		</p>
		<a href="https://grafana.com/grafana/download/beta?utm_source=blog&utm_campaign=timeshift_49" target="_blank" class="btn btn--primary">Download Grafana 5.2.0-beta1 Now</a>
	</div>
</div>


<br />
<hr />

#### From the Blogosphere
[**Monitorama PDX 2018 - Portland, OR - Videos**](https://vimeo.com/channels/1382219/videos/sort:preset/format:detail): Videos from Monitorama are now available! This is a conference we look forward to each year and always has great presentations that spark interesting conversations. This year was no exception.

[**Developing Your Visualization Plugin for Grafana**](https://dzone.com/articles/development-of-visualization-plugin-for-grafana): Grafana has a robust plugin architecture that allows you to add additional data sources and panels. This article will guide you through how to develop your very own visualization plugin.

[**Monitoring for microservices: "With Prometheus, you can very quickly achieve tangible results"**](https://jaxenter.de/monitoring-microservices-prometheus-interview-71964): This interview from DevOpsCon Berlin discusses the rise of Prometheus, graphing in Grafana, and the best tools for today's monitoring requirements.

[**Visualizing NetApp HCI Performance Using Grafana, Docker, Trident, and Graphite**](https://www.netapp.com/us/media/tr-4694.pdf): NetApp wrote a technical report on how to build a fully customizable Grafana instance to visualize data for SolidFire, VMWare and NetApp HCI systems.

[**Installing Prometheus Monitoring Server with a Grafana Dashboard**](https://www.scaleway.com/docs/configure-prometheus-monitoring-with-grafana/): A detailed walkthrough on how to install Prometheus and Grafana on Scaleway, configure the components, and import your first dashboard.

<br />
<hr />

#### Grafana Plugins
This week we have an update to the Pie Chart Panel. We like to joke that [Friends don't let friends (ab)use pie charts](https://grafana.com/blog/2015/12/04/friends-dont-let-friends-abuse-pie-charts/), but sometimes they are the best tools for the job. It's easy to update Grafana plugins – for on-prem Grafana, use the <a href="http://docs.grafana.org/administration/cli/#grafana-cli?utm_source=blog&utm_campaign=timeshift_49" target="_blank">grafana-cli tool</a>, or for <a href="https://grafana.com/cloud/grafana?utm_source=blog&utm_campaign=timeshift_49" target="_blank">Hosted Grafana</a> update with one-click.
<br />
<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/grafana-piechart-panel/versions/1.3.3/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong>Pie Chart Panel</strong> - There have been a couple updates to this popular panel that adds some fixes to the way the legends are displayed.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/grafana-piechart-panel?utm_source=blog&utm_campaign=timeshift_49" target="_blank"><strong>Update</strong></a>
			</p>
		</div>
	</div>
</div>


<br />

<div style=" padding: 20px; background: url(/assets/img/blog/timeshift/polygon_texture_black.jpg); background-size: cover; border-radius: 4px;">
	<h4>We're Hiring!</h4>
	<p>We're looking for passionate and talented engineers for positions in New York/Stockholm and remote! Do you love open source software? Do you thrive on tackling complex challenges to build the future? Want to work with awesome people? Be the next to join our team!
	</p>
	<a class="btn btn-outline" href="https://grafana.com/about/hiring?utm_source=blog&utm_campaign=timeshift_49" target="_blank">View our Open Positions</a>
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
				<strong><a href="https://www.meetup.com/Time-Series-Boston/events/249366642/" target="_blank">TimeSeries Boston | July 17, 2018</a>:</strong>
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
				PromCon is an event to connect Prometheus users and developers from around the world to exchange knowledge, best practices, and gain experience using Prometheus. Grafana Labs is one of the sponsors of the evening reception the diversity scholarship. More details to come - hope to see you there!
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
</div>
<hr />

<div>
	<div class="row row--no-gutters">
		<div class="col col--sm-12">
			<h4>Tweet of the Week</h4>
			We scour Twitter each week to find an interesting/beautiful dashboard or monitoring related tweet and show it off! <a href="https://twitter.com/hashtag/monitoringlove?src=hash" target="_blank">#monitoringLove</a>
			<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Moved some of our <a href="https://twitter.com/grafana?ref_src=twsrc%5Etfw">@grafana</a> panels from Graph to Heatmap, much more informative 📊🧐 <a href="https://twitter.com/hashtag/dataviz?src=hash&amp;ref_src=twsrc%5Etfw">#dataviz</a> <a href="https://t.co/OJeeAPZ637">pic.twitter.com/OJeeAPZ637</a></p>&mdash; Michael Arndt (@MeneDev) <a href="https://twitter.com/MeneDev/status/1007309953504366594?ref_src=twsrc%5Etfw">June 14, 2018</a></blockquote>
			<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
			<p>Glad you're liking the <a href="https://grafana.com/plugins/heatmap" target="_blank">Heatmap Panel</a> - fascinating to see how the same information displayed differently can really contextualize your data.</p>
		</div>
	</div>
</div>

<hr />
<br />

#### How are we doing?
Hope you enjoyed this issue of TimeShift. What do you think? Are there other types of content you'd like to see here? Submit a comment on this issue below, or post something at our [community forum](http://community.grafana.com?utm_source=blog&utm_campaign=timeshift_49).

Follow us on [Twitter](http://twitter.com/grafana), like us on [Facebook](http://facebook.com/grafana), and join the [Grafana Labs community](http://grafana.com/signup?utm_source=blog&utm_campaign=timeshift_49).

