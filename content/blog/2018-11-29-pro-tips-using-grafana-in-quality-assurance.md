+++
title = "Pro Tips: Using Grafana in Quality Assurance"
author = "jdam"
date = "2018-11-29"
keywords = ["Grafana", "Blog", "IoT", "Prometheus", "Conference", "GrafanaCon"]
cover_image = "/assets/img/blog/timeshift/timeshift_14.jpg"
cover_opacity = "0.4"
cover_blur = "1px"
description = "Erwin de Keijzer, gave a talk at GrafanaCon EU about how he used Prometheus and Grafana to monitor the power usage… of his washing machine."
categories = ["Video", "Grafana", "GrafanaCon", "Talks"]
excerpt = "Erwin de Keijzer, gave a talk at GrafanaCon EU about how he used Prometheus and Grafana to monitor the power usage… of his washing machine."
+++

![Andrejs Kalnacs](/assets/img/blog/andrejs_kalnacs.jpg)
<small>Andrejs Kalnacs - Evolution Gaming</small>

Quality assurance is a priority at Evolution Gaming, the world leader in live casino gaming, and as Andrejs Kalnacs, Lead Software Developer in Test, said during his GrafanaCon EU talk in March, Grafana has been a game changer.

While Kalnacs and his team have found Grafana to be invaluable in many areas, here are three best practices they’ve learned throughout their journey.

#### 1. Putting test results in context
Kalnacs’ Grafana journey started with one simple thing: Evolution wanted to test how fast the games were loading. “I took some tools, created a solution, and then I got some numbers,” he said. “But numbers are numbers. Without context, they don’t make much sense.” He consulted with some big data experts who suggested he put the information into InfluxDB and visualize it in Grafana. And voila! “We got some graphs where we can compare different products so our product owners can see how new features are affecting performance,” Kalnacs said. “Grafana became a platform for discussions about the performance of our games.”

#### 2. Live monitoring performance tests 
“Sometimes performance tests might be long; like 30 minutes, 1 hour, maybe 4 hours, or maybe even a day,” said Kalnacs. “Getting feedback while these tests are running is quite important.” The Evolution teams rely on the open source Apache JMeter load testing tool extensively, due to its ease of use. With its GUI, you can click and create a test. Plus, for Kalnacs’s purposes, it has native support for exporting data to InfluxDB protocol. “I just took a dashboard from [grafana.com/dashboards](https://grafana.com/dashboards) and added it to an existing test, and in just a few minutes, I’ve already got some live results of tests,” he said. “In JMeter we can watch how our system under test is behaving while the tests are running, which is quite a good feature. If you have long performance tests, then you can monitor them as they’re running and make some conclusions even before all the run is finished.” 

For more context, Kalnacs added, it’s easy to layer more information on top of the dashboard. “For example, you can add some key performance metrics like CPU load of system under test on top of this graph, and it will give you much more information,” he said.

Another popular performance tool used at Evolution is [Gatling](https://gatling.io/), which has native support for exporting to time series databases such as InfluxDB in its Frontline enterprise version.  

#### 3. Test execution data visualization 
“In our journey to continuous integration, we want to understand how fast our tests are running compared with each other,” Kalnacs said. 

He pointed out that if you are using Jenkins, there’s an InfluxDB Jenkins plugin, which supports exporting different data, such as length of test or failure rate, or information about [JUnit](https://junit.org/junit5/) or [Robot framework](http://robotframework.org/) tests, or static analysis tools like [Cobertura](http://cobertura.github.io/cobertura/) or [SonarQube](https://www.sonarqube.org/) or the Java code coverage library, [JaCoCo](https://www.eclemma.org/jacoco/). 

In reality, there are so many test execution frameworks in so many different languages, that he suggested using an open source, multi-language test report tool called [Allure](https://github.com/allure-framework/). “Basically you can collect information from all different tests in one common way, and you don’t need to rely on any continuous integration systems like Jenkins,” he said. “It works in the same way for all these test execution frameworks on any CI server.”

Using Allure allows him “countless opportunities to display data in Grafana,” he said. One example: He can compare the execution length of different products and different tests, and “it may conclude that if tests run 20 minutes and there are single tests that are running 3 minutes, then maybe these 20 minute tests are too long.”

In conclusion, Kalnacs urged everyone to “share knowledge about Grafana with everyone in your company, because it can be used in very different ways, not only in monitoring of production.”

#### Video: Using Grafana in Quality Assurance
<div class="video-wrapper">
	<iframe src="https://www.youtube.com/embed/mzHKcfYH5tE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

