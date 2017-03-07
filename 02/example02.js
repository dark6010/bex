function singleThread(){
    console.log('el proceso de node js')
    console.log('Id del proceso-------------::' + process.pid)
    console.log('titulo---------------------::' + process.title)
    console.log('directorio del node--------::' + process.execPath)
    console.log('directorio actual----------::' + process.cwd())
    console.log('version de node------------::' + process.version)
    console.log('versiones dependecias------::' + process.versions)
    console.log('sistema operativo----------::' + process.platform)
    console.log('arquitectura---------------::' + process.arch)
    console.log('tiempo activo del node-----::' + process.uptime())
    console.log('arcumentos del proceso-----::' + process.argv)
}
singleThread()

for (key in process.argv){
    console.log(process.argv[key])
}
//next 9
