const http = require('http')

http.createServer(function(req, res) {
	res.write('on my way to be a fe engineer!');
	res.end();
}).listen(3000)

console.log('Server started on port 3000')

