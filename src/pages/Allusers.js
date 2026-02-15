import React, { useState, useEffect } from 'react'
import summaryAPI from '../common'
import { toast } from 'react-toastify';
import { MdEdit } from "react-icons/md";
import ChangeUserRole from '../components/ChangeUserRole';

const Allusers = () => {
  const [allUsers, setAllUsers] = useState([])
  const [openUpdateRole, setOpenUpdateRole] = useState(false)
  const [updateUserDetails, setUpdateUserDetails] = useState({
    email: "",
    name: "",
    role: "",
    _id: ""
  })

  const fetchAllUsers = async () => {
    const response = await fetch(summaryAPI.all_users.url, {
      method: summaryAPI.all_users.method,
      credentials: 'include'
    })

    const data = await response.json();

    if (data.success) {
      setAllUsers(data.data)
    }

    if (data.error) {
      toast.error(data.message);
    }

    console.log("All users response:", data); // Debugging log


  }

  useEffect(() => {
    fetchAllUsers();
  }, [])

  return (
    <div className='p-4'>
      <table className="w-full border-collapse border border-gray-300 bg-white userTable">
        <thead>
          <tr className='bg-black text-white'>
            <th>S.No</th>
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Created At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            allUsers.map((el, index) => {
              return (
                <tr key={index} className="border border-gray-300">
                  <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                  <td className="border border-gray-300 px-4 py-2">{el._id}</td>
                  <td className="border border-gray-300 px-4 py-2">{el.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{el.email}</td>
                  <td className="border border-gray-300 px-4 py-2">{el.role}</td>
                  <td className="border border-gray-300 px-4 py-2">{new Date(el.createdAt).toLocaleString()}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <button
                      onClick={() => {
                        setUpdateUserDetails(el)
                        setOpenUpdateRole(true)
                      }}
                      className="bg-green-100 p-2 rounded-full cursor-pointer hover:bg-green-500 hover:text-white transition-all">
                      <MdEdit />
                    </button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>

      </table>

      {
        openUpdateRole && (
          <ChangeUserRole
            onClose={() => setOpenUpdateRole(false)}
            name={updateUserDetails.name}
            email={updateUserDetails.email}
            role={updateUserDetails.role}
            userId={updateUserDetails._id}
            callApi={fetchAllUsers}
          />
        )
      }
    </div>
  )
}


export default Allusers;