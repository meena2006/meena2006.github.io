if ($(".menu-list").length) {
    $('.menu-list').slimScroll({

    });
}


(function($) {
    "use strict";
    $("#sidebarToggle").on("click", function(e) {
        e.preventDefault();
        $("body").toggleClass("sidenav-toggled");
    });
})(jQuery);


$('.count').each(function() {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 3000,
        easing: 'swing',
        step: function(now) {
            $(this).text(Math.ceil(now));
        }
    });
});

new CircleProgress('.progress1', {
    max: 10,
    value: 5,
    textFormat: 'horizontal',
});
new CircleProgress('.progress2', {
    max: 8,
    value: 2,
    textFormat: 'horizontal',
});

var config = {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'User Count',
            backgroundColor: '#fff',
            borderColor: '#145388',
            pointRadius: 5,
            pointHoverRadius: 8,
            pointBorderWidth: 2,
            fill: false,
            data: [
                0,
                120,
                180,
                220,
                260,
                340,
                420
                /*randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()*/
            ],
        }]
    },
    options: {
        responsive: true,
        title: {
            display: false,
            text: 'Chart.js Line Chart - Logarithmic'
        },
        tooltips: {
            titleFontColor: '#333',
            backgroundColor: '#fff',
            borderColor: '#ddd',
            borderWidth: '2',
            callbacks: {
                label: function(tooltipItem, data) {
                    var label = data.datasets[tooltipItem.datasetIndex].label || '';

                    if (label) {
                        label = ' ';
                    }
                    label += Math.round(tooltipItem.yLabel * 100) / 100;
                    return label;
                },
                labelColor: function(tooltipItem, chart) {
                    return {
                        borderColor: '#145388',
                        backgroundColor: '#ffffff'
                    };
                },
                labelTextColor: function(tooltipItem, chart) {
                    return '#333';
                }
            },

        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: false,
                    labelString: 'Date'
                },
                gridLines: {
                    drawOnChartArea: false
                },


            }],
            yAxes: [{
                display: true,
                //type: 'logarithmic',

                scaleLabel: {
                    display: false,
                    labelString: 'Index Returns'
                },

                ticks: {
                    min: 0,
                    max: 500,

                    // forces step size to be 5 units
                    stepSize: 100
                }
            }]
        }
    }
};

window.onload = function() {
    var ctx = document.getElementById('canvas').getContext('2d');
    window.myLine = new Chart(ctx, config);
};