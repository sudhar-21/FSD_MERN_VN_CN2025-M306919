import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
// import Array from './Components/Array'
// import Login from './Components/Login'
// import Profile from './Components/Profile'
// import Input from './Components/Input'
// import Name from './Components/Name'
// import Product from './Components/Product'
// import Par from './Components/Par'
// import Pf from './Components/Pf'
// import Stud from './Components/Stud'
// import Pc from './Components/Pc'
// import products from './data.json'
// import ProductList from './Components/Productlist'
// import Pl from './Components/Pl'
// import Fruit from './Components/Fruit'
// import Profileform from './Components/Profileform'
// import Addpost from './Components/Addpost'
// import User from './Components/User'
// import User2 from './Components/User2'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './Pages/About';
import About from './Pages/Home';
import Products from './Pages/Products1';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/about" style={{ marginRight: '1rem' }}>About</Link>
        <Link to="/products">Products</Link>
      </nav>

      <div style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
