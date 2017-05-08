'use strict'
var express= require('express'),
    favicon= require('serve-favicon'),
    morgan= require('morgan'),
    pug= require('pug'),
    routes= require('./routes/'),
    faviconURL= `${__dirname}/public/img/favicon.ico`,
    publicDir= express.static(`${__dirname}/public`),
    viewDir= `${__dirname}/views`,
    port= (process.env.PORT || 80),
    app= express()
app
    .set('views', viewDir)
    .set('view engine', 'pug')
    .set('port', port)
    .use(favicon(faviconURL))
    .use(morgan('dev'))
    .use(publicDir)
    .use('/', routes)

module.exports= app
