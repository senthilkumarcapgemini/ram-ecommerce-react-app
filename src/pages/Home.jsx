import React from 'react';
import ReactDOM from "react-dom/client";
import { Navbar, Main, Product, Footer} from "../components";

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Product />
      <Footer />      
    </>
  )
}

export default Home