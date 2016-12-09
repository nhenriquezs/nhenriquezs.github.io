nv.addGraph(function() {
  var chart = nv.models.pieChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .showLabels(true)     //Display pie labels
      .labelThreshold(.05)  //Configure the minimum slice size for labels to show up
      .labelType("percent") //Configure what type of data to show in the label. Can be "key", "value" or "percent"
      .donut(true)          //Turn on Donut mode. Makes pie chart look tasty!
      .donutRatio(0.35)     //Configure how big you want the donut hole size to be.
      ;

d3.select("#chart2")
        .datum(dataNac)
        .transition().duration(350)
        .call(chart);

        // nv.utils.windowResize(chart.update);

  return chart;
});

function updateDataI() {

    nv.addGraph(function() {
  var chart = nv.models.pieChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .showLabels(true)     //Display pie labels
      .labelThreshold(.05)  //Configure the minimum slice size for labels to show up
      .labelType("percent") //Configure what type of data to show in the label. Can be "key", "value" or "percent"
      .donut(true)          //Turn on Donut mode. Makes pie chart look tasty!
      .donutRatio(0.35)     //Configure how big you want the donut hole size to be.
      ;

d3.select("#chart2")
        .datum(dataI)
        .transition().duration(350)
        .call(chart);

        // nv.utils.windowResize(chart.update);

  return chart;
});

}

function dataNac() {
  return  [
    {
        "label": "A. PARTIDO REGIONALISTA DE MAGALLANES",
        "value": 448,
    },
    {
        "label": "C. PACTO PODER ECOLOGISTA Y CIUDADANO",
        "value": 81168
    },
    {
        "label": "D. PACTO AYSEN",
        "value": 108
    },
    {
        "label": "E. PACTO NUEVA MAYORIA",
        "value": 1760632
    },
    {
        "label": "F. PACTO CHILE VAMOS",
        "value": 1827425
    },
    {
        "label": "I. PACTO CHILE QUIERE AMPLITUD",
        "value": 38223
    },
    {
        "label": "K. PACTO CAMBIEMOS LA HISTORIA",
        "value": 19398
    },
    {
        "label": "M. PACTO PUEBLO UNIDO",
        "value": 46785
    },
    {
        "label": "N. PACTO NORTE VERDE",
        "value": 4313
    },
    {
        "label": "O. PACTO YO MARCO POR EL CAMBIO",
        "value": 92425
    },
    {
        "label": "P. PACTO ALTERNATIVA DEMOCRATICA",
        "value": 39454
    },
    {
        "label": "Q. PARTIDO UNIDOS RESULTA EN DEMOCRACIA",
        "value": 1006
    },
    {
        "label": "R. PACTO JUSTICIA Y TRANSPARENCIA",
        "value": 14920
    }
    ];
}
      
function dataI() {
  return  [
    {
        "label": "C. PACTO PODER ECOLOGISTA Y CIUDADANO",
        "value": 2168
    },
    {
        "label": "E. PACTO NUEVA MAYORIA",
        "value": 30899
    },
    {
        "label": "F. PACTO CHILE VAMOS",
        "value": 29000
    },
    {
        "label": "I. PACTO CHILE QUIERE AMPLITUD",
        "value": 2564
    },
    {
        "label": "M. PACTO PUEBLO UNIDO",
        "value": 1176
    },
    {
        "label": "P. PACTO ALTERNATIVA DEMOCRATICA",
        "value": 568
    }
    ];
}

function dataII() {
  return  [
    {
        "label": "C. PACTO PODER ECOLOGISTA Y CIUDADANO",
        "value": 1509
    },
    {
        "label": "E. PACTO NUEVA MAYORIA",
        "value": 21289
    },
    {
        "label": "F. PACTO CHILE VAMOS",
        "value": 32406
    },
    {
        "label": "I. PACTO CHILE QUIERE AMPLITUD",
        "value": 2453
    },
    {
        "label": "K. PACTO CAMBIEMOS LA HISTORIA",
        "value": 9065
    },
    {
        "label": "M. PACTO PUEBLO UNIDO",
        "value": 1049
    },
    {
        "label": "O. PACTO YO MARCO POR EL CAMBIO",
        "value": 9126
    },
    {
        "label": "P. PACTO ALTERNATIVA DEMOCRATICA",
        "value": 44
    }
    ];
}

function dataIII() {
  return  [
    {
        "label": "C. PACTO PODER ECOLOGISTA Y CIUDADANO",
        "value": 2659
    },
    {
        "label": "E. PACTO NUEVA MAYORIA",
        "value": 31802
    },
    {
        "label": "F. PACTO CHILE VAMOS",
        "value": 8879
    },
    {
        "label": "I. PACTO CHILE QUIERE AMPLITUD",
        "value": 1296
    },
    {
        "label": "O. PACTO YO MARCO POR EL CAMBIO",
        "value": 3436
    }
    ];
}
  
function dataIV() {
  return  [
    {
        "label": "E. PACTO NUEVA MAYORIA",
        "value": 82845
    },
    {
        "label": "F. PACTO CHILE VAMOS",
        "value": 33564
    },
    {
        "label": "I. PACTO CHILE QUIERE AMPLITUD",
        "value": 6808
    },
    {
        "label": "K. PACTO CAMBIEMOS LA HISTORIA",
        "value": 2595
    },
    {
        "label": "M. PACTO PUEBLO UNIDO",
        "value": 1901
    },
    {
        "label": "N. PACTO NORTE VERDE",
        "value": 4313
    },
    {
        "label": "O. PACTO YO MARCO POR EL CAMBIO",
        "value": 2701
    }
    ];
}

function dataV() {
  return  [
    {
        "label": "E. PACTO NUEVA MAYORIA",
        "value": 185847
    },
    {
        "label": "F. PACTO CHILE VAMOS",
        "value": 176654
    },
    {
        "label": "I. PACTO CHILE QUIERE AMPLITUD",
        "value": 8888
    },
    {
        "label": "M. PACTO PUEBLO UNIDO",
        "value": 8062
    },
    {
        "label": "O. PACTO YO MARCO POR EL CAMBIO",
        "value": 5560
    },
    {
        "label": "P. PACTO ALTERNATIVA DEMOCRATICA",
        "value": 6624
    },
    {
        "label": "R. PACTO JUSTICIA Y TRANSPARENCIA",
        "value": 3745
    }
    ];
}

function dataVI() {
  return  [
    {
        "label": "E. PACTO NUEVA MAYORIA",
        "value": 115387
    },
    {
        "label": "F. PACTO CHILE VAMOS",
        "value": 136855
    },
    {
        "label": "O. PACTO YO MARCO POR EL CAMBIO",
        "value": 969
    },
    {
        "label": "P. PACTO ALTERNATIVA DEMOCRATICA",
        "value": 9332
    }
    ];
}

function dataVII() {
  return  [
    {
        "label": "E. PACTO NUEVA MAYORIA",
        "value": 155161
    },
    {
        "label": "F. PACTO CHILE VAMOS",
        "value": 160430
    },
    {
        "label": "O. PACTO YO MARCO POR EL CAMBIO",
        "value": 1605
    },
    {
        "label": "P. PACTO ALTERNATIVA DEMOCRATICA",
        "value": 435
    }
    ];
}

function dataVIII() {
  return  [
    {
        "label": "C. PACTO PODER ECOLOGISTA Y CIUDADANO",
        "value": 9765
    },
    {
        "label": "E. PACTO NUEVA MAYORIA",
        "value": 294151
    },
    {
        "label": "F. PACTO CHILE VAMOS",
        "value": 235353
    },
    {
        "label": "I. PACTO CHILE QUIERE AMPLITUD",
        "value": 5423
    },
    {
        "label": "M. PACTO PUEBLO UNIDO",
        "value": 2400
    },
    {
        "label": "O. PACTO YO MARCO POR EL CAMBIO",
        "value": 7289
    },
    {
        "label": "P. PACTO ALTERNATIVA DEMOCRATICA",
        "value": 3834
    }
    ];
}

function dataIX() {
  return  [
    {
        "label": "E. PACTO NUEVA MAYORIA",
        "value": 114422
    },
    {
        "label": "F. PACTO CHILE VAMOS",
        "value": 136833
    },
    {
        "label": "I. PACTO CHILE QUIERE AMPLITUD",
        "value": 5572
    },
    {
        "label": "O. PACTO YO MARCO POR EL CAMBIO",
        "value": 6977
    },
    {
        "label": "P. PACTO ALTERNATIVA DEMOCRATICA",
        "value": 711
    }
    ];
}

function dataX() {
  return  [
    {
        "label": "C. PACTO PODER ECOLOGISTA Y CIUDADANO",
        "value": 4777
    },
    {
        "label": "E. PACTO NUEVA MAYORIA",
        "value": 103483
    },
    {
        "label": "F. PACTO CHILE VAMOS",
        "value": 80683
    },
    {
        "label": "I. PACTO CHILE QUIERE AMPLITUD",
        "value": 4711
    },
    {
        "label": "O. PACTO YO MARCO POR EL CAMBIO",
        "value": 14263
    }
    ];
}

function dataXI() {
  return  [
    {
        "label": "D. PACTO AYSEN",
        "value": 108
    },
    {
        "label": "E. PACTO NUEVA MAYORIA",
        "value": 15348
    },
    {
        "label": "F. PACTO CHILE VAMOS",
        "value": 14546
    },
    {
        "label": "O. PACTO YO MARCO POR EL CAMBIO",
        "value": 861
    },
    {
        "label": "P. PACTO ALTERNATIVA DEMOCRATICA",
        "value": 14
    }
    ];
}

function dataXII() {
  return  [
      {
        "label": "A. PARTIDO REGIONALISTA DE MAGALLANES",
        "value": 448,
    },
    {
        "label": "E. PACTO NUEVA MAYORIA",
        "value": 11200
    },
    {
        "label": "F. PACTO CHILE VAMOS",
        "value": 23100
    },
    {
        "label": "O. PACTO YO MARCO POR EL CAMBIO",
        "value": 6
    }
    ];
}

function dataRM() {
  return  [
    {
        "label": "C. PACTO PODER ECOLOGISTA Y CIUDADANO",
        "value": 54034
    },
    {
        "label": "E. PACTO NUEVA MAYORIA",
        "value": 538991
    },
    {
        "label": "F. PACTO CHILE VAMOS",
        "value": 688882
    },
    {
        "label": "K. PACTO CAMBIEMOS LA HISTORIA",
        "value": 7738
    },
    {
        "label": "O. PACTO YO MARCO POR EL CAMBIO",
        "value": 36980
    },
    {
        "label": "P. PACTO ALTERNATIVA DEMOCRATICA",
        "value": 6361
    },
    {
        "label": "R. PACTO JUSTICIA Y TRANSPARENCIA",
        "value": 11175
    }
    ];
}

function dataXIV() {
  return  [
    {
        "label": "C. PACTO PODER ECOLOGISTA Y CIUDADANO",
        "value": 3261
    },
    {
        "label": "E. PACTO NUEVA MAYORIA",
        "value": 50878
    },
    {
        "label": "F. PACTO CHILE VAMOS",
        "value": 59346
    },
    {
        "label": "O. PACTO YO MARCO POR EL CAMBIO",
        "value": 2652
    }
    ];
}

function dataXV() {
  return  [
    {
        "label": "C. PACTO PODER ECOLOGISTA Y CIUDADANO",
        "value": 2995
    },
    {
        "label": "E. PACTO NUEVA MAYORIA",
        "value": 8929
    },
    {
        "label": "F. PACTO CHILE VAMOS",
        "value": 10894
    },
    {
        "label": "I. PACTO CHILE QUIERE AMPLITUD",
        "value": 508
    },
    {
        "label": "M. PACTO PUEBLO UNIDO",
        "value": 499
    },
    {
        "label": "P. PACTO ALTERNATIVA DEMOCRATICA",
        "value": 11531
    },
    {
        "label": "Q. PARTIDO UNIDOS RESULTA EN DEMOCRACIA",
        "value": 1006
    }
    ];
}