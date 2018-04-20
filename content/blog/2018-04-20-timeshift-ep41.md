+++
title = "timeShift(GrafanaBuzz, 1w) Issue 41"
author = "trent"
date = "2018-04-20"
keywords = ["Grafana", "Blog", "Roundup", "timeShift"]
cover_image = "/assets/img/blog/timeshift/timeshift_14.jpg"
cover_opacity = "0.4"
cover_blur = "1px"
description = "A weekly roundup of articles and links from Grafana and the surrounding community"
categories = ["timeShift", "Grafana Buzz"]
+++

### Welcome to TimeShift
The big news this week is the release of Grafana v5.1.0-beta1. This beta release adds a number of features and enhancements including MSSQL support, additional alerting notification channels, improved dashboard provisioning functionality and some important UX fixes – most notably, the recently reported page scrolling issue.

The Grafana Labs team will also hit the road for a few weeks starting with [Percona Live](https://www.percona.com/live/18/) in Santa Clara, CA, April 23-25 which we are speaking at and sponsoring, followed by [KubeCon + CloudNativeCon Europe 2018](https://events.linuxfoundation.org/events/kubecon-cloudnativecon-europe-2018/) in Copenhagen, Denmark, May 2-4, which we are also speaking at and sponsoring. We hope we get a chance to say hi to you at one of these conferences. You can see all of our upcoming events [here](https://grafana.com/events).
<br />
<hr />

#### Latest Beta Release
<div class="row row--no-gutters">
	<div class="col col--sm-3">
		<img src="/assets/img/blog/timeshift/grafana_release_icon.png" width="170" />
	</div>
	<div class="col col--sm-9">
		<p>
			<strong><a href="https://grafana.com/grafana/download/beta?utm_source=blog&utm_campaign=timeshift_41" target="_blank">Grafana 5.1.0-beta1</a></strong> is available for download. Major enhancements include:
			<ul>
				<li><strong>MSSQL</strong>: New Microsoft SQL Server data source <a href="https://github.com/grafana/grafana/pull/10093">#10093</a>, <a href="https://github.com/grafana/grafana/pull/11298">#11298</a>, thx <a href="https://github.com/linuxchips">@linuxchips</a></li>
				<li><strong>Prometheus</strong>: The heatmap panel now support Prometheus histograms <a href="https://github.com/grafana/grafana/issues/10009">#10009</a></li>
				<li><strong>Postgres/MySQL</strong>: Ability to insert 0s or nulls for missing intervals <a href="https://github.com/grafana/grafana/issues/9487">#9487</a>, thanks <a href="https://github.com/svenklemm">@svenklemm</a></li>
				<li><strong>Postgres/MySQL/MSSQL</strong>: Fix precision for the time column in table mode <a href="https://github.com/grafana/grafana/issues/11306">#11306</a></li>
				<li><strong>Graph</strong>: Align left and right Y-axes to one level <a href="https://github.com/grafana/grafana/issues/1271">#1271</a> &amp;  <a href="https://github.com/grafana/grafana/issues/2740">#2740</a> thx <a href="https://github.com/ilgizar">@ilgizar</a></li>
				<li><strong>Graph</strong>: Thresholds for Right Y axis <a href="https://github.com/grafana/grafana/issues/7107">#7107</a>, thx <a href="https://github.com/ilgizar">@ilgizar</a></li>
				<li><strong>Graph</strong>: Support multiple series stacking in histogram mode <a href="https://github.com/grafana/grafana/issues/8151">#8151</a>, thx <a href="https://github.com/mtanda">@mtanda</a></li>
				<li><strong>Alerting</strong>: Pausing/un alerts now updates new_state_date <a href="https://github.com/grafana/grafana/pull/10942">#10942</a></li>
				<li><strong>Alerting</strong>: Support Pagerduty notification channel using Pagerduty V2 API <a href="https://github.com/grafana/grafana/issues/10531">#10531</a>, thx <a href="https://github.com/jbaublitz">@jbaublitz</a></li>
				<li><strong>Templating</strong>: Add comma templating format <a href="https://github.com/grafana/grafana/issues/10632">#10632</a>, thx <a href="https://github.com/mtanda">@mtanda</a></li>
				<li><strong>Prometheus</strong>: Show template variable candidate in query editor <a href="https://github.com/grafana/grafana/issues/9210">#9210</a>, thx <a href="https://github.com/mtanda">@mtanda</a></li>
				<li><strong>Prometheus</strong>: Support POST for query and query_range <a href="https://github.com/grafana/grafana/pull/9859">#9859</a>, thx <a href="https://github.com/mtanda">@mtanda</a></li>
				<li><strong>Alerting</strong>: Add support for retries on alert queries <a href="https://github.com/grafana/grafana/issues/5855">#5855</a>, thx <a href="https://github.com/Thib17">@Thib17</a></li>
				<li><strong>Table</strong>: Table plugin value mappings <a href="https://github.com/grafana/grafana/issues/7119">#7119</a>, thx <a href="https://github.com/infernix">infernix</a></li>
				<li><strong>IE11</strong>: IE 11 compatibility <a href="https://github.com/grafana/grafana/issues/11165">#11165</a></li>
				<li><strong>Scrolling</strong>: Better scrolling experience <a href="https://github.com/grafana/grafana/issues/11053">#11053</a>, <a href="https://github.com/grafana/grafana/issues/11252">#11252</a>, <a href="https://github.com/grafana/grafana/issues/10836">#10836</a>, <a href="https://github.com/grafana/grafana/issues/11185">#11185</a>, <a href="https://github.com/grafana/grafana/issues/11168">#11168</a></li>
				<li><strong>Docker</strong>: Improved docker image (breaking changes regarding file ownership) <a href="https://github.com/grafana/grafana-docker/issues/141">grafana-docker #141</a>, thx <a href="https://github.com/Spindel">@Spindel</a>, <a href="https://github.com/ChristianKniep">@ChristianKniep</a>, <a href="https://github.com/brancz">@brancz</a> and <a href="https://github.com/jangaraj">@jangaraj</a></li>
				<li><strong>Folders</strong>: A folder admin cannot add user/team permissions for folder/its dashboards <a href="https://github.com/grafana/grafana/issues/11173">#11173</a></li>
				<li><strong>Provisioning</strong>: Improved workflow for provisioned dashboards <a href="https://github.com/grafana/grafana/issues/10883">#10883</a></li>
			</ul>
		</p>
		<p>
			Check out the full <a href="https://community.grafana.com/t/release-notes-v-5-1-x/6958" target="_blank">release notes</a> to see the features and fixes in the beta release.
		</p>
		<a href="https://grafana.com/grafana/download/beta?utm_source=blog&utm_campaign=timeshift_41" target="_blank" class="btn btn--primary">Download Grafana 5.1.0-beta1 Now</a>
	</div>
</div>


<br />
<hr />

#### From the Blogosphere
[**How Grafana and the open source community came together**](https://medium.com/ft-product-technology/how-grafana-and-the-open-source-community-came-together-9e0cb87cb735): A nice rundown of our recent GrafanaCon from two attendees. In this post, they discuss conference highlights and share some of their favorite anecdotes during the event.

[**Network Monitoring with Prometheus and Cumulus Linux**](https://techbloc.net/archives/2874): Learn how to monitor Cumulus Linux switches, report metrics to Prometheus, and visualize them with Grafana. For reference on how to install and configure Prometheus and Grafana, read his [previous post](https://techbloc.net/archives/2573). 

[**Visualizing IoT devices with Akka and Grafana. ScalaUA2018**](https://www.youtube.com/watch?v=uVzvDH3LYsE): In this video from a talk at ScalaUA2018, Willem discusses how to use Akka to collect metrics from multiple smart devices and visualize the data in Grafana. Speaking of monitoring smart devices, Erwin de Keijzer gave a [great talk](https://www.youtube.com/watch?v=wtna51BLYMc) at GrafanaCon on monitoring the power consumption of his smart washing machine.

[**TTN Gateway + Monitoring with Resin.io**](https://www.bjoerns-techblog.de/2018/04/ttn-gateway-monitoring-mit-resin-io/): If you're into the Internet of Things you may be familiar with The Things Network (TNN). This post walks you through how to monitor a TNN gateway with InfluxDB and Grafana.

[**Best SecOps Tools: 50 Must-Have Tools For Your SecOps Arsenal**](https://www.threatstack.com/blog/best-secops-tools-50-must-have-tools-for-your-secops-arsenal/): Threat Stack put together a list of the top 50 most useful tools for SecOps teams, and Grafana was listed as number 1 in the dashboards category!

<br />
<hr />

#### Grafana Plugins
Lots of plugin updates to share this week. If you're using on-prem Grafana, update and install plugins with the <a href="http://docs.grafana.org/administration/cli/#grafana-cli?utm_source=blog&utm_campaign=timeshift_41" target="_blank">grafana-cli tool</a>, for <a href="https://grafana.com/cloud/grafana?utm_source=blog&utm_campaign=timeshift_41" target="_blank">Hosted Grafana</a>, update with one-click.
<br />
<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 0;" src="https://grafana.com/api/plugins/zuburqan-parity-report-panel/versions/1.0.0/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="new-plugin-tag"><strong>NEW PLUGIN</strong></div><br/>
				<strong>Parity Report Panel</strong> - This new panel allows you to compare series, calculate the difference and set thresholds based on the difference. For example, if serie A returns 10 and serie B returns 15 then the difference is 50%. If you set the threshold to 20% then this would be visualized as an error. You can create your own advanced comparison functions using mathjs. 
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/zuburqan-parity-report-panel?utm_source=blog&utm_campaign=timeshift_41" target="_blank"><strong>Install</strong></a>
			</p>
		</div>
	</div>
</div>
<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 0;" src="https://grafana.com/api/plugins/yesoreyeram-boomtable-panel/versions/0.2.4/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="new-plugin-tag"><strong>NEW PLUGIN</strong></div><br/>
				<strong>Boom Table Panel</strong> - This new panel is a multistat panel for the Graphite data source. To learn more about this, check out the <a href="http://sriramajeyam.com/yesoreyeram-boomtable-panel/" target="_blank">Boom Table site</a>.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/yesoreyeram-boomtable-panel?utm_source=blog&utm_campaign=timeshift_41" target="_blank"><strong>Install</strong></a>
			</p>
		</div>
	</div>
</div>
<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/adremsoft-netcrunch-app/versions/2.0.0/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong>NetCrunch App</strong> - This latest release adds support for template queries. This allows filtering of network nodes for specific Network Atlas View or Monitoring Pack.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/adremsoft-netcrunch-app?utm_source=blog&utm_campaign=timeshift_41" target="_blank"><strong>Update</strong></a>
			</p>
		</div>
	</div>
</div>
<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/dlopes7-appdynamics-datasource/versions/1.2.1/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong>AppDynamics Datasource</strong> - The Premium plugin for AppDynamics received the following updates:
			</p>
			<ul>
				<li>Adds Top X functionality</li>
				<li>Fixes import dashboards with templates</li>
				<li>Adds Server Visibility Metrics support</li>
				<li>Adds Value/Min/Max/Sum options</li>
				<li>Adds Time Offset functionality</li>
			</ul>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/dlopes7-appdynamics-datasource?utm_source=blog&utm_campaign=timeshift_41" target="_blank"><strong>Update</strong></a>
			</p>
		</div>
	</div>
</div>
<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/digiapulssi-organisations-panel/versions/1.1.0/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong>Organisations Panel</strong> - This panel can be added to a dashboard and used to switch to another organization in Grafana. It received an update to make it work with Grafana 5.0.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/digiapulssi-organisations-panel?utm_source=blog&utm_campaign=timeshift_41" target="_blank"><strong>Update</strong></a>
			</p>
		</div>
	</div>
</div>
<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/vertamedia-clickhouse-datasource/versions/1.4.3/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong>Clickhouse Datasource</strong> - The very actively maintained Clickhouse Data Source plugin has been updated with some fixes including:
			</p>
			<ul>
				<li>Fix broken AST when using nested SELECT without FROM statement</li>
				<li><a href="https://github.com/Vertamedia/clickhouse-grafana/issues/44" target="_blank">Strict statement matching</a></li>
				<li>Rebuild queries from AST only if adhoc filters were applied</li>
			</ul>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/vertamedia-clickhouse-datasource?utm_source=blog&utm_campaign=timeshift_41" target="_blank"><strong>Update</strong></a>
			</p>
		</div>
	</div>
</div>
<br />
<hr />

#### Upcoming Events
In between code pushes we like to speak at, sponsor and attend all kinds of conferences and meetups. We also like to make sure we mention other Grafana-related events happening all over the world. If you're putting on just such an event, let us know and we'll list it here.

<div class="blog-plugin">
	<div class="row row--md-gutters blog-plugin-grid">
		<div class="col col--md-3">
			<img style="border-radius: 50%;" class="large" src="/assets/img/blog/timeshift/percona_live_18.png" />
		</div>
		<div class="col col--md-8 col--sm-offset-1">
			<p><strong><a href="https://www.percona.com/live/18/sessions/metrictank-building-a-new-time-series-engine-for-grafanacloud" target="_blank">Percona Live 2018 | Santa Clara, CA - April 23-25, 2018</a>:</strong><br />
			<strong>Raj Dutt - metrictank: Building a New Time Series Engine for GrafanaCloud</strong><br />
			Time series databases are sprouting up like mushrooms. At Grafana Labs, we built a new engine specifically for GrafanaCloud. Why would we do that? Learn about the design considerations, lessons learned, and tradeoffs we made in designing this engine that is compatible with both Graphite and Prometheus.
			</p>
			<a href="https://www.percona.com/live/18/sessions/metrictank-building-a-new-time-series-engine-for-grafanacloud" target="_blank" class="btn btn--outline">Register Now</a>
		</div>
	</div>
	<br/>
	<div class="row row--md-gutters blog-plugin-grid">
		<div class="col col--md-3">
			<img style="border-radius: 50%;" class="large" src="/assets/img/blog/timeshift/kubecon_18.png" />
		</div>
		<div class="col col--md-8 col--sm-offset-1">
			<p>
				<strong><a href="https://events.linuxfoundation.org/events/kubecon-cloudnativecon-europe-2018/" target="_blank">KubeCon + CloudNativeCon Europe 2018 | Copenhagen, Denmark - May 2-4, 2018</a>:</strong> <br />
				<strong>Tom Wilkie – Prometheus Monitoring Mixins: Using Jsonnet to Package Together Dashboards, Alerts and Exporters</strong><br />In this talk we present a technique for using Jsonnet (a configuration language from Google) for packaging and deploying “Monitoring Mixins” - extensible and customizable combinations of dashboards, alert definitions and exporters. This technique allows developers of open source projects to publish best-practice monitoring configurations alongside their code, and for users to consume it, customize it and stay up to date. We will present example Mixins for Kubernetes and other services such as Consul and Cassandra.
			</p>
			<p>
				<strong>Goutham Veeramanchaneni - The Engine behind Prometheus</strong><br /> This talk will introduce TSDB, its high-level usage and guarantees, and will show people how, with a little Go knowledge, they can introduce a solid time-series database into their stack.
			</p>
			<p>
				<strong>Goutham Veeramanchaneni - TSDB: The Past, Present and the Future</strong><br /> TSDB is the storage engine that powers Prometheus 2.0 and brought most of the drastic improvements in speed and utilization across the board. But it is also a golang library that Prometheus imports and is a solid time-series database that anyone can use.<br />
				It is undergoing active development and this talk will take you through the journey, benchmarks, new features, ghastly bugs and moonshot ideas. This will also help the audience understand the library and hopefully get them to use and contribute to it.
			</p>
			<p>
				We're also sponsoring KubeCon + CloudNativeCon as a Startup Sponsor. Swing by our booth to learn how to monitor Kubernetes with GrafanaCloud.
			</p>
			<a href="https://events.linuxfoundation.org/events/kubecon-cloudnativecon-europe-2018/" target="_blank" class="btn btn--outline">Register Now</a>
		</div>
	</div>
	<br/>
	<div class="row row--md-gutters blog-plugin-grid">
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
	<br/>`
	<div class="row row--md-gutters blog-plugin-grid">
		<div class="col col--md-3">
			<img style="border-radius: 50%;" class="large" src="/assets/img/blog/timeshift/influxdays.png" />
		</div>
		<div class="col col--md-8 col--sm-offset-1">
			<p>
				<strong><a href="https://influxdays.com/" target="_blank">InfluxDays London 2018 | London, United Kingdom - June 14, 2018</a>:</strong> <br />
				Join us as we sponsor two days of technical talks around Telegraf, InfluxDB, Chronograf, Kapacitor, Grafana and adjacent technologies.
			</p>
			<a href="https://influxdays.com/" target="_blank" class="btn btn--outline">Register Now</a>
		</div>
	</div>
</div>
<hr />

<div>
	<div class="row row--no-gutters">
		<div class="col col--sm-12">
			<h4>Tweet of the Week</h4>
			We scour Twitter each week to find an interesting/beautiful dashboard or monitoring related tweet and show it off! <a href="https://twitter.com/hashtag/monitoringlove?src=hash" target="_blank">#monitoringLove</a>
			<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Beautiful waves of traffic per instance when doing rolling restart <a href="https://twitter.com/hashtag/MonitoringArt?src=hash&amp;ref_src=twsrc%5Etfw">#MonitoringArt</a> <a href="https://twitter.com/hashtag/DevOps?src=hash&amp;ref_src=twsrc%5Etfw">#DevOps</a> <a href="https://twitter.com/hashtag/Prometheus?src=hash&amp;ref_src=twsrc%5Etfw">#Prometheus</a> <a href="https://twitter.com/hashtag/Grafana?src=hash&amp;ref_src=twsrc%5Etfw">#Grafana</a> <a href="https://t.co/SKHeCIPtOg">pic.twitter.com/SKHeCIPtOg</a></p>&mdash; Arne S (@A_r_n_e) <a href="https://twitter.com/A_r_n_e/status/986261769097228289?ref_src=twsrc%5Etfw">April 17, 2018</a></blockquote>
			<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


			<p>I'd love to see this streaming in real time.</p>
		</div>
	</div>
</div>

<hr />

<div style=" padding: 20px; background: url(/assets/img/blog/timeshift/polygon_texture_black.jpg); background-size: cover; border-radius: 4px;">
	<h4>Grafana Labs is Hiring!</h4>
	<p>We are passionate about open source software and thrive on tackling complex challenges to build the future. We ship code from every corner of the globe and love working with the community. If this sounds exciting, you're in luck – <strong>WE'RE HIRING!</strong></p>
	<p>Check out our <a class="btn btn-outline" href="https://grafana.com/about/hiring?utm_source=blog&utm_campaign=timeshift_41" target="_blank">Open Positions</a></p>
</div>


<hr />
<br />
#### See You Next Week!
Thanks for reading another issue of timeShift. What would you like to see here? Submit a comment on this issue below, or post something at our [community forum](http://community.grafana.com?utm_source=blog&utm_campaign=timeshift_41).

Follow us on [Twitter](http://twitter.com/grafana), like us on [Facebook](http://facebook.com/grafana), and join the [Grafana Labs community](http://grafana.com/signup?utm_source=blog&utm_campaign=timeshift_41).



