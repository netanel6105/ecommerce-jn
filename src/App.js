
import "./App.css";
import { TOKEN_KEY } from "./services/services";
import React, { useState } from 'react';
import {MyContext} from './context/myContext'; // Import MyContext from the appropriate file
import AppRouter from './routers/appRouter'; // Import AppRouter from the appropriate file




function App() {
  
  const [addToDo, setToDo] = useState([
  "Add another component to Tailwind Components",
  "Submit Todo App Component to Tailwind Components"
])
  
  const addNewToDo = (mission) =>{
    setToDo([...addToDo,mission])
  }

  const logout = async() =>{
    localStorage.removeItem(TOKEN_KEY);
   
  }
  
  return (
    <div className="App">
      <MyContext.Provider value={{
        logout,
        addToDo,addNewToDo
      }}>

      <AppRouter />
      </MyContext.Provider>
    </div>
  );
}

export default App;

