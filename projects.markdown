---
layout: page
title: Projects
---

<div class='projects-wrapper'>
  {% for project in site.data.projects %}
    {% include box.haml %}
  {% endfor %}
</div>
