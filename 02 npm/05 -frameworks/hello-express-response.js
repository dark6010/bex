'mode strict'
var express= require('express'),
    app= express()
app
    .get('/', (req, res) =>{
    res.send('<h1>hola mundo desde express</h1>')
    })
    .get('/ghostlan', (req, res) =>{
    res.redirect(301,'http://clasificados.lostiempos.com/')
    })
    .get('/json', (req, res) =>{
    res.json({
        name:"grover",
        age: 28,
        gmail: "grover.plaza@gmail"
    })
    })
    .listen(80)
console.log('iniciando express en el puerto 80 31 now')