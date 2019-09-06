const fs = require('fs');

const bytes = fs.readFileSync(`${__dirname}/fibonacci_c.wasm`);
WebAssembly.instantiate(bytes).then(result => {
  console.log(result.instance.exports.fibonacci_c(13));
});