+++
title = "timeShift(GrafanaBuzz, 1w) Issue 12"
author = "trent"
date = "2017-09-08"
keywords = ["Grafana", "Blog", "Roundup", "timeShift"]
cover_image = "/assets/img/blog/timeshift/timeshift_11.jpg"
cover_opacity = "0.9"
cover_blur = "1px"
description = "A weekly roundup of articles and links from Grafana and the surrounding community"
categories = ["timeShift", "Grafana Buzz"]
+++

September is here and summer is officially drawing to a close, but the Grafana team has stayed busy. We're prepping for an upcoming Grafana 4.5 release, had some new and updated plugins, and would like to thank two contributors for fixing a non-obvious bug. Also - The <a href="http://grafana.com/grafanacon-cfp?utm_source=blog&utm_campaign=timeshift_11" target="_blank">CFP for GrafanaCon EU</a> is open, and we'd like you to speak!
<br />
<hr />
#### Latest Release
**Grafana v4.5** is <a href="https://grafana.com/grafana/download?utm_source=blog&utm_campaign=timeshift_12" target="_blank">available for download</a>.
We have some exciting new featuers to share with you in this release, including:

- New Prometheus Query Editor with syntax highlighting, autocomplete, and integrated function docs directly in the editor.
- Add Ad-hoc Filters directly from the Table Panel (Elasticsearch only)
- Table cells can now be links to generate a URL to another dashboard or system.
- View raw metric requests and responses from within the Grafana UI through our new Integrated Query Inspector.
- New MySQL query editor with syntax highlighting and support for more data types!
- Graphite v1.0 functions to the Graphite query editor

To see the full [changelog](https://community.grafana.com/t/release-notes-for-grafana-v4-5-0/2573/?utm_source=blog&utm_campaign=timeshift_8), head over to our community site.

<a href="https://grafana.com/grafana/download?utm_source=blog&utm_campaign=timeshift_12" target="_blank" class="btn btn--primary">Download Grafana 4.5 Now</a>

<hr />
<br />


#### From the Blogosphere
[**Monitoring Using Prometheus**](https://rahulwa.com/post/monitoring-using-prometheus/): Rahul walks us through all of the necessary pieces to stand up a Prometheus monitoring stack and provides links to a few <a href="https://grafana.com/dashboards/22?utm_source=blog&utm_campaign=timeshift_12" target="_blank">pre-made</a> Grafana <a href="https://grafana.com/dashboards/405?utm_source=blog&utm_campaign=timeshift_12" target="_blank">dashboards</a> so you can start visualizing those metrics quickly and easily.

[**The Web Performance Team at the Wikimedia Foundation!**](https://www.peterhedenskog.com/blog/2017/05/join-the-web-performance-team-at-wikimedia/): We're fascinated by the number of <a href="https://grafana.wikimedia.org/?orgId=1" target="_blank">dashboards</a> Wikimedia shares publicly. They were recently searching for someone to join their web performance team, and provided a ton of insight into what they collect and why it's important. A really interetsting read.

[**PromCon 2017: Grafana and Prometheus - Carl Bergquist**](https://www.youtube.com/watch?v=PDpP1uX_orE): A few issues ago we linked Grafana Labs developer, Carl Bergquist's PromCon 2017 <a href="https://docs.google.com/presentation/d/1NTYA6J7qZNhJlFEzaBOB-jVzVAGS8C5etJflAjXvVec/edit#slide=id.p" target="_blank">slide deck</a>. Now that all the videos are online, you can watch <a href="https://www.youtube.com/watch?v=PDpP1uX_orE" target="_blank">his presentation</a>, and check out the rest of the videos <a href="https://www.youtube.com/watch?v=4Pr-z8-r1eo&list=PLoz-W_CUquUlnvoEBbqChb7A0ZEZsWSXt" target="_blank">here</a>.

[**Building a LoRaWAN Enabled Bat Detector**](https://www.rs-online.com/designspark/building-a-lorawan-enabled-bat-detector): We've seen Batman <a href="https://twitter.com/vpetersson/status/898472680042754048/photo/1?ref_src=twsrc%5Etfw&ref_url=http%3A%2F%2Flocalhost%3A3002%2F2017%2F08%2F18%2Ftimeshiftgrafanabuzz-1w-issue-9%2F" target="_blank">pop up</a> a <a href="https://twitter.com/cubeeek/status/900035936553250816/photo/1?ref_src=twsrc%5Etfw&ref_url=http%3A%2F%2Flocalhost%3A3002%2F2017%2F08%2F25%2Ftimeshiftgrafanabuzz-1w-issue-10%2F" target="_blank">a few times</a> in graphs recently, but this article is about tracking a different kind of bat – using a custom-built solar powered bat detector and Grafana.


<hr />
<br />

#### Grafana Plugins
Plugins extend your Grafana, allowing you to connect to new data sources, add additional graph panels and install applications directly into Grafana. We currently offer 85 plugins to our growing list.  If you're using Grafana on-prem, the <a href="http://docs.grafana.org/administration/cli/#grafana-cli?utm_source=blog&utm_campaign=timeshift_12" target="_blank">Grafana-cli</a> will take care of installation. For <a href="https://grafana.com/cloud/grafana?utm_source=blog&utm_campaign=timeshift_12" target="_blank">Hosted Grafana</a>, simply use the one-click install.



<div class="blog-plugin">
	<div class="row row--md-gutters blog-plugin-grid">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 0;" src="https://grafana.com/api/plugins/sidewinder-datasource/versions/0.0.1/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="new-plugin-tag"><strong>NEW PLUGIN</strong></div><br/>
				<strong>Sidewinder Data Source</strong> - This is a data source plugin for the new <a href="https://grafana.com/plugins/sidewinder-datasource?utm_source=blog&utm_campaign=timeshift_11" target="_blank">Sidewinder</a> database. Sidewinder is an open source, fast time series database designed for real-time analytics. It can be used for a variety of use cases that need storage of metrics data like APM and IoT.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/sidewinder-datasource?utm_source=blog&utm_campaign=timeshift_11" target="_blank"><strong>Install Now</strong></a>
			</p>
		</div>
	</div>
</div>


<hr />
<br />

<h4>This week's MVC (Most Valuable Contributor)</h4>
This week we want to thank two contributors who worked together to fix a [non-obvious bug](https://github.com/grafana/grafana/issues/8604) in the new MySQL data source (a bug with sorting values in the legend). 

<div class="blog-plugin">
	<div class="row row--md-gutters blog-plugin-grid">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img class="mvc" src="https://avatars1.githubusercontent.com/u/363662?v=4&s=460" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<strong><a href="https://github.com/ericslaw" target="_blank">ericslaw</a></strong><br/>
				ericslaw submitted his first PR to a public project this past week. Speaking from personal experience, submitting a PR can feel daunting and and we were lucky that he chose Grafana. Even the smallest contributions, like Eric fixing a bogus link within our templating has big impact.
			</p>
		</div>
	</div>
</div>

<hr />

<div>
	<div class="row row--md-gutters blog-plugin-grid">
		<div class="col col--sm-4 blog-plugin-grid__item">
			<img style="border-radius: 0; width: 240px;" src="/assets/img/blog/timeshift/grafanacon_eu_announcement.png" />
		</div>
		<div class="col col--sm-8 blog-plugin-grid__item">
			<h4>GrafanaCon EU</h4>
			<p>
				We've been excited to read the topics that have already been submitted and are looking forward to reading more!
			</p>
			<p>
				Do you have a big idea you'd like to share? Want to show off your monitoring stack? We're looking for technical and non-technical talks of all sizes.
			</p>
			<br />
			<p>
				<a class="btn btn-outline btn-small" href="http://grafana.com/grafanacon-cfp?utm_source=blog&utm_campaign=timeshift_12" target="_blank"><strong>I'd Like to Speak at GrafanaCon</strong></a>
			</p>
		</div>
	</div>
</div>

<hr />
<br />

#### Tweet of the Week
We scour Twitter each week to find an interesting/beautiful dashboard and show it off! <a href="https://twitter.com/hashtag/monitoringlove?src=hash" target="_blank">#monitoringLove</a>
<p>Nice! Combining different panel types on a dashboard can add more context to your data - Looks like a very functional dashboard.</p>

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">The advanced <a href="https://twitter.com/hashtag/KSQL?src=hash">#KSQL</a> Demo <a href="https://t.co/4ifWJzXhu2">https://t.co/4ifWJzXhu2</a> links <a href="https://twitter.com/hashtag/Kafka?src=hash">#Kafka</a>, <a href="https://twitter.com/hashtag/Elasticsearch?src=hash">#Elasticsearch</a>, <a href="https://twitter.com/hashtag/Grafana?src=hash">#Grafana</a> - good <a href="https://twitter.com/confluentinc">@confluentinc</a> is not content with HelloWorld 👀 <a href="https://t.co/RN4kDkxUuR">pic.twitter.com/RN4kDkxUuR</a></p>&mdash; Alex Hafner (@alexhafner) <a href="https://twitter.com/alexhafner/status/902887343614558208">August 30, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<br />
<div style=" padding: 20px; background: url(/assets/img/blog/timeshift/polygon_texture_black.jpg); background-size: cover; border-radius: 4px;">
	<h4>Grafana Labs is Hiring!</h4>
	<p>We are passionate about open source software and thrive on tackling complex challenges to build the future. We ship code from every corner of the globe and love working with the community. If any of this sounds like you you're in luck – <br /><strong>WE'RE HIRING!</strong></p>
	<p>Check out our <a class="btn btn-outline" href="https://grafana.com/about/hiring?utm_source=blog&utm_campaign=timeshift_12" target="_blank">Open Positions</a></p>
</div>

<hr />
<br />
#### What do you think?
Let us know how we're doing! Submit a comment on this article below, or post something at our [community forum](http://community.grafana.com?utm_source=blog&utm_campaign=timeshift_11). Help us make these roundups better and better!

Follow us on [Twitter](http://twitter.com/grafana), like us on [Facebook](http://facebook.com/grafana), and join the [Grafana Labs community](http://grafana.com/signup?utm_source=blog&utm_campaign=timeshift_11).



