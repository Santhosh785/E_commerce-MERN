import React, { useState, useEffect } from 'react'
import summaryAPI from '../common'
import { toast } from 'react-toastify';
import { MdEdit } from "react-icons/md";
import ChangeUserRole from '../components/ChangeUserRole';

const Allusers = () => {
  const [allUsers, setAllUsers] = useState([])
  const [openRoleModal, setOpenRoleModal] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)

  const fetchAllUsers = async () => {
    const response = await fetch(summaryAPI.all_users.url, {
      method: summaryAPI.all_users.method,
      credentials: 'include'
    })

    const data = await response.json()

    if (data.success) {
      setAllUsers(data.data)
    }

    if (data.error) {
      toast.error(data.message)
    }
  }

  useEffect(() => {
    fetchAllUsers()
  }, [])

  return (
    <div>
      <table className="w-full border-collapse border border-gray-300 bg-white userTable">
        <thead>
          <tr>
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
          {allUsers.map((el, index) => (
            <tr key={el._id} className="border border-gray-300">
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{el._id}</td>
              <td className="border px-4 py-2">{el.name}</td>
              <td className="border px-4 py-2">{el.email}</td>
              <td className="border px-4 py-2">{el.role}</td>
              <td className="border px-4 py-2">
                {new Date(el.createdAt).toLocaleString()}
              </td>

              <td className="border px-4 py-2">
                <button
                  onClick={() => {
                    setSelectedUser(el)
                    setOpenRoleModal(true)
                  }}
                  className="bg-red-200 p-2 rounded-full hover:bg-red-500"
                >
                  <MdEdit className="inline mr-1" /> Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ROLE MODAL */}
      {openRoleModal && selectedUser && (
        <ChangeUserRole
          userId={selectedUser._id}
          name={selectedUser.name}
          email={selectedUser.email}
          role={selectedUser.role}
          onClose={() => setOpenRoleModal(false)}
        />
      )}
    </div>
  )
}

export default Allusers
