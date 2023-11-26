
// dataset pie chart
function dsPie1(){
  var width = 500,
      height = 400,
      radius = Math.min(width, height) / 2;
  var color = d3.scale.ordinal()
              .range(["#98abc5", "#00bb00"]);
  var arc = d3.svg.arc()
            .outerRadius(radius - 10)
            .innerRadius(0);
  var pie = d3.layout.pie()
            .sort(null)
            .value(function(d) { return d.dsize; });
  var svg = d3.select("svg#ds-pie1")
            .attr("width", width)
            .attr("height", height)
          .append("g")
            .attr("transform",
                  "translate(" + width / 2 + "," + height /  2 + ")");

  d3.csv("data/ds-pie1.csv", function(error, data) {
    data.forEach(function(d) {
      d.dsize = +d.dsize;
    });

    var g = svg.selectAll(".arc")
        .data(pie(data))
      .enter().append("g")
        .attr("class", "arc");

    g.append("path")
        .attr("d", arc)
        .style("fill", function(d) { return color(d.data.name); });

    g.append("text")
        .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
        .attr("dy", ".35em")
        .style("text-anchor", "middle")
        .text(function(d) { return d.data.name; });
  });
}

// validation pie chart
function dsPie2(){
  var width = 500,
      height = 400,
      radius = Math.min(width, height) / 2;
  var color = d3.scale.ordinal()
              .range(["#98abc5", "#00ffff", "#00bb00"]);
  var arc = d3.svg.arc()
            .outerRadius(radius - 10)
            .innerRadius(0);
  var pie = d3.layout.pie()
            .sort(null)
            .value(function(d) { return d.dsize; });
  var svg = d3.select("svg#ds-pie2")
            .attr("width", width)
            .attr("height", height)
          .append("g")
            .attr("transform",
                  "translate(" + width / 2 + "," + height /  2 + ")");

  d3.csv("data/ds-pie2.csv", function(error, data) {
    data.forEach(function(d) {
      d.dsize = +d.dsize;
    });

    var g = svg.selectAll(".arc")
        .data(pie(data))
      .enter().append("g")
        .attr("class", "arc");

    g.append("path")
        .attr("d", arc)
        .style("fill", function(d) { return color(d.data.name); });

    g.append("text")
        .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
        .attr("dy", ".35em")
        .style("text-anchor", "middle")
        .text(function(d) { return d.data.name; });
  });
}

// blending pie chart
function dsPie3(){
  var width = 500,
      height = 400,
      radius = Math.min(width, height) / 2;
  var color = d3.scale.ordinal()
              .range(["#98abc5", "#00ffff", "#00bb00", "#dd0044"]);
  var arc = d3.svg.arc()
            .outerRadius(radius - 10)
            .innerRadius(0);
  var pie = d3.layout.pie()
            .sort(null)
            .value(function(d) { return d.dsize; });
  var svg = d3.select("svg#ds-pie3")
            .attr("width", width)
            .attr("height", height)
          .append("g")
            .attr("transform",
                  "translate(" + width / 2 + "," + height /  2 + ")");

  d3.csv("data/ds-pie3.csv", function(error, data) {
    data.forEach(function(d) {
      d.dsize = +d.dsize;
    });

    var g = svg.selectAll(".arc")
        .data(pie(data))
      .enter().append("g")
        .attr("class", "arc");

    g.append("path")
        .attr("d", arc)
        .style("fill", function(d) { return color(d.data.name); });

    g.append("text")
        .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
        .attr("dy", ".35em")
        .style("text-anchor", "middle")
        .style("z-index", "100")
        .text(function(d) { return d.data.name; });
  });
}

dsPie1();
dsPie2();
dsPie3();

/*
function fetLine1(data){
  var width = 1000,
      height = 450,
      margin = {top: 30, right: 100, bottom: 50, left: 100};
  var svg = d3.select("svg#fet-line1")
            .attr("width", width)
            .attr("height", height)
          .append("g")
  var xScale = d3.scale.ordinal()
      .domain(["Base line", "Counting based", "Time based"])
      .rangePoints([margin.left, width-margin.right]);
  var yScale = d3.scale.linear()
      .range([height - margin.bottom, 0])
      .domain([0.8, 1.0]);

  var xAxis = d3.svg.axis()
      .scale(xScale)
      .orient("bottom");
  var yAxis = d3.svg.axis()
      .scale(yScale)
      .orient("left");

  var lineGen = d3.svg.line()
      .x(function(d) {
          return xScale(d.year);
      })
      .y(function(d) {
          return yScale(d.sale);
      })

  svg.append("svg:g")
    .attr("class","x axis")
    .attr("transform", "translate(0," + (height - margin.bottom) + ")")
    .call(xAxis);

  svg.append("svg:g")
    .attr("class","axis")
    .attr("transform", "translate(" + (margin.left) + ",0)")
    .call(yAxis);

  svg.append('svg:path')
      .attr("class","line")
      .attr('d', lineGen(data))
      .attr('stroke', 'green')
      .attr('stroke-width', 3)
      .attr('fill', 'none')

}

var data = [{
    "sale": "200",
    "year": "Base line"
}, {
    "sale": "215",
    "year": "Counting based"
}, {
    "sale": "179",
    "year": "Time based"
}];
fetLine1(data);*/
