import React, { useRef, useState,  } from 'react';

const ChatBot = () => {

const [messages, setMessages] = useState<any>([])
    const [msgLoading, setMsgLoading] = useState(false)
    const [loading, setLoading] = useState(false)
    const [senderMessage, setSenderMessage] = useState('')
    const inputRef = useRef<any>(null);
    const chatBodyRef = useRef<any>(null);

const handleSubmitMessage = (e:any) => {

    e.preventDefault();
    if (senderMessage.trim().length > 0 && !msgLoading) {
        setMsgLoading(true)
        const tempMessages = messages
        setMessages([...messages, { receiver: '...', sender: senderMessage }])
        inputRef.current.value = "";
        chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;

        setTimeout(() => {
            tempMessages.push({ receiver: 'Hello ', sender: senderMessage })
            setSenderMessage('')
            setMsgLoading(false)
            setMessages(tempMessages)
        }, 1000)
    }
}

  return (
    <div  ref={chatBodyRef}>
      <div className='overflow-auto max-w-[379px] min-w-[400px]  min-h-[450px] max-h-[370px] p-2' >
      {messages?.map((msg:any, index:any) => {
        return <div key={index}>
            <div className="flex justify-between">
            {msg?.sender && <p className=' mb-2   ml-auto bg-white  w-fit max-w-[77%]  rounded-lg p-2  relative flex text-sm  py-2 items-center shadow gap-4 px-4 '>{msg?.sender}</p>}
            <div className="flex items-center justify-center h-10 w-10 flex-shrink-0">
                     <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-square text-pink-300" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"/>
                  </svg>
             </div></div>
             <div className="flex">
             <div className="flex items-center justify-center h-10 w-10 flex-shrink-0">
                 <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-fill text-slate-500" viewBox="0 0 16 16">
                 <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
               </svg>
                </div>
            {msg?.receiver && <p className='  mb-2  bg-blue-100 rounded-lg p-2 w-fit max-w-[77%]  relative flex text-sm  py-2 items-center shadow gap-4 px-4 '>{msg?.receiver}</p>}
            </div>
        </div>
    })}
      </div>
      <form className="relative w-full flex gap-2 p-3.5">
        <input
          type="text"
          placeholder="Type your message..."
          ref={inputRef} onChange={(e) => setSenderMessage(e.target.value)}
          className="flex w-full border rounded focus:outline-none focus:border-blue-300 pl-4 h-12"
        />
        <button onClick={handleSubmitMessage} className='border rounded  p-[10px] text-white bg-blue-500 hover:bg-blue-700'>Send</button>
      </form>
    </div>
  );
};

export default ChatBot;

