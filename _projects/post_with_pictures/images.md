---
layout: post
title:  "A post with images"
date:   2016-11-01
thumbnail: image_thumbnail.png
---

This post contains a `thumbnail` in its front-matter:

```
---
thumbnail: image_thumbnail.png
---
```

This thumbnail is what will be shown on the home page of the website.

Images can be included the post itself.

```
![optional replacement text in case image does not load](image_full.jpg)
```

![replacement text in case image does not load](image_full.jpg)


Note that all paths are relative to the article itself. Consequently the easiest
way to organise files is to place them in the same directory as the article.
