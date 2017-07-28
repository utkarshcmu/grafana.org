+++
title = "timeShift(GrafanaBuzz, 1w) Issue 6"
author = "trent"
date = "2017-07-28"
keywords = ["Grafana", "Blog", "Roundup", "timeShift"]
cover_image = "/assets/img/blog/timeshift/timeshift_5.jpg"
cover_opacity = "0.6"
cover_blur = "1px"
description = "A roundup of articles and links form Grafana and the community from the past week"
categories = ["timeShift", "Grafana Buzz"]
+++

We cover a lot of ground in this week's timeShift. From diving into building your own plugin, finding the right dashboard, configuration options in the alerting feature, to monitoring your local weather, there's something for everyone. Are you writing an article about Grafana, or have you come across an article you found interesting? Please [get in touch](mailto:hello@grafana.com), we'll add it to our roundup.
<br />
<hr />
<br />
#### From the Blogosphere
- [**Going open-source in monitoring, part III: 10 most useful Grafana dashboards to monitor Kubernetes and services**](https://medium.com/@SergeyNuzhdin/going-open-source-in-monitoring-part-iii-10-most-useful-grafana-dashboards-to-monitor-kubernetes-7d22ac4645db): We have hundreds of pre-made [dashboards](https://grafana.com/dashboards?utm_source=blog&utm_campaign=timeshift_5) ready for you to install into your on-prem or hosted Grafana, but not every one will fit your specific monitoring needs. In part three of the series, Sergey discusses is experiences with finding useful dashboards and shows off ten of the best dashboards you can install for monitoring Kubernetes clusters and the services deployed on them.

- [**Using AWS Lambda and API gateway for server-less Grafana adapters**](https://www.linkedin.com/pulse/using-aws-lambda-api-gateway-server-less-grafana-adapters-jonas-birm%C3%A9): Sometimes you'll want to visualize metrics from a data source that may not yet be supported in Grafana natively. With the plugin functionality introduced in Grafana 3.0, anyone can create their own data sources. Using the [SimpleJson](https://grafana.com/plugins/grafana-simple-json-datasource?utm_source=blog&utm_campaign=timeshift_5) data source, Jonas describes how he used AWS Lambda and AWS API gateway to write data source adapters for Grafana.

- [**How to Use Grafana to Monitor JMeter Non-GUI Results - Part 2**](https://www.blazemeter.com/blog/how-to-use-grafana-to-monitor-jmeter-non-gui-results-part-2): A few issues ago we listed an article for using Grafana to monitor JMeter Non-GUI results, which required a number of non-trivial steps to complete. This article shows of an easier way to accomplish this that doesn't require any additional configuration of InfluxDB.

- [**Programming your Personal Weather Chart**](http://robstechlog.com/2017/06/30/personal-weather-chart-module/): It's always great to see Grafana used outside of the typical dev-ops usecase. This article runs you through the steps to create your own weather chart and show off your local weather stats in Grafana. **BONUS:** Rob shows off a [magic mirror](http://robstechlog.com/2017/06/25/building-a-big-magicmirror-with-metal-frame-the-summary/) he created, which can display this data.

- [**vSphere Performance data – Part 6 – The Dashboard(s)**](http://www.rudimartinsen.com/2017/07/21/vsphere-performance-data-part-6-the-dashboards/): This 6-part series goes into a ton of detail and walks you through the various methods of retrieving vSphere performance data, storing the data in a TSDB, and creating dashboards for the metrics. Part 6 deals specifically with Grafana, but I highly recommend reading all of the articles, as it chronicles the journey of metrics exploration, storage, and visualization from someone who had no prior experience with time series data.

- [**Alerting in Grafana**](https://blog.netapsys.fr/lalerting-dans-grafana/): Alerting in Grafana is a fairly new feature and one that we're continuing to iterate on. We're soon adding additional data source support, new notification channels, clustering, silencing rules, and more. This article steps you through all the configuration options to get you to your first alert.

<hr />
<br />
#### Plugins and Dashboards
This week we have udpates to three of our very popular data source pluigns and a brand new panel to show off. Annunciator is similar to the Singlestat panel, but adds some new bells and whistles. All of these plugins are a breeze to update and install via the grafana-cli for an on-prem Grafana instance, or a 1-click install on <a href="https://grafana.com/cloud/grafana?utm_source=blog&utm_campaign=timeshift_6" target="_blank">Hosted Grafana</a>.


<div class="blog-plugin">
	<div class="row row--md-gutters blog-plugin-grid">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img src="https://grafana.com/api/plugins/michaeldmoore-annunciator-panel/versions/1.0.0/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="new-plugin-tag"><strong>NEW PLUGIN</strong></div><br/>
				<a href="https://grafana.com/plugins/michaeldmoore-annunciator-panel?utm_source=blog&utm_campaign=timeshift_6" target="_blank"><strong>Annunciator Panel</strong></a> - Like Singlestat, the Annunciator Panel allows you to show the one main summary stat of a SINGLE series. It reduces the series into a single number (by looking at the max, min, average, or sum of values in the series). Annunciator also displays upper and lower alarm thresholds, colored to according to the value of the stat relative to the threshold. This panel is designed to support simple timeseries data sets - unlike SingleStat, Annunciator does not support table-based data sets.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/michaeldmoore-annunciator-panel?utm_source=blog&utm_campaign=timeshift_6" target="_blank"><strong>Install Now 1.0.0</strong></a>
			</p>
		</div>
	</div>
</div>

<div class="blog-plugin">
	<div class="row row--md-gutters blog-plugin-grid">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img src="https://grafana.com/api/plugins/hawkular-datasource/versions/1.0.10/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<a href="https://grafana.com/plugins/hawkular-datasource?utm_source=blog&utm_campaign=timeshift_6" target="_blank"><strong>Hawkular</strong></a> -  
				Huge updates to the Hawkular data source plugin - a new tag query language and stats queries that can return aggregated data like percentiles. Read all about it in the <a href="http://www.hawkular.org/blog/2017/07/grafana-new-query-interface.html" target="_blank"> release blog post</a>.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/hawkular-datasource?utm_source=blog&utm_campaign=timeshift_6" target="_blank"><strong>Install 1.0.10 Now</strong></a>
			</p>
		</div>
	</div>
</div>

<div class="blog-plugin">
	<div class="row row--md-gutters blog-plugin-grid">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 0;" src="https://grafana.com/api/plugins/grafana-simple-json-datasource/versions/1.3.4/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<a href="https://grafana.com/plugins/grafana-simple-json-datasource?utm_source=blog&utm_campaign=timeshift_6" target="_blank"><strong>SimpleJson</strong></a> -  
				A couple of updates and fixes this week.
			</p>
			<ul>
				<li>
					Adds support for With Credentials (sends grafana cookies with request) when using Direct mode.
				</li>
				<li>
					Fix for the typeahead component for the metrics dropdown (/search endpoint).
				</li>
			</ul>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/grafana-simple-json-datasource?utm_source=blog&utm_campaign=timeshift_6" target="_blank"><strong>Install 1.3.4 Now</strong></a>
			</p>
		</div>
	</div>
</div>

<div class="blog-plugin">
	<div class="row row--md-gutters blog-plugin-grid">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img src="https://grafana.com/api/plugins/alexanderzobnin-zabbix-app/versions/3.5.1/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<a href="https://grafana.com/plugins/alexanderzobnin-zabbix-app?utm_source=blog&utm_campaign=timeshift_6" target="_blank"><strong>Zabbix</strong></a> -  
				The updates just keep coming to this popular plugin. Recent updates include:
			</p>
			<ul>
				<li>
					<a href="http://docs.grafana-zabbix.org/reference/direct-db-connection/">Direct database connection support.</a>
				</li>
				<li>
					Since version 4.3 Grafana can use MySQL as a native data source. The Grafana-Zabbix plugin can now use this data source for querying data directly from a Zabbix database.
                </li>
                <li>
                	New moving average function
                </li>
                <li>
                	New consolidateBy function, which allows specifying the aggregation function for time series data.
				</li>
			</ul>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/alexanderzobnin-zabbix-app?utm_source=blog&utm_campaign=timeshift_5" target="_blank"><strong>Install 3.6.1 Now</strong></a>
			</p>
		</div>
	</div>
</div>

<hr />
<br />

<h4>This week's MVC (Most Valuable Contributor)</h4>
While we normally select a different contributor each week, we wanted to re-recognize the awesome work of a previous recipient.

<div class="blog-plugin">
	<div class="row row--md-gutters blog-plugin-grid">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img class="mvc" src="https://avatars1.githubusercontent.com/u/224552?v=4&s=460" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<strong><a href="https://github.com/mtanda">mtanda</a> (Mitsuhiro Tanda)</strong><br/>
				During the last two weeks, mtanda had five merged pull requests and <a href="https://github.com/grafana/grafana/pulls/mtanda" target="_blank">9 open pull requests</a>. 
				He is almost single-handedly maintaining the Cloudwatch data source as well as contributing lots of improvements to other parts of Grafana. Thank you once again!
			</p>
		</div>
	</div>
</div>

<hr />
<br />
#### Tweet of the Week
We scour Twitter each week to find an interesting/beautiful dashboard and show it off! #monitoringLove
<p>Thanks for showing off your Battlefield dashboard <a href="https://twitter.com/matthewv">@matthewv</a> - Love it when people find new and unique ways to use Grafana.</p>
<p>Also, nice stats - my Kills/Deaths ratio is exactly opposite! :p</p>

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Nerding out tonight. Wrote a script to get my <a href="https://twitter.com/Battlefield">@Battlefield</a> stats into <a href="https://twitter.com/InfluxDB">@InfluxDB</a> so I could graph in <a href="https://twitter.com/grafana">@grafana</a>. <a href="https://twitter.com/hashtag/wip?src=hash">#wip</a> <a href="https://twitter.com/hashtag/bf1?src=hash">#bf1</a> <a href="https://twitter.com/hashtag/statsonstats?src=hash">#statsonstats</a> <a href="https://t.co/f193Z3eDvT">pic.twitter.com/f193Z3eDvT</a></p>&mdash; matthewv (@matthewv) <a href="https://twitter.com/matthewv/status/890718512855080960">July 27, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
<hr />
<br />

<hr />
<br />
#### Tell us how we're Doing.
We want you to get the most our of these weekly roundups ,so please don't be shy about providing feedback. Submit a comment on this article below, or post something at our [community forum](http://community.grafana.com?utm_source=blog&utm_campaign=timeshift_5). Help us make this better.

Follow us on [Twitter](http://twitter.com/grafana), like us on [Facebook](http://facebook.com/grafana), and join the [Grafana Labs community](http://grafana.com/signup?utm_source=blog&utm_campaign=timeshift_5).



