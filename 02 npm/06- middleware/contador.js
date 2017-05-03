'use strict'
var express= require('express'),
    app= express(),
    cookieParser= require('cookie-parser'),
    cookieSession= require('cookie-session')
app
    .use(cookieParser())
    .use(cookieSession({secret: "secreto"}))
    .get('/', (req, res)=>{
        req.session.visitas || (req.session.visitas=0)
        let n= req.session.visitas++
        res.send(`
            <h1>
                holas desde home me has visitado ${n} veces
            </h1>
        `)
        })
    .listen(80)
console.log('iniciado espress en el pueto 80')
//middelware filtros procesas traficos entrante saliente bodye-parse
//middleware proceedores static
//favicon
//logger