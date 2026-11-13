---
title: Referrals
permalink: /referrals/
redirect_from:
  - /affiliates/
description: >
  Referral links and codes for products and services I use.
---

Products and services I use, with my referral links and codes. Signing up through them may get you a bonus, and sometimes gets me one too, at no extra cost to you.

{% assign referrals = site.referrals | sort: "title" %}
{% if referrals.size > 0 %}
<div class="referral-list">
  {%- for r in referrals %}
  <a class="referral-list__item" href="{{ r.url | relative_url }}">
    <strong>{{ r.title }}</strong>
    {%- if r.summary %}<span>{{ r.summary }}</span>{% endif -%}
    {%- if r.referral_code %}<code>{{ r.referral_code }}</code>{% endif -%}
  </a>
  {%- endfor %}
</div>
{% else %}
Nothing here yet.
{% endif %}
