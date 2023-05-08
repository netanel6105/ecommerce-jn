import "./App.css";
import { MyContext } from "./context/myContext";
import AppRouter from "./routers/appRouter";


function App() {
  
  return (
    <div className="App">
      <MyContext.Provider value={{

      }}>

      <AppRouter />
      </MyContext.Provider>
    </div>
  );
}

export default App;