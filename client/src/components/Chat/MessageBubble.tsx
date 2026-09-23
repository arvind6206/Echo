interface MessageBubbleProps {
    message: string;
}

function MessageBubble({message}: MessageBubbleProps) {
  return (
    <div className='flex justify-start mb-4 animate-fade-in'>
        <div className='max-w-[80%] md:max-w-[60%]'>
            <div className='bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600/50 px-4 py-3 rounded-2xl rounded-tl-sm shadow-lg backdrop-blur-sm'>
                <p className='text-slate-100 text-sm md:text-base break-words leading-relaxed'>
                    {message}
                </p>

            </div>

        </div>

    </div>
  )
}

export default MessageBubble
