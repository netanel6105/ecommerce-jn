import React from 'react'

const HeaderAdmin = () => {

  return (
    <div className="flex">

    <div>
      <h1 className='ml-5'>Admin</h1>
    </div>

    <div>
      <ul className='flex ml-[100px]'>
        <li className='ml-5'>Products</li>
        <li className='ml-5'>Categories</li>
        <li className='ml-5'>Users</li>
      </ul>
    </div>

  </div>
  )
}

export default HeaderAdmin