
//patron usado el observer
'use strict'
var EventEmitter= require('events').EventEmitter,
    pub= new EventEmitter()
pub.on('myevent', function(message){
    console.log(message)
})

pub.once('myevent', function(message){
    console.log('se emite la primera vez: '+message)
})
pub.emit('myevent', 'soy un emisor de eventos')
pub.emit('myevent', 'volviendo a emitir')
pub.removeAllListeners('myevent')
pub.emit('myevent', 'volviendo a emitir por tercera vez')