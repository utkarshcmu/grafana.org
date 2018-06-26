+++
title = "Evolution of Telemetry at Bloomberg"
author = "jdam"
date = "2018-06-28"
keywords = ["Grafana", "Blog", "Azure", "Azure Monitor", "Plugins", "Conference", "Video"]
cover_image = "/assets/img/blog/timeshift/timeshift_14.jpg"
cover_opacity = "0.4"
cover_blur = "1px"
description = "Stig Sorensen and Sean Hanson describe the winding—and ongoing—journey to achieve the robust telemetry they have now"
categories = ["Video", "Grafana", "GrafanaCon", "Talks"]
draft = true
+++

![Sean Hanson and Stig Sorensen](/assets/img/blog/sean_and_stig.jpg)
<small>From left to right: Sean Hanson and Stig Sorensen</small>

#### Monitoring in the wild west
With 5,000 engineers, 325,000 customers running its software, 2 data centers fully owned and operated, 200 node sites around the world, and a diverse architecture developed over almost four decades, Bloomberg has that many reasons to be committed to monitoring. And as Stig Sorensen, Bloomberg's Head of Telemetry and Software Developer Sean Hanson described during their GrafanaCon EU talk, the company has taken a long, winding and ongoing journey to achieve the robust telemetry they have now.

For a long time, developers were responsible for monitoring the products they built and deployed, and for many, it was just an afterthought, “mostly built as minimum viable products,” said Hanson. This created problems company-wide, he added: “There was no global view of where any data lived. Multiple systems were collecting data, and a lot of it was overlapping and collected slightly differently. If you wanted to join any of this data together, you had to write a lot of glue code that was one-off and you threw it away.”

The massive duplication of efforts across the company resulted in “a bunch of differently-shaped wheels, and some were square instead of round.” But perhaps the biggest issue, Hanson pointed out, was that “a lot of these technologies leaned on the things they were trying to monitor.”

#### Embracing open source software
Hanson’s team set out to deliver monitoring and alarming as a service for all of the company’s infrastructure and application, with on-site self-service for engineers. For all the different application owners and infrastructure teams, Bloomberg needed an easy-to-use, flexible system that has low latency and high throughput, and allows graphing and dashboarding. 

“We had to completely set ourselves apart from all of the traditional, in-house Bloomberg technology,” said Hanson. “There’s some really good open source software out there, and with a bit of duplication of effort for what we already had at Bloomberg, we were able to do that. We also learned from our past mistakes. Baking a lot of logic into our clients meant it was really hard to change after the fact. We basically made sure that any stuff we put in the client was as low-level as we could make it, and got the data out as fast as possible.”

The first iteration was a homegrown StatsD agent with tag support. “We had some basic logic in the clients, a little bit more logic in the agent on the machine, but then most of our validation, transformation, persistence, rule processing—we did all of that centrally on the set of machines that were behind a Kafka wall that we put up,” he said. The tool allowed people to set up their own rules. The shared system set certain allotments of time series, but also allowed for exceptions.

#### Throwing hardware at the problem
Scaling, though, became an issue. “After these two years, we’re at two and a half million data points per second, 100 million time series,” said Hanson. “Some metrics have high cardinality, like 500,000. So our initial solution did scale fairly well for us. It’s on ten times more machines than when we first released it. But every time we scaled up the number of machines, we scaled up the operational overhead for our team: more machine failures. It didn’t always handle machine failures perfectly. And over time, we got new users, more data, more complex use cases requesting exceptional features that we didn’t think about.”
To accommodate the growth that was projected, the team tried to put the existing system on more machines that were bigger and faster. “We were able to push that to 20 million data points a second sustained,” Hanson said. “But we couldn’t actually query anything out of it while it was doing that, and it still was really poor at handling high cardinality metrics, which was a pretty common use case. So while we could try to keep throwing more hardware at that, it wouldn’t really solve that fundamental design issue. So we had to build something else.”

#### Enter: Metrictank
Taking user feedback, the team tried to develop a solution that made sense for the use cases. Feature requests included basic functions to allow derived metric calculations, configurable retention, and metadata queries. “We started going down the path writing our own time series of database, which is exactly what the world needed,” Hanson joked.

<q class="quote">Running a monitoring system at scale is pretty much an arms race with your users. As soon as you give them a feature, they love it, they forget they never had it, and they want more.<span style="float:right; font-weight:bold; margin-top:10px; margin-right:10px; padding-bottom:20px;"> –Sean Hanson, Bloomberg</span><br /></q>

Luckily, Sorensen had been talking to the Grafana team, and told Hanson about Metrictank. “It checked off almost everything on our list,” said Hanson. “And for high cardinality data that was the killer in our last system, it was two orders of magnitude faster. So that was pretty big for us. That opened up a lot of queries we weren’t able to do before, especially things that involved firm-wide queries, being able to do analysis on, say, all of the parent clusters, comparing them this week to last week’s CPU usage, things like that. We had to write Python scripts for our last thing that kind of went bit by bit and took hours to run, and now we could do it in a single query.”
Other features that were initially missing, but that Bloomberg needed, like tags, were soon added. “We ran it at scale at Bloomberg, published all our data into it,” said Hanson. “There were a few spots where it used quite a bit of resources, and most of it was low hanging fruit. We were able to just remove some pointers or strings or whatever and contribute it back, and now it’s running pretty smoothly.”
Of course, the journey continues. “Running a monitoring system at scale is pretty much an arms race with your users,” said Hanson. “As soon as you give them a feature, they love it, they forget they never had it, and they want more.”

#### Wisdom learned through experience
Looking back at the evolution of telemetry at Bloomberg, Hanson had this advice to give:

* “Just because something scales in one way that you looked at it doesn’t mean it doesn’t have bottlenecks somewhere else.”
* “Keeping an ear to the ground, networking, and really just being open to evolving and changing your system is always going to help you out. We wouldn’t have even known Metrictank existed if Stig wasn’t talking to the Grafana Labs folks.”
* “Always abstract your integration points.”
* “Make it easy for people to use. We didn’t have to force any of the migrations over. We just made a better system than they had, and people were able to opt into it.”

#### Watch the full presentation in the video below:
<div class="video-wrapper">
	<iframe src="https://www.youtube.com/embed/v6AoyEovSa4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>
#### Download the [presentation slides](https://grafana.com/files/grafanacon_eu_2018/Bloomberg_GrafanaCon_EU_2018.pdf).