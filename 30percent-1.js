const SECRET = Symbol();
class MyClass {
  constructor(secret) {
    this.data1 = 1;
    this.data2 = 2;
    this[SECRET] = secret;
  }
  
  checkSecret(secret) {
    return this[SECRET] === secret;
  }
}

let c = new MyClass(12345);
console.log(c.checkSecret(12345));
console.log(c.secret);
console.log(Object.keys(c));
for(let k in c) {
  console.log(k);
}
console.log(JSON.stringify(c));

// true
// 
// ["data1","data2"]
// data1
// data2
// {"data1":1,"data2":2}