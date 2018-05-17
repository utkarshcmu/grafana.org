+++
title = "Monitoring with Azure and Grafana"
author = "daniellee"
date = "2018-05-16"
keywords = ["Grafana", "Blog", "Azure", "Azure Monitor", "Plugins", "Conference", "Video"]
cover_opacity = "0.4"
cover_blur = "1px"
description = "Monitoring with Azure and Grafana"
categories = ["Video", "Grafana", "Talks"]
draft = true
+++

# Monitoring with Azure and Grafana

Between Grafana releases we like to attend, sponsor, and speak at events and conferences all over the world. Recently, I spoke at Swetugg 2018, a .NET conference held in Stockholm and wanted to share my talk. 

### About this Video
This presentation touches on the basic principles of whitebox monitoring and why monitoring is important. After covering some common monitoring concepts at a high level, we turn to the actual technology and tools we use; specifically Grafana as the dashboard and data visualization layer and Azure Monitor, a plugin I wrote for Grafana to monitor Azure resources.

The Azure Monitor service provides a single source for monitoring Azure resources and the Azure Application Insights service can be used to monitor your live web application. With the new Azure Monitor plugin for Grafana, you can combine the metrics from both services in one graph. 

In this presentation, I walk through a live demo of Grafana with the Azure Monitor plugin. You'll see a few example dashboards, a rundown of the query builder and how to put together a custom view of the the data you may be interested in, and discuss template variables which will save you loads of time exploring your data.

After the demo, we get more technical and look at how to develop your own custom integrations with Grafana. Using the Simple JSON Data Source plugin for Grafana as a starting point, we build a simple backend integration using ASP.NET Core MVC. 

I hope you enjoy this talk, and appreciate any questions or feedback you have on the content, the Azure Monitor plugin, or how to create your own integrations. You can contact me at the official Grafana [community site](http://community.grafana.com).


<div class="video-wrapper">
	<iframe src="https://www.youtube.com/embed/GjDzwEcpC4o" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>