import React from 'react'

import { Outlet } from 'react-router-dom'
import SidebarWithBurgerMenu from '../components/Admin/AdminNavbar'

const Admin = () => {
  return (
    <div>
      <SidebarWithBurgerMenu />
      <Outlet />
    </div>
  )
}

export default Admin
