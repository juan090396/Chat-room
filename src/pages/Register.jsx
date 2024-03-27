import React from 'react';
import add_img from "../../public/images/add_img.png";
const Register = () => {
    return (
        <div className=' bg-blue-800 h-screen flex items-center justify-center ' >
            
            <div className='bg-white p-5 pr-14 pl-14 flex flex-col items border-2 rounded-lg' >
                
            <form className='flex flex-col gap-5 p-6 ' >
                <h1 className='text-center text-4xl text-purple-700'  >My Chat Room</h1>
                <p className='text-center text-2xl' >Register</p>
                <input className=' p-4 border-2 hover:border-blue-200 rounded-md ' type='text' placeholder='Username'/>  
                <input className=' hidden'  type='file' id='file' />  
                <label className='flex items-center gap-2 text-sm cursor-pointer' htmlFor='file' >
                    <img src={add_img} alt='Perfil Photo' />
                    <span>Add an avatar</span>
                </label>          
                <button className='p-3 font-bold text-white bg-blue-500 rounded-md border-none ' onClick={()=> alert('Usuario registrado')}>Sign in</button>
                
            </form>
            
            
        </div>
    
    </div>
    );
}

export default Register;
