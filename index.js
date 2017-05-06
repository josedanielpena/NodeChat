const express = require('express');
const path = require('path');
const host = 'localhost';
const port = 5001;

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);


//app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/public/index.html');
});

app.get('/pruebas', (req, res)=> { 
    var hora = Date();
    res.send('Hola Mundo, la hora es: '  + hora);
});

io.on('connection', function (socket) {
    console.log("nuevo cliente conectado");
  socket.emit('Room 1', { hello: 'world' });
  socket.on('Room Test', function (data) {
    console.log(data);
  });
});

server.listen(port, host, ()=>{
    console.log(`Listening in http://${host}:${port}`);
});