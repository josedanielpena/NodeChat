const express = require('express');
const path = require('path');
const app = express();
const port = 5000;
const host = '0.0.0.0';

app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/pruebas', (req, res)=> { 
    var hora = Date();
    res.send('Hola Mundo, la hora es: '  + hora);
});

app.listen(port, host, ()=>{
    console.log(`Listening in http://${host}:${port}`);
});