---
layout: post
title:  "New versus old"
date:   2014-08-18 08:43:28
categories: projects
---

![Portal Mauá e Região]({{ site.url }}/assets/new-portal.jpg)

I started working at *Grupo Mauá e Região de Comunicação* with the proposal to build new projects and handle maintenance of existing projects. I didn't expect it to be so complicated to make changes in such a poorly designed and completely out of any development standard product. Did much to improve (and improve) our [news portal](https://github.com/GrupoMauaRegiao/portal-v1) with significant effort. However, we cannot draw many legacy codes and scripts poorly designed: a new product needed to be built in parallel.

Thus, from March to July worked hard to build a new product that could meet the needs of our audience, both to use the following features:

* CMS (WordPress, PHP)
* HTML 5
* Sass (CSS 3)
* CoffeeScript (JavaScript)
* Grunt tasks:
  * Compile CoffeeScript
  * Compile Sass
  * Coffelint
  * JShint
  * YUI Compressor: minify JavaScript and CSS
  * `grunt-shell` runs after everything to run `rsync` to send files as specified in the `config`, with script `deployit.sh`
* Docco for documentation of CoffeeScript

Then launched July 24 the new [Portal Mauá e Região](http://portalmauaeregiao.com.br) and achieved an excellent result compared to the same period last year:

* July 24 to August 17, 2013: **4236** (page views)
* July 24 to August 17, 2014: **9895**

Most of the source code is open source, so you can view it on GitHub:
[https://github.com/GrupoMauaRegiao/PortalMauaERegiao-v2](https://github.com/GrupoMauaRegiao/PortalMauaERegiao-v2)
