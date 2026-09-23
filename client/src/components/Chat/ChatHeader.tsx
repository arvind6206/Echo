interface ChatHeaderProps {
    roomId: string;
    isConnected: boolean;
    onLeave: () => void;
}

function ChatHeader({ roomId, isConnected, onLeave }: ChatHeaderProps) {
  return (
    <header
      className="h-16 border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-xl flex items-center
    justify-between px-4 md:px-6"
    >
      <div className="flex items-center gap-3">
        <div
          className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg"
        >
          <span>💬</span>
        </div>

        <div>
          <h2 className="text-white font-semibold">Room Chat</h2>

          <div className="flex items-center gap-2">
            <span className="text-slate-400 text-sm flex items-center gap-2">
              {roomId}
            </span>

            <span className="text-slate-600">•</span>

            <span
              className={`text-xs flex items-center gap-1.5 ${
                isConnected ? "text-green-400" : "text-red-400"
              }`}
            >
              <span className={`h-2 w-2 rounded-full ${
                isConnected ? "bg-green-400 shadow-lg shadow-green-400/50" : "bg-red-400 shadow-lg shadow-red-400/50"
              }`}></span>
              {isConnected ? "Connected" : "Disconnected"}
            </span>
          </div>
        </div>
      </div>

      <button
        onClick={onLeave}
        className="px-4 py-2 text-sm rounded-lg border border-slate-700/50 text-slate-300
      hover:bg-slate-800/50 hover:text-white transition-all duration-200 backdrop-blur-sm hover:border-slate-600"
      >
        Leave
      </button>
    </header>
  );
}

export default ChatHeader;
