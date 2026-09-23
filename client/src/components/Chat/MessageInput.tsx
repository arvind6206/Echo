import { useState } from "react";

interface MessageInputProps {
    onSend: (message: string) => void;
}

function MessageInput({ onSend }: MessageInputProps) {

    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const trimmedMessage = message.trim();

        if (!trimmedMessage) return;

        onSend(trimmedMessage);

        setMessage("");
    };

    return (
        <div className="border-t border-slate-700/50 bg-slate-900/80 backdrop-blur-xl p-4">

            <form
                onSubmit={handleSubmit}
                className="max-w-4xl mx-auto flex gap-3"
            >

                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-500 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 backdrop-blur-sm"
                />

                <button
                    type="submit"
                    disabled={!message.trim()}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 disabled:from-slate-700 disabled:to-slate-700 disabled:text-slate-500 text-white font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
                >
                    Send
                </button>

            </form>

        </div>
    );
}

export default MessageInput;