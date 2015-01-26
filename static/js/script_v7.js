$(function() {

    function mean(array) {
        return _.reduce(array, function(sum, a) { return sum + parseFloat(a)}, 0) / array.length;
    };

    function RPromise () {

        this.then = function(wrappedFn, wrappedThis) {
          this.next = new RPromise(wrappedFn, wrappedThis);
          return this.next;
        };

        this.run = function() {
          wrappedFn.promise = this; // a stupid trick, read below
          wrappedFn.apply(wrappedThis);
        };

        this.complete = function() {
          if (this.next) {
            console.log(this.next);
            this.next.run();
          }
        };

    };

    RPromise.create = function(func) {
        if (func.hasOwnProperty('promise')) {
            return func.promise;
        } else {
            return new RPromise();
        }
    };


    var results;
    var start;

    function calculate_average(){
        var promise = RPromise.create(calculate_average);
        console.log("calculating average...");
        console.log(results);
        $("#avg").text(mean(results));
        var end = new Date().getTime();
        $("#time").text(end - start);
        promise.complete();
        return promise;
    };

    function get_random1() {
            var promise = RPromise.create(get_random1);
            $.ajax({
                    url: "/",
                    type: "POST",
                    dataType: "html",
                    success: function(response){
                        console.log(1);
                        $("#num-1").text(response);
                        results.push(response);
                        console.log("get random1");
                        console.log(promise);
                        promise.complete();
                    }
                });
            return promise;
    };

    function get_random2() {
            var promise = RPromise.create(get_random2);
            $.ajax({
                    url: "/",
                    type: "POST",
                    dataType: "html",
                    success: function(response){
                        console.log(2);
                        $("#num-2").text(response);
                        results.push(response);
                        console.log("get random2");
                        console.log(results);
                        promise.complete();
                    }
                });
            return promise;
    };

    function loadData(){
        results = [];
        start =  new Date().getTime();
        console.log("here");
        get_random1()
        .then(get_random2)
        .then(calculate_average);
    };

    $('#generateButton7').click(loadData);
});

