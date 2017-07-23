---
layout: post
title:  "Simple p5 sketch"
date:   2016-09-01
thumbnail: thumbnail.png
dependencies:
    - p5
---


<div id="simple-sketch-holder">
    <script type="text/javascript" src="simple_sketch.js"></script>
</div>

In order to include a P5.js sketch in your post:

- make sure that you are importing the p5.js library as a dependency. You can complete the
front-matter of the post like this:

{%highlight yaml %}
---
dependencies:
    - p5
---
{%endhighlight%}

- create in `div` in the markdown document of your post and include the javascript file
(relative path from the markdown document). Note that we gave the `div` a custom id.

{%highlight html %}
<div id="simple-sketch-holder">
    <script type="text/javascript" src="simple_sketch.js"></script>
</div>
{% endhighlight %}

- in your javascript file, make sure to link the canvas to this specific `div`. See
[the documentation](https://github.com/processing/p5.js/wiki/Positioning-your-canvas)
for more information.

{% highlight javascript %}
function setup() {
  canvas = createCanvas(710, 400);
  canvas.parent('simple-sketch-holder'); // this ensures that the sketch will be positioned properly
}
{% endhighlight %}

**Note**: using the method, you can only include a single sketch per file. See [here](https://github.com/processing/p5.js/wiki/Global-and-instance-mode) if you
want to have several sketches running simultaneously.

## Handling dependencies:
In this example we are only loading the `p5.js` library. However you might want to use
other librairies later. In order to add a library, expand the file `_data/dependencies.yml`:

{% highlight yaml%}
- name: p5
  element: <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.11/p5.min.js"></script>

- name: p5.dom
  element: <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.11/addons/p5.dom.min.js"></script>

- name: p5.sound
  element: <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.11/addons/p5.sound.min.js"></script>
{% endhighlight %}

Each entry in this file is composed of a `name` and an `element`

- The `name` is an alias that you can use in the list of dependencies defined in the front-matter
of the article.
- The `element` is a script tag linking to a library hosted by a content-delivery-network
[cdnjs for example](https://cdnjs.com/libraries/p5.js). 
