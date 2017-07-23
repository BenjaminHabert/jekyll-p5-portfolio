---
layout: post
title:  "A post with a gallery of images"
date:   2016-10-01
thumbnail: gallery_thumbnail.png

galleries:
- name: landscape
  files:
    - landscape_gallery/image_resized.jpg
    - landscape_gallery/image_resized.jpg
    - landscape_gallery/image_resized - copie.jpg
    - landscape_gallery/image_resized - copie.jpg
    - landscape_gallery/image_resized - copie.jpg

- name: other-gallery
  files:
    - relative/path/to_image
    - relative/path/to_image
---

Galleries can be easily generated in two steps:

- define a gallery in the front-matter of your post in the `galleries` object. The gallery
must have the properties `name` and `files`. Each file is the path (relative to the current article)
to an image.

```
---
galleries:
- name: my-gallery-name
  file:
    - relative/path/to/image.jpg
    - other_image.png
---
```

- include the gallery in your post using the template `gallery.html`. Make sure to the `gallery=`
parameter and use the name that was defined in front-matter.


```
 \\like this: { % include gallery.html gallery="my-gallery-name" % }
```


Here is the result, Each thumbnail links to the full image:

{% include gallery.html gallery="landscape" %}
