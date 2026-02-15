import React, { useState } from 'react'
import ROLE from '../common/role'
import { IoMdClose } from "react-icons/io";
import summaryAPI from '../common';

const ChangeUserRole = ({ name, email, role, userId, onClose }) => {

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
      alert("Role updated successfully")
      onClose()
    }

    if (data.error) {
      alert(data.message)
    }
  }

  return (
    <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-40'>
      <div className='bg-white p-6 rounded shadow-lg w-96'>

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

        <button
          onClick={UpdateRole}
          className='bg-blue-500 text-white px-4 py-2 rounded mt-4'
        >
          Update Role
        </button>

      </div>
    </div>
  )
}

export default ChangeUserRole
