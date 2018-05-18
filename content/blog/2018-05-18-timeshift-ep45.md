+++
title = "timeShift(GrafanaBuzz, 1w) Issue 45"
author = "trent"
date = "2018-05-18"
keywords = ["Grafana", "Blog", "Roundup", "timeShift"]
cover_image = "/assets/img/blog/timeshift/timeshift_14.jpg"
cover_opacity = "0.4"
cover_blur = "1px"
description = "A weekly roundup of articles and links from Grafana and the surrounding community"
categories = ["timeShift", "Grafana Buzz"]
+++

### Welcome to TimeShift
In addition to our weekly roundup of Grafana-related articles and upcoming events, we're pleased to announce Grafana v5.1.3 has been released! Also - **We're hiring!** Be sure to check out our [open positions](https://grafana.com/about/hiring?utm_source=blog&utm_campaign=timeshift_45).
<br />
<hr />

#### Latest Release: Grafana 5.1.3
<div class="row row--no-gutters">
	<div class="col col--sm-3">
		<img src="/assets/img/blog/timeshift/grafana_release_icon.png" width="170" />
	</div>
	<div class="col col--sm-9">
		<p>This latest point release fixes a scrolling issue that was reported in Firefox. In Graph panels, the legend text shifted with each move of the scrollbar (<a href="https://github.com/grafana/grafana/issues/11830" target="_blank">#11830</a>). <a href="http://docs.grafana.org/guides/whats-new-in-v5-1/?utm_source=blog&utm_campaign=timeshift_45" target="_blank">See what else is new in Grafana v5.1</a>. 
		</p>
		<a href="https://grafana.com/grafana/download?utm_source=blog&utm_campaign=timeshift_45" target="_blank" class="btn btn--primary">Download Grafana 5.1.3 Now</a>
	</div>
</div>


<br />
<hr />

#### From the Blogosphere
[**[Video] Monitoring with Azure and Grafana**](https://youtu.be/GjDzwEcpC4o): Daniel Lee, from the core Grafana team, recently spoke at Swetugg, the .NET developers conference held in Stockholm, Sweden. In this presentaion, Daniel discusses whitebox monitoring, provides a live demo of the Azure Monitor plugin, and shows you how to build your own custom Grafana integrations.

[**MapR for Predictive Maintenance**](https://github.com/mapr-demos/predictive-maintenance): This project demostrates how to build Predictive Maintenance applications on MapR to monitor the real-time status of factory IoT devices.  The tutorial section details the steps to install and configure the tools as well as a sample dataset get you started.


[**How to monitor Docker containers using cAdvisor**](https://www.neteye-blog.com/2018/04/how-to-monitor-docker-containers-using-cadvisor-part-1/) – **[Part 1](https://www.neteye-blog.com/2018/04/how-to-monitor-docker-containers-using-cadvisor-part-1/) | [Part 2](https://www.neteye-blog.com/2018/05/how-to-monitor-docker-containers-using-cadvisor-part-2/):** Two articles to teach you how to install and configure cAdvisor to collect performance data from a host machine and the containers running on it, and visualize the metrics using Grafana.

[**Simply provision a Telegraf + InfluxDB + Grafana monitoring stack with Manala**](https://teke42.wordpress.com/2018/05/11/provisionner-simplement-une-stack-de-monitoring-telegraf-influxdb-grafana-avec-manala/): Manala is an Ansible toolkit aimed at simplifying the installation and configuration of server environments. This article shows you how to use Manala to easily spin up a monitoring stack in less than 100 lines in your config.

<br />

<div style=" padding: 20px; background: url(/assets/img/blog/timeshift/polygon_texture_black.jpg); background-size: cover; border-radius: 4px;">
	<h4>We're Hiring!</h4>
	<p>We're looking for engineers for <strong>four open positions</strong> in New York/Stockholm and remote! Are you passionate about open source software? Do you thrive on tackling complex challenges to build the future? Want to work with awesome people? Be the next to join our team.
	</p>
	<a class="btn btn-outline" href="https://grafana.com/about/hiring?utm_source=blog&utm_campaign=timeshift_45" target="_blank">View our Open Positions</a>
</div>

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
			<strong style="color:#f46800;">Innovate Everywhere: Choosing the Right Tools when Building your SRE Toolchain | Webinar - May 30, 2018 – 1pm EDT</strong> <br />
	          <strong>Leonard Gram</strong> - Explore a few of the vital tools your SRE team can set up to drive a culture of innovation and uptime.
	        </p>
            <p><strong>Attendees can expect to learn:</strong></p>
            <ul>
              <li>Industry expectations around service reliability and availability</li>
              <li>How to create simple and lightweight representations of your systems for everyone in the organization</li>
              <li>How VictorOps, Grafana and InfluxData work together to create a system of engagement</li>
            </ul>
            <p>We will be conducting two webinars on this subject, so please feel free to sign up for whichever session works for your schedule.</p>
			<a href="https://webinars.devops.com/innovate-everywhere-choosing-the-right-tools-when-building-your-sre-toolchain" target="_blank" class="btn btn--outline">Register Now</a>
		</div>
	</div>
	<br/>
	<div class="row row--md-gutters">
		<div class="col col--md-3">
			<img style="border-radius: 50%;" class="large" src="/assets/img/blog/timeshift/meetup.jpg" />
		</div>
		<div class="col col--md-8 col--sm-offset-1">
			<p>
				<strong><a href="https://www.meetup.com/MonitorSF/events/250915610/" target="_blank">San Francisco Metrics and Monitoring | May 30, 2018</a>:</strong>
				<br />
				<strong>Monitoring and distributed tracing at Slack and Pinterest</strong><br/><br /><strong>Naoman Abbas, Pinterest</strong> At Pinterest, we deployed Pintrace, a Zipkin-based distributed tracing system. Pintrace records end-to-end performance data across the execution path of requests, from mobile applications to backend services. Pintrace has evolved over time as its users find new data and as new subsystems integrate with our tracing systems.
				<br /><br />
				<strong>George Luon, Slack</strong> – Over the last four years, Slack has implemented various monitoring solutions as our requirements evolved. First we had Ganglia. Then we had the great migration to Graphite. Now it’s time for Prometheus. Join us as we recount the challenges we encountered, the findings we discovered, and the successes we achieved.
			</p>
			<a href="https://www.meetup.com/MonitorSF/events/250915610/" target="_blank" class="btn btn--outline">RSVP</a>
		</div>
	</div>
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
			<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">This one is even better! <a href="https://t.co/wwsesnqA3B">pic.twitter.com/wwsesnqA3B</a></p>&mdash; Dan Bond (@danbondd) <a href="https://twitter.com/danbondd/status/996891442818830337?ref_src=twsrc%5Etfw">May 16, 2018</a></blockquote>
			<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
			<p>In addition to monitoring, Grafana can now be used for architectual drawings in 2 point perspective</p>
		</div>
	</div>
</div>

<hr />
<br />

#### Thanks for Reading
What would you like to see here? Submit a comment on this issue below, or post something at our [community forum](http://community.grafana.com?utm_source=blog&utm_campaign=timeshift_45).

Follow us on [Twitter](http://twitter.com/grafana), like us on [Facebook](http://facebook.com/grafana), and join the [Grafana Labs community](http://grafana.com/signup?utm_source=blog&utm_campaign=timeshift_45).

