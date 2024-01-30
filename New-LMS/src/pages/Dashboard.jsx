import React, { useContext } from 'react'
import { AuthContext } from '../context/Authentication'

const Dashboard = () => {
    const {authRole}=useContext(AuthContext)
  return (
    <div>
      Hello from {authRole}
    </div>
  )
}

export default Dashboard
