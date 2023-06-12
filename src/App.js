
import "./App.css";
import { API_URL, TOKEN_KEY, doApiGet } from "./services/services";
import React, { useEffect, useState } from 'react';
import {MyContext} from './context/myContext'; // Import MyContext from the appropriate file
import AppRouter from './routers/appRouter'; // Import AppRouter from the appropriate file
// import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';



function App() {
  const [addToDo, setToDo] = useState([
    "Add another component to Tailwind Components",
    "Submit Todo App Component to Tailwind Components"
  ]);
  const [userInfo , setUserInfo] = useState({});
  // const nav = useNavigate();
  
  
useEffect(() => {
  doUserApi()
},[localStorage[TOKEN_KEY]])

const doUserApi = async() => {
  if(localStorage[TOKEN_KEY]){
    try{
      const url = API_URL+"/users/myInfo";
      const resp = await doApiGet(url); 
      setUserInfo(resp);
      console.log(resp);
    }
    catch(err){
      console.log(err);
      localStorage.removeItem(TOKEN_KEY);
    }
  }
}

  const addNewToDo = (mission) =>{
    setToDo([...addToDo,mission])
  }

  // const logout = async() =>{
  //   localStorage.removeItem(TOKEN_KEY);
  //   toast.info('you logged out, see you soon ')
  //   // nav('/');
  // }
   

  
  return (
    <div className="App">
      <MyContext.Provider value={{
        // logout,
        addToDo,addNewToDo,
        userInfo,setUserInfo,
        doUserApi
      }}>

      <AppRouter />
      </MyContext.Provider>
    </div>
  );
}

export default App;

