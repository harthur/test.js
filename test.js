var util  = require('util'),
    spawn = require('child_process').spawn;


for (var i = 0; i < 5; i++) {
  var test2 = spawn('node', ['test2.js', i]);

  test2.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
  });

  test2.stderr.on('data', function (data) {
    console.log('stderr: ' + data);
  });

  test2.on('exit', function (code) {
    console.log('child process exited with code ' + code);
  });
}
