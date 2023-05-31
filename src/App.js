
import "./App.css";


import { TOKEN_KEY } from "./services/services";

import React, { useState } from 'react';
import {MyContext} from './context/myContext'; // Import MyContext from the appropriate file
import AppRouter from './routers/appRouter'; // Import AppRouter from the appropriate file


// const [addToDo, setToDo] = useState([
//   "Add another component to Tailwind Components",
//   "Submit Todo App Component to Tailwind Components"
// ])

// function App() {
  
//   const [product_ar, setProduct_ar] = useState(["milk","bamba","egge"]);
  
//   const addNewToDo = (mission) =>{
//     setProduct_ar([...product_ar,mission])
//   }

//   const logout = async() =>{
//     localStorage.removeItem(TOKEN_KEY);
   
//   }
  
//   return (
//     <div className="App">
//       <MyContext.Provider value={{
//         logout,
//         product_ar,addNewToDo
//       }}>

//       <AppRouter />
//       </MyContext.Provider>
//     </div>
//   );
// }

// export default App;


function App() {
  const [product_ar, setProduct_ar] = useState(["milk","bamba","egge"]);

  const addNewToDo = (mission) => {
    setProduct_ar([...product_ar, mission]);
  };

  const logout = async () => {
    localStorage.removeItem(TOKEN_KEY);
  };

  return (
    <div className="App">
      <MyContext.Provider
        value={{
          logout,
          product_ar,
          addNewToDo
        }}
      >
        <AppRouter />
      </MyContext.Provider>
    </div>
  );
}

export default App;