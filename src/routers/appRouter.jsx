import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LayoutAdmin from "../layout/layoutAdmin/LayoutAdmin";
import { ToastContainer } from "react-toastify";
import LayoutUser from "../layout/layoutUser/LayoutUser";
import { myContext } from "../context/myContext";
import HomeAdmin from "../admin_components/HomeAdmin";
import UserList from "../admin_components/UserList";
import AdminLogin from "../admin_components/AdminLogin";

const AppRouter = () => {




  return (
    <Router>
      <myContext.Provider value={{

      }}>
        <Routes>

          <Route path="/" element={<LayoutUser />} >

          </Route>



          {/* Admin Layout */}
          <Route path="/admin" element={<LayoutAdmin />}>
            <Route index element={<HomeAdmin />} />
            <Route path="/admin/login" element={<AdminLogin/>}/>


            <Route path="/admin/users" element={<UserList/>} />


          

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