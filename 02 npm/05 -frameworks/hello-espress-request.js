'mode strict'
var express= require('express'),
    app= express()
app
    .get('/', (req, res) =>{
        res.end('<h1>hola mundo desde express</h1>')
    })
    .get('/user/:id-:name-:age', (req, res) =>{
        res.end(`<h1>Bienvenido a express tu id: ${req.params.id} tu nombre es ${req.params.name} tu edad es ${req.params.age}</h1>`)
    })
    .get('/search', (req, res) =>{
        res.end(`<h1>hola mundo desde express</h1>
            <mark>${req.query.s}</mark>
        `)
    })
    .listen(80)
console.log('iniciando express en el puerto 80')
//http://localhost/user/1-grover-27
//http://localhost/search?s=algo