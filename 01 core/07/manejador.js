'use strict'
var Clock= require('./modulos'),
    cucu= new Clock()


cucu.on('tictac', function(){
    cucu.theTime()
})