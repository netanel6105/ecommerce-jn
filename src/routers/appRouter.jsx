import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LayoutAdmin from "../layout/layoutAdmin/LayoutAdmin";
import { ToastContainer } from "react-toastify";
import LayoutUser from "../layout/layoutUser/LayoutUser";
import { myContext } from "../context/myContext";

const AppRouter = () => {



  
  return (
    <Router>
      <myContext.Provider value={{

      }}>
      <Routes>
     
        <Route path="/" element={<LayoutUser/>} >
                
        </Route>




       <Route path="/admin" element={<LayoutAdmin />}>
                
       </Route>

         {/* Not Found */}
        <Route path="/" element={<h1>Not Found 404</h1>} />
      </Routes>

      <ToastContainer theme="colored" position="top-left" />
      </myContext.Provider>
    </Router>
  );
};
export default AppRouter;