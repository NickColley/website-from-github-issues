---
layout: base.njk
pagination:
  data: issues
  alias: issue
  size: 1
permalink: "{{ issue.path }}/index.html"
---
[Home]({{ '/' | url }})

# {{ issue.title }}

{{ issue.body }}
