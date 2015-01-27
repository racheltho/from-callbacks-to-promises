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
        return function () {
            return $.ajax({
                    url: "/",
                    type: "POST",
                    dataType: "html",
                    success: function(response){
                        console.log(i);
                        $("#num-" + i.toString()).text(response);
                        results.push(response);
                    }
                })
        }
    };

    function loadData(){
        results = [];
        start =  new Date().getTime();
        get_random1 = create_function(1);
        get_random2 = create_function(2);
        get_random3 = create_function(3);
        get_random1().then(get_random2)
        .then(get_random3)
        .then(calculate_average)
        .fail(function() {
                alert( "There was an error!" );
        });
    };

    $('#generateButton6').click(loadData);
});

