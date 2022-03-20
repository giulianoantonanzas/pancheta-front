import { FC } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AdminLayout from "../Layouts/AdminLayout";
import MainLayout from "../Layouts/MainLayout";
import About from "../Views/About";
import Home from "../Views/Home";
import Login from "../Views/Login";
import ProductAdmin from "../Views/ProductAdmin";
import NewProduct from "../Views/ProductManage";
import Products from "../Views/Products";
import Product from "../Views/Product";
import Payment from "../Views/Payment";

const Navegator: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login />} />

      <Route element={<MainLayout />}>
        <Route path='' element={<Home />} />
        <Route path='productos' element={<Products />} />
        <Route path='productos/:id' element={<Product />} />
        <Route path='payment' element={<Payment />} />
        <Route path='sobre-mi' element={<About />} />
      </Route>

      <Route path='admin' element={<AdminLayout />}>
        <Route path='' element={<ProductAdmin />} />
        <Route path='products' element={<ProductAdmin />} />
        <Route path='products/new' element={<NewProduct />} />
        <Route path='products/:id' element={<NewProduct />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Navegator;
