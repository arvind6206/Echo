import { useState } from "react";

interface RoomJoinProps {
    onJoin: (roomId: string) => void;
    isConnected: boolean;
}

function RoomJoin({ onJoin, isConnected }: RoomJoinProps) {
  const [roomId, setRoomId] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      const trimmedRoomId = roomId.trim()

      if(!trimmedRoomId){
          return;
      }
      onJoin(trimmedRoomId)
  }
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="w-full max-w-md animate-fade-in">
        <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-2xl">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center animate-pulse-glow">
              <span className="text-3xl">💬</span>
            </div>
          </div>

          <h1 className='text-4xl font-bold text-white text-center mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
            Join a Room
          </h1>

          <p className='text-slate-400 text-center mb-8'>
            Enter a room ID to start chatting
          </p>

          {/*connection status*/}

          <div className='flex items-center justify-center gap-2 mb-6 p-3 bg-slate-800/50 rounded-xl border border-slate-700/50'>
            <span className={`h-3 w-3 rounded-full ${
                isConnected
                    ? "bg-green-500 shadow-lg shadow-green-500/50"
                    : "bg-red-500 shadow-lg shadow-red-500/50"
            }`}/>

                <span className='text-sm font-medium text-slate-300'>
                    {isConnected
                        ? "Server connected"
                        : "Connecting to server..."}

                </span>

          </div>

          <form onSubmit={handleSubmit}>
            <label className='block text-sm font-semibold text-slate-300 mb-2'>
                Room ID
            </label>

            <input
                type="text"
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
                placeholder= "e.g. room123"
                className='w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50
                text-white placeholder-slate-500 outline-none focus:border-blue-500
                focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 backdrop-blur-sm'
            />

            <button
            type="submit"
            disabled={!isConnected || !roomId.trim()}
             className='w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500
            disabled:from-slate-700 disabled:to-slate-700 disabled:text-slate-500 text-white font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]'>
                Join Room
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}

export default RoomJoin;
