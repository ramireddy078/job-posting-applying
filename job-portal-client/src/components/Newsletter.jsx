import React from 'react'
import { CiMail } from "react-icons/ci";
import { IoRocketSharp } from "react-icons/io5";


const Newsletter = () => {
    return (
        <div>
            <div className='mb-20'>
                <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
                    <CiMail />
                    Email me for hobbies
                </h3>
                <p className='text-primary/75 text-base mb-4'>sit and coming with me there contactr me to any where</p>
                <div className='w-full space-y-4'>
                    <input type="email" name='email' id='email' placeholder='name@gmail.com' 
                            className='w-full block py-2 pl-3 border rounded-md focus:outline-none' 
                    />
                    <input type="submit" value={"Subscribe"} 
                    className='w-full block py-2 pl-3 border rounded-md focus:outline-none bg-blue text-white cursor-pointer font-semibold' />
                </div>
            </div>

            <div>
                <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
                    <IoRocketSharp />
                    get noticed faster
                </h3>
                <p className='text-primary/75 text-base mb-4'>sit and coming with me there contactr me to any where</p>
                <div className='w-full space-y-4'>
                    <input type="submit" value={"Upload your resume"} 
                    className='w-full block py-2 pl-3 border rounded-md focus:outline-none bg-blue text-white cursor-pointer font-semibold' />
                </div>
            </div>
        </div>
    )
}

export default Newsletter
