$(document).ready(function(){

  var data = [4, 2, 18, 16, 23, 48];

  var x = d3.scale.linear()
      .domain([0, d3.max(data)])
      .range([0, 600]);

  d3.select(".first-chart")
    .selectAll("div")
      .data(data)
    .enter().append("div")
      .style("width", function(d) { return x(d) + "px"; })
      .text(function(d) { return d; });



});
