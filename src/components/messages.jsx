import React from 'react';
import Message from "./message";
import '../../src/index.css'

const Messages = () => {
    return (
        <div className='messages h-5/6  overflow-y-scroll'>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
        </div>
    );
}

export default Messages;
