import React, { useState } from "react";

function RoomJoin({ onJoin, isConnected }) {
  const [roomId, setRoomId] = useState("")

  const handleSubmit = (e) => {
      e.preventDefault()
      const trimmedRoomId = roomId.trim()

      if(!trimmedRoomId){
          return;
      }
      onJoin(trimmedRoomId)
  }
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-slate-900 border-slate-800 rounded-2xl p-8 shadow-2xl">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="h-14 w-14 rounded-2xl bg-blue-600 flex items-center justify-center">
              <span className="text-2xl">💬</span>
            </div>
          </div>

          <h1 className='text-3xl font-bold text-white text-center'>
            Join a Room
          </h1>

          <p className='text-slate-400 text-center mt-2 mb-8'>
            Enter a room ID to start chatting
          </p>

          {/*connection status*/}

          <div className='flex items-center jsutify-center gap-2 mb-6'>
            <span className={`h-2.5 w-2.5 rounded-full ${
                isConnected
                    ? "bg-screen-500"
                    : "bg-red-500"
            }`}/>

                <span className='text-sm text-slate-400'>
                    {isConnected
                        ? "Server connected"
                        : "Connecting to server..."}

                </span>

          </div>

          <form onSubmit={handleSubmit}>
            <label className='block text-sm font-medium text-slate-300 mb-2'>
                Room ID
            </label>

            <input
                type="text"
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
                placeholder= "e.g. room123"
                className='w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700
                text-white placeholder-slate-500 outline-none focuse:border-blue-500 
                focus:ring-2 focus:ring-blue-500/20'
            />

            <button
            type="submit"
            disabled={!isConnected || !roomId.trim()}
             className='w-full mt-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-500
            disabled:bg-slate-700 disabled:text-slate-500 text-white font-semibold transition'>
                Join Room
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}

export default RoomJoin;
