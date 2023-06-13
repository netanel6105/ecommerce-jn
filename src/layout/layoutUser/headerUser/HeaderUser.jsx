import React, { useContext } from "react";
import { CiSearch } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { TOKEN_KEY } from "../../../services/services";
import CategoryStrip from "../../../client_components/home/CategoryStrip";


const HeaderUser = () => {

const nav = useNavigate();

// const person ={
//   name:"yarin",
//   age:26
// }

// person.age
// person['age']
// params.id
// params['id']

const logout = () =>{
  localStorage.removeItem(TOKEN_KEY);
  toast.info('you logged out, see you soon ')
  nav("/");
}
 
  return (
    
    <div className="flex flex-row justify-around p-4 bg-neutral-800">
      <Link
        to="/"
        className="font-bold text-lg text-white hover:text-yellow-400"
      >
        J&N
      </Link>

      <div className="flex  mx-2 items-center gap-2 border-black rounded-xl bg-neutral-100">
        <CiSearch className="ml-2 text-black " />
        <input
          className="bg-neutral-100 rounded-xl outline-none"
          type="text"
          placeholder="Search"
        />
      </div>

        {!localStorage["token"]?
      <div className="flex gap-5 hover:cursor-pointer">
        <Link to="/register" className="font-semibold text-white hover:text-yellow-400">
          Register
        </Link>
        <Link to="/login" className="font-semibold text-white hover:text-yellow-400">Login</Link>
      </div>
       :
      <div className="bg-red-700 rounded-full py-1 px-3 font-bold">
        <button onClick={ logout } className="text-white">Logout</button>
      </div>
    }

    </div>

    
  );
};

export default HeaderUser;
