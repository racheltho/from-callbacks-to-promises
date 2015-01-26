$(function() {
    function mean(arr) {
        return _.reduce(arr, function(sum, a) { return sum + a }, 0) / arr.length;
    }

    function get_all(urls, on_done) {
        var tot = urls.length;
        var res = [];

        _.each(urls, function(url){
            $.ajax({
                url: url, dataType: "html",
                success: function(response){
                    res.push(response);
                    if (res.length == tot) { on_done(res); }
                }
            });
        });
    }

    function loadData(){
        var start = new Date().getTime();

        urls = _.map(_.range(3), function(x) {return "/?q=" + x})

        get_all(urls, function(res) {
            $("li").each(function(i) { $(this).text(res[i]); });
            var avg = mean(_.map(res, parseFloat));
            $("#avg").text(avg);
            var end = new Date().getTime();
            $("#time").text(end - start);
        });
    };

    $('#generateButton5').click(loadData);
});

