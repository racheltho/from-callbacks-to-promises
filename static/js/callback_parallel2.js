$(function() {

    function mean(array){
        return _.reduce(array, function(sum, a) { return sum + parseFloat(a)}, 0) / array.length;
    }

    function loadData(){
        var start = new Date().getTime();
        var results = [];
        $("li").each(function(i){
            var $li = $(this);
            $.ajax({
                url: "/",
                type: "POST",
                dataType: "html",
                success: function(response){
                    $li.text(response);
                    results.push(response);
                    if (results.length == $("li").length) {
                        var avg = mean(results);
                        $("#avg").text(avg);
                        var end = new Date().getTime();
                        $("#time").text(end - start);
                    }
                }
            });
        });
    };

    $('#generateButton3').click(loadData);
});

