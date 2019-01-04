+++
title = "timeShift(GrafanaBuzz, 1w) Issue 74"
author = "trent"
date = "2019-01-04"
keywords = ["Grafana", "Blog", "Roundup", "timeShift", "Loki", "BitBucket", "GrafanaCon"]
cover_image = "/assets/img/blog/timeshift/timeshift_14.jpg"
cover_opacity = "0.4"
cover_blur = "1px"
description = "A weekly roundup of articles and links from Grafana and the surrounding community"
categories = ["timeShift", "Grafana Buzz"]
excerpt = "This week we share articles on the UX of Loki, visualizing pull request data from BitBucket, monitoring and observability predictions for 2019 and more!"
+++

### Welcome to TimeShift
Happy New Year! We hope you had a relaxing and safe holiday season, but now it's time to get back to work! This week we share articles on the UX of Loki, visualizing pull request data from BitBucket, monitoring and observability predictions for 2019 and more! Also, we'll be making some exciting announcements for GrafanaCon in the coming days, so stay tuned and [get your ticket now](http://grafanacon.org)!

See an article we missed? [Contact us](mailto:hello@grafana.com).

<br />
<hr />

<div class="row row--no-gutters">
	<div class="col col--sm-3">
		<img src="/assets/img/blog/timeshift/grafana_release_icon.png" width="170" />
	</div>
	<div class="col col--sm-9">
		<h3>Latest Stable Release: Grafana v5.4.2</h3>
		<h5>Release Highlights</h5>
		<ul>
			<li><strong>Datasource admin</strong>: Fix for issue creating new data source when same name exists <a href="https://github.com/grafana/grafana/issues/14467" rel="nofollow noopener">#14467</a></li>
			<li><strong>OAuth</strong>: Fix for oauth auto login setting, can now be set using env variable <a href="https://github.com/grafana/grafana/issues/14435" rel="nofollow noopener">#14435</a></li>
			<li><strong>Dashboard search</strong>: Fix for searching tags in tags filter dropdown.</li>
		</ul>
		<a href="https://grafana.com/grafana/download?utm_source=blog&utm_campaign=timeshift_74" target="_blank" class="btn btn--primary">Download Grafana v5.4.2 Now</a>
	</div>
</div>

<br />
<hr />

#### From the Blogosphere
[**Closer look at Grafana's user interface for Loki**](https://grafana.com/blog/2019/01/02/closer-look-at-grafanas-user-interface-for-loki/?utm_source=blog&utm_campaign=timeshift_74): Grafana Labs Director, UX, David Kaltschmidt wrote an article on why we built Loki, our new open source Prometheus-inspired logging project, and outlines the UX goals we had to deliver logs simpler & faster.

[**Meet bitbucket-exporter**](https://blog.sharebear.co.uk/2019/01/meet-bitbucket-exporter/): Jonathan wanted to get a sense of the state of his open source projects in BitBucket, so he wrote an exporter to get metrics about pull requests from BitBucket Server into Prometheus to visualize the data in Grafana dashboards.

[**Monitoring & Observability 2019 Predictions**](https://monitoring.love/articles/2019-predictions/): Our friend Mike at [Monitoring Weekly](https://monitoring.love) shares his thoughts on upcoming trends and mentions [Loki](http://grafana.com/loki) as leading the way of trying to solve the problem of high-volume, easy-to-maintain, scalable, on-prem logging.

[**Grafana Cloud Dropwizard Metrics Reporter**](https://www.stubbornjava.com/posts/grafana-cloud-dropwizard-metrics-reporter): The folks at [StubbornJava](https://www.stubbornjava.com) describe how they've used a custom HTTP sender to get metrics into their public Grafana Cloud installation. You can check out their overview dashboard [here](https://stubbornjava.grafana.net/d/sYu06dviz/stubbornjava-overview). 

[**[VIDEO] Monitoring resiliency behavior with MicroProfile**](https://blog.sebastian-daschner.com/entries/microprofile-fault-tolerance-metrics): Sebastian shares a video how to get technical metrics of resiliency mechanisms easily with MicroProfile Fault Tolerance 1.1 and visualize the data with Prometheus and Grafana. 


<br />
<hr />

**[GrafanaCon LA](http://grafanacon.org)** is coming up Feb 25-26, 2019 and **day 2** is going to be packed with **TSDB-focused tracks and hands-on workshops**. Learn how to get the most out of Grafana, how to extend Grafana's visualization capabilities and get instruction from the experts. We're also putting together an IoT session where you can get hands-on visualizing sensor data. It's going to be a blast, so [grab your ticket](http://www.grafanacon.org/) before they're sold out!

<div class="row row--internal-gutters">
	<div class="col col--sm-12">
		<h4>Class will be in session for topics like:</h4>
	</div>
	<div class="col col--sm-4">
		<img class="topics" src="/assets/img/blog/timeshift/grafana_logo.svg" />
		<img class="topics" src="/assets/img/blog/timeshift/influxdb_logo.svg" />
	</div>
	<div class="col col--sm-4">
		<img class="topics" src="/assets/img/blog/timeshift/prometheus_logo_small.svg" />
		<img class="topics" src="/assets/img/blog/timeshift/graphite_logo.svg" />
	</div>
	<div class="col col--sm-4">
		<img class="topics" src="/assets/img/blog/timeshift/kubernetes_logo.svg" />
		<img class="topics" src="/assets/img/blog/timeshift/elasticsearch_logo.svg" />
	</div>
</div>
<div class="row row--internal-gutters">
	<div class="col col--sm-8">
		<a href="https://www.grafanacon.org/" target="_blank"><img src="/assets/img/blog/timeshift/grafanacon_ga_tickets_tweet.jpg" width="600" /></a>
	</div>
	<div class="col col--sm-4">
		<h4>Get your tickets while they last!</h4>
		<p>Join us in Los Angeles, California February 25-26, 2019 for 2 days of talks and in-depth workshops on Grafana and the open source monitoring ecosystem. Learn about Grafana and new/upcoming features and projects (*cough* <strong><a href="http://grafana.com/loki" target="_blank">Grafana Loki</a></strong> *cough*) and the broader ecosystem like <strong>Prometheus</strong>, <strong>Graphite</strong>, <strong>InfluxDB</strong>, <strong>Kubernetes</strong>, and more.</p>
		<a class="btn btn--outline" href="http://www.grafanacon.org/" target="_blank"><strong>Register for GrafanaCon</strong></a>
	</div>
</div>
 
<br />
<hr />
<br />

<div class="row row--internal-gutters">
	<div class="col col--sm-4">
		<h4>We're Hiring</h4>
	<p>Do you love open source software? Do you thrive on tackling complex challenges to build the future? Want to work with awesome people? Be the next to join our team!</p>
	<a class="btn btn-outline" href="https://grafana.com/about/hiring?utm_source=blog&utm_campaign=timeshift_74" target="_blank">View All our Open Positions</a>
	</div>
	<div class="col col--sm-8">
		<a href="https://grafana.com/about/hiring?utm_source=blog&utm_campaign=timeshift_74" target="_blank">
			<img src="/assets/img/blog/timeshift/careers_section.jpg" />
		</a>
	</div>
</div>

<br />
<hr />
<br />

<div>
	<div class="row row--no-gutters">
		<div class="col col--sm-12">
			<h4>Tweet of the Week</h4>
			We scour Twitter each week to find an interesting/beautiful dashboard or monitoring related tweet and show it off! <a href="https://twitter.com/hashtag/monitoringlove?src=hash" target="_blank">#monitoringLove</a>
			<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Creating an application using Grafana on top of iOS HealthKit to visualize health metrics. It exports, extracts and analyzes data from the health app to make it easily graphable in Grafana. Using <a href="https://twitter.com/hashtag/iOS?src=hash&amp;ref_src=twsrc%5Etfw">#iOS</a> <a href="https://twitter.com/hashtag/shortcuts?src=hash&amp;ref_src=twsrc%5Etfw">#shortcuts</a> <a href="https://twitter.com/hashtag/raspberry?src=hash&amp;ref_src=twsrc%5Etfw">#raspberry</a> <a href="https://twitter.com/hashtag/pi?src=hash&amp;ref_src=twsrc%5Etfw">#pi</a> <a href="https://twitter.com/hashtag/nodejs?src=hash&amp;ref_src=twsrc%5Etfw">#nodejs</a>, <a href="https://twitter.com/hashtag/python?src=hash&amp;ref_src=twsrc%5Etfw">#python</a> <a href="https://twitter.com/hashtag/rabbitmq?src=hash&amp;ref_src=twsrc%5Etfw">#rabbitmq</a> <a href="https://twitter.com/hashtag/redis?src=hash&amp;ref_src=twsrc%5Etfw">#redis</a> <a href="https://twitter.com/hashtag/mysql?src=hash&amp;ref_src=twsrc%5Etfw">#mysql</a>, <a href="https://twitter.com/hashtag/grafana?src=hash&amp;ref_src=twsrc%5Etfw">#grafana</a> <a href="https://t.co/xQbTp0rvDE">pic.twitter.com/xQbTp0rvDE</a></p>&mdash; Erich Radstake (@ErichRadstake) <a href="https://twitter.com/ErichRadstake/status/1078765267906412545?ref_src=twsrc%5Etfw">December 28, 2018</a></blockquote>
			<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
			<p>This is beautiful, and congrats on the progress!</p>
		</div>
	</div>
</div>

<hr />
<br />

#### How are we doing?
What would you like to see here in 2019? Email or send us a tweet, or post something at our [community forum](http://community.grafana.com?utm_source=blog&utm_campaign=timeshift_74).

Follow us on [Twitter](http://twitter.com/grafana), like us on [Facebook](http://facebook.com/grafana), and join the [Grafana Labs community](http://grafana.com/signup?utm_source=blog&utm_campaign=timeshift_74).
