---
layout: post
title:  "A post with images"
date:   2016-11-01
thumbnail: image_thumbnail.png
---

## Thumbnail

This post contains a `thumbnail` in its front-matter:

```
---
thumbnail: image_thumbnail.png
---
```

This thumbnail is what will be shown on the home page of the website.

## Images in the article

Images can be included the post itself:

```
<!-- image in the same directory -->
![optional replacement text in case image does not load](image_full.jpg)
<!-- image in a sub-directory -->
![](a_gallery/image_resized.jpg)
```

![replacement text in case image does not load](image_full.jpg)

![](a_gallery/image_resized.jpg)

Note that all paths are relative to the article itself. Consequently the easiest
way to organise files is to place them in the same directory as the article.

## Gallery of images

You can use the following syntax in the markdown document:


{% include gallery.html folder="a_gallery" %}
