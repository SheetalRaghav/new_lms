import React, { useContext } from 'react'
import { AuthContext } from '../context/Authentication'
import AdminDash from '../components/Admin/AdminDash'
import StudentDash from '../components/Student/StudentDash'

const Dashboard = () => {
  const { authRole } = useContext(AuthContext)
  return (
    <div>
      {
        authRole === 'Admin' ? <>
          <AdminDash />
        </> : <>{
          authRole === 'Student'?<>
<StudentDash/>
          </>:<>

          </>
        }</>
      }
    </div>
  )
}

export default Dashboard
