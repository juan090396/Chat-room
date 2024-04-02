import React from 'react';
import Navbar from './navbar';
import Search from "./search";
import Chats from './chats';

const Sidebar = () => {
    return (
        <div className=' w-1/3 border-r-2 border-solid bg-white' >
            <Navbar/>
            <Search/>
            <Chats/>
        </div>
    );
}

export default Sidebar;
