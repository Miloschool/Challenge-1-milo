// Speed
var ctx = document.getElementById('chartSpeed').getContext('2d');
Chart.defaults.global.legend.display = false;



// Speed colors
var gradientStroke = ctx.createLinearGradient(200, 0, 50, 20);
gradientStroke.addColorStop(1, '#45D720');
gradientStroke.addColorStop(0.5, '#F3A939');
gradientStroke.addColorStop(0, '#EA6060');




var chart = new Chart(ctx, {
  type: 'doughnut',

  data: {
    datasets: [{
      label: 'Fuel',
      backgroundColor: [gradientStroke, '#939393'],
      borderColor: '#787878',
      borderWidth: '3',
      data: [100, 20],
    }]
  },
  // Configuration options go here
  options: {
    responsive: true,
    rotation: 1 * Math.PI,
    circumference: 1 * Math.PI
  }
});




// Accerleration 
var ctxAcc = document.getElementById("chartAcceleration").getContext("2d");
var myChart = new Chart(ctxAcc, {
  type: 'line',

  data: {
    labels: ["0", "1", "2", "3", "4", "5"],
    datasets: [{
      borderColor: '#F58A8A',
      backgroundColor: '#F58A8A',
      borderWidth: 4,
      steppedLine: true,
      fill: false,
      data: [-10, 30, 50, 90, 30, 10]
    }]
  },

  options: {
    fullWidth: true,
    responsive: true,
    tooltips: {
      mode: 'index',
      intersect: true
    },
    annotation: {
      annotations: [{
        type: 'line',
        mode: 'horizontal',
      }]
    },

    // customize Axes lines 
    scales: {
      xAxes: [{
        gridLines: {
          display: false,
        },
        ticks: {
          fontColor: "#fff", // color change for ticks

        },

        gridLines: {
          display: true,
          zeroLineColor: '#fff',
          zeroLineWidth: 2,
        }
      }],
      yAxes: [{
        display: true,
        gridLines: {
          display: true,
        },
        ticks: {
          fontColor: "#fff", // this here
        },
        gridLines: {
          display: true,
          zeroLineColor: '#fff',
          zeroLineWidth: 2,
        }
      }],
    }
  }
});


// Fuel

var ticks = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0]; // custom ticks xAxes
var ctxFuel = document.getElementById('chartFuel').getContext('2d');

var myBarChart = new Chart(ctxFuel, {
  type: 'horizontalBar',
  data: {
    datasets: [{
      backgroundColor: ['#45D720'],
      label: 'Fuel',
      data: [84]
    }]
  },

  options: {
    scales: {
      xAxes: [{
        ticks: {
          fontColor: "#fff", 
          autoSkip: false,
          min: ticks[ticks.length - 1],
          max: ticks[0]
        },
        afterBuildTicks: function (scale) {
          scale.ticks = ticks;
          return;
        },
        beforeUpdate: function (oScale) {
          return;
        },
        gridLines: {
          display: true,
          zeroLineColor: '#3F4347',
          zeroLineWidth: 2,
        }
      }]
    }
  }
});



// Distance

var ctxDist = document.getElementById('chartDistance').getContext('2d');

var myChartDistance = new Chart(ctxDist, {
  type: 'line',

  data: {
    labels: ["0", "1", "2", "3", "4", "5", "6"],
    datasets: [{
      borderColor: '#58E5C4',
      backgroundColor: '#58E5C4',
      borderWidth: 4,
      fill: false,
      data: [0, 5, 15, 32, 52, 74, 98]
    }]
  },

  options: {
    responsive: true,
    tooltips: {
      mode: 'index',
      intersect: true
    },
    fullWidth: true,
    annotation: {
      annotations: [{
        type: 'line',
        mode: 'horizontal',
      }]
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false,
        },
        ticks: {
          fontColor: "#fff", 
        },

        gridLines: {
          display: true,
          zeroLineColor: '#fff',
          zeroLineWidth: 2,
        }
      }],

      yAxes: [{
        display: true,
        gridLines: {
          display: true,
        },
        ticks: {
          fontColor: "#fff",
        },
        gridLines: {
          display: true,
          zeroLineColor: '#fff',
          zeroLineWidth: 2,

        }
      }],
    }

  }
});