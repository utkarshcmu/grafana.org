+++
title = "timeShift(GrafanaBuzz, 1w) Issue 76"
author = "trent"
date = "2019-01-18"
keywords = ["Grafana", "Blog", "Roundup", "timeShift", "Azure Log Analytics", "GrafanaCon"]
cover_image = "/assets/img/blog/timeshift/timeshift_14.jpg"
cover_opacity = "0.4"
cover_blur = "1px"
description = "A weekly roundup of articles and links from Grafana and the surrounding community"
categories = ["timeShift", "Grafana Buzz"]
excerpt = "Additions to the GrafanaCon LA speakers list, plugin updates and new plugins, monitoring Azure Log Analytics and more."
+++

### Welcome to TimeShift
We've been busy updating the [GrafanaCon LA website](http://grafanacon.org), with additional speakers and are adding more every day, so please stay tuned. Don't miss your chance to [get your ticket](https://ti.to/grafanacon/grafanacon-la-2019). We also have tons of plugin updates to share this week and 2 brand new plugins to check out.

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
		<a href="https://grafana.com/grafana/download?utm_source=blog&utm_campaign=timeshift_76" target="_blank" class="btn btn--primary">Download Grafana v5.4.2 Now</a>
	</div>
</div>

<br />
<hr />

#### From the Blogosphere
[**Western Digital HDD Simulation at Cloud Scale – 2.5 Million HPC Tasks, 40K EC2 Spot Instances**](https://aws.amazon.com/blogs/aws/western-digital-hdd-simulation-at-cloud-scale-2-5-million-hpc-tasks-40k-ec2-spot-instances/): Lots of Grafana graphs and dashboards in this article on how Western Digital built a cloud-scale HPC cluster on AWS and used it to simulate crucial elements of upcoming head designs for their next-generation HDDs. 

[**Connect Grafana to Azure Log Analytics**](https://www.ciraltos.com/connect-grafana-to-azure-log-analytics/): This is the first post in an upcoming series on connecting Grafana to Azure Log Analytics using the [Azure Monitor data source plugin](https://grafana.com/plugins/grafana-azure-monitor-datasource). The next post will cover creating the dashboard in Grafana and querying the data.

[**Monitoring Java Applications with Prometheus and Grafana - Part 1**](http://blog.klocwork.com/open-source/monitoring-java-applications-prometheus-grafana-part-1/): A step by step guide to monitoring Java applications with Prometheus and Grafana. Part 1 covers collecting and storing the metrics in Prometheus, and part 2 will dive into configuring Grafana and building your first dashboard.

[**Outages in the Cloud. Whom to blame and how to prove it?**](https://www.claudiokuenzler.com/blog/822/outages-in-the-cloud-whom-to-blame-and-prove-it-using-mtr-influxdb-grafana#.XDkeaM9KgWo): Claudio describes how he used data visualization to help settle the blame game when he was experiencing periodic outages in his hybrid infrastructure.


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

#### Grafana Plugin Update
This week we have 2 brand new plugins to share and a load of updates! To update or install any plugin on your on-prem Grafana, use the <a href="http://docs.grafana.org/administration/cli/#grafana-cli?utm_source=blog&utm_campaign=timeshift_72" target="_blank">grafana-cli tool</a>, or for <a href="https://grafana.com/cloud/grafana?utm_source=blog&utm_campaign=timeshift_72" target="_blank">Hosted Grafana</a> update with one-click.
<br />
<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/grafana-sensu-app/versions/1.0.3/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="new-plugin-tag"><strong>NEW PLUGIN</strong></div><br/>
				<strong>Sensu App</strong> - This new app plugin provides a datasource and summary dashboard for SensuCore. An upcoming release will include custom panels and compatibility with SensuGo.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/grafana-sensu-app?utm_source=blog&utm_campaign=timeshift_76" target="_blank"><strong>Install</strong></a>
			</p>
		</div>
	</div>
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/scadavis-synoptic-panel/versions/1.0.2/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="new-plugin-tag"><strong>NEW PLUGIN</strong></div><br/>
				<strong>SCADAvis Synoptic Panel</strong> - This new panel plugin allows adding SCADA-like graphics in Grafana that can be combined with metrics. First, create a SVG image using the SCADAvis.io editor. Then, this image can have tags that are then matched with a metric query alias in Grafana.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/scadavis-synoptic-panel?utm_source=blog&utm_campaign=timeshift_76" target="_blank"><strong>Install</strong></a>
			</p>
		</div>
	</div>
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/flant-statusmap-panel/versions/0.0.4/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong>Statusmap Panel</strong> - The Statusmap panel got a small update with a fix for the display of multi-value buckets when there is an empty cell.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/flant-statusmap-panel?utm_source=blog&utm_campaign=timeshift_76" target="_blank"><strong>Install</strong></a>
			</p>
		</div>
	</div>
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/simpod-json-datasource/versions/0.1.1/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong>JSON datasource</strong> - The JSON datasource plugin is a fork of the SimpleJSON datasource plugin which adds some more advanced features. The plugin has just been updated with a small bug fix.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/simpod-json-datasource?utm_source=blog&utm_campaign=timeshift_76" target="_blank"><strong>Install</strong></a>
			</p>
		</div>
	</div>
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/zuburqan-parity-report-panel/versions/1.2.0/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong>Parity Report Panel</strong> - The latest version of this panel adds an option that makes the alias key configurable. This makes it compatible with more types of datasources.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/zuburqan-parity-report-panel?utm_source=blog&utm_campaign=timeshift_76" target="_blank"><strong>Install</strong></a>
			</p>
		</div>
	</div>
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/marcuscalidus-svg-panel/versions/0.3.0/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong>SVG Panel</strong> - The SVG Panel is a tool for creating or importing SVG's into Grafana and connecting them with timeseries data using JavaScript. The latest release includes the following changes:
				<ul>
					<li>Implemented support for data in docs type. (e.g. Elasticsearch Raw Document)</li>
					<li>The data passed to the panel is now stored in the <code>ctrl.data</code> property. The alias property <code>ctrl.series</code> is deprecated.</li>
				</ul>
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/marcuscalidus-svg-panel?utm_source=blog&utm_campaign=timeshift_76" target="_blank"><strong>Install</strong></a>
			</p>
		</div>
	</div>
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/btplc-peak-report-panel/versions/0.2.4/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong>Peak Report Panel</strong> - A new release of the Peak Report Panel includes a fix for a scrolling bug that occurs in the latest versions of Grafana.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/btplc-peak-report-panel?utm_source=blog&utm_campaign=timeshift_76" target="_blank"><strong>Install</strong></a>
			</p>
		</div>
	</div>
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/udoprog-heroic-datasource/versions/0.1.0/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong>Thruk Datasource</strong> - Thruk is a web interface for Nagios, Icinga, Shinken and Naemon. A new formatting option for datetime columns in the table panel was included in the latest release of the Thruk datasource plugin. 
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/sni-thruk-datasource?utm_source=blog&utm_campaign=timeshift_76" target="_blank"><strong>Install</strong></a>
			</p>
		</div>
	</div>
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/larona-epict-panel/versions/1.0.1/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong>ePict Panel</strong> - The ePict panel let you select an image and display live metrics over it. In the latest release, the decimal separator is now correctly localized.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/larona-epict-panel?utm_source=blog&utm_campaign=timeshift_76" target="_blank"><strong>Install</strong></a>
			</p>
		</div>
	</div>
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/natel-discrete-panel/versions/0.0.3/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong>Discrete Panel</strong> - The Discrete Panel shows discrete values in a horizontal graph and is especially useful for visualizing state transitions for string or boolean data. The latest release was a large release with a lot of technical updates. It also included some other fixes and features:
				<ul>
					<li>Configurable duration resolution option</li>
					<li>Bug fix - don't hide series names on hover</li>
				</ul>
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/natel-discrete-panel?utm_source=blog&utm_campaign=timeshift_76" target="_blank"><strong>Install</strong></a>
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
	<p>We're kicking off our 2019 hiring with some new opportunities to join the team! If you work in Technical Customer Support or want to check out all of our open positions, check our careers section.</p>
	<a class="btn btn-outline" href="https://grafana.com/about/hiring?utm_source=blog&utm_campaign=timeshift_76" target="_blank">View All our Open Positions</a>
	</div>
	<div class="col col--sm-8">
		<a href="https://grafana.com/about/hiring?utm_source=blog&utm_campaign=timeshift_76" target="_blank">
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
			<blockquote class="twitter-tweet" data-lang="en"><p lang="ru" dir="ltr">Мониторинг - это красиво!<a href="https://twitter.com/hashtag/grafana?src=hash&amp;ref_src=twsrc%5Etfw">#grafana</a> <a href="https://t.co/qEbL6QEDDV">pic.twitter.com/qEbL6QEDDV</a></p>&mdash; Ненависть к картошке (@batterywithin) <a href="https://twitter.com/batterywithin/status/1083306927310938112?ref_src=twsrc%5Etfw">January 10, 2019</a></blockquote>
			<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
			<p>For some reason I want to go play Excitebike.</p>
		</div>
	</div>
</div>

<hr />
<br />

#### How are we doing?
What would you like to see here in 2019? Email or send us a tweet, or post something at our [community forum](http://community.grafana.com?utm_source=blog&utm_campaign=timeshift_76).

Follow us on [Twitter](http://twitter.com/grafana), like us on [Facebook](http://facebook.com/grafana), and join the [Grafana Labs community](http://grafana.com/signup?utm_source=blog&utm_campaign=timeshift_76).
