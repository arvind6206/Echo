import {WebSocketServer, WebSocket} from 'ws'

const wss = new WebSocketServer({port: 8080})

const rooms = new Map<string, Set<WebSocket>>()
const socketRooms = new Map<WebSocket, string>();

wss.on('connection', (socket) => {
  console.log('user connected')
  
  socket.on('message', (message) => {
    const data = JSON.parse(message.toString())

    if(data.type === 'join'){
      const roomId = data.roomId

      //check if this roomId already present in rooms or not
      if(!rooms.has(roomId)){
        //if not then creates a new room
        rooms.set(roomId, new Set())
      }

      //it will tell who is inside the room for eg who is inside room 1
      rooms.get(roomId)!.add(socket)

      //and this line will do like which room does this soclet belong to
      //eg socket 1 belong to room 1 like that
      socketRooms.set(socket, roomId)

      console.log(`User joined ${roomId}`)
    }

    if(data.type === 'chat'){
      const roomId = socketRooms.get(socket)

      if(!roomId){
        return;
      }

      const room = rooms.get(roomId)
      if(!room){
        return;
      }

      room.forEach((client) => {
        client.send(JSON.stringify({
          type: "chat",
          message: data.message
        }))
      })
    }
  })

})