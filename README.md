# es6

learn ES6 from below

[github](https://github.com/BrianGenisio/learnharmony)
[lernharmony.org](http://learnharmony.org/#)


## http://learnharmony.org/#lessons/arrow-functions

```js

var values = [1, 2, 3, 4, 5, 6];

var even = values.filter(x => x % 2 === 0);
var evenSquares = even.map(x => x * x);

console.log(even, evenSquares);


// write without ES6

var even2 = (function(){
  var hoge = values, fuga= [];
  for(var i in hoge) {
    if(hoge[i] % 2 === 0) fuga.push(hoge[i]);
  }
  return fuga;
})();
console.log(even2);

var evenSquares2 = (function(){
  var hoge = even2, fuga = [];
  for(var i in hoge) {
    fuga.push(hoge[i] * hoge[i]);
  }
  return fuga;  
})();
console.log(evenSquares2);

```


## http://learnharmony.org/#lessons/destructuring

```
var person = {
    first: 'Marsellus',
    last: 'Wallace'
};


let {first, last} = person;
console.log(first, last); // console: Marsellus wallace

// same as below
var first = person.first;
var last = person.last;
console.log(first, last); // console: Marsellus wallece


// you can use different names
let {first: fn, last: ln} = person;
console.log(fn, ln); // console: Marsellus wallece


function getResult() {
    return {
        result: 1234,
        error: null
    };
}
let {result, error} = getResult();
console.log(result, error); // 1234 null


// it look like strange, but run
function doHTTP({host, port, path}) {
    console.log(host, port, path);
}
doHTTP({
    host: 'learnharmony.org',
    port: 80,
    path: '/'
});


let person = {
    first: 'Marsellus',
    last: 'Wallace',
    spouse: {
        first: 'Mia',
        last: 'Wallace'
    }
};
let {first: husband, last, spouse: { first: wife } } = person;
console.log(wife, husband, last); // console: Mia Marsellus Wallace


```













---

## Links

(Hello, ES6)[http://yoshiko-pg.github.io/slides/20150425-jsfes/]
