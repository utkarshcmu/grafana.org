---
title: Getting Plugins to work in Snapshot Mode
author: Daniel Lee
published_on: September 14, 2016
---
#

![](blog/Grafana-snapshot-example.png)

Grafana has this great feature where you can [save a snapshot of your dashboard](http://docs.grafana.org/reference/sharing/). Instead of sending a screenshot of a dashboard to someone, you can send them a working, interactive Grafana dashboard with the snapshot data embedded inside it. The snapshot can be saved on your Grafana server and is available to all your co-workers. Raintank also hosts a [snapshot server](http://snapshot.raintank.io/) if you want to send the snapshot to someone who doesn't have access to your Grafana server.

![](blog/snapshots.gif)

This all works because Grafana saves a snapshot of the current data in the dashboard json instead of fetching the data from a data source. However, if you are building a custom panel plugin then this will not work straight out of the box. You will need to make some small (and easy!) changes first.

This time I am going to use the [Worldmap Panel](https://github.com/grafana/worldmap-panel) as an example. The [Clock Panel](https://github.com/grafana/clock-panel), that I used in my [previous](http://grafana.org/blog/2016/04/08/clock-plugin-p1.html) blog [posts](http://grafana.org/blog/2016/04/15/clock-plugin-p2.html), does not have any data sources and works in snapshot mode without any changes. The Worldmap Panel has two different types of data that need to be saved in the snapshot/dashboard json file. The first data source is the time series data and the second one is the location data used to draw the circles on the map (coordinates for countries or the states in the US for example).

## Enabling support for loading snapshot data

Grafana automatically saves data from data sources in the dashboard json when the snapshot is created so we do not have to write any code for that. Enabling snapshot support for reading time series data is very simple. First in the constructor, we need to add an event handler for `data-snapshot-load`. This event is triggered by Grafana when the snapshot data is loaded from the dashboard json.

```javascript
constructor($scope, $injector, contextSrv) {
    super($scope, $injector);
    ...
    this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
    this.events.on('data-received', this.onDataReceived.bind(this));
    this.events.on('panel-teardown', this.onPanelTeardown.bind(this));
    this.events.on('data-snapshot-load', this.onDataSnapshotLoad.bind(this));
```

Then we need to create a simple event handler that just forwards the data on to our regular `data-received` handler:

```javascript
onDataSnapshotLoad(snapshotData) {
  this.onDataReceived(snapshotData);
}
```

This will cover most use cases for snapshot support. Sometimes you will want to save data that is not time series data from a Grafana data source and then you have to do a bit more work to get snapshot support.

## Saving custom data for snapshots

The second data source in the Worldmap Panel is not time series data and is not saved automatically by Grafana. We have to do that ourselves in this case. Location data can come from a variety of sources: json endpoints, Elasticsearch geoip data or a static json file.

![](blog/Grafana-save-snapshot.png)

Grafana gives us a chance to save data to the dashboard json when it is creating a snapshot. In the 'data-received' event handler, you can check the snapshot flag on the dashboard object. If this is true, then Grafana is creating a snapshot and you can manually save custom data to the panel json. In this case, I created a new field called snapshotLocationData and copied in the location data (an array of objects containing place names and coordinates).

```javascript
onDataReceived(dataList) {
  if (!dataList) return;

  if (this.dashboard.snapshot && this.locations) {
    this.panel.snapshotLocationData = this.locations;
  }
```

Now the location data is saved in the dashboard json but we will have to load it manually as well.

## Loading custom data for snapshots

The Worldmap Panel has a function that loads the location data for the panel. The data sources for location data are not available from a snapshot so a guard check is made to see if there is any snapshot data available first. If there is, then the snapshot data is used instead of trying to load the data from a data source.

```javascript
loadLocationDataFromFile(reload) {
  if (this.map && !reload) return;

  if (this.panel.snapshotLocationData) {
    this.locations = this.panel.snapshotLocationData;
    return;
  }
```

And that's it. It is really easy to forget to add this support but it enables a great feature and can be used to demo your panel. Try out my [Worldmap Panel snapshot here](https://snapshot.raintank.io/dashboard/snapshot/dXSzImhFkrffwtrcPXeWfC44timza0Ai).

P.S. If there is a panel plugin that you would like to be installed on the Raintank Snapshot server then please contact us via [Slack](https://raintank.slack.com) or [GitHub](https://github.com/grafana/grafana).
