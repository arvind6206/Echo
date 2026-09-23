import { useEffect, useRef, useState } from "react";

const WS_URL = "ws://localhost:8080";

interface ChatMessage{
    id: string,
    message: string
}

export default function useWebSocket(){
    const socketRef = useRef<WebSocket | null>(null)

    const [isConnected, setIsConnected] = useState(false)
    const [messages, setMessages] = useState<ChatMessage[]>([])

    useEffect(() => {
        const socket = new WebSocket(WS_URL)

        
        socketRef.current = socket

        socket.onopen = () => {
            console.log("WebSocket connectd")
            setIsConnected(true)
        }

        socket.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data)

                if(data.type === 'chat'){
                    setMessages((prev) => [...prev, {
                        id: crypto.randomUUID(),
                        message: data.message,
                    }])
                }
            } catch (error) {
                console.error("Invalid message:", error)
            }
        }
        
        socket.onclose = () => {
            console.log("WebSocket disconnectd")
            setIsConnected(false)
        }

        socket.onerror = (error) => {
            console.error("WebSocket error:", error)
        }

        return () => {
            socket.close()
        }

    }, [])

    const joinRoom = (roomId: string) => {
        if(!socketRef.current) return;

        if(socketRef.current.readyState !== WebSocket.OPEN){
            return;
        }

        socketRef.current.send(
            JSON.stringify({
                type: "join",
                roomId
            })
        )
    }

    const sendMEssage = (message: string) => {
        if(!socketRef.current) return;

        if(socketRef.current.readyState !== WebSocket.OPEN){
            return;
        }

        socketRef.current.send(
            JSON.stringify({
                type: "chat",
                message,
            })
        )
    }
    return {isConnected, messages, joinRoom, sendMEssage}
}