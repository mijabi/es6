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
```

write without ES6

```js
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
```

upon code is same as below

```js
var first = person.first;
var last = person.last;
console.log(first, last); // console: Marsellus wallece
```

you can use different names

```
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
```

it looks strange, but run

```js
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

## http://learnharmony.org/#lessons/property-shorthand

```js
function makeParent(first, last) {
    return {first, last, isParent: true};
}

console.log(makeParent('Darth', 'Vader'));
```

object sohrt hand makes me confused, {first, last, isParent: true} just means {first: first, last, last, isParent: true}

## http://learnharmony.org/#lessons/method-shorthand

```js
var chopper = {
    owner: 'Zed',
  getOwner() { return this.owner; }
};

console.log("Who's chopper is this?");
console.log("It's " + chopper.getOwner() + "'s" );
```

you can use shorthand like this,
getOwner: function() { return this.owner; } → getOwner() { return this.owner; }




---

## Links

[Learn ES6](http://learnharmony.org/#lessons/)
[Hello, ES6](http://yoshiko-pg.github.io/slides/20150425-jsfes/)
[Mozilla](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

[es6-features](http://es6-features.org/#Constants)

[ECMAScript 2015 特集](https://html5experts.jp/series/ecma2015/)[1000ch](https://html5experts.jp/1000ch/16984/)
[1000ch](https://html5experts.jp/1000ch/16995/)
