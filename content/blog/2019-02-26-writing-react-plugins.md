# Writing React Plugins

In Grafana 6.0 we starting our migration to using React in Grafana. We're launching our @grafana/ui
library, panels written in React. This gives us the ability to write plugins using React instead of Angularjs.

To make writing plugins smoother and easier, we've provided some building blocks in @grafana/ui.

Let's take a look at how you can build your own plugin, using react and typescript.

## Setup

There's a few things to consider when writing a new plugin. Since Grafana 6.0, we'll need to move our plugins repository
outside of the grafana project directory. Feel free to put it where you usually store code. Next, we need to tell Grafana
where it should look for plugins. Grafana comes with a `defaults.ini` file in `grafana/conf/`, we can overwrite this by
creating and modifying a `custom.ini`. So put yourself in the `grafana/conf` directory and `cp defaults.ini custom.ini`.

Open `custom.ini` with your file editor of choice and search for this phrase

> Directory where grafana will automatically scan and look for plugins

Modify the line under that to:

`plugins = <path to your plugins directory>`

(restart your grafana-server after this.)

Now we're ready to move on!

## The Structure

Grafana needs some basic project structure in your plugin. Grafana will look for a `plugin.json` located in a `src`
directory. The plugin.json should contain some information about your plugin.


```
{
  "type": "panel",
  "name": "RSS Panel",
  "id": "rss-panel",
  "dataFormats": [],
  "info": {
    "description": "Grafana panel for rss feeds",
    "author": {
      "name": "Grafana Labs",
      "url": "https://grafana.com"
    },
    "keywords": ["RSS Panel"],
    "links": [],
    "screenshots": [],
    "version": "0.3.0",
    "updated": "2018-12-06"
  },

  "dependencies": {
    "grafanaVersion": "6.x.x",
    "plugins": []
  }
}
```

Also within the `src` directory we will need a `module.tsx` file. If you're new to React this might look like a weird
file extension. But it's a the typescript version of react templating format. In the module.tsx file we're introducing
first magic coming from our newly released @grafana/ui package.

```
import { ReactPanelPlugin } from '@grafana/ui';

import { RssPanel } from './components/RssPanel';
import { RssPanelEditor } from './components/RssPanelEditor';

import { defaults, RssOptions } from './types';

export const reactPanel = new ReactPanelPlugin<RssOptions>(RssPanel);

reactPanel.setEditor(RssPanelEditor);
reactPanel.setDefaults(defaults);
```

Let's go through this and figure out what this file does:

* First off, we're creating a new instance of a `ReactPanelPlugin` which is a class imported from @grafana/ui. We're
sending in our option type (in this case RssOptions, we'll get to that later).

* Next up we're setting the editor component for a our plugin with the `setEditor()` function. 

* Lastly we're setting any default options that we might have.  


## The Panel

Now we're at the fun part. Here's where you can let your creativity to flow. In this example we're building an RSS-panel, 
what we're going to need is some kind of table to display our result. We're going to use an interface exported by 
@grafana/ui called `PanelProps`. This will provide us with the props we need, such as height and width. I won't go into 
any specifics about writing React components but I will highlight some things that we do to make our panels written in 
React to work. It's important to use React's life cycle methods to make your component update when the props change. We 
do this by invoking `componentDidUpdate` in our rss example. So when our user updates the url to the rss feed, we will 
update the panel. In this example we're using a library called `rss-to-json` to fetch and transform the rss feed to
javascript objects. 


## The Panel editor 

For adding options to Plugins we're using a concept called Editors. In this example we'll create a component called
`<RssPanelEditor />`. We have an interface for Editors in @grafana/ui as well, it's called `PanelEditorProps`. If we
provide our options type to this interface we will have the `onChange` method available that will update our panel when
we change the options. 

## Building
**NEEDS  MORE WORK**


Grafana expects a built javascript module for running the plugin. The webpack configuration used in this example is 
the following

```const path = require('path');
   const webpack = require('webpack');
   const CopyWebpackPlugin = require('copy-webpack-plugin');
   const CleanWebpackPlugin = require('clean-webpack-plugin');
   
   module.exports = {
     node: {
       fs: 'empty',
       net: 'empty',
       tls: 'empty',
     },
     context: path.join(__dirname, 'src'),
     entry: {
       module: './module.tsx',
     },
     devtool: 'source-map',
     output: {
       filename: '[name].js',
       path: path.join(__dirname, 'dist'),
       libraryTarget: 'amd',
     },
     externals: ['lodash', 'moment', 'react', 'react-dom', '@grafana/ui'],
     plugins: [
       new CleanWebpackPlugin('dist', { allowExternal: true }),
       new webpack.optimize.OccurrenceOrderPlugin(),
       new CopyWebpackPlugin([
         { from: 'plugin.json', to: '.' },
         { from: '../README.md', to: '.' },
         { from: 'partials/*', to: '.' },
         { from: 'img/*', to: '.' },
       ]),
     ],
     resolve: {
       extensions: ['.ts', '.js', '.tsx'],
     },
     module: {
       rules: [
         {
           test: /\.tsx?$/,
           loaders: [
             {
               loader: 'babel-loader',
               options: { presets: ['env'] },
             },
             'ts-loader',
           ],
           exclude: /(node_modules)/,
         },
         {
           test: /\.css$/,
           use: [
             {
               loader: 'style-loader',
             },
             {
               loader: 'css-loader',
               options: {
                 importLoaders: 1,
                 sourceMap: true,
               },
             },
           ],
         },
       ],
     },
   };
```

Which will build the resources needed for the plugin to function properly in Grafana. 

## Testing
Start your grafana-server again and make sure that your plugin is registered. 

> Registering plugin                       logger=plugins name="Gif Panel"

Create a new panel and admire your plugin.
