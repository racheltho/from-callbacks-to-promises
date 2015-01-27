# from-callbacks-to-promises
This project includes 6 versions of a js script to request three random numbers and take their average.  The different
scripts use callbacks or promises, act sequentially or in parallel, and include a few other refactors (like using 
underscore js and $.each). Explore the scripts (located in the static/js/ directory) to see many ways to do the same 
thing.  The random numbers are served by a simple flask app that adds a time delay to each request, and the total 
time taken is displayed.

To serve the random number endpoint, run `python get_random.py` from the terminal, and then go to `http://localhost:5000/static/index.html` in your browser. 

Recommended articles on promises:
- [Five Patterns to Help You Tame Asynchronous JavaScript](http://tech.pro/blog/1402/five-patterns-to-help-you-tame-asynchronous-javascript)
- [You're missing the point of promises](https://blog.domenic.me/youre-missing-the-point-of-promises/)
- [HTML5Rocks: Javscript Promises](http://www.html5rocks.com/en/tutorials/es6/promises/)
