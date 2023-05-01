import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { API_URL, doApiMethod, TOKEN_KEY } from '../services/services';


const AdminLogin = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    // let emailReg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const nav = useNavigate();
  
  
    const onSub = (bodyData) => {
      console.log(bodyData);
      doApi(bodyData)
    }
  
    const doApi = async (bodyData) => {
      try {
        let url = API_URL + "/users/login";
        let data = await doApiMethod(url, 'POST', bodyData)
        console.log(data);
        localStorage.setItem(TOKEN_KEY, data.token)
        nav("/admin/users")
      }
      catch (err) {
        console.log(err);
        alert('email or pass wrong')
      }
    }


  return (
//     <div className='container'>
//     <h1 className='text-center mt-4 text-2xl '>Login to admin</h1>

//     <form onSubmit={handleSubmit(onSub)} className='col-md-4 col-sm-6 mx-auto p-2'>

//       <label className=' py-2'>Email:</label>
//       <input {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} type="text"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 width-[150px]" placeholder="email..." required></input>
//       {/* <input {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} type="text" className='form-control' /> */}
//       {errors.email && <div className='text-danger'>*enter valid email</div>}

//       <label className=' py-2'>Password:</label>
//       <input {...register("password", { required: true, minLength: 3 })} type="text"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="password..." required></input>
//       {/* <input {...register("password", { required: true, minLength: 3 })} type="text" className='form-control' /> */}
//       {errors.password && <div className='text-danger'>*enter valid password (min 3 chars)</div>}

//       <div className='mt-4 flex justify-center'>
//         <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-[400px]'>Log in</button>
//       </div>
//     </form>
//   </div>




  <form class="bg-white   px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        email
      </label>
      <input class="shadow appearance-none border rounded w-96 pl-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="email"/>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border border-red-500 rounded w-96 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  type="password" placeholder="******************"/>
      <p class="text-red-500 text-xs italic">Please choose a password.</p>
    </div>

    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Login
      </button>
     
    </div>
  </form>
 

  )
}

export default AdminLogin