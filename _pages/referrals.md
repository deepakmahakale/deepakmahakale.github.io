---
title: Referrals
permalink: /referrals/
redirect_from:
  - /affiliates/
description: >
  Referral links and codes for products and services I use.
---

Products and services I use, with my referral links and codes. Signing up through them may get you a bonus, and sometimes gets me one too, at no extra cost to you.

{% assign groups = site.referrals | group_by: "group" | sort: "name" %}
{% if groups.size > 0 %}
{%- for group in groups %}
<h2>{{ group.name | default: "Other" }}</h2>
<div class="referral-list">
  {%- assign items = group.items | sort: "title" -%}
  {%- for r in items %}
  <a class="referral-list__item" href="{{ r.url | relative_url }}">
    <strong>{{ r.title }}</strong>
    {%- if r.you_get %}<span>You get: {{ r.you_get }}</span>{% elsif r.summary %}<span>{{ r.summary }}</span>{% endif -%}
    {%- if r.referral_code %}<code>{{ r.referral_code }}</code>{% endif -%}
  </a>
  {%- endfor %}
</div>
{%- endfor %}
{% else %}
Nothing here yet.
{% endif %}
