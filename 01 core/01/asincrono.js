var fs=require('fs')
console.log('\nabrir archivo...')
var content = fs.readFile('archivo.txt','utf8',function(error,content){
    console.log(content)
})
console.log('\nhaciendo otra cosa\n')
console.log(process.uptime())
