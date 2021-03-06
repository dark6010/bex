'use strict'
var fs= require('fs'),
    file= 'nombres.txt',
    newFile= 'nombres-es6.txt',
    promise= new Promise( (resolve, reject) => {
        fs.access(file, fs.F_OK, function(err){
            return (err) ? reject(new Error('el archivo no existe')) : resolve(true)
        })
    })
promise
    .then( (resolved,rejected) => {
    console.log('el archivo existe')
    return new Promise( (resolve, reject) => {
        fs.readFile(file, function(err,data){
        return (err) ? reject( new Error('el archivo no se pudo leer')) : resolve(data)
        })
    })
    })
    .then( (resolved,rejected) => {
    console.log('el archivo se a leido existosamente')
    return new Promise((resolve, reject) => {
        fs.writeFile(newFile, resolved, function(err){
        return (err) ? reject(new Error('el archivo no se pudo copiar')) : resolve('el archivo de copi con exito')
    })
    })
    })
    .then( (resolved,rejected) => {
        console.log(resolved)
    })
    .catch( (err) => {
        console.log(err.message)
    })