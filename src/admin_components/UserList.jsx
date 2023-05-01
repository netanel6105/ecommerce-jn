import React, { useEffect, useState } from 'react'
import { API_URL, doApiGet, doApiMethod } from '../services/services';
import { useNavigate } from 'react-router-dom';

const UserList = () => {

    const [ar, setAr] = useState([]);
    const nav = useNavigate();

    useEffect(() => {
        doApi();
    }, [])


    const doApi = async () => {
        let url = API_URL + "/users/allUsers";
        try {
            let data = await doApiGet(url)
            console.log(data)
            setAr(data)
        }
        catch (err) {
            console.log(err)
            alert("There problem , come back late")
            nav("/admin/login")
        }

    }

    const onChangeRole = async (_id, _role) => {
        let newRole = _role === "admin" ? "user" : "admin";
        let url = `${API_URL}/users/role?user_id=${_id}&role=${newRole}`;
        try {
            let data = await doApiMethod(url, "PATCH");
            console.log(data);

            if (data.modifiedCount === 1) {

                doApi();
            }
        }
        catch (err) {
            console.log(err)
            alert("You cant change yourself or the admin")
        }
    }




  return (
    <div classNameName='container'>


            <div className='text-center fs-4 my-2'>
                <h1 className=''>List of Users in the system:</h1>
            </div>

            {/* <AuthAdmin /> */}




            <table className="min-w-full border-collapse block md:table">
                <thead className="block md:table-header-group">
                    <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                        <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">#</th>
                        <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Name</th>
                        <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Email</th>
                        <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Role</th>
                    </tr>
                </thead>



                <tbody className="block md:table-row-group">
                    {ar.map((item, i) => {
                        // let myDate = item.date_created.substring(0, 10);
                        return (

                            <tr key={item._id} className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
                                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell fs-5"><span className="inline-block w-1/3 md:hidden font-bold">#</span>{i + 1}</td>
                                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell fs-5"><span className="inline-block w-1/3 md:hidden font-bold">Name</span>{item.name}</td>
                                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell fs-5"><span className="inline-block w-1/3 md:hidden font-bold">Email</span>{item.email}</td>

                                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                    <span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded" onClick={() => {
                                        onChangeRole(item._id, item.role)
                                    }} >{item.role}</button>

                                </td>
                            </tr>
                        )
                    })}





                </tbody>
            </table>
        </div>

  )
}

export default UserList