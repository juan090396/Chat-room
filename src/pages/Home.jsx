import React from 'react';
import Sidebar from '../components/Sidebar';
import Chat from "../components/chat";


const Home = () => {
    return (
        <div className='h-screen flex items-center justify-center' >
            
            <div className='flex border-2 border-solid border-black rounded-lg w-2/3 h-4/5 overflow-hidden ' >
                
                <Sidebar/>
                <Chat/>
              
                
            </div>


        </div>
    );
}

export default Home;
