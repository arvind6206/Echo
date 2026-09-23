import React from "react";

function ChatHeader({ roomId, isConnected, onLeave }) {
  return (
    <header
      className="h-16 border-b border-slate-800 bg-slate-900 flex items-center
    justify-between px-4 md:px-6"
    >
      <div className="flex items-center gp-3">
        <div
          className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center
            "
        >
          <span>💬</span>
        </div>

        <div>
          <h2 className="text-white font-semibold">Room Chat</h2>

          <div className="flex items-center gap-2">
            <span className="flex items-center gap-2">{roomId}</span>

            <span className="text-slate-600">•</span>

            <span
              className={`text-xs ${
                isConnected ? "text-green-400" : "text-red-400"
              }`}
            ></span>
          </div>
        </div>
      </div>

      <button
        onClick={onLeave}
        className="px-4 py-2 text-sm rounded-lg border border-slate-700 text-slate-300
      hover:bg-slate-800 hover:text-white transition"
      >
        Leave
      </button>
    </header>
  );
}

export default ChatHeader;
