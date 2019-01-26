var http = require('http');
var fs = require('fs');
var url = require('url');
var port = process.argv[2];

var server = http.createServer(function(request, response) {
    var parsedUrl = url.parse(request.url, true);
    var pathWithQuery = request.url;
    var queryString = '';
    if (pathWithQuery.indexOf('?') >= 0){ queryString = pathWithQuery.substring(pathWithQuery.indexOf('?')) };
    var path = parsedUrl.pathname;
    var query = parsedUrl.query;
    var method = request.method;

    console.log('HTTP 路径为\n' + path);

    if (path == '/style') {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/css;charset=utf-8');
        response.write('\n服务器连接成功 路径为/style');
        response.write('\nbody{background-color:#ddd};\nh1{color:red}\n');
        response.end();
    } else if (path == '/script') {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/javascript;charset=utf-8');
        response.write('\n服务器连接成功 路径为/script');
        response.end();
    } else if (path == '/') {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html;charset=utf-8');
        response.write('<!DOCTYPE>\n<html>\n<head>' +
            "\n<link rel='stylesheet' href='/style'>" +
             '\n</head>\n<body>\n<h1>你好!</h1>' +
             "\n<script src='/main.js'></script>" +
             '\n</body>\n</html>' );
        response.write('\n服务器连接成功 路径为/');
        response.end();
    } else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html;charset=utf-8');
        response.write('\n服务器连接成功，但网页不存在');
        response.end();
    };
});

server.listen(port)
console.log('监听 ' + port + ' 成功\n请另开一个命令窗口中输入 curl http://localhost:' + port + '/HTTP路径')
