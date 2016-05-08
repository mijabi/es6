function taggedStr(formats, ...args) {
  console.log(formats);
  console.log(args);
  return formats[0] + '[' + args[0] + ']' + formats[1] + '[' + args[1] + ']' + formats[2];
  
}
let greeting = 'こんにちは', name = '山田';

console.log(taggedStr`${greeting}、${name}さん！`);
