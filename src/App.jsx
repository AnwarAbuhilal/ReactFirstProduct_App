import React from 'react'
import Navbar from './components/navbar/Navbar.jsx'
import Products from './components/products/Products.jsx'
import Footer from './components/footer/Footer.jsx'


function App() {
  return (
    <> 
      <div className='container'>
        <Navbar/>
        <Products/>
        <Footer/>
      </div>
    </>
   

  )
}

export default App