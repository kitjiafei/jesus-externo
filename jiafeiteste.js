var http = require('http');
var n = require('./jiafeimodulo');
var dia = require('./jiafeidata');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<b>Aula de Node.js</b><br>');
    res.write('<i>omgggggggggg wani wo i ru ji wang');
    res.write(n.nome()+'<br>');
    res.write(dia.diaDaSemana()+'<br>');
    res.end('<br>Bom dia!');
}).listen(80);