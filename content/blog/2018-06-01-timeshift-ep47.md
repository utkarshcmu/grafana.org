+++
title = "timeShift(GrafanaBuzz, 1w) Issue 47"
author = "trent"
date = "2018-06-01"
keywords = ["Grafana", "Blog", "Roundup", "timeShift"]
cover_image = "/assets/img/blog/timeshift/timeshift_14.jpg"
cover_opacity = "0.4"
cover_blur = "1px"
description = "A weekly roundup of articles and links from Grafana and the surrounding community"
categories = ["timeShift", "Grafana Buzz"]
+++

### Welcome to TimeShift
We cover a lot of ground this week with posts on general monitoring principles, home automation, how CERN uses open source projects in their particle acceleration work, and more. Have an article you'd like highlighted here? [Get in touch](mailto:hello@grafana.com).

We're excited to be a sponsor of [Monitorama PDX](http://monitorama.com) June 4-6. If you're going, please be sure and say hello!
<br />
<hr />

#### Latest Release: Grafana 5.1.3
<div class="row row--no-gutters">
	<div class="col col--sm-3">
		<img src="/assets/img/blog/timeshift/grafana_release_icon.png" width="170" />
	</div>
	<div class="col col--sm-9">
		<p>This latest point release fixes a scrolling issue that was reported in Firefox. In Graph panels, the legend text shifted with each move of the scrollbar (<a href="https://github.com/grafana/grafana/issues/11830" target="_blank">#11830</a>). <a href="http://docs.grafana.org/guides/whats-new-in-v5-1/?utm_source=blog&utm_campaign=timeshift_47" target="_blank">See what else is new in Grafana v5.1</a>. 
		</p>
		<a href="https://grafana.com/grafana/download?utm_source=blog&utm_campaign=timeshift_47" target="_blank" class="btn btn--primary">Download Grafana 5.1.3 Now</a>
	</div>
</div>


<br />
<hr />

#### From the Blogosphere
[**[Video] Monitoring with Azure and Grafana**](https://grafana.com/blog/2018/05/31/monitoring-with-azure-and-grafana/?utm_source=blog&utm_campaign=timeshift_47): Grafana Labs principal engineer Daniel Lee gave a presentation recently to answer the questions: Why do we monitor our systems? What is whitebox monitoring? What is the Azure Monitor plugin and how can I use it to monitor my Azure resources? After covering some of the basic principles of monitoring, he dives into the new Azure Monitor plugin and shows you how to create your own Grafana plugins.

[**How CERN Is Using Linux and Open Source**](https://www.linux.com/blog/2018/5/how-cern-using-linux-open-source): The European Organization for Nuclear Research is a champion for open source software. Instead of inventing and maintaining their own solutions, they leverage the previous work of open source projects that are solving similar challenges and contribute back to the project to strengthen the community. CERN is a big user of Grafana and spoke at our most recent conference. Check out the presentation on [Monitoring at CERN](https://www.youtube.com/watch?v=ksjDBjApl6Q).

[**REDtalks.live #32 – Stats & Dashboards**](https://redtalks.live/2018/05/25/redtalks-live-32-stats-dashboards/): Your data probably doesn't live in one place; it comes from different vendors and lives in different databases. One of the reasons Grafana has become so popular is that it can visualize data from disparate sources on the same dashboard and even the same graph. With Grafana's plugin architecture, Grafana can be extended to visualize data from new data sources and types of graph panels. In this video, Nathan discusses the movement he's noticed in which clients don't want yet another UI to visualize data – they want vendors to integrate with the open source tools they're already using, like Grafana.

[**Grafana Alerting and Email Notifications**](https://dzone.com/articles/grafana-alerting-and-email-notifications): Alerting was added in Grafana 4.0 and allows you to attach rules to your dashboard panels to let you know when a predetermined threshold has been crossed. There are a number of notification channels you can use to get your alerts including Slack, Pager Duty, email, and more. This article takes you through the process of adding email alerts in Grafana.

[**Building Automation with Open Source Components**](https://www.hackster.io/stefaanv/building-automation-with-open-source-components-327b68): We've seen an increase in articles from people using Grafana to track data from their smart homes (we even had a [talk](https://www.youtube.com/watch?v=wtna51BLYMc) at GrafanaCon EU on the subject). Stefaan chronicles his journey to perfect his home automation system using open source software in an attempt to save money and the environment.

[**LoRa-Tooth: Small Wireless Sensors**](http://www.instructables.com/id/LoRa-Tooth-Small-Wireless-Sensors/): Another article on home automation and data visualization in Grafana. In this detailed post, you'll learn about different kinds of sensors (open/close sensors for doors and windows, temperature/humidity sensors, beacon location sensor, simple buttons, etc), and see demos of them in action with the dashboards updating in real-time. Interesting stuff. The dog food level sensor would have come in handy for me last week, when we found out we double-fed the dog (he didn't seem to mind).

[**Cloudprober: open source black-box monitoring software**](https://opensource.googleblog.com/2018/03/cloudprober-open-source-black-box.html): A post about getting up and running with Google's open source project Cloudprober which monitors the availability and performance of various components of your system. Cloudprober builds and exports standard metrics, and provides a way to easily integrate them with your existing monitoring stack.

<br />

<div style=" padding: 20px; background: url(/assets/img/blog/timeshift/polygon_texture_black.jpg); background-size: cover; border-radius: 4px;">
	<h4>We're Hiring!</h4>
	<p>We're looking for passionate and talented engineers for positions in New York/Stockholm and remote! Do you love open source software? Do you thrive on tackling complex challenges to build the future? Want to work with awesome people? Be the next to join our team!
	</p>
	<a class="btn btn-outline" href="https://grafana.com/about/hiring?utm_source=blog&utm_campaign=timeshift_47" target="_blank">View our Open Positions</a>
</div>

<br />

#### Upcoming Events
In between code pushes we like to speak at, sponsor and attend all kinds of conferences and meetups. We also like to make sure we mention other Grafana-related events happening all over the world. If you're putting on just such an event, let us know and we'll list it here.

<div class="blog-plugin">
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
			<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Homebrewing &amp; Code: This grafana shows the rate of CO2 bubbles espaping through the airlock of the fermenter, detected using infrared sensors  <a href="https://twitter.com/hashtag/homebrewing?src=hash&amp;ref_src=twsrc%5Etfw">#homebrewing</a> <a href="https://twitter.com/hashtag/code?src=hash&amp;ref_src=twsrc%5Etfw">#code</a> <a href="https://twitter.com/hashtag/wemos?src=hash&amp;ref_src=twsrc%5Etfw">#wemos</a> <a href="https://t.co/6WRmma9CMx">pic.twitter.com/6WRmma9CMx</a></p>&mdash; Jonathan (@Jonathan_JFR) <a href="https://twitter.com/Jonathan_JFR/status/1000997742699741185?ref_src=twsrc%5Etfw">May 28, 2018</a></blockquote>
			<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
			<p>Awesome! I think this would make my homebrewing so much more efficient.</p>
		</div>
	</div>
</div>

<hr />
<br />

#### Thanks for Reading
What would you like to see here? Submit a comment on this issue below, or post something at our [community forum](http://community.grafana.com?utm_source=blog&utm_campaign=timeshift_47).

Follow us on [Twitter](http://twitter.com/grafana), like us on [Facebook](http://facebook.com/grafana), and join the [Grafana Labs community](http://grafana.com/signup?utm_source=blog&utm_campaign=timeshift_47).

