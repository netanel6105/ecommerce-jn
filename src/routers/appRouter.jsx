import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LayoutAdmin from "../layout/layoutAdmin/LayoutAdmin";
import { ToastContainer } from "react-toastify";
import LayoutUser from "../layout/layoutUser/LayoutUser";
import { MyContext } from "../context/myContext";

import UserList from "../admin_components/pages/users/UserList";
import AdminLogin from "../admin_components/pages/AdminLogin";
import Dashboard from "../admin_components/pages/Dashboard";
import CategoryList from "../admin_components/pages/category/categoryList";
import ProductList from "../admin_components/pages/products/ProductList";

import Comment from "../admin_components/pages/Comment";
import ToDolist from "../admin_components/pages/ToDolist";
import EditProducts from "../admin_components/pages/products/EditProducts";
import AddUser from "../admin_components/pages/users/AddUser";
import AddProduct from "../admin_components/pages/products/AddProduct";
import EditCategory from "../admin_components/pages/category/EditCategory";
import AddCategory from "../admin_components/pages/category/AddCategory";


const AppRouter = () => {
  return (
    <Router>
      <MyContext.Provider value={{}}>
        <Routes>
          <Route path="/" element={<LayoutUser />}></Route>

          {/* Admin Layout */}
          <Route path="/admin" element={<LayoutAdmin />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/login" element={<AdminLogin />} />
           
            <Route path="/admin/category" element={<CategoryList />} />
            <Route path="/admin/category/edit/:id" element={<EditCategory />} />
            <Route path="/admin/category/new" element={<AddCategory />} />

            <Route path="/admin/product" element={<ProductList />} />
            <Route path="/admin/product/edit/:id" element={<EditProducts />} />
            <Route path="/admin/product/new" element={<AddProduct />} />


            <Route path="/admin/users" element={<UserList />} />
            <Route path="/admin/users/add" element={<AddUser/>}/>

            <Route path="/admin/comment" element={<Comment />} />
            <Route path="/admin/todo" element={<ToDolist />} />
          </Route>

          {/* Not Found */}
          <Route path="/" element={<h1>Not Found 404</h1>} />
        </Routes>

        <ToastContainer theme="colored" position="top-left" />
      </MyContext.Provider>
    </Router>
  );
};
export default AppRouter;
