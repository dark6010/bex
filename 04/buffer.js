'use strict'
var buff=new Buffer(6),
    buff2=new Buffer(26),
    str='\u00bd + \u00bc = \u00be'
buff.write('abcd', 0, 'ascii')
console.log(
    buff,
    buff.toString('ascii'),
    str,
    str.length,
    Buffer.byteLength(str, 'utf8'),
    buff2.length
)

for (var i= 0;i<buff2.length;i++){
    buff2[i] = i+97
}
console.log(buff2.toString('ascii'))

//buffers son tiras de bytes
//tipos lectura/escritura/duplex
//instanci de eventEmitter
//aceso asincrono
//detras de recursos como
//stdin/stdout/request de http/sockets/manipulacion de ficheros e imagenes
