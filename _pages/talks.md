---
layout: page
title: Talks
permalink: /talks/
description: Recent and upcoming talks, seminars, and presentations.
nav: true
nav_order: 4
horizontal: false
---

<!-- pages/talks.md -->
<div class="talks">
  {% assign upcoming_talks = site.talks | where_exp: "talk", "talk.date >= site.time" | sort: "date" %}
  {% assign past_talks = site.talks | where_exp: "talk", "talk.date < site.time" | sort: "date" | reverse %}

{% if upcoming_talks.size > 0 %}

  <h2 class="category">Upcoming</h2>
  <div class="row row-cols-1 row-cols-md-3">
    {% for talk in upcoming_talks %}
      {% include talks.liquid %}
    {% endfor %}
  </div>
  {% endif %}

{% if past_talks.size > 0 %}

  <h2 class="category">Past</h2>
  <div class="row row-cols-1 row-cols-md-3">
    {% for talk in past_talks %}
      {% include talks.liquid %}
    {% endfor %}
  </div>
  {% endif %}

{% if upcoming_talks.size == 0 and past_talks.size == 0 %}

  <!-- Display all talks sorted by importance if date filtering doesn't work -->

{% assign sorted_talks = site.talks | sort: "importance" %}

  <div class="row row-cols-1 row-cols-md-3">
    {% for talk in sorted_talks %}
      {% include talks.liquid %}
    {% endfor %}
  </div>
  {% endif %}
</div>
