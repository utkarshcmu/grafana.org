+++
title = "GrafanaCon Recap: The State of TSDB"
author = "jdam"
date = "2018-07-03"
keywords = ["Grafana", "Blog", "Azure", "Azure Monitor", "Plugins", "Conference", "Video"]
cover_image = "/assets/img/blog/timeshift/timeshift_14.jpg"
cover_opacity = "0.4"
cover_blur = "1px"
description = "Conference Panel - The State of TSDB"
categories = ["Video", "Grafana", "GrafanaCon", "Talks"]
+++

![GrafanaCon TSDB Panel](/assets/img/blog/tsdb_panel.jpg)
<small>From left to right: Erik Nordstrom – Timescale, Dan Cech – Graphite, Paul Dix – InfluxDB, Tom Wiklie – Prometheus</small>

At GrafanaCon EU, we gathered representatives of the Graphite, Prometheus, InfluxDB, and Timescale projects in the hopes of starting a spirited conversation about the current state of Time Series Databases. They didn’t disappoint!
Here are a few highlights from the TSDB panel featuring Erik Nordstrom from Timescale, Dan Cech from Graphite, Paul Dix from InfluxDB, and Tom Wilkie from Prometheus, and moderated by Grafana Labs co-founder and CEO Raj Dutt.

#### Functional vs. SQL query languages: Discuss.

**Dutt:** “When Influx first launched, you guys were all about having an easy-to-use SQL query language. But now it seems like you’re maybe walking away from that and getting excited about a non-SQL-based query language.”

**Dix:** “By the fall of 2014, I actually thought that functional was a more elegant way to work with Time Series data, because when I think about working with Time Series data, it’s more like working with matrices, than it is working with sets. I was just too chicken to make that change, and now we have no choice but to support that for the rest of the project. (Laughs.) But at this point, I feel like with the beginner use cases, the SQL language makes it really really easy, but for the more advanced things, it’s like you’re doing gymnastics trying to make SQL work.”

**Nordstrom:** “In many cases I think SQL is a perfectly well-engineered language that’s been around a long time, and there’s a benefit to having people know the language. And it’s really powerful. But I totally see the point that there’s no denying that it’s a lot more complex for some people and for some tasks.”

**Dix:** “I did feel like functional was the right way to do it, and I think this is actually proven out by Grafana as a user interface. Graphite is a functional language, and I think the user interface, the query builder in Grafana for Graphite, is the first-class, best experience you can see, and I think having that functional language actually lends itself well to building a user interface around it.”

#### Why is everyone providing PromQL support?

**Dix:** “The thing about Prometheus is by design there’s no commercial company behind it, so of course everybody is in land grab right now.”

**Wilkie:** “I think there is a reason that Prometheus is popular and the Prometheus query language is popular, especially in the monitoring and observability space. Because it represents a really nice set of tradeoffs between conciseness and expressiveness.” 

**Cech:** “I think a lot of what’s going on with Graphite and with Influx as well is [about] giving people a choice… I don’t think you can say there’s going to be the one query language to rule them all. And that’s what we’ve all been getting at on this panel: that the different languages have different strengths, different weaknesses, and you have to pick the best for the job.”

#### Has not having commercial backing been a liability or a strength for Prometheus?

**Wilkie:** “At SoundCloud, Prometheus wasn’t core business to them and they kind of let it go. That was brilliant. It really did allow for this ecosystem of companies to develop around Prometheus... The requirement to be commercially successful if you’re VC-funded is huge. With the Prometheus project, we actively discourage discussion about that kind of thing. We want to make sure we’re limiting, artificially almost, the scope of the Prometheus project, like preventing feature creep, to give room for other solutions.”

#### Why did Timescale choose to build on top of Postgres?

**Nordstrom:** “Our company started out building more of an IT data analytics cloud, and we had a database in the backend. For our data, we found that we wanted something more powerful, so we started using Postgres ourselves and sort of trying to implement custom functionality, to make it scale to the kind of workload that we needed. Eventually we just figured out that this is actually what the customers want as well, so we took it and made it a product. We understand what the usage needs are from the customer’s point of view.”

#### Could continuous update queries work across all the different TSDBs?

**Wilkie:** “This is something we should support or massively reduce the bandwidth and the query load on the backend. But really I think it’s for us to work with the Grafana guys which hopefully should happen now, should be a bit easier, to make this happen. We’re talking about things like aligning this step with multiples of the step so that we can always just issue a partial query.” 

**Dix:** “We have an open feature, called Intelligent Rollups at the time when I created the issue. Doing that kind of continuous query thing, those updates, it’s a trivial feature to implement, but it’s non-trivial to make it work at scale, to make it not destroy your database, as anyone who’s tried to deal with Graphite can tell you.”

**Cech:** “Putting my Grafana contributor hat back on, there’s a lot that we’re doing on the Grafana side to support websocket connections from the browser back up to the server, and there’s definitely a pathway there, to being able to turn that around, and say, let Grafana tell the Time Series Database that I want to subscribe to this particular query, please keep me up to date. And have it pushed up back down the other way. I think there’s a lot of really interesting stuff to be done to make things smarter.”

#### Key Takeaway
Diffrent TSDBs have different query languages that come with their own strengths and weaknesses. You don't have to stick with just one - choose the best tool for the job. Despite the fact we may be working on different projects, one of the things we believe a lot at Grafana Labs is there’s always room for more interoperability and collaboration.


#### Watch the full panel discussion in the video below:

<div class="video-wrapper">
	<iframe src="https://www.youtube.com/embed/usaIsA1a93g" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>