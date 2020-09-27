---
layout: base.njk
pagination:
  data: issues
  alias: issue
  size: 1
permalink: "/issues/{{ issue.slug }}/index.html"
---
<a href="/">Home</a>

<h1>{{ issue.title }}</h1>

{{ issue.body }}
