---
title: 'Changelog: v0.0.1'
date: '2021-01-15'
---

---
# v0.0.1
_Updates:_
- Migrated codebase from NextJS &rarr; Gatsby

---
# Introduction
With these changelogs, the idea is to catalog the updates made to the site. Everything from adding features to interface design. Giving you insight into the reasoning behind certain decisions made during software development.

---
# Why Initially NextJS?
I initially decided upon NextJS to build this blog for a couple of reasons. For starters, I want us to add server-side rendering for specific pages as the site expands. I also want us to extend the functionality with features that require access to a backend API's.

Issues with the NextJS ecosystem began to surface as I was researching markdown processors and syntax highlighting integration. I could __not__ find a single markdown processing library compatible with NextJS that offered syntax highlighting plugins that matched the feature set of the __Gatsby Plugin:__ `gatsby-remark-prismjs`.[^1] 

[^1]: The package `gatsby-remark-prismjs` is an __official plugin__ maintained by Gatsby Developers. It should always be compatible with the latest version of the Gatsby framework, and any issues will quickly be resolve by the development team. 

One of the proposed solutions is to develop a package that better integrates the `remark` and `prismjs` libraries. While this theoretically solves this specific issue, it will not be the last challenge we face during this project.

---
# Switch for one Library?
Not exactly. It's not just _one_ library that sets itself apart. The Gatsby ecosystem allows us to deliver a better end product in a shorter amount of time. 

The goal of this project, outlined in a previous post,

> "...is to deliver an open-sourced individual blogging platform, with offerings and features similar to those of many top content management systems (CMS)."
> \- [Leiiid by Example: An Introduction](https://leiiid.xyz/posts/introduction)

With this in mind, we will need to design several of these features from the ground up. 

With help from the Gatsby ecosystem, many features we need for our blog are already available and easily integrate through plugins. There are also how-to-guides about adding features such as improving Search Engine Optimization (SEO), setting up RSS feeds, and operating as a Progressive Web Application (PWA).

As developers, this allows us to focus our attention on features that are both new and unique. And as project managers, we can then deliver a better end-product that can set itself apart from the competition.

---
# Why Gatsby? 
Gatsby is built and designed around [CMS-powered websites](https://www.gatsbyjs.com/about/). And that is precisely the aim of our project. We need a frontend framework that will allow us to design and develop the site quickly. We will then be able to focus our attention on the CMS portion of this project. 

##### Server-Side Rendering?
While Gatsby doesn't offer a native server-side rendering solution, it does maintain a plugin that circumvents the limitations of static-site-generation through `gatsby-plugin-react-helmet`.  

##### Backend API?
Even though there isn't a native 'backend' functionality enabled through the Gatsby framework, nothing is stopping us from developing a separate application specifically for an API by using [NextJS](https://nextjs.org) or using the trusted [Express.js](https://www.expressjs.com) framework.