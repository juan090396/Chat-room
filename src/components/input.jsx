import React from 'react';
import clip from "../../public/images/clip.png";
import grabar from "../../public/images/grabar.png";


const Input = () => {
    return (
        <div className='input h-12 p-2 flex items-center justify-between bg-white border-t-2 pt-7   '>
            
            <input className=' w-full outline-none border-none p-2 text-2xl placeholder:text-gray-600'
             type='text' placeholder='Send message'>
             </input>

            <div className='send flex items-center justify-center ' >

            <input className='hidden ' type='file' id='voice'></input>
                <label htmlFor='voice' className='cursor-pointer p-2' >
                <img src={grabar} alt='' />
                </label>


                <input className='hidden ' type='file' id='file'></input>
                <label htmlFor='file' className='cursor-pointer p-2' >
                <img src={clip} alt='' />
                </label>

                <button className=' cursor-pointer text-white' >Send</button>
            </div>
              
        </div>
    );
}

export default Input;
