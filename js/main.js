// Fuel
var ctx = document.getElementById('chartSpeed').getContext('2d');

Chart.defaults.global.legend.display = false;




var gradientStroke = ctx.createLinearGradient(200, 0, 50, 20);
gradientStroke.addColorStop(1, '#45D720');

gradientStroke.addColorStop(0.5, '#F3A939');
gradientStroke.addColorStop(0, '#EA6060');




var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'doughnut',




  // The data for our dataset
  data: {

    datasets: [{
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



    // Custome gridlines


    // customize Axes lines 
    scales: {
      xAxes: [{
        gridLines: {
          display: false,
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



//  Fuel bar
var ctxFuel = document.getElementById('chartFuel').getContext('2d');

var myBarChart = new Chart(ctxFuel, {
  type: 'bar',
  data: data,
  options: options
});