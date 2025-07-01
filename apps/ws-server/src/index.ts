import { WebSocketServer } from 'ws'

const wss = new WebSocketServer( { port : 8080 })

wss.on('connection', (socket) => {
    socket.on('message', (mssg) => {
        console.log(`Recieve data from client ${mssg}`)
    })

    socket.send('Something')

})