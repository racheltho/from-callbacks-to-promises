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

    function get_random(i) {
        return $.ajax({
                url: "/",
                type: "POST",
                dataType: "html",
                success: function(response){
                    $("#num-" + i.toString()).text(response);
                    results.push(response);
                    console.log("get random " + i.toString());
                    console.log(results);
                }
            })
    };

    function loadData(){
        results = [];
        start =  new Date().getTime();
        var dfd = new $.Deferred();
        dfd.promise().then(get_random(1))
        .then(get_random(2))
        .then(get_random(3))
        .then(calculate_average());
    };

    $('#generateButton6').click(loadData);
});

