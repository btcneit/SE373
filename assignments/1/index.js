

var http = require('http');
var url = require('url');
var fileSystem = require('fs');

http.createServer(function (request, response) {
    
    var pathName = url.parse(request.url).pathname;
    var fileName = pathName.substr(1); /* lets remove the "/" from the name */

    switch(pathName){
        case '/':
        case '/index':
            fileName = "./templates/index.html";
            break;
        case '/todo':
            fileName = "./data/todo.json";
            break;
        case '/read-todo':
            fileName = "./templates/read-todo.html";
            break;
        default:
            break;
    }

    /* lets try to read the html page found */
    fileSystem.readFile(fileName , callback);

    function callback(err, data) {
        if (err) {
            console.error(err);
            response.writeHead(400, {'Content-Type': 'text/html'});   
            response.write('<!DOCTYPE html><html><body><div>Page Not Found</div></body></html>');
        }else{
            if(fileName == "./data/todo.json"){
                response.writeHead(200, {'Content-Type': 'text/plain'});   
            }else{
                response.writeHead(200, {'Content-Type': 'text/html'});      
            }
            
            response.write(data.toString()); 

        }
        /* the response is complete */
        response.end();
    }

   
}).listen(3000);

// Console will print the message
console.log('Server running at http://localhost:3000/index.html');