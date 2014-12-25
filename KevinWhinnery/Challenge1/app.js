var http = require('http'),
    fs = require('fs');
//https://github.com/kwhinnery/node-workshop

http.createServer(function(request, response) {

    fs.readFile('./KevinWhinnery/Challenge1/data.csv', 'utf-8', function(err, data) {
        var responseData = {};
        if(!err){
            var lines = data.split('\n');
            lines.forEach(function(line) {
                var parts = line.split(',');
                responseData[parts[0]] = parts[1];
            });

            response.writeHead(200, {
                'Content-Type':'application/json'
            });
            response.end(JSON.stringify(responseData));
        }

    });

}).listen(3000);

console.log('node server running on port 3000');