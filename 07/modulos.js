//fincion anonima autoejecutable = (function(){})()
'use stric'
var Clock= (function(){
    var EventEmitter= require('events').EventEmitter,
        inherits= require('util').inherits
    var Clock= function(){
        var self= this
        setInterval(function(){
            //console.log('hola')
            self.emit('tictac')
        }, 1000)
    }
    inherits(Clock, EventEmitter)
    Clock.prototype.theTime= function(){
        var date= new Date(),
            hrs= addZero((date.getHours()>12?date.getHours()-12:date.getHours())),
            min= addZero(date.getMinutes()),
            sec= addZero(date.getSeconds()),
            ampm= (date.getHours()<12)?'am':'pm',
            msg= hrs+':'+min+':'+sec+ampm
        function addZero(num){
            return (num<10)?('0'+num):(num)
        }
        console.log(msg)
    }
    //el return clock es importante para exportar
    return Clock;
    
})()
module.exports= Clock

