$(function() {

    results = [];

    function get_random(i, on_done, start_time, total){
        $.ajax({
            url: "/",
            type: "POST",
            dataType: "html",
            success: function(response){
                var name = "#num-" + i;
                $(name).text(response);
                results.push(response);
                if(results.length == total){
                    on_done(start_time);
                }
            }
        });
    };

    function calculate_average(start) {
        var avg = (parseFloat($("#num-1").text()) + parseFloat($("#num-2").text()) + parseFloat($("#num-3").text()))/3.0;
        $("#avg").text(avg);
        console.log("calculating average");
        var end = new Date().getTime();
        var time = end - start;
        $("#time").text(time);
    };

    function get_all(array_of_functions, on_done, start_time) {
        var total = array_of_functions.length;
        for(var i=0; i < total; i++){
            array_of_functions[i](i + 1, on_done, start_time, total);
        };
    }

    function loadData(){
        var start = new Date().getTime();
        console.log(start);
        get_all([get_random, get_random, get_random],
                calculate_average, start);
    };

    $('#generateButton4').click(loadData);

});

