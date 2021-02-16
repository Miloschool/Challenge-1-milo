// Fuel
var ctx = document.getElementById('chartSpeed').getContext('2d');






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
            backgroundColor: [ gradientStroke, '#939393'],
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
        label: 'Dataset 1',
        borderColor: '#fff',
        borderWidth: 2,
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
           
            
            borderColor: 'rgb(75, 192, 192)',
            borderWidth: 4,
            label: {
              enabled: true,
              content: 'Test label'
            }
          }]
        }
      }
  });



