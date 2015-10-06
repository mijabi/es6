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

