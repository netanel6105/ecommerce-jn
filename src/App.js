import { useState } from "react";
import "./App.css";
import { MyContext } from "./context/myContext";
import AppRouter from "./routers/appRouter";
import { TOKEN_KEY } from "./services/services";


function App() {
  const [user , setUser] = useState(null);

  const logout = async() =>{
    localStorage.removeItem(TOKEN_KEY);
    // setUser(null);
  }
  
  return (
    <div className="App">
      <MyContext.Provider value={{
        logout
      }}>

      <AppRouter />
      </MyContext.Provider>
    </div>
  );
}

export default App;