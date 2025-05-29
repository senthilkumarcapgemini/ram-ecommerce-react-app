import React from 'react';
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from './redux/store';
import {
  Home,
  Products, 
  Login,
  Register
} from "./pages";
// import store from "./redux/store";


const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />        
        </Routes>
    </BrowserRouter>
  </Provider>
    
   /* <div>
      <h1>Welcome to the Food Ordering App 🍔</h1>
    </div> */
  );
};

export default App;