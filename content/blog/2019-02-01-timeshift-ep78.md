+++
title = "timeShift(GrafanaBuzz, 1w) Issue 78"
author = "trent"
date = "2019-02-01"
keywords = ["Grafana", "Blog", "Roundup", "timeShift", "GrafanaCon"]
cover_image = "/assets/img/blog/timeshift/timeshift_14.jpg"
cover_opacity = "0.4"
cover_blur = "1px"
description = "A weekly roundup of articles and links from Grafana and the surrounding community"
categories = ["timeShift", "Grafana Buzz"]
excerpt = "Grafana v6.0 beta1, Updates to the lineup at GrafanCon, monitoring hybrid cloud environments, and monitoring the fastest Internet in the world."
+++

### Welcome to TimeShift
Grafana v6.0 Beta1 was released this week, and it's packed with new features! This is one of the biggest updates to Grafana and introduces a new way to explore your data, support for log data, and includes tons of other enhancements. We hope you'll give v6.0 Beta1 a try and let us know what you think. You can see a few of the highlights below, but check out all of the updates in the [What's new in Grafana v6 documentation](http://docs.grafana.org/guides/whats-new-in-v6-0/?utm_source=blog&utm_campaign=timeshift_78).

Also, there's only 3 weeks until GrafanaCon LA! Be sure to visit the [GrafanaCon LA](http://grafanacon.org) website to see the latest talks that have been added. There's still time to register so grab a ticket and join us! We have some really interesting talks and hands-on workshops planned, and have a lot of fun in store. 

Know of an article we missed? [Contact us](mailto:hello@grafana.com).

<br />
<hr />

<div class="row row--no-gutters">
	<div class="col col--sm-3">
		<img src="/assets/img/blog/timeshift/grafana_release_icon.png" width="170" />
	</div>
	<div class="col col--sm-9">
		<h3>Latest Beta Release: Grafana v6.0 Beta1</h3>
		<h5>New Features</h5>
		<ul>
			<li><strong>Alerting</strong>: Adds support for Google Hangouts Chat notifications <a href="https://github.com/grafana/grafana/issues/11221" rel="nofollow noopener">#11221</a>, thx <a href="https://github.com/PatrickSchuster" rel="nofollow noopener">@PatrickSchuster</a></li>
			<li><strong>Elasticsearch</strong>: Support bucket script pipeline aggregations <a href="https://github.com/grafana/grafana/issues/5968" rel="nofollow noopener">#5968</a></li>
			<li><strong>Influxdb</strong>: Add support for time zone (<code>tz</code>) clause <a href="https://github.com/grafana/grafana/issues/10322" rel="nofollow noopener">#10322</a>, thx <a href="https://github.com/cykl" rel="nofollow noopener">@cykl</a></li>
			<li><strong>Snapshots</strong>: Enable deletion of public snapshot <a href="https://github.com/grafana/grafana/issues/14109" rel="nofollow noopener">#14109</a></li>
			<li><strong>Provisioning</strong>: Provisioning support for alert notifiers <a href="https://github.com/grafana/grafana/issues/10487" rel="nofollow noopener">#10487</a>, thx <a href="https://github.com/pbakulev" rel="nofollow noopener">@pbakulev</a></li>
			<li><strong>Explore</strong>: A whole new way to do ad-hoc metric queries and exploration. Split view in half and compare metrics &amp; logs and much much more. <a href="http://docs.grafana.org/features/explore/" rel="nofollow noopener">Read more here</a></li>
		</ul>
		<p>For a full list of changes, be sure to read through the <a href="https://community.grafana.com/t/release-notes-v6-0-x/14010" target="_blank">release notes</a> and get more in-depth info about the features in the <a href="http://docs.grafana.org/guides/whats-new-in-v6-0/?utm_source=blog&utm_campaign=timeshift_78" target="_blank">documentation</a>.</p>
		<a href="https://grafana.com/grafana/download/beta?utm_source=blog&utm_campaign=timeshift_78" target="_blank" class="btn btn--primary">Download Grafana v6.0 Beta1 Now</a>
	</div>
</div>

<br />
<hr />

#### From the Blogosphere
[**Grafana Loki: Like Prometheus, but for logs**](https://speakerdeck.com/grafana/grafana-loki-like-prometheus-but-for-logs): Loki author and Grafana Labs VP, Platform Tom Wilkie gave a talk recently at the Cloud Native Computing Paris Meetup. If you want to catch one of his talks on Loki in person, he'll be giving a similar talk in Belgium at FOSDEM, Feb 2-3, and of course, at GrafanaCon LA Feb 25-26.

[**Automated Monitoring With Grafana and Prometheus**](https://dzone.com/articles/fully-automated-app-monitoring): While Grafana does have dashboard provisioning, it can be difficult to keep dashboards synchronized between environments. Fabio shows how he solves the issue with a Docker image he created.

[**How to display Octopus Deploy deployment history on Grafana dashboards**](https://www.tomaszgawlik.co.uk/post/grafana-octopus-deployment-history/): Tomasz shows how he uses a SQL data source in Grafana to display data on deployments that he manages with the Octopus Deploy platform.

[**Monitoring Micro-Service Applications across Hybrid Clouds using Istio service mesh multi-clusters, Kiali observability, Zipkin tracing, Prometheus events and Grafana visualisations**](https://apicrazy.com/2019/01/23/monitoring-micro-service-applications-across-hybrid-clouds-using-istio-service-mesh-multi-clusters-kiali-observability-zipkin-tracing-prometheus-events-and-grafana-visualisations/): The title kind of explains it all, but this article discusses multi-cloud environments and trying to maintain the benefits of a centralised monitoring platform.

[**[VIDEO] World's Fastest Internet - 1.6 TERABITS per Second**](https://www.youtube.com/watch?v=WXt2gD4fS_k): An oldie, but a goodie - Take a look at the world's fastest Internet connection and how they built the network. Also note, Grafana spotted in the wild, around 5:30.

<br />
<hr />

<div class="row row--internal-gutters">
	<div class="col col--sm-8">
		<a href="https://www.grafanacon.org/" target="_blank"><img src="/assets/img/blog/timeshift/grafanacon_ga_tickets_tweet.jpg" width="600" /></a>
	</div>
	<div class="col col--sm-4">
		<h4>Get your tickets while they last!</h4>
		<p>Join us in Los Angeles, California February 25-26, 2019 for 2 days of talks and in-depth workshops on Grafana and the open source monitoring ecosystem. Learn about Grafana and new/upcoming features and projects (*cough* <strong><a href="http://grafana.com/loki/?utm_source=blog&utm_campaign=timeshift_78" target="_blank">Grafana Loki</a></strong> *cough*) and the broader ecosystem like <strong>Prometheus</strong>, <strong>Graphite</strong>, <strong>InfluxDB</strong>, <strong>Kubernetes</strong>, and more.</p>
		<a class="btn btn--outline" href="http://www.grafanacon.org/" target="_blank"><strong>Register Now!</strong></a>
	</div>
</div>
<br />
<br />

<div class="sponsors">
	<div class="row row--md-gutters text-center">
		<div class="col col--sm-12 text-center">
			<div class="sponsor-header">Thank you to our sponsors for making GrafanaCon possible!</div>
		</div>
	</div>
	<div class="row row--md-gutters text-center">
		<div class="col col--sm-3">
			<a href="https://www.oracle.com/" target="_blank"><img class="speaker-logo" src="/assets/img/blog/timeshift/grafanacon/logos/oracle_sponsor.png" /></a>
		</div>
		<div class="col col--sm-3">
			<a href="http://cloud.google.com" target="_blank"><img class="speaker-logo" src="/assets/img/blog/timeshift/grafanacon/logos/google_cloud_logo.png" /></a>
		</div>
		<div class="col col--sm-3 text-center">
			<a href="http://influxdata.com" target="_blank"><img class="speaker-logo" src="/assets/img/blog/timeshift/grafanacon/logos/influx_data_logo.png" /></a>
		</div>
		<div class="col col--sm-3 text-center">
			<a href="http://timescale.com" target="_blank"><img class="speaker-logo" src="/assets/img/blog/timeshift/grafanacon/logos/timescale_logo.png" /></a>
		</div>
	</div>
	<div class="row row--md-gutters">
		<div class="col col--sm-3 text-center">
			<a href="http://packet.net" target="_blank"><img class="speaker-logo" src="/assets/img/blog/timeshift/grafanacon/logos/packet_logo.png" /></a>
		</div>
		<div class="col col--sm-3 text-center">
			<a href="http://sensu.io" target="_blank"><img class="speaker-logo" src="/assets/img/blog/timeshift/grafanacon/logos/sensu_logo.png" /></a>
		</div>
		<div class="col col--sm-3 text-center">
			<a href="http://victorops.com" target="_blank"><img class="speaker-logo" src="/assets/img/blog/timeshift/grafanacon/logos/victorops_logo.png" /></a>
		</div>
		<div class="col col--sm-3 text-center">
			<a href="http://pagertree.com" target="_blank"><img class="speaker-logo" src="/assets/img/blog/timeshift/grafanacon/logos/pagertree_logo.png" /></a>
		</div>
	</div>
</div>

<br />
<hr />
<br />

#### Grafana Plugin Update
If you're using plugins in Grafana, be sure to keep them up to date to take advantage of new features and bug fixes. To update or install any plugin on your on-prem Grafana, use the <a href="http://docs.grafana.org/administration/cli/#grafana-cli?utm_source=blog&utm_campaign=timeshift_72" target="_blank">grafana-cli tool</a>, or for <a href="https://grafana.com/cloud/grafana?utm_source=blog&utm_campaign=timeshift_72" target="_blank">Hosted Grafana</a>,	 update with one-click.
<br />
<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/kentik-app/versions/1.3.3/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong>Kentik Connect Pro App</strong> - Version 1.3.3 of the Kentik app was released 2/1/2019 and includes support for selecting US and EU API endpoints, and several bug fixes.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/kentik-app?utm_source=blog&utm_campaign=timeshift_78" target="_blank"><strong>Install</strong></a>
			</p>
		</div>
	</div>

</div>
 
<br />
<hr />
<br />

<div class="row row--internal-gutters">
	<div class="col col--sm-4">
		<h4>We're Hiring</h4>
	<p>We're looking for passionate people from every corner of the world who want to solve interesting and challenging problems in a fun, supportive environment. Join us! Check out all of our open positions.</p>
	<a class="btn btn-outline" href="https://grafana.com/about/hiring?utm_source=blog&utm_campaign=timeshift_78" target="_blank">View All our Open Positions</a>
	</div>
	<div class="col col--sm-8">
		<a href="https://grafana.com/about/hiring?utm_source=blog&utm_campaign=timeshift_78" target="_blank">
			<img src="/assets/img/blog/timeshift/careers_section.jpg" />
		</a>
	</div>
</div>

<hr />
<br />

<div>
	<div class="row row--no-gutters">
		<div class="col col--sm-12">
			<h4>Tweet of the Week</h4>
			We scour Twitter each week to find an interesting/beautiful dashboard or monitoring related tweet and show it off! <a href="https://twitter.com/hashtag/monitoringlove?src=hash" target="_blank">#monitoringLove</a>
			<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Check live <a href="https://twitter.com/search?q=%24GENX&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$GENX</a> <a href="https://twitter.com/hashtag/blockchain?src=hash&amp;ref_src=twsrc%5Etfw">#blockchain</a> &amp; market stats with the refreshed <a href="https://twitter.com/hashtag/genesisnetwork?src=hash&amp;ref_src=twsrc%5Etfw">#genesisnetwork</a> infographics page at <a href="https://t.co/pPFPCxoLS7">https://t.co/pPFPCxoLS7</a>  <br><br>Rebuilt with speed in mind using <a href="https://twitter.com/InfluxDB?ref_src=twsrc%5Etfw">@InfluxDB</a>, the latest version of <a href="https://twitter.com/grafana?ref_src=twsrc%5Etfw">@grafana</a> &amp; stats from <a href="https://twitter.com/coingecko?ref_src=twsrc%5Etfw">@coingecko</a> <a href="https://twitter.com/hashtag/crypto?src=hash&amp;ref_src=twsrc%5Etfw">#crypto</a> <a href="https://t.co/O76f8cOFR5">pic.twitter.com/O76f8cOFR5</a></p>&mdash; Genesis Network - $GENX (@genx_network) <a href="https://twitter.com/genx_network/status/1090407535868346370?ref_src=twsrc%5Etfw">January 30, 2019</a></blockquote>
			<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
			<p>Great looking dashboard - be sure to check out the new color picker in v6.0 beta1, will help you maintain consistent colors across dashboards.</p>
		</div>
	</div>
</div>

<hr />
<br />

#### How are we doing?
We're always looking to make TimeShift better. If you have feedback, please let us know! Email or send us a tweet, or post something at our [community forum](http://community.grafana.com?utm_source=blog&utm_campaign=timeshift_78).

Follow us on [Twitter](http://twitter.com/grafana), like us on [Facebook](http://facebook.com/grafana), and join the [Grafana Labs community](http://grafana.com/signup?utm_source=blog&utm_campaign=timeshift_78).
