import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Product from './Pages/Product'
import Home from './Pages/Home'


function App() {

  return (
    <>
      <Navbar />
      <Outlet />
      <Home />
      <Footer />
    </>
  )
}

export default App
