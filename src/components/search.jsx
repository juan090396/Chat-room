import React from 'react';

const Search = () => {
    return (
        <div className='border-t border-b border-solid border-gray-50' >
            
            <div className='p-2 ' >
                <input type="text" placeholder="Find a user" className='bg-transparent border-2 border-gray-400 rounded-md outline-none placeholder:text-gray-200 w-full' />
            </div>

        </div>
    );
}

export default Search;
