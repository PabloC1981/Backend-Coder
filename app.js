const express = require('express')
const {Server, Socket} = require('socket.io')

const app = express()
const PORT =process.env.PORT||8080;

const server = app.listen(PORT,()=>{
    console.log('Escuchando en puerto: '+PORT)
})
const io = new Server(server);

app.use(express.static('public'))

//En el servidor cunado se conecte un socket has.........
io.on('connection',socket=>{
    console.log('Se conecto un cliente')
    socket.emit('WELCOME',{message:'BIENVENIDO A MI SERVIDOR'})  //

    socket.on('message',data=>{
        console.log(data)
        socket.emit('log',data) //SI YO CREO UN EVENTO EN EL SERVIDOR O EL CLIENTE, TAMBIÉN DEBO PROGRAMAR COMO RECIBIRLO DEL OTRO LADO

    })
})
