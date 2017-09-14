+++
title = "timeShift(GrafanaBuzz, 1w) Issue 13"
author = "trent"
date = "2017-09-15"
keywords = ["Grafana", "Blog", "Roundup", "timeShift"]
cover_opacity = "0.9"
cover_blur = "1px"
description = "A weekly roundup of articles and links from Grafana and the surrounding community"
categories = ["timeShift", "Grafana Buzz"]
+++

It's been a busy week here at Grafana Labs - We've also made a lot of enhancements and new features in this release, so be sure and check out the <a href="https://grafana.com/blog/2017/09/13/grafana-4.5-released/?utm_source=blog&utm_campaign=timeshift_13" target="_blank">release blog post</a> to see the full changelog. The GrafanaCon EU CFP is officially open so please don't forget to  <a href="http://grafana.com/grafanacon-cfp?utm_source=blog&utm_campaign=timeshift_13" target="_blank">submit your topic</a>. We're looking for technical and non-technical talks of all sizes.

<br />
<hr />
#### Latest Release
**Grafana v4.5 is** <strong><a href="https://grafana.com/grafana/download/4.5.0-beta1?utm_source=blog&utm_campaign=timeshift_13" target="_blank">available for download</a>.</strong> The new Grafana 4.5 release includes major improvements to the query editors for Prometheus, Elasticsearch and MySQL.
To see the full [changelog](https://grafana.com/blog/2017/09/13/grafana-4.5-released/?utm_source=blog&utm_campaign=timeshift_13), head over to our community site.

<a href="https://grafana.com/grafana/download?utm_source=blog&utm_campaign=timeshift_13" target="_blank" class="btn btn--primary">Download Grafana 4.5 Beta Now</a>

<hr />
<br />


#### From the Blogosphere
[**Percona Live Europe Featured Talks: Visualize Your Data with Grafana Featuring Daniel Lee**](https://www.percona.com/blog/2017/09/13/percona-live-europe-featured-talks-visualize-data-grafana-daniel-lee/): The folks from Percona sat down with Grafana Labs Software Developer Daniel Lee to discuss his upcoming talk at <a href="https://www.percona.com/live/e17/sessions/visualize-your-data-with-grafana" target="_blank">PerconaLive Europe 2017, Dublin</a> and how data can drive better decision making for your business. Get your tickets now, and use code: <strong>SeeMeSpeakPLE17</strong> for 10% off!<br  />
<a class="btn btn--outline" href="https://www.percona.com/live/e17/registration-information" target="_blank">RegisterNow</a><br /><br />

[**Performance monitoring with ELK / Grafana**](https://blog.netapsys.fr/performance-monitoring-de-base-avec-elk-grafana/): This article walks you through setting up the ELK stack to monitor webpage load time, but switches out Kibana for Grafana so you can visualize data from other sources right next to this performance data.

[**ESXI Lab Series**](https://www.youtube.com/watch?v=sua5WryY9a8): Aaron created a video mini-series about implementing both offensive and defensive security in an ESXi Lab environment. Parts <a href="https://www.youtube.com/watch?v=sua5WryY9a8" target="_blank">four</a> and <a href="https://www.youtube.com/watch?v=0dqeWnHF-pQ&t=3s" target="_blank">five</a> focus on monitoring with Grafana.

[**Raspberry Pi Monitoring with Grafana**](https://developer-blog.net/raspberry-pi-monitoring-mit-grafana-2/): We've been excited to see more and more articles about Grafana from Raspberry Pi users. This article helps you install and congifure Grafana, and also touches on what monitoring is and why it's important.




<hr />
<br />

#### Grafana Plugins
We're always excited to announce updates to our existing plugins, and this week we have a bunch! Updating plugins is easy. If you have an on-prem Grafana, the <a href="http://docs.grafana.org/administration/cli/#grafana-cli?utm_source=blog&utm_campaign=timeshift_12" target="_blank">Grafana-cli</a> will take care of the upgrade. For <a href="https://grafana.com/cloud/grafana?utm_source=blog&utm_campaign=timeshift_12" target="_blank">Hosted Grafana</a>, use the one-click upgrade button.

<div class="blog-plugin">
	<div class="row row--md-gutters blog-plugin-grid">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 0;" src="https://grafana.com/api/plugins/vonage-status-panel/versions/1.0.5/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong><a href="https://grafana.com/plugins/vonage-status-panel?utm_source=blog&utm_campaign=timeshift_12" target="_blank">Status Panel</a></strong> - The Status Panel got a lot of updates in the latest version. Here are just some of them:
				<ul>
				<li>Added an option to use the default Grafana background rather than the green OK state color.</li>
				<li>Regex filtering bug fix</li>
				<li>Units of Measure, Decimals and Date formatting</li>
				<li>Ability to select preferred ok/warn/crit/disable colors and an option to apply coloring to either Background, Text or not at all.</li>
				</ul>
				<br />
				When upgrading there might be some changes in the data the plugin uses and saves, so some of the configurations you make might be removed by accident. To prevent this loss of configuration you should save the panel JSON of all panels you have (by exporting the panel or dashboards) and keep them somewhere safe until you made sure everything is working after the upgrade.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/vonage-status-panel?utm_source=blog&utm_campaign=timeshift_12" target="_blank"><strong>Install Now</strong></a>
			</p>
		</div>
	</div>
</div>

<hr />
<br />

<h4>This week's MVC (Most Valuable Contributor)</h4>
Each week we like to thank a member of the community who has recently contributed to the Grafana project.

<div class="blog-plugin">
	<div class="row row--md-gutters blog-plugin-grid">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img class="mvc" src="https://avatars1.githubusercontent.com/u/224552?v=4&s=460" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<strong><a href="https://github.com/mtanda" target="_blank">Mitsuhiro Tanda</a></strong><br/>
				This week we have to thank mtanda once again. During the last week, we have merged 4 Pull Requests from mtanda - <a href="https://github.com/grafana/grafana/pull/9167" target="_blank">#9167</a>, <a href="https://github.com/grafana/grafana/pull/9182" target="_blank">#9182</a>, <a href="https://github.com/grafana/grafana/pull/9201" target="_blank">#9201</a> and <a href="https://github.com/grafana/grafana/pull/9202" target="_blank">#9202</a>. Amazing work!

			</p>
		</div>
	</div>
</div>

<hr />
<div>
	<div class="row row--no-gutters blog-plugin-grid">
		<div class="col col--sm-12">
			<a href="http://grafana.com/grafanacon-cfp?utm_source=blog&utm_campaign=timeshift_13" target="_blank"><img src="/assets/img/blog/timeshift/grafanacon_eu_cfp.jpg" /></a>
		</div>
	</div>
</div>

<hr />
<br />

#### Tweet of the Week
We scour Twitter each week to find an interesting/beautiful dashboard and show it off! <a href="https://twitter.com/hashtag/monitoringlove?src=hash" target="_blank">#monitoringLove</a>
<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Done! :D ....well just a prototye for fun but I promise to build at least v1.0 <a href="https://twitter.com/hashtag/dataviz?src=hash">#dataviz</a> <a href="https://twitter.com/hashtag/DataVisualizations?src=hash">#DataVisualizations</a> <a href="https://twitter.com/hashtag/monitoring?src=hash">#monitoring</a> <a href="https://t.co/o2W0bppBxF">pic.twitter.com/o2W0bppBxF</a></p>&mdash; GBrian (@CBGBrian) <a href="https://twitter.com/CBGBrian/status/908187134523318272">September 14, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
<p>Awesome - really looking forward to seeing updates as you get to 1.0!</p>
<hr />
<br />
<div style=" padding: 20px; background: url(/assets/img/blog/timeshift/polygon_texture_black.jpg); background-size: cover; border-radius: 4px;">
	<h4>Grafana Labs is Hiring!</h4>
	<p>We are passionate about open source software and thrive on tackling complex challenges to build the future. We ship code from every corner of the globe and love working with the community. If any of this sounds like you you're in luck – <strong>WE'RE HIRING!</strong></p>
	<p>Check out our <a class="btn btn-outline" href="https://grafana.com/about/hiring?utm_source=blog&utm_campaign=timeshift_12" target="_blank">Open Positions</a></p>
</div>

<hr />
<br />
#### What do you think?
We're always interested in how we can improve our weekly roundups. Submit a comment on this article below, or post something at our [community forum](http://community.grafana.com?utm_source=blog&utm_campaign=timeshift_12). Help us make these roundups better and better!

Follow us on [Twitter](http://twitter.com/grafana), like us on [Facebook](http://facebook.com/grafana), and join the [Grafana Labs community](http://grafana.com/signup?utm_source=blog&utm_campaign=timeshift_12).



