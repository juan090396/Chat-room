import React from 'react';

const Navbar = () => {
    return (
        <div className='flex items-center bg-purple-700 p-2' >
           <span>
            My chat
           </span>
            <div>
                <img src='' alt='' ></img>
                <span>Jhon</span>
                <button>Logout</button>
            </div>
        </div>
    );
}

export default Navbar;
