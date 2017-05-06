const express = require('express');
const app = express();
const port = 5000;
const host = '0.0.0.0';

app.get('/', (req, res)=> { 
    var hora = Date();
    res.send('Hola Mundo, la hora es: '  + hora);
});

app.listen(port, host, ()=>{
    console.log(`Listening in http://${host}:${port}`);
});