import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { API_URL, TOKEN_KEY, doApiMethod } from '../../services/services';



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
    <div className="container mx-auto">

      <form onSubmit={handleSubmit(onSub)} className="pl-[200px] px-8 pt-[100px] pb-8 mb-4 ">

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            email:
          </label>

          <input {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
            className="shadow appearance-none border rounded w-96  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="email" />
          {errors.email && <div className='text-red-600 '>*enter valid email</div>}
        </div>


        <div class="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" >
            Password:
          </label>
          <input  {...register("password", { required: true, minLength: 3 })}
            className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="**********" />
          {errors.password && <div className='text-red-600'>*enter valid password (min 3 chars)</div>}

        </div>

        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Login
          </button>

        </div>
      </form>
    </div>

  )
}

export default AdminLogin