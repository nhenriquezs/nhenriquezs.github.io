var width = 680;
var height = 530;

    //Imagenes de fondo para el mapa, de Openstreemap
    var tile = d3.geo.tile()
        .size([width, height]);

    //tipo de proyección del mapa - Mercator
    var projection = d3.geo.mercator()
        .scale((1 << 12) / 2 / Math.PI)
        .translate([width / 2, height / 2]);
    var center = projection([-75, -40]); //centro del mapa

    var path = d3.geo.path()
        .projection(projection);

    //svg del mapa
    var svg = d3.select('#map').append("svg")
        .attr("width", width)
        .attr("height", height);

    var raster = svg.append("g"); //capa para los mapas de bits de fondo

    d3.json('data/division_regional.json',function(err, data){
        if (err) console.log(err);


        //Descomprimir el TopoJson a GeoJson
        var dataRegiones = topojson
        .feature(data, data.objects.division_regional).features;

        //usamos la población para una escala de color
        var colorScale = d3.scale.linear()
        .range(["#66b2ff","#004c99"])
        .domain([d3.min(dataRegiones, d=>d.properties.ABS)
          ,d3.max(dataRegiones, d=>d.properties.ABS)]);

        //comportamineto del zoom
        var zoom = d3.behavior.zoom()
                    .scale(projection.scale() * 2 * Math.PI)
                    .scaleExtent([1 << 11, 1 << 16])//[1 << 11, 1 << 14]
                    .translate([width - center[0], height - center[1]])
                    .on("zoom", zoomed);

        //se generan los polígonos de cada region
        var regiones = svg.selectAll('path.region')
                  .data(dataRegiones)
                  .enter().append('path')
                  .attr('class', 'region')
                  .attr('fill', d=>colorScale(d.properties.ABS))
                  .on('click',function(d){
                    if (d.properties.COD_REGI == 1) {
                      updateData(dataI());
                    }
                    if(d.properties.COD_REGI == 2){
                      updateData(dataII());
                    }
                    if(d.properties.COD_REGI == 3){
                      updateData(dataIII());
                    }
                    if(d.properties.COD_REGI == 4){
                      updateData(dataIV());
                    }
                    if(d.properties.COD_REGI == 5){
                      updateData(dataV());
                    }
                    if(d.properties.COD_REGI == 6){
                      updateData(dataVI());
                    }
                    if(d.properties.COD_REGI == 7){
                      updateData(dataVII());
                    }
                    if(d.properties.COD_REGI == 8){
                      updateData(dataVIII());
                    }
                    if(d.properties.COD_REGI == 9){
                      updateData(dataIX());
                    }
                    if(d.properties.COD_REGI == 10){
                      updateData(dataX());
                    }
                    if(d.properties.COD_REGI == 11){
                      updateData(dataXI());
                    }
                    if(d.properties.COD_REGI == 12){
                      updateData(dataXII());
                    }
                    if(d.properties.COD_REGI == 13){
                      updateData(dataRM());
                    }
                    if(d.properties.COD_REGI == 14){
                      updateData(dataXIV());
                    }
                    if(d.properties.COD_REGI == 15){
                      updateData(dataXV());
                    }
                  
                  
                  
                  

                  d3.select(this).classed('active','true');
                  });

        svg.call(zoom);

        function imprimir(d){
          console.log(d.properties.COD_REGI);
        }

        //funcion para manejar las imagenes de mapa de bits de fondo
        function zoomed() {
            var tiles = tile //mosaicos de imagen de fondo
                .scale(zoom.scale())
                .translate(zoom.translate())
                ();

            projection  //actualizacion de la proyeccion
                .scale(zoom.scale() / 2 / Math.PI)
                .translate(zoom.translate());

            regiones.attr('d', path); //poligonos actualizados

            //imagenes para el mosaico de fondo
            var image = raster
              .attr("transform", "scale(" + tiles.scale + ")translate(" + tiles.translate + ")")
              .selectAll("image")
              .data(tiles, function(d) { return d});

            image.exit().remove();

            image.enter().append("image")
                .attr("xlink:href", function(d) { return "http://" + ["a", "b", "c"][Math.random() * 3 | 0] + ".tile.openstreetmap.org/" + d[2] + "/" + d[0] + "/" + d[1] + ".png"; })
                .attr("width", 1)
                .attr("height", 1)
                .attr("x", function(d) { return d[0]; })
                .attr("y", function(d) { return d[1]; });
          };

      zoomed();

    });