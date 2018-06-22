+++
title = "timeShift(GrafanaBuzz, 1w) Issue 50"
author = "trent"
date = "2018-06-22"
keywords = ["Grafana", "Blog", "Roundup", "timeShift"]
cover_image = "/assets/img/blog/timeshift/timeshift_14.jpg"
cover_opacity = "0.4"
cover_blur = "1px"
description = "A weekly roundup of articles and links from Grafana and the surrounding community"
categories = ["timeShift", "Grafana Buzz"]
+++

### Welcome to TimeShift
**TimeShift is turning 1 year old!** I really hope you've enjoyed reading these weekly roundups as much as I've enjoyed writing them. This week we have news on the new Grafana v5.2.0-beta3 release, a bunch of plugin updates to share, and your regular dose of recent blog posts. 

Have an article you'd like included in an upcoming TimeShift? [Contact Us](mailto:hello@grafana.com).

<br />
<hr />

#### Latest Beta Release: Grafana 5.2.0-beta3
<div class="row row--no-gutters">
	<div class="col col--sm-3">
		<img src="/assets/img/blog/timeshift/grafana_release_icon.png" width="170" />
	</div>
	<div class="col col--sm-9">
		<h4>New Features</h4>
			<ul>
				<li><strong>Dashboard</strong>: Import dashboard to folder <a href="https://github.com/grafana/grafana/issues/10796">#10796</a></li>
			</ul>
		<h4>Minor Updates</h4>
		<ul>
			<li><strong>Build</strong>: All rpm packages should be signed <a href="https://github.com/grafana/grafana/issues/12359">#12359</a></li>
			<li><strong>Permissions</strong>: Important security fix for API keys with viewer role <a href="https://github.com/grafana/grafana/issues/12343">#12343</a></li>
			<li><strong>Dashboard</strong>: Fix so panel titles don't wrap <a href="https://github.com/grafana/grafana/issues/11074">#11074</a></li>
			<li><strong>Dashboard</strong>: Prevent double-click when saving dashboard <a href="https://github.com/grafana/grafana/issues/11963">#11963</a></li>
			<li><strong>Dashboard</strong>: Autofocus the add-panel search filter <a href="https://github.com/grafana/grafana/pull/12189">#12189</a> thx <a href="https://github.com/ryantxu">@ryantxu</a></li>
			<li><strong>Units</strong>: W/m2 (energy), l/h (flow) and kPa (pressure) <a href="https://github.com/grafana/grafana/pull/11233">#11233</a>, thx <a href="https://github.com/flopp999">@flopp999</a></li>
			<li><strong>Units</strong>: Litre/min (flow) and milliLitre/min (flow) <a href="https://github.com/grafana/grafana/pull/12282">#12282</a>, thx <a href="https://github.com/flopp999">@flopp999</a></li>
			<li><strong>Alerting</strong>: Fix mobile notifications for Microsoft Teams alert notifier <a href="https://github.com/grafana/grafana/pull/11484">#11484</a>, thx <a href="https://github.com/manacker">@manacker</a></li>
			<li><strong>Influxdb</strong>: Add support for mode function <a href="https://github.com/grafana/grafana/issues/12286">#12286</a></li>
			<li><strong>Cloudwatch</strong>: Fixes panic caused by bad timerange settings <a href="https://github.com/grafana/grafana/issues/12199">#12199</a></li>
			<li><strong>Auth Proxy</strong>: Whitelist proxy IP address instead of client IP address <a href="https://github.com/grafana/grafana/issues/10707">#10707</a></li>
			<li><strong>User Management</strong>: Make sure that a user always has a current org assigned <a href="https://github.com/grafana/grafana/issues/11076">#11076</a></li>
			<li><strong>Snapshots</strong>: Fix: annotations not properly extracted leading to incorrect rendering of annotations <a href="https://github.com/grafana/grafana/issues/12278">#12278</a></li>
			<li><strong>LDAP</strong>: Allow use of DN in group_search_filter_user_attribute and member_of <a href="https://github.com/grafana/grafana/issues/3132">#3132</a>, thx <a href="https://github.com/mmolnar">@mmolnar</a></li>
			<li><strong>Graph</strong>: Fix legend decimals precision calculation <a href="https://github.com/grafana/grafana/issues/11792">#11792</a></li>
			<li><strong>Dashboard</strong>: Make sure to process panels in collapsed rows when exporting dashboard <a href="https://github.com/grafana/grafana/issues/12256">#12256</a></li>
		</ul>
		<p>Please try the new beta release out and let us know what you think. <a href="https://community.grafana.com/t/release-notes-v5-2-x/7894?utm_source=blog&utm_campaign=timeshift_50" target="_blank">Check out everything that's new in Grafana v5.2</a>. 
		</p>
		<a href="https://grafana.com/grafana/download/beta?utm_source=blog&utm_campaign=timeshift_50" target="_blank" class="btn btn--primary">Download Grafana 5.2.0-beta3 Now</a>
	</div>
</div>


<br />
<hr />

#### From the Blogosphere
[**Grafana and Flux**](https://www.youtube.com/watch?v=oZYXQPNR8Bc): David Kaltschmidt recently spoke at InfluxDays London to talk about the new Flux (formerly IFQL) support in Grafana. In this video from his talk, David gives a quick overview of the language features as well as the moving parts for a working deployment. He also demos the new Flux data source plugin in Grafana and releases it to the public live on stage, without a net! [Give the new plugin a try](https://grafana.com/plugins/grafana-influxdb-flux-datasource?utm_source=blog&utm_campaign=timeshift_50) and let us know what you think.

[**X-Axis (time) threshold support in graph panel**](https://github.com/grafana/grafana/pull/12371): Core Grafana developer Marcus Efraimsson submitted a pull request that allows you to color code time ranges. With these ranges highlighted by color, you can scan the data to easily identify patterns. It still needs some work, but we encourage you to give it a try and provide feedback.

[**VividCortex & Grafana: Better Together**](https://www.vividcortex.com/blog/vividcortex-grafana-better-together): You can now visualize VividCortex data in Grafana. One of the most loved features of Grafana is regardless of where your data lives, you can visualize it easily on the same dashboard or even in the same graph. Grafana supports over [40 data sources](https://grafana.com/plugins?type=datasource&utm_source=blog&utm_campaign=timeshift_50) and the list is growing! 

[**Prometheus and Grafana**](https://medium.com/@salohyprivat/prometheus-and-grafana-d59f3b1ded8b): If you're new to Grafana and Prometheus, or monitoring in general, this little article will help you configure and install the components in a Docker container and have you up and running in no time. 

[**Real-time Sailing Yacht Performance - Kafka (Part 2)**](https://www.rittmanmead.com/blog/2018/06/real-time-sailing-yacht-performance-getting-started-part-2/): In this continuing series, Paul is collecting data from his yacht's instrumentation in order to get a true sense of its performance when racing. Part 2 provides a high-level view of the architecture, how to set up Kafka, and includes a preview of the yacht metrics dashboard. Read [part 1](https://www.rittmanmead.com/blog/2018/01/real-time-yacht-performance/) & [Stepping back a bit (Part 1.1)](https://www.rittmanmead.com/blog/2018/06/real-time-sailing-yacht-performance-stepping-back-a-bit-part-1-1/).


<br />
<hr />

#### Grafana Plugins
We have a number of plugin updates plus a new graph panel plugin to share this week. We've made installing and updating plugins easy – for on-prem Grafana, use the <a href="http://docs.grafana.org/administration/cli/#grafana-cli?utm_source=blog&utm_campaign=timeshift_50" target="_blank">grafana-cli tool</a>, or for <a href="https://grafana.com/cloud/grafana?utm_source=blog&utm_campaign=timeshift_50" target="_blank">Hosted Grafana</a> update with one-click.
<br />
<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/snuids-radar-panel/versions/1.4.1/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="new-plugin-tag"><strong>NEW PLUGIN</strong></div><br/>
				<strong>Radar Graph Panel</strong> - This new panel displays radar graphs using the Chart.JS library.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/snuids-radar-panel?utm_source=blog&utm_campaign=timeshift_50" target="_blank"><strong>Install</strong></a>
			</p>
		</div>
	</div>
</div>

<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/grafana-simple-json-datasource/versions/1.4.0/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong>SimpleJson Data Source</strong> - Thanks to <a href="https://github.com/DracoBlue" target="_blank">@DracoBlue</a>, the SimpleJson data source adds support for adhoc filters.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/grafana-simple-json-datasource?utm_source=blog&utm_campaign=timeshift_50" target="_blank"><strong>Update</strong></a>
			</p>
		</div>
	</div>
</div>

<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/yesoreyeram-boomtable-panel/versions/0.3.0/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong>Boom Table Panel</strong> - A few UI tweaks in this latest release:
			</p>
			<ul>
				<li>Option to name a pattern</li>
				<li>Disable a pattern</li>
				<li>Reverse the background colors and transform values in the pattern</li>
			</ul>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/yesoreyeram-boomtable-panel?utm_source=blog&utm_campaign=timeshift_50" target="_blank"><strong>Update</strong></a>
			</p>
		</div>
	</div>
</div>

<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/ddurieux-glpi-app/versions/1.2.0/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong>GLPI App</strong> - The app for the GLPI issue tracking system got the following updates:
			</p>
			<ul>
				<li>Get a query count without selecting a date field</li>
				<li>Fixed error when receiving integer values not formatted in strings</li>
				<li>Fixed some typos</li>
			</ul>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/ddurieux-glpi-app?utm_source=blog&utm_campaign=timeshift_50" target="_blank"><strong>Update</strong></a>
			</p>
		</div>
	</div>
</div>

<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/grafana-clock-panel/versions/0.1.0/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong>Clock Panel</strong> - Thanks to <a href="https://github.com/jareware" target="_blank">@jareware</a> the Clock panel now has the ability to customize the countdown formatting.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/grafana-clock-panel?utm_source=blog&utm_campaign=timeshift_50" target="_blank"><strong>Update</strong></a>
			</p>
		</div>
	</div>
</div>

<br />

<div style=" padding: 20px; background: url(/assets/img/blog/timeshift/polygon_texture_black.jpg); background-size: cover; border-radius: 4px;">
	<h4>We're Hiring!</h4>
	<p>We're looking for passionate and talented engineers for positions in New York/Stockholm and remote! Do you love open source software? Do you thrive on tackling complex challenges to build the future? Want to work with awesome people? Be the next to join our team!
	</p>
	<a class="btn btn-outline" href="https://grafana.com/about/hiring?utm_source=blog&utm_campaign=timeshift_50" target="_blank">View our Open Positions</a>
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
				<strong><a href="https://www.meetup.com/Time-Series-Boston/events/249366642/" target="_blank">Zabbix Moscow Meetup 2018 | Moscow, Russia – June 23, 2018</a>:</strong>
				<br />
				We will have 5 talks at the next Zabbix Moscow meetup:
			</p>
			<ul>
				<li><strong>How to effectively work with Zabbix: Oleg Ivanivsky, Zabbix</strong> - Find out how to localize problems, fix them, and how to generally improve the performance of Zabbix.</li>
				<li><strong>Zabbix Events in ElasticSearch: Ilya Ableev, Badoo</strong> - ElasticSearch for storing events (not history!)</li>
				<li><strong>Updates in the Grafana Zabbix plugin: Alexander Zobnin, Grafana Labs</strong> - Learn about the new features in the Zabbix plugin, look under the hood, and find out how the SQL data sources in Grafana allow you to improve the performance of drawing graphics.</li>
				<li><strong>Zabbix 4.0 Detailed Review: Alexey Vladyshev, Zabbix</strong> - Learn about the new functionality of Zabbix 4.0 and how these innovations can help with everyday tasks, also learn about the plans for 4.2 and 4.4.</li>
				<li><strong>Zabbix as a security scanner: Nikolai Samosvat, QIWI</strong> - Learn how to scan for vulnerabilities across the entire infrastructure and automate the process to eliminate them using Zabbix and Vulners.</li>
			</ul>
			<a href="https://www.meetup.com/Zabbix-Moscow-Meetup/events/251789659/" target="_blank" class="btn btn--outline">RSVP</a>
		</div>
	</div>
	<br />
	<div class="row row--md-gutters">
		<div class="col col--md-3">
			<img style="border-radius: 50%;" class="large" src="/assets/img/blog/timeshift/meetup.jpg" />
		</div>
		<div class="col col--md-8 col--sm-offset-1">
			<p>
				<strong><a href="https://www.meetup.com/Time-Series-Boston/events/249366642/" target="_blank">TimeSeries Boston | Boston, MA – July 17, 2018</a>:</strong>
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
			<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Have you ever felt a need of highlighting and filter out weekends or off work hours in your Grafana graphs? With my PR you can do it with <a href="https://twitter.com/hashtag/Pride?src=hash&amp;ref_src=twsrc%5Etfw">#Pride</a> <a href="https://twitter.com/grafana?ref_src=twsrc%5Etfw">@grafana</a> <a href="https://twitter.com/hashtag/monitoringLove?src=hash&amp;ref_src=twsrc%5Etfw">#monitoringLove</a> <a href="https://t.co/855jDs1fxQ">https://t.co/855jDs1fxQ</a> <a href="https://t.co/DnSaW4FUIG">pic.twitter.com/DnSaW4FUIG</a></p>&mdash; Marcus Efraimsson (@mefraimsson) <a href="https://twitter.com/mefraimsson/status/1009796372520988672?ref_src=twsrc%5Etfw">June 21, 2018</a></blockquote>
			<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
			<p>Just in time for pride week ;)</p>
		</div>
	</div>
</div>

<hr />
<br />

#### How are we doing?
Hope you enjoyed this issue of TimeShift. What do you think? Are there other types of content you'd like to see here? Submit a comment on this issue below, or post something at our [community forum](http://community.grafana.com?utm_source=blog&utm_campaign=timeshift_50).

Follow us on [Twitter](http://twitter.com/grafana), like us on [Facebook](http://facebook.com/grafana), and join the [Grafana Labs community](http://grafana.com/signup?utm_source=blog&utm_campaign=timeshift_50).

