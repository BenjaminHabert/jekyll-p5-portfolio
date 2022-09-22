---
layout: post
title: "Representación del aura"
date: 2020-12-10
thumbnail: thumbnail.png
dependencies:
  - p5
---

<div id="div-sketch" style="width: 100vw, max-width: 512px;">
    <script type="text/javascript" src="sketch.js"></script>
</div>

Martín Antuña, 2021.

**Representación del aura**

La búsqueda de la imagen es la de reproducir el aura, o lo que asociamos culturalmente al aura, para poner en tensión el concepto desarrollado por Walter Benjamin a través de un medio en el que habría precisamente la pérdida del aura. Entonces, en la imagen desarrollada, el aura se encuentra tanto deteriorada como representada.

**Desarrollo técnico, estético y conceptual**

Water Benjamin comenta que en el arte de la reproducción técnica falta algo: “el aquí y ahora en la obra de arte”. Esto constituye, dice Benjamin, el concepto de autenticidad. Entonces, la obra de arte de la reproducción técnica pierde la autoridad de su originalidad, se atrofia su aura. Sin embargo, en Representación del aura la utilización de la función random(), si bien devuelve números pseudo-aleatorios, podría hacernos suponer que cada reproducción de ella producirá resultados diferentes, es decir, producirá un original cada vez.
El código es la obra en potencia, que se realiza al ejecutarse el código. Y al ejecutarse produce esta autenticidad. La obra es cuando es. Suena tautológico, pero me refiero al pasaje de la Metafísica de Aristóteles referido por Agamben en Creación y anarquía. El filósofo griego diferencia entre dýnamis y enérgeia. El primer término refiere a la potencia y el segundo al acto. La enérgeia remite al ser-en-obra. Para Aristóteles hay casos, aquellos en los que el acto produce algo más que el solo uso, en los que la enérgeia reside en la cosa hecha y no en el acto de hacerla. Entonces, podríamos pensar al código como la actividad y a las imágenes que producen su ejecución como su fin, su télos. Vemos, entonces, los dos momentos (el de la construcción y el de la cosa producida) juntos y al mismo tiempo. También podríamos pensar en que la enérgeia, la obra producida, es el código y su ejecución un simple coletazo.
Para salir de este encierro, quisiera proponer a Representación del aura como una obra cuya potencia reside en el mismo transcurrir, no como algo terminado, ni siquiera como algo que termina, sino como algo que continuamente se está haciendo. Y utilizo un verbo impersonal ya que gran parte de las imágenes que produce el código se generan de manera autónoma y se genera algo nuevo a cada momento, algo original. En esta “auto-generación” me interesó la posibilidad de trabajar con bucles y estructuras repetitivas y la posibilidad de producir una obra que solo se interrumpa cuando el espectador lo decida, pero que por sí misma podría continuar infinitamente. Además, la utilización del canal alfa me permitió dejar a la vista los cambios que se operan a medida que sucede la obra. Esto da un efecto de palimpsesto, en el que vemos cómo una cosa se “escribe” sobre la anterior, generando una especie de montaje entre las diversas capas. Arte conceptual y conceptualismo en América Latina de Camnitzer me impulsó a trabajar la relación entre centro y periferia, y a ensuciar el lienzo para borrar rastros de formas que podrían llevar a la relación con el minimalismo o formas del arte conceptual mainstream, como lo llama Camnitzer.
El trabajo de Jared Tarbell (\*), en especial el sketch Binary Ring1, fue tomado como referencia. A la vez las imágenes generadas por John Whitney (\*\*) y su exploración en gráficos no simétricos ni estáticos sirvieron como inspiración en la búsqueda.

In order to include a P5.js sketch in your post:

- make sure that you are importing the p5.js library as a dependency. You can complete the
  front-matter of the post like this:

## {%highlight yaml %}

dependencies: - p5

---

{%endhighlight%}

- create in `div` in the markdown document of your post and include the javascript file
  (relative path from the markdown document). Note that we gave the `div` a custom id.

{%highlight html %}

<div id="div-sketch">
    <script type="text/javascript" src="sketch.js"></script>
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
