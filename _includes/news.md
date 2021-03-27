{% assign news = site.data.news | reverse %}
{% for link in news %}
  {% linkpreview link %}
{% endfor %}
