import React from 'react'
import { Link } from 'react-router-dom'

const HeaderAdmin = () => {

  return (
    <div className="flex mt-2 items-center">
    <div>
      <Link to="/admin" className="ml-5 text-5xl">  Admin </Link>
    </div>

    <div>
      <ul className="flex ml-[100px] text-4xl">
        <li className="ml-9">Products</li>
        <li className="ml-9">Categories</li>
        <li className="ml-9">Users</li>
      </ul>
    </div>
  </div>
  )
}

export default HeaderAdmin