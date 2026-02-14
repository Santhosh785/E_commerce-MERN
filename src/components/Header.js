import React from 'react'
import Logo from './Logo'
import { CiSearch } from "react-icons/ci";
import { FaCircleUser } from "react-icons/fa6";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import summaryAPI from '../common';
import { toast } from 'react-toastify';
import { setUserDetails } from '../stores/userSlice';
import { useState } from 'react';


const Header = () => {

  const user = useSelector(state => state?.user?.user);
  const dispatch = useDispatch();
  const [menuDisplay,setMenuDisplay] = useState(false);

  console.log("User details in Header:", user);

  const handleLogout = async () => {
    try {
      const fetchData = await fetch(summaryAPI.logout_user.url, {
        method: summaryAPI.logout_user.method,
        credentials: 'include',
      });

      const data = await fetchData.json();

      if (data.error) {
        toast.error("Logout failed");
        console.log("Logout error:", data.message); 
        return;
      }

      toast.success(data.message || "Logout successful")      
      dispatch(setUserDetails(null));  // Clear user details from Redux store on logout

    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }
  };

  return (
    <header className='h-16 shadow-md bg-white w-full z-40'>
      <div className='h-full container mx-auto flex items-center px-4 justify-between'>
        
        <Link to={"/"}>
          <Logo w={90} h={50}/>
        </Link>

        <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full'>
          <input type='text' placeholder='search product here....' className='w-full outline-none'/>
          <div className='text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white'>
            <CiSearch />
          </div>
        </div>

        <div className='flex items-center gap-8'>

         <div className='relative group flex justify-center' >
             <div className='text-3xl cursor-pointer relative flex items-center justify-center' onClick={() => setMenuDisplay(!menuDisplay)}>
            {
              user?.profilepic ? (
                <img 
                  src={user.profilepic}
                  alt={user.name}
                  className='w-10 h-10 rounded-full object-cover'
                />
              ) : (
                <FaCircleUser/>
              )
            }
          </div>
          {
            menuDisplay && (  
                
            <div className='absolute bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded-lg'>
               <nav>
                <Link to ={"/admin-panel"} className='whitespace-nowrap hover:bg-gray-100 p-2 'onClick={() => setMenuDisplay(!menuDisplay)}>Admin Panel</Link> 
              </nav>
            </div>

            )
          }
         
         </div>

          <div className='text-2xl relative'>
            <RiShoppingCart2Fill />
            <div className='bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
              <p className="text-sm">0</p>
            </div>
          </div>

          <div>
            {
              user?._id ? (
                <button 
                  onClick={handleLogout}
                  className='px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700'
                >
                  Logout
                </button>
              ) : (
                <Link 
                  className='px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700'
                  to={'/login'}
                >
                  Login
                </Link>
              )
            }
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header;
