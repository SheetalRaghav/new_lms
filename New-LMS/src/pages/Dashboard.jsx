import React, { useContext } from 'react'
import { AuthContext } from '../context/Authentication'
import AdminDash from '../components/Admin/AdminDash'

const Dashboard = () => {
  const { authRole } = useContext(AuthContext)
  return (
    <div>
      {
        authRole === 'Admin' ? <>
          <AdminDash />
        </> : <></>
      }
    </div>
  )
}

export default Dashboard
