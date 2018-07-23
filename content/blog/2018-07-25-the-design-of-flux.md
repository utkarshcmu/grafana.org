+++
title = "The Design of Flux, the New Influx Functional Query Language"
author = "jdam"
date = "2018-07-25"
keywords = ["Grafana", "Blog", "Flux", "InfluxDB", "Plugins", "Conference", "GrafanaCon"]
cover_image = "/assets/img/blog/timeshift/timeshift_14.jpg"
cover_opacity = "0.4"
cover_blur = "1px"
description = "Flux, the long-awaited new functional query processing engine for InfluxDB, has finally landed, and you can try it out now with Grafana's new Flux Plugin!"
categories = ["Video", "Grafana", "GrafanaCon", "Talks"]
excerpt = "Flux, the long-awaited new functional query processing engine for InfluxDB, has finally landed, and you can try it out now with Grafana's new Flux Plugin!"
draft = "true"
+++

![Paul Dix](/assets/img/blog/paul_david.jpg)
<small>Left to right: Paul Dix - InfluxData, David Kaltschmidt - Grafana Labs</small>

#### Flux: How the New Influx Query Engine Was Designed—And How to Use It With Grafana
Flux, the long-awaited new functional query processing engine for InfluxDB, has finally landed. If you’re curious to learn more about the hows and whys of its design, check out this GrafanaCon EU session with InfluxData Cofounder and CTO Paul Dix. (Our recap is below.)

Given the excitement about Flux, we just released a plugin that adds Flux support to Grafana. “Flux is powerful stuff, and you can use it with Grafana today,” says David Kaltschmidt, Director of UX for Grafana Labs, who recently did a live demo of the plugin. Simply go to the plugin section of grafana.com to install it. The one requirement is that “you need a super recent version of Grafana, because we expanded the data source plugin model,” he says. “The plugin has syntax highlighting, tag completion, raw table preview, and inline function documentation, which I think is really helpful especially if you’re starting a new language.”

#### See the new Flux support in Grafana in the video below:
<div class="video-wrapper">
	<iframe src="https://www.youtube.com/watch?v=oZYXQPNR8Bc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

#### [Download](https://grafana.com/plugins/grafana-influxdb-flux-datasource) the new plugin now

Now that you’re all set up, here’s more about the design of Flux: First off, Dix explained the evolution of his thinking about how best to work with time series data. The first version of Flux (then known as IFQL) was based on the same tech that he’d used for errplane, a SaaS server monitoring product, which included Rest API. “The thing that I learned with the Rest API was people understood SQL as a query language for working with their data,” said Dix. “When I kickstarted InfluxDB [in November 2013], the innovation that we introduced was basically a language that looks kind of like SQL.”

A year later, Dix began giving talks with different user groups, and he polled the audience: “Does it make more sense to organize your metrics as a hierarchy, like Graphite does, or does it make more sense to organize it as tags?” Tags won out, and that was the new API introduced in the next version. But on the second question, whether SQL or a functional language was superior for working with this kind of data, the rooms were evenly split. “While I thought functional was the way to do it, I didn’t want to make the change because Influx was gaining in popularity and a lot of people told me the reason we love the project is because of the SQL query language. So basically I was too afraid to switch.”

Fast forward to today, and “there are a bunch of feature requests that people have,” said Dix. “We want to deliver those features, but we were kind of hemmed in by this weird SQL query language that we had created.” And with the new Flux, all of these features are included. “We were able to implement these features in a few months, that we hadn’t been able to get to in two years,” Dix said. “The problem was the query language that we had was really really hard to improve and to change.”

The same could be said with TICKscript, the language of InfluxDB’s monitoring piece, Kapacitor. It was designed to be more functional, but “It is really hard to debug, and it has a super steep learning curve because this doesn’t look like anything anybody’s familiar with,” Dix said. “We essentially created a second language for working with time series data in our platform.”

At the beginning of 2017, Dix decided a rethink was in order: “If I had to do everything brand new, if I had to start Influx today, what would I do?”

The answer turned out to be pretty simple: “Kapacitor is just background processing, but the truth is, it is the query engine,” he said. “If you’re doing a batch job, that looks exactly like a query a user would submit to a database. InfluxDB is batch interactive. It’s users querying the database. So basically when I thought about 2.0 and what I wanted to accomplish with it, I wanted to unify the API and unify the language so there’s just one thing you have to learn: one language to unite them all.”

Dix’s solution should also help increase feature velocity, enabled by the fact that the storage will be decoupled from the compute. “We can deploy these features frequently, and the risk of shipping a code update in the query language is not nearly as high because you know your data is safe,” he said. “One feature requests we have frequently now is that people want it to be multi-tenant. The nice thing about having these query processors be stateless systems is you can containerize them and you can put them in a lockbox and say this person can’t mess with this person.”

The decision to rebrand IFQL as Flux came in large part “because it’s selling it short to call it a query language,” said Dix. “I think of it more as a language for working with data.”

As for the design philosophy, Dix said it’s this: “You want a user interface for the masses. I know the hardcore people want to write their queries, but my theory is most people don’t want to write queries. They want a point-and-click UI, and they want to see their data.”

Dix listed some other guiding principles for Flux:

* It’s optimized for readability.
* It’s flexible.
* It’s easy for people to contribute to it.
* Code sharing and reuse will be enabled.

Dix followed up with a demo, which highlighted these features:

* More complex windowing behavior enabled than before.
* Anonymous functions, and pipe forward operators to make clear that data is being piped in from one function to another.
* Named parameters only, no provisional parameters; for added flexibility and readability.
* A record looks like a flat object or a row in a table. Anything that starts with an underscore is reserved for system attributes; all data within an InfluxDB would have _measurement and _field.
* From a user perspective, functions operate in isolation. They have an input and an output. 
* Order doesn’t matter in terms of optimization, but it matters for semantics: “The planner should optimize the query so that it runs in the most efficient way.”
* There are closures in the language. 
* It’s easy to add functions in the language: “You can define an entire function in three pages’ worth of code.”
* It will have imports and namespaces.
* You can query based on metadata in a specific time range.

As Dix put it, “Ideally, I want people to build the language around their use case, so if you have common boilerplate, you could do something like define a function where you just say, ‘Okay, I know the boilerplate is: I’m always asking for a database, I’m always going to ask for a measurement and a field. So I can just do that.  And I can pipe the result of that function to the other things.’”

Now that the language has been formalized, it is shipping with the enterprise version of InfluxDB, and there will be commercial support  coming soon. “This is a lot of work for the API 2.0 effort,” said Dix. “Flux is the first bit of that.”


#### Watch the full presentation in the video below:
<div class="video-wrapper">
	<iframe src="https://www.youtube.com/watch?v=asHISf26zTg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>
#### Download the [presentation slides](https://grafana.com/files/grafanacon_eu_2018/Paul_Dix_GrafanaCon_EU_2018.pdf).
