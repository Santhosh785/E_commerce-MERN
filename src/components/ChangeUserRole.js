import React, { useState } from 'react'
import ROLE from '../common/role'
import { IoMdClose } from "react-icons/io";
import summaryAPI from '../common';
import { toast } from 'react-toastify';

const ChangeUserRole = ({ name, email, role, userId, onClose, callApi }) => {

  const [selectedRole, setSelectedRole] = useState(role)

  const handleOnChange = (e) => {
    setSelectedRole(e.target.value)
  }

  const UpdateRole = async () => {
    const response = await fetch(summaryAPI.update_user.url, {
      method: summaryAPI.update_user.method,
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        userId: userId,
        role: selectedRole
      })
    })

    const data = await response.json()

    if (data.success) {
      toast.success(data.message)
      onClose()
      callApi()
    }

    if (data.error) {
      toast.error(data.message)
    }
  }

  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 w-full h-full z-10 flex items-center justify-center bg-slate-200 bg-opacity-50'>
      <div className='bg-white p-4 pb-6 rounded shadow-lg w-full max-w-sm'>

        <button className="block ml-auto" onClick={onClose}>
          <IoMdClose className="text-2xl" />
        </button>

        <h1 className='text-xl font-semibold'>Change User Role</h1>

        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Current Role: {role}</p>

        <select
          id="role"
          name="role"
          value={selectedRole}
          onChange={handleOnChange}
          className='w-full border p-2 rounded mt-3'
        >
          {Object.values(ROLE).map(el => (
            <option key={el} value={el}>{el}</option>
          ))}
        </select>

        <div className='flex items-center justify-between mt-4'>
          <button
            onClick={UpdateRole}
            className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-all'
          >
            Update Role
          </button>
          <button
            onClick={onClose}
            className='border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-4 py-2 rounded-full transition-all'
          >
            Cancel
          </button>
        </div>

      </div>
    </div>
  )
}

export default ChangeUserRole
