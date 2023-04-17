import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LayoutAdmin from "../layout/layoutAdmin/LayoutAdmin";
import { ToastContainer } from "react-toastify";
import LayoutUser from "../layout/layoutUser/LayoutUser";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
     
        <Route path="/" element={<LayoutUser/>} >
                
        </Route>




       <Route path="/admin" element={<LayoutAdmin />}>
                
       </Route>

         {/* Not Found */}
        <Route path="/" element={<h1>Not Found 404</h1>} />
      </Routes>

      <ToastContainer theme="colored" position="top-left" />
    </Router>
  );
};
export default AppRouter;