$(function() {

    var start;
    var counter;

    function getRandomNumber(i){
        $.ajax({
            url: "/",
            type: "POST",
            dataType: "html",
            success: function(response){
                var name = "#num-" + i;
                $(name).text(response);
                counter += 1;
                if (counter == 3) {
                    var avg = (parseFloat($("#num-1").text()) + parseFloat($("#num-2").text()) + parseFloat($("#num-3").text()))/3.0;
                    $("#avg").text(avg);
                    var end = new Date().getTime();
                    $("#time").text(end - start);
                }
            }
        });
    };


    function loadData(){
        start = new Date().getTime();
        counter = 0;
        getRandomNumber(1);
        getRandomNumber(2);
        getRandomNumber(3);
    };

    $('#generateButton2').click(loadData);
});

