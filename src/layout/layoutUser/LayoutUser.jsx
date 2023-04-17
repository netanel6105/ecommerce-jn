import React from 'react'
import HeaderUser from './headerUser/HeaderUser'
import { Outlet } from 'react-router-dom'

const LayoutUser = () => {
  return (
    <div>
        <HeaderUser/>
        <Outlet/>
    </div>
  )
}

export default LayoutUser