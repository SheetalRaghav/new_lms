import React from 'react'
import { Outlet } from 'react-router-dom'
import SidebarWithBurgerMenu from '../components/Tutor/TutorNavbar'

const Tutor = () => {
  return (
    <div>
      <SidebarWithBurgerMenu />
      <Outlet />
    </div>
  )
}

export default Tutor
