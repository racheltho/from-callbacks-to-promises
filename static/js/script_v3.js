$(function() {
    function loadData(){
        var start = new Date().getTime();
        var counter = 0;
        $("li").each(function(i){
            var $li = $(this);
            $.ajax({
                url: "/",
                type: "POST",
                dataType: "html",
                success: function(response){
                    $li.text(response);
                    counter += 1;
                    if (counter == 3) {
                        var avg = (parseFloat($("#num-1").text()) + parseFloat($("#num-2").text()) + parseFloat($("#num-3").text()))/3.0;
                        $("#avg").text(avg);
                        var end = new Date().getTime();
                        var time = end - start;
                        $("#time").text(time);
                    }
                }
            });
        });
    };

    $('#generateButton3').click(loadData);
});

