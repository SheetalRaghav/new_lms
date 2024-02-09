import React from 'react'

import { Outlet } from 'react-router-dom'
import SidebarWithBurgerMenu from '../components/Admin/AdminNavbar'

const Admin = () => {
  return (
    <div className=' bg-[#ffffff]  '>
      <SidebarWithBurgerMenu />
      <Outlet />
    </div>
  )
}

export default Admin
