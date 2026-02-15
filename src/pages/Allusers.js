import React, {  useState,useEffect } from 'react'
import summaryAPI from '../common'

const Allusers = () => {
        const [allUsers,setAllUsers] = useState([])

        const fetchAllUsers = async () => {
            const response = await fetch(summaryAPI.all_users.url,{
                method: summaryAPI.all_users.method,
                credentials: 'include'
            })

            const data = await response.json();
            console.log("All users response:", data); // Debugging log

            
    }

    useEffect(() => { 
        fetchAllUsers();
    },[])

  return (
    <div>Allusers</div>
  )
}


export default Allusers