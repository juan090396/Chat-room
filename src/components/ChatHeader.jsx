import React from 'react';
import lupa from "../../public/images/lupa.png";

const ChatHeader = () => {
    return (
        <div className='chat info h-14 bg-white flex items-center justify-between p-3 text-black text-2xl border-b-2 border-gray-800 ' >

            <span className=''>Jane</span>
            
            <div className='chat-icons flex gap-4 p-2'  >

            <button className=' bg-gray-300 hover:bg-blue-300 rounded-full border-x-4 border-y-4' > <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/video-call.png" alt="video-call"/> </button> 
            <button className=' bg-gray-300 hover:bg-blue-300 rounded-full border-x-4 border-y-4'>  <img width="30" height="30" src="https://img.icons8.com/plumpy/24/add-user-male.png" alt="add-user-male"/> </button>
            <button className=' bg-gray-300 hover:bg-blue-500 rounded-full border-x-4 border-y-4'> <img width="30" height="30" src={lupa} alt="video-call"/> </button> 
            <button className=' bg-gray-300 hover:bg-blue-500 rounded-full border-x-4 border-y-4'>   <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/ellipsis.png" alt="ellipsis"/></button>
            </div>

           </div>
    );
}

export default ChatHeader;
