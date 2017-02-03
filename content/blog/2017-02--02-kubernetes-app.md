---
title: Monitoring Kubernetes with the Grafana Kubernetes App
author: Daniel Lee
date: 2017-02-02
aliases:
  - blog/2017/02/02/kubernetes-app.html
---

Kubernetes is an open-source system for automating deployment, scaling, and management of containerized applications. It was originally designed by Google who then donated it to the [Cloud Native Computing Foundation](https://www.cncf.io/) - a non-profit organization. Piggybacking on the Docker adoption wave, Kubernetes has become hugely popular in the last few months and is now one of the top projects on GitHub.

At Grafana Labs, we are in the process of switching to Kubernetes for our Hosted Grafana and Hosted Metrics services. This raised the question **how do we monitor Kubernetes**?

## Switching to Kubernetes

When we set up our first test cluster, we noticed that it was not obvious what needs to be monitored. A system built on Docker containers is quite different from a system built with a configuration management tool like Chef or Puppet. We also noticed that it is not always obvious that something is broken in Kubernetes. As an example, a pod can get stuck in a restart loop where it starts up, crashes and then gets restarted by Kubernetes. If a pod has multiple replicas then this redundancy and Kubernetes' self-healing capability can hide the fact that the pod is crashing constantly and that there is a problem on one particular server.

## Why Kubernetes is difficult to monitor

Kubernetes is very different from a traditional static environment. It is a moving target with containers frequently being spun up and torn down. In Kubernetes, a runnable unit of work is called a pod and a pod runs one or more containers (usually not more than 3).
Kubernetes will automatically restart failing pods and it is standard practice to delete a pod and then roll out a new version. Within a short period, even a small cluster will have created and destroyed hundreds of pods and Docker containers.

When saving metrics to a time series database, the amount of data these pods create is overwhelming. Destroyed pod data is mixed with live pod data and if a pod has a problem, it can take a few minutes to scroll through the list of destroyed pods to find the live version. Kubernetes manages this complexity with labels but there is no easy way to leverage the Kubernetes labeling system from within Grafana.

## Introducing the Kubernetes App

At Grafana Labs, our internal stack for monitoring is 1) Snap for collecting data 2) Graphite (or rather our Graphite-compatible Hosted Metrics service) as our time series database 3) Grafana for the frontend. We really wanted to monitor Kubernetes with this stack and had to build some new components to achieve that. The result is the [new Kubernetes App for Grafana](https://grafana.net/plugins/raintank-kubernetes-app).

The Kubernetes App includes Snap collectors for Docker and Kubernetes as well as standard metrics and four curated Graphite dashboards  - everything you need to be able to monitor a Kubernetes cluster. It also has an App section with an UI similar to the Kubernetes dashboard if you need to see all the components in your cluster. A new custom panel leverages the Kubernetes labeling to filter pod data is used in the pod dashboard.

The collectors are deployed automatically to your cluster from Grafana so you can install the app and be collecting data in under a minute. The collectors can also be manually installed very easily. The instructions and files needed are included in the app.

![](/assets/img/blog/k8s_app_deploybutton.png)

The Kubernetes App comes with 4 default dashboards, Cluster, Nodes, Pods/Containers and Deployments.

### Cluster Dashboard

This dashboard shows metrics at the cluster level. It can answer questions about capacity and usage over the whole cluster. It can also be used to give an indication that something is wrong through the high level pod and container statistics. We built a collector to fetch this data as it is important to be able to fetch data directly from Kubernetes to alert on conditions like a Node being offline or not having enough disk space to create a new pod.

![](/assets/img/blog/k8s_app_cluster_dashboard.png)

### Nodes Dashboard

CPU, memory, disk usage and network statistics are shown here per node. A specially built panel

![](/assets/img/blog/k8s_app_node_dashboard.png)

## Pods/Containers

This is where it gets difficult to monitor so we built a special panel that uses the inbuilt Kubernetes labels to filter pod data. For example, in our Hosted Grafana service we have an `org` label that we use for quickly finding a customer's pod.

![](/assets/img/blog/k8s_app_pod_dashboard_ops.png)

### Deployments

Every deployment creates a new generation but it only increments the generation when all replicas are deployed so this dashboard can be used to identify deployments that have stalled due to errors.

## What can be monitored with the App

{{< imgbox max-width="60%" img="/assets/img/blog/k8s_alerts.png" caption="Our alert list" >}}

With the data that is collected by the Kubernetes App, you will now be able to alert on:

- cluster-level failures like a node being unavailable
- node-level failures like high memory usage
- pod/container-level failures like a pod that is crashing/restarting
- deployment-level failures like a deployment failing to complete

The [seven Snap collectors](https://github.com/raintank/kubernetes-app/blob/master/README.md#technical-details) that are included in the app can potentially collect a huge amount of data allowing you to investigate alerts at a lower level or to examine trends for capacity planning.

## Community

The Kubernetes App and its components are all open-sourced. We built it for our needs and it is great to be able to share it with the community. We struggled initially with monitoring Kubernetes so we think that the app and its components should be of value to other companies in the same situation.

The App only has support for Graphite but all the collectors are data source agnostic. We wrote a Kubestate Snap collector to collect metrics from the Kubernetes API to be able to monitor at the cluster level. We are looking forward to the community contributing both code and ideas. The Kubernetes App is the first step but there is more to come!

## Links:

- [Install the Kubernetes App](https://grafana.net/plugins/raintank-kubernetes-app)
- [Contribute to the Kubernetes App on GitHub](https://github.com/raintank/kubernetes-app)
- [Kubernetes](https://kubernetes.io/)
- [Docker image with snap collectors on DockerHub](https://hub.docker.com/r/raintank/snap_k8s/) or [on GitHub](https://github.com/raintank/snap_k8s)
- [Kubestate Snap collector for Kubernetes statistics](https://github.com/raintank/snap-plugin-collector-kubestate)
