
$(function() {
    "use strict";
    // ============================================================== 
    // Revenue
    // ============================================================== 
 var ctx = document.getElementById('revenue').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'line',

                data: {
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    datasets: [{
                        label: 'Current Week',
                        data: [12, 19, 3, 17, 6, 3, 7],
                      backgroundColor: "rgba(89, 105, 255,0.5)",
                                    borderColor: "rgba(89, 105, 255,0.7)",
                                    borderWidth: 2
                        
                    }, {
                        label: 'Previous Week',
                        data: [2, 29, 5, 5, 2, 3, 10],
                          backgroundColor: "rgba(255, 64, 123,0.5)",
                                    borderColor: "rgba(255, 64, 123,0.7)",
                                    borderWidth: 2
                    }]
                },
                options: {
                        
                             legend: {
                        display: true,
                        position: 'bottom',

                        labels: {
                            fontColor: '#71748d',
                            fontFamily: 'Circular Std Book',
                            fontSize: 14,
                        }
                    },
                    scales: {
            yAxes: [{
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function(value, index, values) {
                        return '$' + value;
                    }
                }
            }]
        },


         scales: {
                                    xAxes: [{
                                        ticks: {
                                            fontSize: 14,
                                            fontFamily: 'Circular Std Book',
                                            fontColor: '#71748d',
                                        }
                                    }],
                                    yAxes: [{
                                        ticks: {
                                            fontSize: 14,
                                            fontFamily: 'Circular Std Book',
                                            fontColor: '#71748d',
                                        }
                                    }]
                                }
        
                }
            });
   
    // ============================================================== 
    // Total Sale
    // ============================================================== 
 var ctx = document.getElementById("total-sale").getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'doughnut',
                
                data: {
                    labels: ["Sample Text 1", " Sample Text 2", "Sample Text 3", "Sample Text 4"],
                    datasets: [{
                        backgroundColor: [
                            "#1bbaa4",
                            "#ff407b",
                            "#25d5f2",
                            "#ffc750"
                        ],
                        data: [350.56, 135.18, 48.96, 154.02]
                    }]
                },
                options: {
                    legend: {
                        display: false

                    }
                }

            });
      

});