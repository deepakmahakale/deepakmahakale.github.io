---
layout: page
title: About
permalink: /about
javascripts: ["https://www.amcharts.com/lib/4/core.js",
              "https://www.amcharts.com/lib/4/charts.js",
              "https://www.amcharts.com/lib/4/plugins/wordCloud.js",
              "https://www.amcharts.com/lib/4/themes/animated.js"]
description: >
  Ruby on Rails dev with 5+ years of experience.
  Senior Software Developer at Velotio.
  Knows Spree Commerce, Postgres, MySQL, Capistrano, Elastic Search, Heroku, SendGrid, AWS, Azure and more.
  Contributor to open source communities.
---

<div id="chart-container" style="height: 600px; width:100%;" >

<script>
am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("chart-container", am4plugins_wordCloud.WordCloud);
chart.fontFamily = "Courier New";
var series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());
series.randomness = 0.1;
series.rotationThreshold = 0.5;

series.data = [
  { "tag": "Ruby", "rating": "100" },
  { "tag": "Rails", "rating": "95" },
  { "tag": "Python", "rating": "40" },
  { "tag": "node", "rating": "42" },
  { "tag": "botkit", "rating": "55" },
  { "tag": "heroku", "rating": "88" },
  { "tag": "git", "rating": "91" },
  { "tag": "GitHub", "rating": "60" },
  { "tag": "AWS", "rating": "59" },
  { "tag": "LUIS", "rating": "39" },
  { "tag": "jQuery", "rating": "49" },
  { "tag": "JavaScript", "rating": "52" },
  { "tag": "Bootstrap", "rating": "63" },
  { "tag": "coffeeScript", "rating": "73" },
  { "tag": "Travis CI", "rating": "83" },
  { "tag": ".", "rating": "1" },
];

series.dataFields.word = "tag";
series.dataFields.value = "rating";

series.heatRules.push({
 "target": series.labels.template,
 "property": "fill",
 "min": am4core.color("#00ff00"),
 "max": am4core.color("#FF33FF"),
 "dataField": "value"
});

// series.labels.template.url = "https://stackoverflow.com/questions/tagged/{word}";
// series.labels.template.urlTarget = "_blank";
// series.labels.template.tooltipText = "{word}: {value}";

// var hoverState = series.labels.template.states.create("hover");
// hoverState.properties.fill = am4core.color("#FF0000");

// var subtitle = chart.titles.create();
// subtitle.text = "(click to open)";

// var title = chart.titles.create();
// title.text = "Most Popular Tags @ StackOverflow";
// title.fontSize = 20;
// title.fontWeight = "800";

}); // end am4core.ready()

</script>
</div>
<!--
<h3>
<strong>Deepak Mahakale</strong> is a <strong>Ruby on Rails Developer</strong> with <strong>5</strong> years of experience. He is currently working as a Senior Software Engineer in <strong>Velotio Technologies</strong>.</h3>
<h3>Deepak has previously worked with Webonise Lab, Pune for around 3 and a half year. </h3>
<h3>Deepak also knows about JavaScript, Bootstrap, HTML, HAML, Git, GitHub, Heroku, Spree Commerce, PostgreSQL, MySQL and Linux.
</h3>
<h3>
Deepak is continuously contributing to open source communities. He is an active user on <strong>Stack Overflow</strong> with a reputation of more than <strong>17k</strong>. He has also contributed to Spree which is one of the most popularly used e-commerce platforms.
</h3>
<h3>
Deepak also won an internal company round of Code Gladiators 2015 organized by Techgig and has been awarded by certificate and a trophy.
</h3>
<h3>
Check Deepak Mahakale's developer story on Stack Overflow - http://stackoverflow.com/story/deepakmahakale
</h3>
<h3>
Follow Deepak Mahakale on Github - https://github.com/deepakmahakale
<h3>
-->
