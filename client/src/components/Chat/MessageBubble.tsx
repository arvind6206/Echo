import React from 'react'

function MessageBubble({message}) {
  return (
    <div className='flex justify-start mb-4'>
        <div className='max-w-[80%] md:max-w-[60%]'>
            <div className='bg-slate-800 border border-slate-700 px-4 py-3 rounded-2xl rounded-tl-sm'>
                <p className='text-slate-100 text-sm md:text-base break-words'>
                    {message}
                </p>

            </div>

        </div>
      
    </div>
  )
}

export default MessageBubble
