+++
title = "timeShift(GrafanaBuzz, 1w) Issue 8"
author = "trent"
date = "2017-08-11"
keywords = ["Grafana", "Blog", "Roundup", "timeShift"]
cover_image = "/assets/img/blog/timeshift/timeshift_8.jpg"
cover_opacity = "0.6"
cover_blur = "1px"
description = "A roundup of articles and links form Grafana and the community from the past week"
categories = ["timeShift", "Grafana Buzz"]
+++

Many people decide to take time off in August to enjoy the nice weather before Fall, but I've been surprised at the number of Grafana related articles that I've come across this week. This issue of timeShift, contains articles covering weather tracking, home automation and a couple of updates to native Plugins from core the Grafana team.
<br />
<!-- <hr />
<div>
	<div class="row row--md-gutters blog-plugin-grid">
		<div class="col col--sm-4 blog-plugin-grid__item">
			<img style="border-radius: 0; width: 240px;" src="/assets/img/blog/timeshift/grafanacon_eu_announcement.png" />
		</div>
		<div class="col col--sm-8 blog-plugin-grid__item">
			<h4>GrafanaCon EU Announced!</h4>
			<p>
				GrafanaCon is a two-day event with talks centered around Grafana and the surrounding ecosystem. 
				<br />
				<br />
				We are excited to announce the next GrafanaCon will be traveling to <strong>Amsterdam, Netherlands, March 1-2, 2018!</strong> We will be adding details shortly, but the <a href="http://grafana.com/grafanacon-cfp?utm_source=blog&utm_campaign=timeshift_7">Call for Papers</a> is officially open.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="http://grafana.com/grafanacon-cfp?utm_source=blog&utm_campaign=timeshift_7" target="_blank"><strong>I'd Like to Speak at GrafanaCon</strong></a>
			</p>
		</div>
	</div>
</div> -->
<hr />
#### Latest Release
Grafana v4.4.2 is now <a href="https://grafana.com/grafana/download?utm_source=blog&utm_campaign=timeshift_7" target="_blank" class="btn btn-inline btn--primary">Available for download</a>
<br/>To see the full [changelog](https://community.grafana.com/t/release-notes-for-grafana-v4-4-x/1650/2?utm_source=blog&utm_campaign=timeshift_8), head over to our community site.

<hr />
<br />
#### From the Blogosphere
http://www.apascualco.com/influxdb-grafana-linkados-docker/

https://www.bjoerns-techblog.de/2017/08/grafana-und-influxdb/

http://air.imag.fr/index.php/Developing_IoT_Mashups_with_Docker,_MQTT,_Node-RED,_InfluxDB,_Grafana

http://dev.classmethod.jp/cloud/aws/visualizing-cloudwatch-with-grafana/

https://brunch.co.kr/@sunghyunlim/27

http://www.elarraydejota.com/exportando-metricas-de-glances-a-influxdb-y-visualizando-con-grafana/

http://blog.mike-greene.com/adding-weather-to-your-grafana-home-dashboard/?platform=hootsuite

http://blog.mike-greene.com/trending-analyzing-smartthings-devices-part-4/

https://www.jorgedelacruz.es/2017/08/09/en-busca-del-dashboard-perfecto-influxdb-telegraf-y-grafana-parte-ix-monitorizando-zimbra-collaboration/

https://www.brianchristner.io/how-to-monitor-traefik-reverse-proxy-with-prometheus/


- [**Monitoring CouchDB with Prometheus, Grafana and Docker**](https://medium.com/@redgeoff/monitoring-couchdb-with-prometheus-grafana-and-docker-4693bc8408f0): Geoff walks us through all of the steps to get Prometheus, Alertmanager and Grafana installed in Docker to monitor and alert on a CouchDB cluster. These six steps will have you up and running in no time.

- [**Try InfluxDB and Grafana by Docker**](https://blog.laputa.io/try-influxdb-and-grafana-by-docker-6b4d50c6a446): Continuing with our Docker theme, Xiao breaks down all of the pieces, explores the configuration options, and explains the Docker commands to setup a simple monitoring stack by using collectd, InfluxDB and Grafana.

- [**Installation of Collectd, Graphite and Grafana - Part 2**](https://mnt-tech.fr/blog/installation-collectd-graphite-grafana-partie-2/): Last week we covered the [first article](https://mnt-tech.fr/blog/installation-collectd-graphite-grafana-partie-1/) in a series focused on setting up a complete Graphite stack. This week we tackle installing Graphite, its components, and Grafana on the server.

- [**Grafana and Home Automation**](https://carmagnole.ovh/grafana-et-la-domotique.htm): More and more pieces of our homes are becoming "smart", so why not monitor them? This article walks you through collecting data from home automation software [Jeedom](https://www.jeedom.com/site/fr/), sending metrics to InfluxDB, and visualizing and alerting in Grafana - so you can know how your smart-toaster is performing.

- [**Making an Awesome Dashboard for your Crypto Currencies in 3 Steps**](https://blog.haschek.at/2017/making-an-awesome-dashboard-for-your-crypto.html): Christian lays out three steps that will help you keep an eye on your Bitcoin and Ethereum investments. His PHP script fetches things like current price, current balances, earnings, and sends the data to InfluxDB via UDP. He's also created a dashboard that's ready to import so you can get back to mining.

- [**FHEM #6 - Grafana and InfluxDB**](https://www.frombeyond.de/2017/fhem-6-grafana-und-influxdb/): We're seeing more and more articles about using Grafana to monitor home automation. This is the sixth article in a series getting data from [FHEM](https://fhem.de/) into Grafana using InfdluxDB. It also touches on connecting Grafana to MariaDB, taking advantage of Grafana's alpha native MySQL support.

- [**Installation Overview of Node Exporter, Prometheus and Grafana**](https://fritshoogland.wordpress.com/2017/07/31/installation-overview-of-node_exporter-prometheus-and-grafana/): Looking to get started with Prometheus? Frits walks us through installing Node Exporter, Prometheus, and Grafana and importing our first dashboard.

- [**Collect Metrics from Liberty Apps and Display in Grafana**](https://developer.ibm.com/wasdev/docs/collect-metrics-from-liberty-apps-and-display-in-grafana/): This in-depth article covers adding custom metrics to your Liberty application and how to monitor these metrics using collectd, Graphite and Grafana.

- [**Gatling, Graphite, Grafana: Your Application Under High Surveillance!**](https://blog.netapsys.fr/gatling-graphite-grafana-votre-application-sous-haute-surveillance/): David explores [Gatling](http://gatling.io/), for load testing which can write the data to Graphite and over to Grafana for visualization and alerting.

<hr />
<br />
#### Grafana Plugins
With Summer vacations in full swing, additions and updates of Grafana Plugins from the community slowed a bit this week. We have a number of Plugins that are almost ready to announce, but require changes from the authors before they can be published. Instead, we would like to highlight one of the new core Plugins that had some exciting recent updates: <strong>MySQL Data Source</strong>

<div class="blog-plugin">
	<div class="row row--md-gutters blog-plugin-grid">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px; background-color: #161616; padding: 20px 5px" src="/assets/img/blog/timeshift/mysql_logo.png" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong>MySQL Data Source</strong> - This week we added support for creating Template Variables with MySQL. It is available in <a href="https://grafana.com/grafana/download/5.0.0-8626pre1?utm_source=blog&utm_campaign=timeshift_8">nightly builds</a> and will be included in the next major release.
			</p>
			<p>
				When you create a Template Variable it appears as a dropdown at the top of the dashboard and you can then use the variable in queries like this (where `hostname` is the template variable):
			</p>
			<pre>
				sql
				SELECT
				  UNIX_TIMESTAMP(atimestamp) as time_sec,
				  aint as value,
				  avarchar as metric
				FROM my_table
				WHERE $__timeFilter(atimestamp) and hostname in($hostname)
				ORDER BY atimestamp ASC
			</pre>
			<p>
				A new feature included in this change is the ability to create key/value Template Variables. The options in the Variable dropdown can have a text/key and value. This allows you to have a friendly name as the text and an id as the value. For example, <code>hostname(server1, server2)</code> as the text and <code>id(1,2)</code> as the value.
			</p>
			<p>
				Check out the <a href="http://docs.grafana.org/features/datasources/mysql/#templating?utm_source=blog&utm_campaign=timeshift_8" target="_blank">documentation</a> for more details.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/grafana/download/5.0.0-8626pre1?utm_source=blog&utm_campaign=timeshift_8" target="_blank"><strong>Download Nightly Builds</strong></a>
			</p>
		</div>
	</div>
</div>

<div class="blog-plugin">
	<div class="row row--md-gutters blog-plugin-grid">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img src="https://grafana.com/api/plugins/elasticsearch/versions/3.0.0/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong>Elasticsearch Data Source</strong> - There was also a new Elasticsearch feature added to Master/Nightly builds this week:
				<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Elasticsearch feature added to Master/Nightly build: Ad-Hoc filters can now be added directly from the table panel <a href="https://t.co/NzHvnHp3Df">https://t.co/NzHvnHp3Df</a> <a href="https://t.co/QAIoBRgZQG">pic.twitter.com/QAIoBRgZQG</a></p>&mdash; Grafana (@grafana) <a href="https://twitter.com/grafana/status/895000347630084096">August 8, 2017</a></blockquote>
				<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
			</p>
			<p>
				Check out the <a href="https://github.com/grafana/grafana/issues/8052" target="_blank">feature request</a> for more details.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/grafana/download/5.0.0-8626pre1?utm_source=blog&utm_campaign=timeshift_8" target="_blank"><strong>Download Nightly Builds</strong></a>
			</p>
		</div>
	</div>
</div>

<hr />
<br />

<h4>This week's MVC (Most Valuable Contributor)</h4>
It's only fitting that this week's MVC is a contributor who helped with updating the MySQL Data Source.

<div class="blog-plugin">
	<div class="row row--md-gutters blog-plugin-grid">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img class="mvc" src="https://avatars2.githubusercontent.com/u/99365?v=4&s=460" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<strong><a href="https://github.com/reyjrar" target="_blank">reyjrar</a> (Brad Lhotsky)</strong><br/>
				reyjrar submitted a PR for macros in the MySQL data source that enables queries where the timestamp is stored as UNIX epoch. Thank you for taking the time to try out an alpha feature and contributing back to Grafana!
			</p>
		</div>
	</div>
</div>

<hr />
<br />
#### Tweet of the Week
We scour Twitter each week to find an interesting/beautiful dashboard and show it off! <a href="https://twitter.com/hashtag/monitoringlove?src=hash" target="_blank">#monitoringLove</a>
<p>Glad you fixed the memory leak <a href="https://twitter.com/tlhunter">@tlhunter</a>, but wow - that's one hypnotic graph :)

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Memory leak thwarted! <a href="https://twitter.com/hashtag/nodejs?src=hash">#nodejs</a>, StatsD, <a href="https://twitter.com/grafana">@grafana</a> <a href="https://t.co/YJPheFGRsP">pic.twitter.com/YJPheFGRsP</a></p>&mdash; Thomas Hunter II (@tlhunter) <a href="https://twitter.com/tlhunter/status/894604983328321536">August 7, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
<hr />
<br />


<hr />
<br />
#### What do you think?
That wraps up another issue. Hope you're finding these roundups valuable. Let us know how we're doing! Submit a comment on this article below, or post something at our [community forum](http://community.grafana.com?utm_source=blog&utm_campaign=timeshift_8). Help us make this better!

Follow us on [Twitter](http://twitter.com/grafana), like us on [Facebook](http://facebook.com/grafana), and join the [Grafana Labs community](http://grafana.com/signup?utm_source=blog&utm_campaign=timeshift_7).



