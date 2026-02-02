import React, { useState } from 'react'
import loginIcons from '../assest/signin.gif'
import { IoEyeSharp } from "react-icons/io5"; 
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom'; 



const Login = () => { //Login component
  const [showpassword,setshowpassword] = useState(false)
  const [data,setdata] = useState({ //state to store email and password
    email : "",
    password : ""
  })

  const handleOnChange = (e)=>{  //to handle input changes
    const {name,value} = e.target; // destructuring
    
    setdata((prev)=>{
      return {
        ...prev,  //spread operator to keep previous state
        [name] : value
      }
    })
  }

  const handleSumbit = (e)=>{
    e.preventDefault();  //to prevent reloading the page
  }

  console.log(data); 


  return (
    <section id="login">
        <div className='mx-auto container p-4'>

            <div className='bg-white p-5 w-full max-w-md mx-auto'>
                <div className='w-20 h-20 mx-auto '>
                    <img src={loginIcons} alt='Image-Icon'/>
                </div>

                <form className='pt-6' onSubmit={handleSumbit}>

                  <div className='grid'>
                    <label>Email :</label>
                    <div className='bg-slate-100 p-2' >
                      <input type='email'
                             placeholder='enter email' 
                             className='w-full h-full outline-none bg-transparent' 
                             name='email' 
                             value={data.email}
                             onChange={handleOnChange}/>
                    </div>
                  </div>

                   <div>
                    <label>password :</label>
                    <div className='bg-slate-100 p-2 flex'> 
                        <input 
                              type={showpassword ? "text":"password"} 
                              placeholder='enter password' 
                              className='w-full h-full outline-none bg-transparent'
                              name='password'
                              value={data.password}
                              onChange={handleOnChange}/>
                              
                        <div className='cursor-pointer text-xl' onClick={()=>setshowpassword((prev)=>!prev)}>
                          <span>
                            {
                            showpassword ?(
                               <FaEyeSlash />

                            )
                            :
                            (
                              <IoEyeSharp />
                            )
                            }  
                          </span>
                        </div>
                    </div>
                    <Link to={'/Forgot-password'} className='block w-fit ml-auto hover:underline hover:text-red-600'>
                          Forgot password
                    </Link>

                  </div>

                  <button className='bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Login</button>

                </form>

                <p className='text-center mt-4'>Don't have an account? <Link to={'/signup'} className='text-red-600 hover:underline'>Sign up</Link></p>
            </div>

        </div>

    </section>
  )
}

export default Login