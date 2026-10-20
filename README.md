# `<la-piscine>` galería de arte digital

Este proyecto está basado en una plantilla-portfolio de imágenes y bocetos de p5.js llevado a cabo por [Benjamin Habert](https://github.com/benjaminhabert).

## Arrival site

https://knnv-ar.github.io/la-piscine/

## Departure site

https://am1-lacabanne.atamvirtual.com.ar

## Features

- free hosting using [github-pages](https://pages.github.com/)
- homepage with all your projects represented as thumbnails
- simple file structure: each project has is own directory in `_projects` containing
all the files for this project.
- simple galleries of pictures
- easy to manage list of dependencies if you want to create projects using other
libraries than `p5.js`.
- live-reload activated in development environment (just run `jekyll serve`, modify a file
    and the browser auto-realoads to take into acount the changed).

## Using this template for you own portfolio

### Step 1: github

Assuming that you already have a github account:

- fork this repository. This will create a copy of all the code in a new repository
`https://github.com/<your_username>/jekyll-p5-portfolio/settings`
- go to the settings of your newly created repository.

  - at the top of the page change the name of the repository: `jekyll-p5-portfolio` -> `<cool_name>` and hit **rename**
  - In the **Github Pages** section select `master branch` as the source and hit **save**.

- the website is now available at https://<your_username>.github.io/<cool_name>/
 (this might take a minute).


### Step 2: customization

You might want to change the website name or add a link to your twitter account.

Edit the `_config.yml` file. You can do this either using github interface or by cloning
the repository on your machine and pushing the changes back to the master branch. The following
fields can be edited:

```
title: Your awesome title
email: your-email@example.com
description: > # this means to ignore newlines until "baseurl:"
  Write an awesome description for your new site here. You can edit this
  line in _config.yml. It will appear in your document head meta (for
  Google search results) and in your feed.xml site description.
baseurl: "/jekyll-p5-portfolio" # replace with "/<cool_name" : the name of your repository
twitter_username: jekyllrb
github_username:  <your_username>
```

You can change the content of the file `aboud.md` to give info about yourself or your project.

You can replace the content of `README.md` (this file). In particular you should link to your own
repository in the **Live Demo** section.

### Step 3: create your first sketch

The easiest point to start is to create a copy of the directory `simple_sketch` in the folder `_projects` with a new directory name.

- replace the content of `simple_sketch.js` with a new code that you wrote.
- create a thumbnail picture for you sketch (advice: use only square pictures as thumbnails) and
save it in `simple_sketch/<my_thumbnail.png>`
- edit the content of `simple_sketch/p5project.md`, especially the beginning of the file (front-matter).
Do not remove `p5` from the list of dependencies.

```
---
layout: post
title:  "<title of the post>"
date:   <today's date with format 2017-07-25>
thumbnail: <my_thumbnail.png>
dependencies:
    - p5
---
```

**Warning**: make sure that your p5 script is properly linked to a `div` element in your post. See
 [here](https://benjaminhabert.github.io/jekyll-p5-portfolio/projects/simple_sketch/p5project.html)
 for more info.

Once you are done modifying the project, commit your changes. Github will automatically update
the home page to include your new project. The home page shows the projetcs' thumbnails and lists them
by date from most to least recent.

### Going further

Each post in the template project explains a simple feature of this portfolio. Browse the live website for more infos.


## Local development using jekyll

This portfolio website was build using jekyll (see [here](https://jekyllrb.com/docs/installation/)
for installation). The easiest way to add new content to your portfolio is to download
the website, edit locally and send the updated version to github. In the terminal:

```
$ git clone https://github.com/<your_username>/<cool_name>.git
$ cd <cool_name>
$ jekyll serve  # this will serve the website locally at http://localhost:4000/<cool_name>/
```

You can modify the files in `_projects/`; your browser should update to reflect the changes.
Once you are done modifying files and want to update the actual website:

```
$ git add .
$ git commit -m "new p5 project added on the website"
$ git push
```

Once you push changes to the remote repository (on the `master` branch), github will update
the actual website.
