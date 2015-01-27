$(function() {

    function mean(array) {
        return _.reduce(array, function(sum, a) { return sum + parseFloat(a)}, 0) / array.length;
    };

    var results;
    var start;

    function calculate_average(){
        $("#avg").text(mean(results));
        var end = new Date().getTime();
        $("#time").text(end - start);
    };

    function create_function (i) {
            return $.ajax({
                    url: "/",
                    type: "POST",
                    dataType: "html",
                    success: function(response){
                        $("#num-" + i.toString()).text(response);
                        results.push(response);
                    }
                })
    };

    function loadData(){
        results = [];
        start =  new Date().getTime();
        console.log("here");
        get_random1 = create_function(1);
        get_random2 = create_function(2);
        get_random3 = create_function(3);
        $.when(get_random1, get_random2, get_random3)
        .then(calculate_average);
    };

    $('#generateButton6b').click(loadData);
});

