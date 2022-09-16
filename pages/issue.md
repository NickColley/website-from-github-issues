---
layout: base.njk
pagination:
  data: issues
  alias: issue
  size: 1
permalink: "{{ issue.path }}/index.html"
---

[Back]({{ '/' | url }})

# {{ issue.title }}

{{ issue.body }}
