'mode strict'
var express= require('express'),
    app= express()
app
    .get('/', (req, res) =>{
    res.end('<h1>hola mundo desde express</h1>')
})
    .listen(80)
console.log('iniciando express en el puerto 80')