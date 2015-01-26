$(function() {

    function mean(array) {
        return _.reduce(array, function(sum, a) { return sum + parseFloat(a)}, 0) / array.length;
    };

    var results;
    var start;

    function calculate_average(){
        console.log("calculating average...");
        console.log(results);
        $("#avg").text(mean(results));
        var end = new Date().getTime();
        $("#time").text(end - start);
    };

    function create_function (i) {
        return function () {
            $.ajax({
                    url: "/",
                    type: "POST",
                    dataType: "html",
                    success: function(response){
                        console.log(i);
                        $("#num-" + i.toString()).text(response);
                        results.push(response);
                        console.log("get random " + i.toString());
                        console.log(results);
                    }
                })
        }
    };

    function loadData(){
        results = [];
        start =  new Date().getTime();
        console.log("here");
        get_random1 = create_function(1);
        get_random2 = create_function(2);
        get_random3 = create_function(3);
        var dfd = new $.Deferred();
        dfd.promise().then(get_random1)
        .then(get_random2)
        .then(get_random3)
        .then(calculate_average);
        dfd.resolve();
    };

    $('#generateButton6').click(loadData);
});

