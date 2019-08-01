var fs = require('fs');

var bytes = fs.readFileSync(`${__dirname}/fibonacci-c.wasm`);
var module = WebAssembly.instantiate(bytes).then(result => {
  console.log(result.module);
  var e = result.instance.exports;
  console.log(e);
  var fib = e.a;
  console.log(fib);
  console.log(fib(13));
});