import React from 'react'
import HeaderAdmin from './headerAdmin/HeaderAdmin'
import {Outlet} from 'react-router-dom'
const LayoutAdmin = () => {
  return (
    <div className='flex'>
        <HeaderAdmin/>
        <Outlet/>
    </div>
  )
}

export default LayoutAdmin