import React from 'react'
import { useNavigate } from 'react-router-dom';
import { TOKEN_KEY } from '../../services/services';

const Dashboard = () => {
  const nav = useNavigate();
  return (
    <div className="overflow-hidden w-screen rounded-lg border border-gray-200 shadow-md m-5">
     
     <div className='bg-gray-800 flex p-4'>
        <button onClick={()=>{
           localStorage.removeItem(TOKEN_KEY)
           nav("/admin/login")
        }} className='text-white bg-red-700 rounded-full py-2 px-4 '>Logout</button>
     </div>
      
    </div>
  )
}

export default Dashboard