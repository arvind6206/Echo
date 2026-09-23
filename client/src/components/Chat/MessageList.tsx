import { useEffect, useRef } from 'react'
import MessageBubble from './MessageBubble'

interface Message {
    id: string
    message: string
}

interface MessageListProps {
    messages: Message[]
}

function MessageList({ messages }: MessageListProps) {

    const bottomRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        bottomRef.current?.scrollIntoView({
            behavior: "smooth",
        })
    }, [messages])

    if (messages.length === 0) {
        return (
            <div className='flex-1 flex items-center justify-center px-6'>
                <div className='text-center animate-fade-in'>
                    <div className='text-6xl mb-4 animate-pulse-glow inline-block'>
                        💬
                    </div>

                    <h3 className='text-white font-semibold text-xl mb-2'>
                        No Messages yet
                    </h3>

                    <p className='text-slate-400 text-sm'>
                        Send the first message to the room
                    </p>
                </div>

            </div>
        )
    }
    return (
        <div className='flex-1 overflow-y-auto px-4 md:px-6 py-6 bg-gradient-to-b from-transparent to-slate-900/30'>

            <div className='max-w-4xl mx-auto'>
                {messages.map((message) => (
                    <MessageBubble key={message.id} message={message.message} />
                ))}
                <div ref={bottomRef} />
            </div>

        </div>
    )
}

export default MessageList