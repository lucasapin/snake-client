const connect = require('./client');
console.log('Connecting ...');


const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  const handleUserInput = ('data', (stdin) =>{
    if (key === 'ctrl + c') {
      process.exit();
    }
  })
  return stdin;
}


connect();
