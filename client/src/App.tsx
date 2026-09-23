
import { useState } from "react";


import useWebSocket from "./useWebSocket";
import RoomJoin from "./components/RoomJoin";
import ChatHeader from "./components/Chat/ChatHeader";
import MessageList from "./components/Chat/MessageList";
import MessageInput from "./components/Chat/MessageInput";

function App() {
    const {
        isConnected,
        messages,
        joinRoom,
        sendMessage,
    } = useWebSocket();

    const [roomId, setRoomId] = useState<string>("");

    // Join a room
    const handleJoinRoom = (id: string) => {
        joinRoom(id);
        setRoomId(id);
    };

    // Leave room
    const handleLeaveRoom = () => {
        setRoomId("");
    };

    // User has not joined any room
    if (!roomId) {
        return (
            <RoomJoin
                onJoin={handleJoinRoom}
                isConnected={isConnected}
            />
        );
    }

    // User has joined a room
    return (
        <div className="h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col">

            <ChatHeader
                roomId={roomId}
                isConnected={isConnected}
                onLeave={handleLeaveRoom}
            />

            <MessageList
                messages={messages}
            />

            <MessageInput
                onSend={sendMessage}
            />

        </div>
    );
}

export default App;
