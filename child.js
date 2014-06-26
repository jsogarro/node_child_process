var spawn = require('child_process').spawn,
  python = spawn('python', ['sci-kit.py', 'options']);
  pandas = spawn('python', ['pandas-test.py', 'options']);

//
python.stdout.on('data', function(data) {
  var message = data;

  message = message;
  type = typeof(message);

  console.log(type);
  console.log('' + message);
});

// error output
python.stderr.on('data', function(data) {
  console.log('stderr: ' + data);
});

// Output message after child process is completed running
python.on('close', function(code) {
  console.log('child process exited with code ' + code);
});

pandas.stdout.on('data', function(data) {
	// convert JSON returned by Python script to JS object
	var json = JSON.parse(data);

	console.log('stdout: %j', json);
});

// error output
pandas.stderr.on('data', function(data) {
  console.log('stderr: ' + data);
});

// Output message after child process is completed running
pandas.on('close', function(code) {
  console.log('child process exited with code ' + code);
});