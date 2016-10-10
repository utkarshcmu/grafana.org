+++
title = "Project Update & GrafanaCon"
author = "Torkel Ödegaard"
keywords = ["release"]
date = "2016-10-15"
draft = true
+++

## Grafana v4 Update

{{< imgbox max-width="40%" img="blog/project_update/alert_graph.png" caption="Alerting graph" >}}

I know many are awaiting the next Grafana release, which will include the long anticipated alerting
feature along with many other improvements. Beside data visualization we hope alerting will be a
fundamental feature in Grafana. A feature that will continue to evolve and improve for many years.
That is why we have really taken the time get the core design of the alerting rule an execution
engine as solid as possible.

We are busily working on making a beta release by the end of October and stable release by end of November!
You can already try it out in the [nightly builds](http://grafana.org/builds/).

<div class="clearfix"></div>

## GrafanaCon in New York (Nov 30 - Dec 1)

Join the Grafana team, along with hundreds of monitoring and data aficionados, for our second annual
GrafanaCon on Wednesday, November 30 and Thursday, December 1, 2016. This two-day event will feature content
and speakers from across the Grafana community, led by myself Torkel Ödegaard, the creator & project lead of Grafana. 

Day 1: Single track format, several talks & panels of general interest. 
Day 2: Dual track format, more detailed topics and deeper dives. 

There will also be a Plugin Lounge with projects from across the Grafana ecosystem including Prometheus, Graphite, 
InfluxDB, worldPing, Kentik, and many others.

Lunch and refreshments will be provided.

Go to [GrafanaCon.org](http://grafanacon.org) and register for an early bird ticket.

## New screencasts

### Ep 9 - Elasticsearch

<div class="row">
  <div class="medium-6 columns">
    In this episode we detail the many ways you can use Elasticsearch in Grafana. Covering basic metric
    queries for the graph panel, as well as more advanced templating and annotation queries. Lastly
    we show how you can use the table panel to display raw json data from Elasticsearch.
  </div>
  <div class="medium-6 columns">
    {{< videobox src="https://www.youtube.com/embed/d6KicssNzxM" >}}
  </div>
</div>

### Ep 10 - Dashboard sharing and discovery

<div class="row">
  <div class="medium-6 columns">
    In this episode I show how you can find ready made dashboards on [Grafana.net](https://grafana.net) that
    are super easy to import into your Grafana server. A also walk through how anyone
    can share their own dashboards with the rest of the Grafana user community on [Grafana.net](https://grafana.net).
  </div>
  <div class="medium-6 columns">
    {{< videobox src="https://www.youtube.com/embed/iUj6DwfBh88" >}}
  </div>
</div>


<div class="clearfix"></div>

## New Plugins

New panels, data sources and apps are constantly being added to the [Plugins Repository](https://grafana.net/plugins) on [Grafana.net](https://grafana.net).
Here are some recent additions.

<div class="row">
  <div class="medium-6 columns">
    <a href="https://grafana.net/plugins/briangann-gauge-panel">
      <img src="/assets/img/blog/project_update/d3_gauge.png">
    </a>
    <br>
    <a href="https://grafana.net/plugins/briangann-gauge-panel">D3 Gauge Panel</a>
  </div>
  <div class="medium-6 columns">
    <a href="https://grafana.net/plugins/jdbranham-diagram-panel">
      <img src="/assets/img/blog/project_update/diagram_panel.png">
    </a>
    <a href="https://grafana.net/plugins/jdbranham-diagram-panel">Diagram Panel</a>
  </div>
</div>

<br>

<div class="row">
  <div class="medium-6 columns">
   {{< lightboxhelper max-width="100%" img="blog/project_update/sun_and_moon.png" caption="Sun and moon" >}}
   <a href="https://grafana.net/plugins/fetzerch-sunandmoon-datasource">Sun and Moon</a> is a very cool data source that can show graph or annotations for Sun & Moon position & metrics.
   Useful for correlating metrics from photovoltaic sensors.
  </div>
  <div class="medium-6 columns">
    {{< lightboxhelper max-width="100%" img="blog/project_update/kentik_connect.png" caption="Sun and moon" >}}

    <a href="https://grafana.net/plugins/kentik-app">Kentik Connect Pro</a>
     allows you to quickly and easily enhance your visibility into your network traffic. Kentik Connect leverages the power of Kentik Detect, which provides real-time, Internet-scale ingest and querying of network data including flow records (NetFlow, IPFIX, sFlow), BGP, GeoIP, and SNMP.
    <br>
  </div>
</div>

## New Dashboards

The [Dashboard Repository](https://grafana.net/dashboards) on [Grafana.net](https://grafana.net) is rapidly becoming
treasure trove of ready made reusable dashboards for all kinds of collectors and data sources.

<div class="row">
  <div class="medium-6 columns">
   {{< lightboxhelper max-width="100%" img="blog/project_update/docker_dashboard.png" caption="Docker Dashboard" >}}
   <a href="https://grafana.net/dashboards/179">Docker Dashboard</a> is a simple dashboard to monitor a docker
   container using Prometheus and cAdvisor.
  </div>
  <div class="medium-6 columns">
    {{< lightboxhelper max-width="100%" img="blog/project_update/kubernetes_stats.png" caption="Kubernetes Container Stats" >}}
    <a href="https://grafana.net/dashboards/482">Kubernetes Container Stats</a> provides summary performance and availability metrics of a Kubernetes Node. The data for this dashboard is expected to come from Snap agents running on every Kubernetes Node.
  </div>
</div>

<br>
There are many more dashboards to highlight. Instead of listing them all head to [Grafana.net](https://grafana.net/dashboards)
and checkout the full list.


