+++
title = "timeShift(GrafanaBuzz, 1w) Issue 69"
author = "trent"
date = "2018-11-16"
keywords = ["Grafana", "Blog", "Roundup", "timeShift", "security", "GrafanaCon"]
cover_image = "/assets/img/blog/timeshift/timeshift_14.jpg"
cover_opacity = "0.4"
cover_blur = "1px"
description = "A weekly roundup of articles and links from Grafana and the surrounding community"
categories = ["timeShift", "Grafana Buzz"]
excerpt = "This week we released Grafana v5.3.3 and v5.3.4 which includes an important security fix, plus new GrafanaCon speakers and updated plugins."
+++

### Welcome to TimeShift
This week we released Grafana v5.3.3 and v5.3.4 which includes an important security fix, so we recommend you update your instance today. Also in this issue of TimeShift we share the first group of confirmed GrafanaCon LA speakers, and tell you about 5 plugins that have been recently updated.

See an article you think should be shared here? [Contact us](mailto:hello@grafana.com)!
<br />
<hr />

<div class="row row--no-gutters">
	<div class="col col--sm-3">
		<img src="/assets/img/blog/timeshift/grafana_release_icon.png" width="170" />
	</div>
	<div class="col col--sm-9">
		<h3>Latest Stable Release: Grafana v5.3.4</h3>
		<h5>Updates in this release</h5>
		<ul>
			<li><strong>Alerting</strong>: Delete alerts when parent folder was deleted <a href="https://github.com/grafana/grafana/issues/13322">#13322</a></li>
			<li><strong>MySQL</strong>: Fix <code>$__timeFilter()</code> should respect local time zone <a href="https://github.com/grafana/grafana/issues/13769">#13769</a></li>
			<li><strong>Dashboard</strong>: Fix datasource selection in panel by enter key <a href="https://github.com/grafana/grafana/issues/13932">#13932</a></li>
			<li><strong>Graph</strong>: Fix table legend height when positioned below graph and using Internet Explorer 11 <a href="https://github.com/grafana/grafana/issues/13903">#13903</a></li>
			<li><strong>Dataproxy</strong>: Drop origin and referer http headers <a href="https://github.com/grafana/grafana/issues/13328">#13328</a> <a href="https://github.com/grafana/grafana/issues/13949">#13949</a>, thx <a href="https://github.com/roidelapluie">@roidelapluie</a></li>
		</ul>
		<p>This release also includes the <a href="https://community.grafana.com/t/grafana-5-3-3-and-4-6-5-security-update/11961" target="_blank">file exfiltration vulnerability</a> security fix (added to 5.3.3)</p>
		<a href="https://grafana.com/grafana/download?utm_source=blog&utm_campaign=timeshift_69" target="_blank" class="btn btn--primary">Download Grafana v5.3.4 Now</a>
	</div>
</div>

<br />
<hr />

#### From the Blogosphere
[**Grafana 5.3.3 and 4.6.5 released with important security fix**](https://grafana.com/blog/2018/11/13/grafana-5.3.3-and-4.6.5-released-with-important-security-fix/?utm_source=blog&utm_campaign=timeshift_69): Grafana 5.3.3 was released this week which includes an important security fix for all Grafana installations between 4.1.0 and 5.3.2. Learn more about the fix in the blog post and update today.

[**Cloud-Native Monitoring with Prometheus and Grafana**](https://blog.kubernauts.io/cloud-native-monitoring-with-prometheus-and-grafana-9c8003ab9c7): With the advent of containerization, the traditional ways to monitor application have rapily become obsolete. This article waks through the components and configuration of a modern monitoring stack.

[**Create QA dashboards with Grafana (Part 2)**](http://softwaretester.info/create-qa-dashboards-with-grafana-part-2/): This quick walkthrough gets you familiar with how to add a datasource in Grafana and build your first dashboard. [Part one](http://softwaretester.info/create-qa-dashboards-with-grafana-part-1/) in this series will take you through setting up your environment.

[**How to set up Grafana in Centos 7**](https://blog.vpscheap.net/how-to-setup-grafana-in-centos-7/): As the title implies, you'll learn how to get Grafana setup and configured in Centos 7. You'll also learn how to add a MySQL datasource.

<br />
<hr />

<div class="row row--internal-gutters">
	<div class="col col--sm-8">
		<a href="https://www.grafanacon.org/" target="_blank"><img src="/assets/img/blog/timeshift/grafanacon_earlybird.jpg" width="600" /></a>
	</div>
	<div class="col col--sm-4">
		<h4>GrafanaCon LA <br />General Admission On Sale Now!</h4>
		<p>Join us in Los Angeles, California February 25-26, 2019 for 2 days of talks focused on Grafana and the open source monitoring ecosystem. Learn about Grafana and new/upcoming features and projects in the broader ecosystem like <strong>Prometheus</strong>, <strong>Graphite</strong>, <strong>InfluxDB</strong>, <strong>Kubernetes</strong>, and more.</p>
		<a class="btn btn--outline" href="https://www.grafanacon.org/" target="_blank"><strong>Get Your Ticket Now</strong></a>
	</div>
	<div class="col col--sm-12">
		<h4>Join us at GrafanaCon LA and learn about:</h4>
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

<div class="speaker">
	<div class="row row--md-gutters">
		<div class="col col--sm-12 text-center">
			<h4>We've already confirmed these awesome speakers and will be adding more!</h4>
		</div>
		<div class="col col--sm-3">
			<img class="speaker-photo"  src="/assets/img/blog/timeshift/grafanacon/headshots/brendan_burns.jpg" />
			<div class="speaker-name">Brendan Burns</div>
			<div class="speaker-detail">Distinguished Engineer & Kubernetes co-founder</div>
			<div class="speaker-detail">Microsoft</div>
			<a href="https://microsoft.com/" target="_blank"><img class="speaker-logo" src="/assets/img/blog/timeshift/microsoft_logo.png" /></a>
		</div>
		<div class="col col--sm-3">
			<img class="speaker-photo" src="/assets/img/blog/timeshift/grafanacon/headshots/stig_sorensen.jpg" />
			<div class="speaker-name">Stig Sorensen</div>
			<div class="speaker-detail">HEAD OF TELEMETRY</div>
			<div class="speaker-detail">BLOOMBERG</div>
			<a href="https://www.bloomberg.com/" target="_blank"><img class="speaker-logo" src="/assets/img/blog/timeshift/grafanacon/logos/bloomberg_logo.png" /></a>
		</div>
		<div class="col col--sm-3">
			<img class="speaker-photo"  src="/assets/img/blog/timeshift/grafanacon/headshots/sean_hanson.jpg" />
			<div class="speaker-name">Sean Hanson</div>
			<div class="speaker-detail">SOFTWARE DEVELOPER</div>
			<div class="speaker-detail">BLOOMBERG</div>
			<a href="https://www.bloomberg.com/" target="_blank"><img class="speaker-logo" src="/assets/img/blog/timeshift/grafanacon/logos/bloomberg_logo.png" /></a>
		</div>
		<div class="col col--sm-3">
			<img class="speaker-photo"  src="/assets/img/blog/timeshift/grafanacon/headshots/dave_cadwallader.jpg" />
			<div class="speaker-name">Dave Cadwallader</div>
			<div class="speaker-detail">Site Reliability Architect</div>
			<div class="speaker-detail">DNANEXUS</div>
			<a href="https://www.dnanexus.com/" target="_blank"><img class="speaker-logo" src="/assets/img/blog/timeshift/dnanexus_logo.png" /></a>
		</div>
		<br />
		<div class="col col--sm-3 col--sm-offset-3">
			<img class="speaker-photo"  src="/assets/img/blog/timeshift/grafanacon/headshots/ben_kochie.jpg" />
			<div class="speaker-name">Ben Kochie</div>
			<div class="speaker-detail">Staff Backend Engineer, Monitor</div>
			<div class="speaker-detail">GitLab</div>
			<a href="https://www.gitlab.com/" target="_blank"><img class="speaker-logo" src="/assets/img/blog/timeshift/gitlab_logo.png" /></a>
		</div>
		<div class="col col--sm-3">
			<img class="speaker-photo"  src="/assets/img/blog/timeshift/grafanacon/headshots/paul_dix.jpg" />
			<div class="speaker-name">Paul Dix</div>
			<div class="speaker-detail">Co-Founder | CTO</div>
			<div class="speaker-detail">InfluxData</div>
			<a href="https://influxdata.com/" target="_blank"><img class="speaker-logo" src="/assets/img/blog/timeshift/influxdata_logo_rev.png" /></a>
		</div>
	</div>
	<br />
</div>

<br />
<hr />

<div class="row row--internal-gutters">
	<div class="col col--sm-4">
		<h4>Featured Job</h4>
	<p>As Grafana continues to grow we’re building our European sales team and are hiring <strong><a href="http://workable.com/j/13A62D8DED" target="_blank">Business Development Representatives</a></strong> based in our Stockholm office. This is a rare opportunity to join an early stage startup and take an instrumental role in helping to build the sales function. <a href="http://workable.com/j/13A62D8DED" target="_blank">Apply now</a>.</p>
	<a class="btn btn-outline" href="https://grafana.com/about/hiring?utm_source=blog&utm_campaign=timeshift_69" target="_blank">View All our Open Positions</a>
	</div>
	<div class="col col--sm-8">
		<a href="https://grafana.com/about/hiring?utm_source=blog&utm_campaign=timeshift_69" target="_blank">
			<img src="/assets/img/blog/timeshift/careers_section.jpg" />
		</a>
	</div>
</div>

<br />
<hr />
<br />

#### Grafana Plugin Update
This week we have 2 App plugin updates to share as well as a number of Panel plugin updates. To update any of your plugins in your on-prem Grafana, use the <a href="http://docs.grafana.org/administration/cli/#grafana-cli?utm_source=blog&utm_campaign=timeshift_63" target="_blank">grafana-cli tool</a>, or for <a href="https://grafana.com/cloud/grafana?utm_source=blog&utm_campaign=timeshift_63" target="_blank">Hosted Grafana</a> update with one-click.
<br />
<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/kentik-app/versions/1.3.0/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UDPATED PLUGIN</strong></div><br/>
				<strong>Kentik Connect Pro</strong> - Version 1.3.1 addresses an issue where <code>Filter</code> operators do not match <code>Group By</code> operators.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/kentik-app?utm_source=blog&utm_campaign=timeshift_69" target="_blank"><strong>Install</strong></a>
			</p>
		</div>
	</div>
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/ddurieux-glpi-app/versions/1.3.0/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong>GLPI App</strong> - Updates in version 1.3.0 include:
			</p>
			<ul>
				<li>add Apache / NGINX configuration in the readme</li>
				<li>add more instructions in the readme to configure API into GLPI</li>
				<li>add link of a user dashboard in the readme</li>
				<li>add the patch of GLPI in the readme when use the datasource in mode <code>server</code></li>
				<li>fix PHP timezone in the datasource</li>
				<li>update dependencies (and so fix some vulnerabilities)</li>
				<li>fix a bug in number elements displayed in the singlestat panel</li>
			</ul>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/ddurieux-glpi-app?utm_source=blog&utm_campaign=timeshift_69" target="_blank"><strong>Install</strong></a>
			</p>
		</div>
	</div>
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/zuburqan-parity-report-panel/versions/1.0.1/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong>Parity Report Panel</strong> - Minor update to packages for this panel plugin.
			</p>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/zuburqan-parity-report-panel?utm_source=blog&utm_campaign=timeshift_69" target="_blank"><strong>Install</strong></a>
			</p>
		</div>
	</div>
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/marcuscalidus-svg-panel/versions/0.2.0/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong>SVG Panel</strong> - Updates in v0.2.0 of the SVG Panel include:
			</p>
			<ul>
				<li>Implemented support for table format: <a class="commit-link" href="https://github.com/MarcusCalidus/marcuscalidus-svg-panel/commit/3b09fef7f610cf709921e2802425caf66174ca8e">MarcusCalidus/marcuscalidus-svg-panel@<tt>3b09fef</tt></a></li>
				<li>Added emptying of series and tables before getting new data: <a class="commit-link" href="https://github.com/MarcusCalidus/marcuscalidus-svg-panel/commit/239c79403c5194551713fd495d1de770f39cde4a">MarcusCalidus/marcuscalidus-svg-panel@<tt>239c794</tt></a></li>
				<li>Package updates</li>
			</ul>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/marcuscalidus-svg-panel?utm_source=blog&utm_campaign=timeshift_69" target="_blank"><strong>Install</strong></a>
			</p>
		</div>
	</div>
	<div class="row row--md-gutters">
		<div class="col col--sm-2 blog-plugin-grid__item">
			<img style="border-radius: 4px;" src="https://grafana.com/api/plugins/yesoreyeram-boomtable-panel/versions/0.4.6/logos/large" />
		</div>
		<div class="col col--sm-10 blog-plugin-grid__item">
			<p>
				<div class="updated-plugin-tag"><strong>UPDATED PLUGIN</strong></div><br/>
				<strong>Boom Table Panel</strong> - Boom Table is a table/multi stat plugin with multiple columns for Graphite, InfluDB, Prometheus, Azure Monitor.
			</p>
			<ul>
				<li>Icons support in table cells and options to use table as heatmap</li>
				<li>Options to hide first column and table header</li>
				<li>Options to hide metrics based on values</li>
				<li>Tooltips in each cells of the table</li>
			</ul>
			<p>
				<a class="btn btn-outline btn-small" href="https://grafana.com/plugins/yesoreyeram-boomtable-panel?utm_source=blog&utm_campaign=timeshift_69" target="_blank"><strong>Install</strong></a>
			</p>
		</div>
	</div>
</div>
 
<br />
<hr />
<br />

#### Upcoming Events
In between code pushes we like to speak at, sponsor and attend all kinds of conferences and meetups. We also like to make sure we mention other Grafana-related events happening all over the world. If you're putting on just such an event, let us know and we'll list it here.

<div class="blog-plugin">
	<div class="row row--md-gutters">
		<div class="col col--md-3">
			<img style="border-radius: 50%;" class="large" src="/assets/img/blog/timeshift/webinar.png" />
		</div>
		<div class="col col--md-8 col--sm-offset-1">
			<p>
				<strong><a href="https://register.gotowebinar.com/register/1892519390489349387" target="_blank">Visualizing Time-Series Data with Grafana | Webinar - December 4, 2018, 12:00pm EST</a>:</strong>
				<strong>Matt Toback and Diana Hsieh</strong> - Visualization is a key component for generating meaningful insights from time-series data. Grafana, an opensource visualization platform, is a great option for users looking to create dynamic dashboards that can be shared across teams. In recent releases, Grafana has introduced tighter integrations with both TimescaleDB and PostgreSQL. This includes a graphical query builder easier iteration when working with complex SQL queries. 
			</p>
			<p>
				In this webinar, we will discuss how visualization coupled with a flexible full SQL interface can drive powerful insights that inform both technical and business decisions. Additionally, the webinar will include a demo covering basic dashboards that users can use to jumpstart their own internal visualization systems.
			</p>
			<a href="https://register.gotowebinar.com/register/1892519390489349387" target="_blank" class="btn btn--outline">Register Now</a>
		</div>
	</div>
	<br />
	<div class="row row--md-gutters">
		<div class="col col--md-3">
			<img style="border-radius: 50%;" class="large" src="/assets/img/blog/kubecon.png" />
		</div>
		<div class="col col--md-8 col--sm-offset-1">
			<p>
				<strong><a href="https://events.linuxfoundation.org/events/kubecon-cloudnativecon-north-america-2018/" target="_blank">KubeCon + CloudNativeCon North America 2018 | Seattle, WA - December 10-13, 2018</a>:</strong>
				<strong>David Kaltschmidt: On the OSS Path to Full Observability with Grafana</strong> - Grafana is coming &quot;off the wall&quot;. To make it more useful for interactive debugging, David and his team have already integrated two pillars of observability - metrics and logs. They are currently adding tracing to complete the incident response experience. All to minimize the cost of context switching during those crucial minutes after getting paged.
			</p>
			<p>
				This talk will demonstrate the various methods we&apos;ve used to link the data together. Prometheus is providing the metrics. Via its histograms, request latencies can be extracted to inform each tracing span from Jaeger. Grafana also ensures that lines from your log aggregation system are annotated with span and trace IDs, as well as the other way around: associating logged values with spans.
			</p>
			<p>
				David will show how these OSS parts should be deployed to achieve full observability in an engaging user experience that saves valuable minutes.
			</p>
			<p>
				We are also a proud sponsor of the Cloud Native Computing Foundation's flagship conference. Join Kubernetes, Prometheus, Cortex, OpenTracing, Fluentd, gRPC, containerd, rkt, CNI, Envoy, Jaeger, Notary, TUF, Vitess, CoreDNS, NATS, Linkerd and Helm as the community gathers for four days to further the education and advancement of cloud native computing.
			</p>
			<a href="https://events.linuxfoundation.org/events/kubecon-cloudnativecon-north-america-2018/" target="_blank" class="btn btn--outline">Register Now</a>
		</div>
	</div>
	<br />
</div>
<hr />
<br />


#### How are we doing?
Thats a wrap for another issue of TimeShift. What do you think? Are there other types of content you'd like to see here? Submit a comment on this issue below, or post something at our [community forum](http://community.grafana.com?utm_source=blog&utm_campaign=timeshift_69).

Follow us on [Twitter](http://twitter.com/grafana), like us on [Facebook](http://facebook.com/grafana), and join the [Grafana Labs community](http://grafana.com/signup?utm_source=blog&utm_campaign=timeshift_69).
