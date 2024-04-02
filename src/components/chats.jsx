import React from 'react';

const Chats = () => {
    return (
        <div>
            <div className='p-2 flex items-center gap-2 text-white cursor-pointer hover:bg-gray-200'>
                <img src='https://plus.unsplash.com/premium_photo-1688822015890-62ee53d486d8?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' className='bg-gray-500 h-12 w-12 rounded-full object-cover' />
                <div className='flex items-center justify-between w-full'>
                    <div>
                        <span className='text-lg font-medium text-black'>Jane</span>
                        <p className='text-sm text-gray-900'>Hello</p>
                        
                    </div>
                    <div className="ml-auto flex flex-col items-end">
                        <span className='text-sm text-black'>10:27</span>
                        <span className='bg-indigo-600 rounded-full px-2 py-1 text-white'>4</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chats;

