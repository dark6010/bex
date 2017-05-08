'use strict'
var express= require('express'),
    router= express.Router()
function jade(req,res,next){
    let locals= {
        title: 'Jade',
        link: 'https://github.com/pugjs/pug',
        description: 'jade es un template engine'
    }
    res.render('index',locals)
}
router
    .get('/', (req,res) => {
        res.end('<h1>terminamos la condifuracion de nuestra primer app en express</h1>')
    })
    .get('/jade', jade)
module.exports= router