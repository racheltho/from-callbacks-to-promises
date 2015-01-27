$(function() {

    function mean(array){
        return _.reduce(array, function(sum, a) { return sum + parseFloat(a)}, 0) / array.length;
    }

    function get_all(array_of_functions, on_done) {
        total = array_of_functions.length;
        for(var i=0; i < total; i++){
            array_of_functions[i](on_done);
        };
    }

    var results = [];
    var start;
    var total;

    function create_function (i) {
        return function (on_done) {
            return $.ajax({
                url: "/",
                type: "POST",
                dataType: "html",
                success: function(response){
                    var name = "#num-" + i;
                    $(name).text(response);
                    results.push(response);
                    if(results.length == total){
                        on_done();
                    }
                }
            })
        }
    };

    function calculate_average() {
        var avg = mean(results);
        $("#avg").text(avg);
        var end = new Date().getTime();
        $("#time").text(end - start);
    };

    function loadData(){
        start = new Date().getTime();
        get_random1 = create_function(1);
        get_random2 = create_function(2);
        get_random3 = create_function(3);
        get_all([get_random1, get_random2, get_random3],
                calculate_average);
    };

    $('#generateButton4').click(loadData);

});

