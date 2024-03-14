import './index.css'

import React from 'react';

const App = () => {
    return (
        <div className='flex flex-col h-screen'>
         
            <header className='flex items-center justify-between p-4 m-4 border-b md:mx-4 md:my-4 md:gap-4' >

                <div>
                    <h1 className='text-2xl font-bold ' >
                        Chat Room
                    </h1>
                    <p className='text-sm leading-none text-gray-500 dark:text-gray-400'>
                        ¡Welcome To the chat room! 
                    </p>   
                </div>

            </header>
            <main className='flex-1 p-4 md:mx-10 md:my-10 md:flex md:flex-col md:gap-4' >
                <ul id='messages' >
                    <li>Message 1</li>
                    <li>Message 2</li>
                    <li>Message 3</li>
                    <li>Message 4</li>
                </ul>
            </main>

                <form  className='p-4 md:mx-4 md:my-4 md:flex md:items-center md:gap-4' >
                    
                <input class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1" placeholder="Message..." type="text"/>
    <button class=" m-4 ml-0 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 text-white bg-black">
      Send
    </button>
                
                </form>

        </div>
    );
}

export default App;

