---
layout: page
title: Projects
description: >
  1) Facebook Birthday Export
  2) Spree Purchase Order - a ruby gem
  3) ReadTime - a ruby gem
---

<div class='projects-wrapper'>
  {% for project in site.data.projects %}
    {% include box.haml %}
  {% endfor %}
</div>
