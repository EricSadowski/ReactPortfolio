import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Intro from "./components/intro/Intro";
import About from './components/about/About';
import Contact from './components/contact/Contact';
import ProductList from './components/productList/ProductList';
import Nav from './components/nav/nav';


function App() {

  return (
    <>
     <div>
      <Nav/>
      <Intro></Intro>

     <ProductList/>
     <About/>
     <Contact/>
     </div>
    </>
  )
}

export default App
