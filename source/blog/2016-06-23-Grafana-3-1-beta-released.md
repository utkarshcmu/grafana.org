--
title: Grafana 3.1 Beta Released
author: Torkel Ödegaard
published_on: June 23, 2016
---

Grafana 3.1 beta is now available for download! We are very excited to announce a new way
of sharing dashboards for Grafana. We belive that working with metrics is a collaborative task
and want to make it as easy as possible. See the full changelog below.

<div class="text-center">
<a class="button secondary radius" href="/download">Download Grafana 3.1</a>.
<a class="button primary radius" href="http://play.grafana.org" target="_blank">Live Demo</a>.
</div>

## Release Highlights

- **Dashboard Repository** Grafana.net now supports download and uploading dashboards.
- **Dashboard** time range and template variable is now part of URL.
- **Constant Template Variable** have been added to make path prefixing easier.
- **Singlestat** can now map ranges to text.
- **Metrics** Grafana now supports sending metrics about itself.
- [Full changelog](https://github.com/grafana/grafana/blob/master/CHANGELOG.md)

### Breaking changes
- **Logging** format have been changed to improve log filtering.

## Dashboard Repository
Its now possible to download and upload dashboards at [Grafana.net](http://grafana.net/dashboards/).

To import a dashboard just go to Dashboard -> Import and you will see the new Import flow.
We have added the possbility to import dashboards directly from grafana.net by entering the url.

<img src="/assets/img/blog/v3.0/import_dashboard.png">

Afterwards Grafana will ask you to set some values before the dashboard can be saved to your grafana instance.
<img src="/assets/img/blog/v3.0/import_dashboard_settings.png">

If you built some great dashboards, why not share them with the rest of us?

## Dashboard Urls

Saving the timerange and template variable in the url makes it much easier to share dashboards with others within your organisation.

## Internal metrics

Do you want metrics about viewing metrics? Ofc you do! In this release we added support for sending metrics about Grafana to graphite.
You can configure interval and server in the config file.

## Thanks
A big thank you to everyone who helped test and report issues with the beta release.

<div class="">
<a class="button secondary radius" href="/download">Download Grafana 3.1</a>.
<a class="button primary radius" href="http://play.grafana.org" target="_blank">Live Demo</a>.
</div>

#### Subscribe to project updates
<section class="newsletter">
  <form action="http://grafana.us8.list-manage.com/subscribe/post?u=2aeb5711db2aececc990be536&amp;id=5585d37ecc" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
    <row class="collapse">
      <div class="medium-10 columns">
        <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address">
      </div>
      <div class="medium-2 columns">
        <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button postfix">
      </div>
    </row>
  </form>
</section>
