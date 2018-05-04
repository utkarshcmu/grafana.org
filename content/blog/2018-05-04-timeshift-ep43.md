+++
title = "timeShift(GrafanaBuzz, 1w) Issue 43"
author = "trent"
date = "2018-05-04"
keywords = ["Grafana", "Blog", "Roundup", "timeShift"]
cover_image = "/assets/img/blog/timeshift/timeshift_14.jpg"
cover_opacity = "0.4"
cover_blur = "1px"
description = "A weekly roundup of articles and links from Grafana and the surrounding community"
categories = ["timeShift", "Grafana Buzz"]
+++

### Welcome to TimeShift
This week, Grafana Labs was happy to speak at and sponsor KubeCon + CloudNativeCon EU in Copenhagen, Denmark. We got to chat with a ton of Grafana users, attended amazing talks, and generally had a blast! From Grafana Labs, Goutham Veeramanchaneni gave two talks focusing on TSDB - the engine behind Prometheus, and Tom Wilkie discussed a technique for using Jsonnet for packaging and deploying “Monitoring Mixins” - extensible and customisable combinations of dashboards, alert definitions and exporters. We'll be sure to link to the videos and presentations when they're available on the KubeCon website. Already looking forward to KubeCon + CloudNativeCon China in November!
<br />
<hr />

#### Latest Release
<div class="row row--no-gutters">
	<div class="col col--sm-3">
		<img src="/assets/img/blog/timeshift/grafana_release_icon.png" width="170" />
	</div>
	<div class="col col--sm-9">
		<p>Grafana v5.1 stable is now available. See the <a href="https://github.com/grafana/grafana/blob/master/CHANGELOG.md" target="_blank">full changelog</a> for more details.
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
			Check out the <a href="https://grafana.com/blog/2018/04/26/grafana-v5.1-released/?utm_source=blog&utm_campaign=timeshift_43" target="_blank">release blog post</a> for an in-depth look at what's new.
		</p>
		<a href="https://grafana.com/grafana/download?utm_source=blog&utm_campaign=timeshift_43" target="_blank" class="btn btn--primary">Download Grafana 5.1 Stable Now</a>
	</div>
</div>


<br />
<hr />

#### From the Blogosphere
[**Prometheus Monitoring Mixins Using jsonnet to package together dashboards, alerts and exporters**](https://docs.google.com/document/d/1A9xvzwqnFVSOZ5fD3blKODXfsat5fg6ZhnKu9LK3lB4/edit#heading=h.gt9r2h2gklj3): Tom Wilkie has published a design document meant to address the difficulties making pre-configured monitoring configurations. The solution he and Frederic are proposing implements the concept of "Monitoring Mixins:" a package of configurations containing Prometheus alerts, Prometheus recording rules, and Grafana dashboards. This is an ongoing and active discussion, so if you have an opinion on the subject, be sure to comment.

[**TTN Gateway + Monitoring with Resin.io - Part 2**](https://www.bjoerns-techblog.de/2018/05/ttn-gateway-monitoring-mit-resin-io-part-2/): This article build upon a [previous post](https://www.bjoerns-techblog.de/2018/04/ttn-gateway-monitoring-mit-resin-io/) on how to monitor your TNN (The Things Network) gateway. Part 2 shows you how to monitor additional metrics to get a much more comprehensive view of your TNN gateway's performance.

[**Prometheus: Monitor Docker services with Grafana**](https://aperogeek.fr/prometheus-monitor-docker-services-with-grafana/): This is a quick tutorial on how to setup Prometheus monitoring for a local Docker instance.

[**Monitoring Ceph Cluster with Prometheus and Grafana**](https://computingforgeeks.com/monitoring-ceph-cluster-with-prometheus-and-grafana/): Find out how to monitor a Ceph cluster using [DigitalOcean's Ceph exporter](https://github.com/digitalocean/ceph_exporter) to scrape the meta information, and visualize the data in Grafana.

[**Getting Started - Modern Monitoring with Prometheus and Grafana**](https://www.youtube.com/watch?v=GAUvfjxl9T0): This video tutorial serves as an introduction to monitoring, outlines some basic principles, and walks you through how to monitor a webserver using Prometheus and Grafana.

<br />
<hr />


#### Grafana Plugins
We have a couple of plugin updates to share this week with new features and bugfixes. Updating your plugins is easy. For on-prem Grafana, use the <a href="http://docs.grafana.org/administration/cli/#grafana-cli?utm_source=blog&utm_campaign=timeshift_43" target="_blank">grafana-cli tool</a>, for <a href="https://grafana.com/cloud/grafana?utm_source=blog&utm_campaign=timeshift_43" target="_blank">Hosted Grafana</a>, update with one-click.
<br />
<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 0;" src="https://grafana.com/api/plugins/digiapulssi-breadcrumb-panel/versions/1.1.2/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong>Breadcrumbs Panel</strong> - This update fixes a query parameter bug. 
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/digiapulssi-breadcrumb-panel?utm_source=blog&utm_campaign=timeshift_43" target="_blank"><strong>Update</strong></a>
			</p>
		</div>
	</div>
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 0;" src="https://grafana.com/api/plugins/sidewinder-datasource/versions/0.2.0/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong>Sidewinder Data Source</strong> - This data source plugin now supports filtering by tag in the query editor UI.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/sidewinder-datasource?utm_source=blog&utm_campaign=timeshift_43" target="_blank"><strong>Update</strong></a>
			</p>
		</div>
	</div>
</div>
<br />
<hr />

#### Upcoming Events
In between code pushes we like to speak at, sponsor and attend all kinds of conferences and meetups. We also like to make sure we mention other Grafana-related events happening all over the world. If you're putting on just such an event, let us know and we'll list it here.

<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--md-3">
			<img style="border-radius: 50%;" class="large" src="/assets/img/blog/timeshift/webinar.png" />
		</div>
		<div class="col col--md-8 col--sm-offset-1">
			<p>
			<strong><a href="https://zoom.us/webinar/register/WN_wK9pZ1VJQ2eVCGO5j4sC3g" target="_blank">Innovate Everywhere: Choosing the Right Tools when Building your SRE Toolchain | Webinar - May 16, 2018, 1pm EDT</a></strong> <br />
	          <strong>Leonard Gram</strong> - Explore a few of the vital tools your SRE team can set up to drive a culture of innovation and uptime.
	        </p>
            <p><strong>Attendees can expect to learn:</strong></p>
            <ul>
              <li>Industry expectations around service reliability and availability</li>
              <li>How to create simple and lightweight representations of your systems for everyone in the organization</li>
              <li>How VictorOps, Grafana and InfluxData work together to create a system of engagement</li>
            </ul>
			<a href="https://zoom.us/webinar/register/WN_wK9pZ1VJQ2eVCGO5j4sC3g" target="_blank" class="btn btn--outline">Register Now</a>
		</div>
	</div>
	<br/>

	<div class="row row--md-gutters">
		<div class="col col--md-3">
			<img style="border-radius: 50%;" class="large" src="/assets/img/blog/timeshift/devopsdays_stockholm.jpg" />
		</div>
		<div class="col col--md-8 col--sm-offset-1">
			<p>
				<strong><a href="https://www.devopsdays.org/events/2018-stockholm/welcome/" target="_blank">Devopsdays Stockholm 2018 | Stockholm, Sweden - May 24-25, 2018</a>:</strong> <br />
				<strong>Carl Bergquist</strong> - Carl will be talking about all things Grafana. He&apos;ll share some of the history, what&apos;s new in Grafana 5.1 and, and what you can expect in vNext.
			</p>
			<a href="https://www.devopsdays.org/events/2018-stockholm/welcome/" target="_blank" class="btn btn--outline">More Info</a>
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
	<br/>

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

<div style=" padding: 20px; background: url(/assets/img/blog/timeshift/polygon_texture_black.jpg); background-size: cover; border-radius: 4px;">
	<h4>Grafana Labs is Hiring!</h4>
	<p>We are passionate about open source software and thrive on tackling complex challenges to build the future. We ship code from every corner of the globe and love working with the community. If this sounds exciting, you're in luck – <strong>WE'RE HIRING!</strong></p>
	<p>Check out our <a class="btn btn-outline" href="https://grafana.com/about/hiring?utm_source=blog&utm_campaign=timeshift_43" target="_blank">Open Positions</a></p>
</div>


<hr />
<br />
#### See You Next Week!
Thanks for reading another issue of timeShift. What would you like to see here? Submit a comment on this issue below, or post something at our [community forum](http://community.grafana.com?utm_source=blog&utm_campaign=timeshift_43).

Follow us on [Twitter](http://twitter.com/grafana), like us on [Facebook](http://facebook.com/grafana), and join the [Grafana Labs community](http://grafana.com/signup?utm_source=blog&utm_campaign=timeshift_43).



