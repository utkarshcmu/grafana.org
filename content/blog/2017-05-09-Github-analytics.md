+++
title = "GitHub Analytics With Elasticsearch And Grafana"
author = "torkel"
date = "2017-05-09"
draft = true
keywords = ["Grafana", "GitHub", "Elasticsearch"]
cover_image = "/assets/img/blog/github_analytics/cover.png"
description = "Export GitHub Repository data to Elasticsearch and visualize analytics in Grafana"
+++

## The Dream

I have, for a long time, wished there was a way to easily export GitHub issues & comments to
Elasticsearch. The standard GitHub graphs for commits & traffics are great but I have
really been missing graphs and analytics on issues & comments.

If we had issues & comments in Elasticearch, with a well defined index mapping, we could do some
interesting analtics. For example:

- Look at project history in terms of issues created
- Look at project history in terms of comments (can be a measure of community engagement)
- See how different labels trend over time.
- Look at distributions (histograms) on number of issues or comments created per user. Are there a few very active users that represent 70% or 90% of all issues & comments?
- How long does PRs stay open?
- How long does issues stay unresponded?

## The GitHub API crawler

So a few weekends ago I had some left over programming energy and spent a few hours hacking together
this [node.js app](https://github.com/torkelo/github-to-es) that uses the GitHub API to crawl to all issues & comments and saves them as seperate
documents in Elasticsearch.

Right now it only collects issues & comments.

It stores them in Elasticsearch with this index mapping:
```javascript
"mappings": {
  "issue": {
    "properties": {
      "title":            { "type": "text"  },
        "state":            { "type": "keyword"  },
        "repo":             { "type": "keyword"  },
        "labels":           { "type": "keyword"  },
        "number":           { "type": "keyword"  },
        "comments":         { "type": "long"  },
        "assignee":         { "type": "keyword"  },
        "user_login":       { "type": "keyword"  },
        "milestone":        { "type": "keyword"  },
        "created_at":       { "type": "date"  },
        "closed_at":        { "type": "date"  },
        "updated_at":       { "type": "date"  },
        "is_pull_request":  { "type": "boolean"  },
    }
  },
    "comment": {
      "properties": {
        "issue":           { "type": "keyword"  },
        "repo":            { "type": "keyword"  },
        "user_login":      { "type": "keyword"  },
        "created_at":      { "type": "date"     },
      }
    }
}
```

There are some more numeric fields being saved for reactions that do not need to be defined
in the index mapping.

### The Dashboards

With the data finally collected I built two dashboards, one focused on [issues](http://play.grafana.org/dashboard/db/github-repo-trends-issues) and another one
focused on [comments](http://play.grafana.org/dashboard/db/github-repo-trends-comments). Both dashboards are templated and allow you to specify which repository
to look at and the granularity (group by time) of the data. You can also add any ad-hoc filter, like
only look at issues created by a specific user or only look at issues with no comments.

![](/assets/img/blog/github_analytics/issue_trends.png)

Checkout [the dasboard](http://play.grafana.org/dashboard/db/github-repo-trends-issues) on our play site. I setup the
[github-to-es](https://github.com/torkelo/github-to-es) collector to fetch issues and comments for the main Kubernetes repo, the
main grafana repo and the Microsoft Visual Studio Code editor repository.
