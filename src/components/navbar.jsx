import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center bg-white p-2 h-14 text-black border-b-2 border-gray-800' >
           <span className='font-bold'>
            My chat
           </span>
           
            <div className='flex gap-2' >   
                <img src=' https://plus.unsplash.com/premium_photo-1688822015890-62ee53d486d8?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ' alt='' className='bg-gray-500 h-6 w-6 rounded-md object-cover ' ></img> 
                <span>Jhon</span>
                <button className='bg-gray-200 text-black rounded ' >Log out</button>
            </div>
        </div>
    );
}

export default Navbar;
