import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'


function App() {

  return (
    <>
      <Navbar />
      <Outlet />
      <Login />
      <Footer />
    </>
  )
}

export default App
