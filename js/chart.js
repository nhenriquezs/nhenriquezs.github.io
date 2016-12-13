var margin = {top: 20, right: 20, bottom: 35, left: 50},
	width = 700 - margin.left - margin.right,
	height = 400 - margin.top - margin.bottom;

var formatPercent = d3.format(".4");

var x = d3.scale.ordinal()
	.rangeRoundBands([0, width], .1, 1);

var y = d3.scale.linear()
	.range([height, 0]);

var xAxis = d3.svg.axis()
	.scale(x)
	.orient("bottom");

var yAxis = d3.svg.axis()
	.scale(y)
	.orient("left")
	.tickFormat(formatPercent);

var svg = d3.select("#chart").append("svg")
	.attr("width", width + margin.left + margin.right)
	.attr("height", height + margin.top + margin.bottom)
	.append("g")
	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.json("data/nac_abs.json", function(error, data) {
	data.forEach(function(d) {
	d.frequency = +d.frequency;
});

x.domain(data.map(function(d) { return d.Región; }));
y.domain([0, d3.max(data, function(d) { return d.Abs; })]);

svg.append("g")
	.attr("class", "x axis")
	.attr("transform", "translate(0," + height + ")")
	.call(xAxis)
	.append("text")
	// .attr("transform", "rotate(-90)")
	.attr("y", 6)
	.attr("dy", "1.5em")
	.style("text-anchor", "end")
	.text("Región");

svg.append("g")
	.attr("class", "y axis")
	.call(yAxis)
	.append("text")
	.attr("transform", "rotate(-90)")
	.attr("y", 6)
	.attr("dy", ".71em")
	.style("text-anchor", "end")
	.text("Tasa de abstención");

svg.selectAll(".bar")
	.data(data)
	.enter().append("rect")
	.attr("class", "bar")
	.attr("x", function(d) { return x(d.Región); })
	.attr("width", x.rangeBand())
	.attr("y", function(d) { return y(d.Abs); })
	.attr("height", function(d) { return height - y(d.Abs); });

d3.select("input").on("change", change);
var sortTimeout = setTimeout(function() {
d3.select("input").property("checked", false).each(change);
}, 2000);


function change() {
	clearTimeout(sortTimeout);
    // Copy-on-write since tweens are evaluated after a delay.
	var x0 = x.domain(data.sort(this.checked
		? function(a, b) { return b.Abs - a.Abs; }
		: function(a, b) { return d3.ascending(a.Región, b.Región); })
		.map(function(d) { return d.Región; }))
		.copy();

    svg.selectAll(".bar")
        .sort(function(a, b) { return x0(a.Región) - x0(b.Región); });

    var transition = svg.transition().duration(750),
        delay = function(d, i) { return i * 50; };

    transition.selectAll(".bar")
        .delay(delay)
        .attr("x", function(d) { return x0(d.Región); });
    transition.select(".x.axis")
		.call(xAxis)
		.selectAll("g")
		.delay(delay);
  }
});