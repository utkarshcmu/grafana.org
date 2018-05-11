+++
title = "timeShift(GrafanaBuzz, 1w) Issue 44"
author = "trent"
date = "2018-05-11"
keywords = ["Grafana", "Blog", "Roundup", "timeShift"]
cover_image = "/assets/img/blog/timeshift/timeshift_14.jpg"
cover_opacity = "0.4"
cover_blur = "1px"
description = "A weekly roundup of articles and links from Grafana and the surrounding community"
categories = ["timeShift", "Grafana Buzz"]
+++

### Welcome to TimeShift
[Grafana v5.1.2](https://grafana.com/grafana/download?utm_source=blog&utm_campaign=timeshift_44) is available and includes an important bug fix for MySQL, plus an update for GDPR compliance. See below for more details and the full release notes.

Also, KubeCon + CloudNativeCon Europe 2018 videos are now available including talks from members of the Grafana Labs team! Check out these talks below. 

If you would like your article highlighted in our weekly roundup, feel free to send me an email at [hello@grafana.com](mailto:hello@grafana.com).
<br />
<hr />

#### Latest Release: Grafana 5.1.2
<div class="row row--no-gutters">
	<div class="col col--sm-3">
		<img src="/assets/img/blog/timeshift/grafana_release_icon.png" width="170" />
	</div>
	<div class="col col--sm-9">
		<p>If you haven't updated to v5.1x yet, check out an overview of <a href="http://docs.grafana.org/guides/whats-new-in-v5-1/?utm_source=blog&utm_campaign=timeshift_44" target="_blank">what's new</a>. 
			<br />Here are the updates in the latest release:
			<ul>
				<li><strong>Database</strong>: Fix MySql migration issue <a href="https://github.com/grafana/grafana/issues/11862">#11862</a></li>
				<li><strong>Google Analytics</strong>: Enable Google Analytics anonymizeIP setting for GDPR <a href="https://github.com/grafana/grafana/pull/11656">#11656</a></li>
			</ul>
		</p>
		<a href="https://grafana.com/grafana/download?utm_source=blog&utm_campaign=timeshift_44" target="_blank" class="btn btn--primary">Download Grafana 5.1.2 Now</a>
	</div>
</div>


<br />
<hr />

#### From the Blogosphere
[**[Video] Prometheus Monitoring Mixins: Using Jsonnet to Package Together Dashboards, Alerts and Exporters**](https://www.youtube.com/watch?v=b7-DtFfsL6E): Last week we shared a [design document](https://docs.google.com/document/d/1A9xvzwqnFVSOZ5fD3blKODXfsat5fg6ZhnKu9LK3lB4/edit#heading=h.gt9r2h2gklj3) Tom Wilkie and Frederic Branczyk have been working on to address the difficulties making pre-configured monitoring configurations. In this video, you can watch Tom's recent KubeCon talk which goes into more detail, complete with live demos.

[**[Video] Lightning Talk - TSDB: The Engine behind Prometheus**](https://www.youtube.com/watch?v=_529xDFDzI0): Prometheus maintainer and newest addition to the Grafana Labs team, Goutham Veeramachaneni discusses TSDB - the engine powering Prometheus, in his lightning talk from KubeCon + CloudNativeCon Europe 2018. You can also [download the slides](https://schd.ws/hosted_files/kccnceu18/6c/TSDB_%20The%20engine%20behind%20Prometheus%202.0.pdf).

[**[Video] TSDB: The Past, Present and the Future**](https://www.youtube.com/watch?v=0UvKEHFNu4Q): As a follow up to his lightning talk on TSDB, Goutham goes into more detail on TSDB, and as he says, "take you through the journey, benchmarks, new features, ghastly bugs and moonshot ideas".

[**How to build a generic Icinga2 service graph in Grafana using InfluxDB**](https://www.claudiokuenzler.com/blog/776/how-to-icinga2-dynamic-generic-service-graph-grafana-influxdb#.WvXpp9MvzUI): Learn how to create dynamic and reusable dashboards for a multiple hosts with differing checks. It covers queries and template variables to build a generic and felxible dashboard.

[**Monitor Linux System with Grafana and Telegraf**](https://computingforgeeks.com/monitor-linux-system-with-grafana-and-telegraf/): A quick tutorial on how to install and configure a monitoring stack on CentOS7.

<br />
<hr />

#### We're Hiring!
We've recently announced **two new positions** at our Stockholm office! Are you passionate about open source software? Do you thrive on tackling complex challenges to build the future? Check out all of our open positions and apply today!
<br /><br />
<a class="btn btn-outline" href="https://grafana.com/about/hiring?utm_source=blog&utm_campaign=timeshift_44" target="_blank">View our Open Positions</a>

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
			<img style="border-radius: 50%;" class="large" src="/assets/img/blog/timeshift/webinar.png" />
		</div>
		<div class="col col--md-8 col--sm-offset-1">
			<p>
			<strong><a href="https://webinars.devops.com/innovate-everywhere-choosing-the-right-tools-when-building-your-sre-toolchain" target="_blank">Innovate Everywhere: Choosing the Right Tools when Building your SRE Toolchain | Webinar - May 30, 2018, 1pm EDT</a></strong> <br />
	          <strong>Leonard Gram</strong> - Explore a few of the vital tools your SRE team can set up to drive a culture of innovation and uptime.
	        </p>
            <p>Many companies are working to define their expectations for the SRE role and the SRE toolchain, which, like the role itself, continues to evolve. The tools SREs use at any given time will depend on where an organization is in their SRE journey. Less mature organizations will tend to use more specialized operations tools while more mature organizations will see more convergence between SRE and software engineering toolchains. So, while it’s certain that there’s no “one-size-fits-all” set of tools, teams will experiment with and adapt with the right tools as they seek new, efficient ways to bring greater reliability to everything they do.</p>
            <br />
			<a href="https://webinars.devops.com/innovate-everywhere-choosing-the-right-tools-when-building-your-sre-toolchain" target="_blank" class="btn btn--outline">Register Now</a>
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

<div>
	<div class="row row--no-gutters">
		<div class="col col--sm-12">
			<h4>Tweet of the Week</h4>
			We scour Twitter each week to find an interesting/beautiful dashboard or monitoring related tweet and show it off! <a href="https://twitter.com/hashtag/monitoringlove?src=hash" target="_blank">#monitoringLove</a>
			<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Sometimes you get unexpected graphs with <a href="https://twitter.com/grafana?ref_src=twsrc%5Etfw">@grafana</a> . kind of cyberpunk surfing ... C&#39;est beau ! <a href="https://twitter.com/hashtag/Grafana?src=hash&amp;ref_src=twsrc%5Etfw">#Grafana</a> <a href="https://twitter.com/hashtag/Art?src=hash&amp;ref_src=twsrc%5Etfw">#Art</a> <a href="https://twitter.com/hashtag/DataViz?src=hash&amp;ref_src=twsrc%5Etfw">#DataViz</a> <a href="https://twitter.com/hashtag/CyberPunk?src=hash&amp;ref_src=twsrc%5Etfw">#CyberPunk</a> <a href="https://t.co/UcistKc1rh">pic.twitter.com/UcistKc1rh</a></p>&mdash; Alexandre Bm - あ! (@AleKKhan) <a href="https://twitter.com/AleKKhan/status/994207850015707136?ref_src=twsrc%5Etfw">May 9, 2018</a></blockquote>
			<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
			<blockquote class="twitter-tweet" data-conversation="none" data-lang="en"><p lang="und" dir="ltr"> <a href="https://t.co/eUwUcXmvyK">pic.twitter.com/eUwUcXmvyK</a></p>&mdash; Mattttt (@Atlantically) <a href="https://twitter.com/Atlantically/status/994211599207600128?ref_src=twsrc%5Etfw">May 9, 2018</a></blockquote>
			<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
		</div>
	</div>
</div>

<hr />
<br />

#### Thanks for Reading
What would you like to see here? Submit a comment on this issue below, or post something at our [community forum](http://community.grafana.com?utm_source=blog&utm_campaign=timeshift_44).

Follow us on [Twitter](http://twitter.com/grafana), like us on [Facebook](http://facebook.com/grafana), and join the [Grafana Labs community](http://grafana.com/signup?utm_source=blog&utm_campaign=timeshift_44).

