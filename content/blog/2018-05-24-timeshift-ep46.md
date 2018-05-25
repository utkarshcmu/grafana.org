+++
title = "timeShift(GrafanaBuzz, 1w) Issue 46"
author = "trent"
date = "2018-05-24"
keywords = ["Grafana", "Blog", "Roundup", "timeShift"]
cover_image = "/assets/img/blog/timeshift/timeshift_14.jpg"
cover_opacity = "0.4"
cover_blur = "1px"
description = "A weekly roundup of articles and links from Grafana and the surrounding community"
categories = ["timeShift", "Grafana Buzz"]
+++

### Welcome to TimeShift
The day has finally arrived; GDPR is officially in effect! These new policies are meant to provide more transparency about the data companies collect on users, and how that data is used. I for one am just excited that the onslaught of &quot;We've updated our privacy policy&quot; emails arriving in my pummeled inbox is nearing its end. 

Grafana Labs is no exception. We encourage your to check out our [privacy policy](http://grafana.com/terms), and if you have any questions, feel free to contact us at [privacy@grafana.com](mailto:privacy@grafana.com).
<br />
<hr />

#### Latest Release: Grafana 5.1.3
<div class="row row--no-gutters">
	<div class="col col--sm-3">
		<img src="/assets/img/blog/timeshift/grafana_release_icon.png" width="170" />
	</div>
	<div class="col col--sm-9">
		<p>This latest point release fixes a scrolling issue that was reported in Firefox. In Graph panels, the legend text shifted with each move of the scrollbar (<a href="https://github.com/grafana/grafana/issues/11830" target="_blank">#11830</a>). <a href="http://docs.grafana.org/guides/whats-new-in-v5-1/?utm_source=blog&utm_campaign=timeshift_46" target="_blank">See what else is new in Grafana v5.1</a>. 
		</p>
		<a href="https://grafana.com/grafana/download?utm_source=blog&utm_campaign=timeshift_46" target="_blank" class="btn btn--primary">Download Grafana 5.1.3 Now</a>
	</div>
</div>


<br />
<hr />

#### From the Blogosphere
[**[Video] Monitoring for Everyone**](https://grafana.com/blog/2018/05/23/monitoring-for-everyone/?utm_source=blog&utm_campaign=timeshift_46): Recently, Carl Bergquist from the core Grafana team spoke at Oredev, a large developer conference in Malmö, Sweden. This is a great talk that covers monitoring and observability fundamentals and answers the questions: What is monitoring? What types of data can I collect? Why should I care?

[**Monitoring MySQL and MongoDB with Prometheus and Grafana – PMM**](https://computingforgeeks.com/monitoring-mysql-and-mongodb-with-prometheus-and-grafana-pmm/): The latest in Josphat's monitoring guides series covers installing Percona Monitoring and Management (PMM) on Linux to collect and visualize MySQL and MongoDB data. Other topics in the series include [Monitor Linux System with Grafana and Telegraf](https://computingforgeeks.com/monitor-linux-system-with-grafana-and-telegraf/) and [Monitoring Ceph Cluster with Prometheus and Grafana](https://computingforgeeks.com/monitoring-ceph-cluster-with-prometheus-and-grafana/).

[**GPS Tracker visualized with Grafana**](https://www.thethingsnetwork.org/labs/story/gps-tracker): Björn wanted to try and build his own LoRaWAN GPS tracker and visualize his location in Grafana. This article walks you through the parts you'll need, steps to construct the device, how to format and store the data, and finally, how to visualize your GPS location on a map in Grafana.

[**Body measurements with Grafana on the Raspberry Pi**](https://www.spech.de/2018/05/koerpermasse-mit-grafana-auf-dem-raspberry-pi/): Sabastian has a FitPi (Fitness Raspberry Pi) which tracks his workouts, weight, BMI, etc. He decided to upgrade his previous dashboards and integrate the FitPi monitoring stack with Grafana. This article takes you through his journey.

[**Monitoring the ForgeRock Identity Platform 6.0 using Prometheus and Grafana**](https://xennial-bytes.blogspot.co.uk/2018/05/all-products-within-forgerock-identity.html): Customer identity management company Foregerock released the latest version of the ForgeRock Identity Platform (6.0), which includes native support for Prometheus and Grafana. This post provides a detailed explanation of the new Overview dashboard.

[**Grafana – An Open Source Software for Analytics and Monitoring**](https://www.tecmint.com/install-grafana-analytics-in-centos-ubuntu-debian/): Aaron wrote an 8 step article on how to install Grafana on Linux. He takes you from installation to configuring your first data source.

<br />

<div style=" padding: 20px; background: url(/assets/img/blog/timeshift/polygon_texture_black.jpg); background-size: cover; border-radius: 4px;">
	<h4>We're Hiring!</h4>
	<p>We're looking for engineers for <strong>four open positions</strong> in New York/Stockholm and remote! Are you passionate about open source software? Do you thrive on tackling complex challenges to build the future? Want to work with awesome people? Be the next to join our team.
	</p>
	<a class="btn btn-outline" href="https://grafana.com/about/hiring?utm_source=blog&utm_campaign=timeshift_46" target="_blank">View our Open Positions</a>
</div>

<br />

#### Grafana Plugins
Each week we highlight new and updated plugins that are available at grafana.com. It's important to keep your plugins up to date, since authors are constantly submitting bug fixes and new features. It's easy to update Grafana plugins – for on-prem Grafana, use the <a href="http://docs.grafana.org/administration/cli/#grafana-cli?utm_source=blog&utm_campaign=timeshift_46" target="_blank">grafana-cli tool</a>, or for <a href="https://grafana.com/cloud/grafana?utm_source=blog&utm_campaign=timeshift_46" target="_blank">Hosted Grafana</a> update with one-click.
<br />
<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/blackmirror1-singlestat-math-panel/versions/1.0.0/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="new-plugin-tag"><strong>NEW PLUGIN</strong></div><br/>
				<strong>SingleStat Math Panel</strong> - This new panel is a fork of the Singlestat panel that allows you to use the math.js library to manipulate the result from your query. An example would be to divide the result of two queries to get the percentage of disk space used. 
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/blackmirror1-singlestat-math-panel?utm_source=blog&utm_campaign=timeshift_46" target="_blank"><strong>Install</strong></a>
			</p>
		</div>
	</div>
</div>
<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/camptocamp-prometheus-alertmanager-datasource/versions/0.0.5/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong>Prometheus Alertmanager Data source</strong> - The <a href="https://github.com/camptocamp/grafana-prometheus-alertmanager-datasource/pull/28" target="_blank">main update</a> to this data source allows you to select which labels should be shown as columns in the table panel.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/camptocamp-prometheus-alertmanager-datasource?utm_source=blog&utm_campaign=timeshift_46" target="_blank"><strong>Update</strong></a>
			</p>
		</div>
	</div>
</div>
<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/ryantxu-ajax-panel/versions/0.0.5/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong>AJAX Panel</strong> - This panel received numerous updates in version 0.0.5 including:
					<ul>
						<li>Support angular templates using AJAX response</li>
						<li>Options to display as: HTML, Text, JSON, or preformatted text</li>
						<li>Fixed display issue with 5.1</li>
						<li>Support direct link rendered image</li>
						<li>Show possible variables in editor</li>
					</ul>
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/ryantxu-ajax-panel?utm_source=blog&utm_campaign=timeshift_46" target="_blank"><strong>Update</strong></a>
			</p>
		</div>
	</div>
</div>
<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/natel-discrete-panel/versions/0.0.8-pre/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong>Discrete Panel</strong> - This panel displays discrete values in a horizontal graph. Lots of new fixes and features in this version:
					<ul>
						<li>Support Snapshots</li>
						<li>Fix for Direct link rendered images</li>
						<li>Fix for display issue with 5.1</li>
						<li>Merge distinct values in legend unless showing the name</li>
						<li>Basic Annotation Support</li>
					</ul>
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/natel-discrete-panel?utm_source=blog&utm_campaign=timeshift_46" target="_blank"><strong>Update</strong></a>
			</p>
		</div>
	</div>
</div>
<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/natel-influx-admin-panel/versions/0.0.5/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong>Influx Admin Panel</strong> - In the latest release of the Influx Admin Panel, it is now possible to switch database (data source defined as a variable) and also adds support for the <code>$timeFilter</code> variable.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/natel-influx-admin-panel?utm_source=blog&utm_campaign=timeshift_46" target="_blank"><strong>Update</strong></a>
			</p>
		</div>
	</div>
</div>
<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/instana-datasource/versions/1.0.3/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong>Instana Data source</strong> - This update includes fixes for the table panel and for MSSQL Performance Counters metrics.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/instana-datasource?utm_source=blog&utm_campaign=timeshift_46" target="_blank"><strong>Update</strong></a>
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
			<img style="border-radius: 50%;" class="large" src="/assets/img/blog/timeshift/influxdays.png" />
		</div>
		<div class="col col--md-8 col--sm-offset-1">
			<p>
				<strong><a href="https://influxdays.com/" target="_blank">InfluxDays London 2018 | London, United Kingdom - June 14, 2018</a>:</strong>
				<br />
				<strong>David Kaltschmidt - Grafana and IFQL</strong><br />The new Influx Functional Query Language (IFQL) super-charges queries both for analytics and data science. David will give a quick overview of the language features as well as the moving parts for a working deployment. Grafana is an open source dashboard solution that shares IFQL’s passion for analytics and data science. For that reason, they are very excited to showcase the new IFQL support within Grafana, and a couple of common analytics use cases to get the most out of your data.
			</p>
			<p>
				We're also a proud sponsor of InfluxDays London -  two days of technical talks around Telegraf, InfluxDB, Chronograf, Kapacitor, Grafana and adjacent technologies.
			</p>
			<a href="https://influxdays.com/" target="_blank" class="btn btn--outline">Register Now</a>
		</div>
	</div>
	<br />
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
			<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">I just wanted to plot my closest city bike station and ended up running InfluxDB+Grafana+Nginx on AWS. <a href="https://twitter.com/HSL_HRT?ref_src=twsrc%5Etfw">@HSL_HRT</a> <a href="https://twitter.com/hashtag/kaupunkipy%C3%B6r%C3%A4t?src=hash&amp;ref_src=twsrc%5Etfw">#kaupunkipyörät</a> <a href="https://twitter.com/hashtag/dataisbeautiful?src=hash&amp;ref_src=twsrc%5Etfw">#dataisbeautiful</a> <a href="https://t.co/4dddB3mBCQ">pic.twitter.com/4dddB3mBCQ</a></p>&mdash; Henri Nurmi (@HenriNurmi) <a href="https://twitter.com/HenriNurmi/status/997470117536641025?ref_src=twsrc%5Etfw">May 18, 2018</a></blockquote>
			<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
			<p>Beautiful dashboard! Would be interested to map Citi Bike locations in NYC.</p>
		</div>
	</div>
</div>

<hr />
<br />

#### Thanks for Reading
What would you like to see here? Submit a comment on this issue below, or post something at our [community forum](http://community.grafana.com?utm_source=blog&utm_campaign=timeshift_46).

Follow us on [Twitter](http://twitter.com/grafana), like us on [Facebook](http://facebook.com/grafana), and join the [Grafana Labs community](http://grafana.com/signup?utm_source=blog&utm_campaign=timeshift_46).

