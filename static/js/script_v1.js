$(function() {
    function loadData(){
        var start = new Date().getTime();
        $.ajax({
            url: "/",
            type: "POST",
            dataType: "html",
            success: function(response1){
                $("#num-1").text(response1);
                $.ajax({
                    url: "/",
                    type: "POST",
                    dataType: "html",
                    success: function(response2) {
                        $("#num-2").text(response2);
                        $.ajax({
                            url: "/",
                            type: "POST",
                            dataType: "html",
                            success: function(response3) {
                                $("#num-3").text(response3);
                                var avg = (parseFloat($("#num-1").text()) +
                                    parseFloat($("#num-2").text()) +
                                    parseFloat($("#num-3").text()))/3.0;
                                $("#avg").text(avg);
                                var end = new Date().getTime();
                                var time = end - start;
                                $("#time").text(time);
                            }
                        });
                    }
                });
            }
        });
    }

    $('#generateButton1').click(loadData);
});

