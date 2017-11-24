+++
title = "timeShift(GrafanaBuzz, 1w) Issue 23"
author = "trent"
date = "2017-11-24"
keywords = ["Grafana", "Blog", "Roundup", "timeShift"]
cover_image = "/assets/img/blog/timeshift/timeshift_14.jpg"
cover_opacity = "0.4"
cover_blur = "1px"
description = "A weekly roundup of articles and links from Grafana and the surrounding community"
categories = ["timeShift", "Grafana Buzz"]
+++

#### Welome to TimeShift
This week, Grafana Labs team members in the U.S. took time off for the Thanksgiving holiday, to spend time with family and friends. While I'm thankful for many things, I would like to call out two special groups - **1. My Grafana Labs family:** you teach me something new every day, provide interesting challenges, and make me feel valued. You make it a pleasure to come to work. And **2. The Grafana community:** I'm constantly impressed and amazed by the participation and passion from our community. I think I can speak for the entire company when I say, "Thank you!"

Due to the U.S. holiday, this issue of timeShift will be short. We plan to resume our regularly scheduled programming next week.
<hr />
#### Latest Release

<div class="row row--no-gutters blog-plugin-grid">
	<div class="col col--sm-3">
		<img src="/assets/img/blog/timeshift/grafana_release_icon.png" width="170" />
	</div>
	<div class="col col--sm-9">
		<p>
			<strong><a href="https://grafana.com/grafana/download/?utm_source=blog&utm_campaign=timeshift_23" target="_blank">Grafana 4.6.2</a></strong> is now available and includes some bug fixes:
		</p>
		<ul>
			<li><strong>Prometheus:</strong> Fixes bug with new Prometheus alerts in Grafana. Make sure to download this version if your using Prometheus for alerting. More details in the issue. <a href="https://github.com/grafana/grafana/issues/9777" target="_blank">#9777</a></li>
			<li><strong>Color picker:</strong> Bug after using textbox input field to change/paste color string <a href="https://github.com/grafana/grafana/issues/9769" target="_blank">#9769</a></li>
			<li><strong>Cloudwatch:</strong> build using golang 1.9.2 <a href="https://github.com/grafana/grafana/issues/9667" target="_blank">#9667</a>, thanks <a href="http://github.com/mtanda" target="_blank">@mtanda</a></li>
			<li><strong>Heatmap:</strong> Fixed tooltip for "time series buckets" mode <a href="https://github.com/grafana/grafana/issues/9332" target="_blank">#9332</a></li>
			<li><strong>InfluxDB:</strong> Fixed query editor issue when using <code>&gt;</code> or <code>&lt;</code> operators in WHERE clause <a href="https://github.com/grafana/grafana/issues/9871" target="_blank">#9871</a></li>
		</ul>
		<br />
		<a href="https://grafana.com/grafana/download/?utm_source=blog&utm_campaign=timeshift_23" target="_blank" class="btn btn--primary">Download Grafana 4.6.2 Now</a>
	</div>
</div>


<br />
<hr />


#### From the Blogosphere
[**Cloud Tech 10 - 13th November 2017 - Grafana, Linux FUSE Adapter, Azure Stack and more!**](https://www.youtube.com/watch?time_continue=90&v=6kyf5-k0Pc8): Mark Whitby is a Cloud Solution Architect at Microsoft UK. Each week he prodcues a video reviewing new developments with Microsoft Azure. This week Mark covers the new [Azure Monitoring Plugin](https://grafana.com/plugins/grafana-azure-monitor-datasource?utm_source=blog&utm_campaign=timeshift_22) we recently announced. He also shows you how to get up and running with Grafana quickly using the [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/grafana-labs.grafana_oss).

<br />
<hr />

<div class="row row--md-gutters blog-plugin-grid">
	<div class="col col--sm-9 blog-plugin-grid__item">
		<h4>Get Your GrafanaCon Tickets Now!</h4>
		<p>
			Join us March 1-2, 2018 in Amsterdam for 2 days of talks centered around Grafana and the surrounding monitoring ecosystem including Graphite, Prometheus, InfluxData, Elasticsearch, Kubernetes, and more.
		</p>
		<p>
			<a class="btn btn--grafanacon" href="https://ti.to/grafanacon/grafanacon-eu/with/mzbin4ciuxq" target="_blank"><strong>Get Your Ticket Now</strong></a>
		</p>
	</div>
	<div class="col col--sm-3 blog-plugin-grid__item">
		<img style="border-radius: 0;" src="/assets/img/blog/timeshift/grafanacon_eu_announcement.png" />
	</div>
</div>

<hr />

<h4>Upcoming Events:</h4>
We try to stay active in the community to learn and share with others who are interested in open source software and monitoring. Here are some events we have coming up. Hope to see you!

<div class="blog-plugin">
	<div class="row row--md-gutters blog-plugin-grid">
		<div class="col col--md-3">
			<img style="border-radius: 50%;" class="large" src="/assets/img/blog/timeshift/webinar.png" />
		</div>
		<div class="col col--md-8 col--sm-offset-1">
			<strong><a href="https://register.gotowebinar.com/register/7591609206882592514?source=grafana" target="_blank">How to Use Open Source Projects for Performance Monitoring | Webinar<br />Nov. 29, 1pm EST</a>:</strong> Check out how you can use popular open source projects, for performance monitoring of your Infrastructure, Application, and Cloud faster, easier, and to scale. In this webinar, Daniel Lee from Grafana Labs, and Chris Churilo from InfluxData, will provide you with step by step instruction from download &amp; configure, to collecting  metrics and building dashboards and alerts.
			<br />
			<a href="https://register.gotowebinar.com/register/7591609206882592514?source=grafana" target="_blank" class="btn btn--outline">RSVP</a>
		</div>
	</div>
	<div class="row row--md-gutters blog-plugin-grid">
		<div class="col col--md-3">
			<img style="border-radius: 50%;" class="large" src="/assets/img/blog/kubecon.png" />
		</div>
		<div class="col col--md-8 col--sm-offset-1">
			<strong><a href="https://www.linuxfoundation.org/kubecon-cloudnativecon-north-america-l-1/" target="_blank">KubeCon | Austin, TX</a> - Dec. 6-8, 2017:</strong> We're sponsoring KubeCon 2017! This is the must-attend conference for cloud native computing professionals. KubeCon + CloudNativeCon brings together leading contributors in:
			<ul>
				<li>Cloud native applications and computing</li>
				<li>Containers</li>
				<li>Microservices</li>
				<li>Central orchestration processing</li>
				<li>And more</li>
			</ul>
			<a href="https://www.linuxfoundation.org/kubecon-cloudnativecon-north-america-l-1/" target="_blank" class="btn btn--outline">Buy Tickets</a>
		</div>
	</div>
	<div class="row row--md-gutters blog-plugin-grid">
		<div class="col col--md-3">
			<img style="border-radius: 50%;" class="large" src="/assets/img/blog/fosdem_18.png" />
		</div>
		<div class="col col--md-8 col--sm-offset-1">
			<strong><a href="https://fosdem.org/2018/schedule/track/monitoring_and_cloud/" target="_blank">FOSDEM | Brussels, Belgium - Feb 3-4, 2018</a>:</strong> FOSDEM is a free developer conference where thousands of developers of free and open source software gather to share ideas and technology. Carl Bergquist is managing the Cloud and Monitoring Devroom, and the <a href="https://docs.google.com/document/d/1X2ntRpmY58r4iwAxfjk0yhxfVYcK9Xu56qhwR4uD6Og" target="_blank">CFP is now open</a>. <strong>There is no need to register; all are welcome.</strong> If you're interested in speaking at FOSDEM, submit your talk now!
		</div>
	</div>
</div>
<hr />


<div>
	<div class="row row--md-gutters">
		<div class="col col--sm-12">
			<h4>Tweet of the Week</h4>
			We scour Twitter each week to find an interesting/beautiful dashboard and show it off! <a href="https://twitter.com/hashtag/monitoringlove?src=hash" target="_blank">#monitoringLove</a>
			<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">CoffeeTracker 1.0: tracking individual coffee consumption <a href="https://twitter.com/Squirro?ref_src=twsrc%5Etfw">@Squirro</a> with help from a <a href="https://twitter.com/littleBits?ref_src=twsrc%5Etfw">@littleBits</a> cloudbit and <a href="https://twitter.com/grafana?ref_src=twsrc%5Etfw">@grafana</a> ... thnx <a href="https://twitter.com/ethanwbrown?ref_src=twsrc%5Etfw">@ethanwbrown</a> <a href="https://t.co/rvozffWKOK">pic.twitter.com/rvozffWKOK</a></p>&mdash; Harry Fuecks (@hfuecks) <a href="https://twitter.com/hfuecks/status/933744963866759169?ref_src=twsrc%5Etfw">November 23, 2017</a></blockquote>
			<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

			<p>Very cool. Always like to see new and interesting use cases for tracking things outside of devops, and also love <a href="https://twitter.com/littleBits">@littlebits</a>!</p>

		</div>
	</div>
</div>

<hr />

<div style=" padding: 20px; background: url(/assets/img/blog/timeshift/polygon_texture_black.jpg); background-size: cover; border-radius: 4px;">
	<h4>Grafana Labs is Hiring!</h4>
	<p>We are passionate about open source software and thrive on tackling complex challenges to build the future. We ship code from every corner of the globe and love working with the community. If this sounds exciting, you're in luck – <strong>WE'RE HIRING!</strong></p>
	<p>Check out our <a class="btn btn-outline" href="https://grafana.com/about/hiring?utm_source=blog&utm_campaign=timeshift_22" target="_blank">Open Positions</a></p>
</div>


<hr />
<br />
#### How are we doing?
I enjoy writing these weekly roudups, but am curious how I can improve them. Submit a comment on this article below, or post something at our [community forum](http://community.grafana.com?utm_source=blog&utm_campaign=timeshift_22). Help us make these weekly roundups better!

Follow us on [Twitter](http://twitter.com/grafana), like us on [Facebook](http://facebook.com/grafana), and join the [Grafana Labs community](http://grafana.com/signup?utm_source=blog&utm_campaign=timeshift_22).



