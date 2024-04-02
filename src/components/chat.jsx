import React from 'react';
import Messages from './messages';
import Input from './input';
import ChatHeader from './ChatHeader';

const Chat = () => {
    return (
        <div className=' chat flex-grow'>
           
           <ChatHeader/>
           <Messages/>
           <Input/>
        
        </div>
    );
}

export default Chat;
