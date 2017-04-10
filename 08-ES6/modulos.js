//fincion anonima autoejecutable = (function(){})()
'use stric'
class Clock{
    constructor(){
        
        setInterval(()=>{
            this.theTime()
       }, 1000)
    }
 
    theTime(){
        var date= new Date(),
            hrs= addZero((date.getHours()>12?date.getHours()-12:date.getHours())),
            min= addZero(date.getMinutes()),
            sec= addZero(date.getSeconds()),
            ampm= (date.getHours()<12)?'am':'pm',
            //msg= hrs+':'+min+':'+sec+ampm
            //template string
            msg= `${hrs}:${min}:${sec}${ampm}`
        function addZero(num){
            return (num<10)?('0'+num):(num)
        }
        console.log(msg)
    }
    
 }
module.exports= Clock;
//las clases no se deben de poder ser inicializadas solo mandamos el contructor y metodos y variables
