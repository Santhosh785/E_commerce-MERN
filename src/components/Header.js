import React from 'react'
import Logo from './Logo'
import { CiSearch } from "react-icons/ci";
import { FaCircleUser } from "react-icons/fa6";
import { RiShoppingCart2Fill } from "react-icons/ri";


const Header = () => {
  return (  
    <header className='h-16 shadow-md bg-white fixed w-full z-40'>
        <div className='h-full container mx-auto flex items-center px-4 justify-between'>
            <div className=''>
                <Logo w = {90} h = {50}/>
            </div> 

            <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounder-full focus-within:shadow-pl-2'>
                <input type='text' placeholder='search product here....'className='w-full outline-none'/>
                <div className='text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white'>
                    <CiSearch />
                </div>
            </div> 

            <div className='flex items-center gap-4'>
                <div className='text-3xl cursor-pointer '>
                     <FaCircleUser/>
                </div>
                <div className='text-2xl relative '>
                     <span><RiShoppingCart2Fill /></span>
                     <div className='bg-red-600 text-width w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
                        <pa className="text-sm">0</pa>
                     </div>
                </div>
                 
            </div>         
        </div>
    </header>
  )
}

export default Header