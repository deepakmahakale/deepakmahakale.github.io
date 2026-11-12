---
title: About
permalink: /about
description: >
  I'm a Senior Software Developer building Ruby on Rails applications since 2014.
  Currently at Saeloun Technologies, Pune, and an open source contributor to Rails and Spree.
---

I'm **Deepak**, and I've been building web applications with Ruby on Rails since 2014.
I'm currently a Senior Software Developer at [Saeloun Technologies](https://www.saeloun.com/),
and before that I worked with [Velotio Technologies](https://www.velotio.com/) and [Webonise Lab](https://www.webonise.com/).

Beyond Ruby on Rails I work with JavaScript, React, Hotwire, Kamal, PostgreSQL, MySQL, Elasticsearch,
Spree Commerce, AWS, Azure and Linux.

I'm an active open source contributor with commits in [Rails](https://github.com/rails/rails/commits?author=deepakmahakale)
and [Spree](https://github.com/spree/spree/commits?author=deepakmahakale), and a long-time member of the
[Stack Overflow](https://stackoverflow.com/users/4758119/deepak-mahakale) community.

## Experience

{% include portfolio/timeline.html %}

## Skills

<p class="skills">
{%- assign skills = "Ruby,Rails,Hotwire,Kamal,React,JavaScript,PostgreSQL,MySQL,GraphQL,Elasticsearch,Spree,Stripe,Devise,Pundit,Auth0,AWS,Azure,Git,Linux" | split: "," -%}
{%- for skill in skills -%}
  <span class="skills__item">{{ skill }}</span>
{%- endfor -%}
</p>

[Download résumé (PDF)]({{ '/resume.pdf' | relative_url }}){: .btn .btn--primary}
