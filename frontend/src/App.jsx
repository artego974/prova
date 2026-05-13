import react from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import PrivateRoutes from './components/PrivateRoutes'
import Dashboard from './pages/Dashboard'
import Admin from './pages/Admin'
import Reception from './pages/Reception'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<PrivateRoutes allowRoles={["admin"]}><Dashboard /></PrivateRoutes>} />
        <Route path='/admin' element={<PrivateRoutes allowRoles={["admin"]}><Admin /></PrivateRoutes>} />
        <Route path='/reception' element={<PrivateRoutes allowRoles={["admin", "cerimonialista"]}><Reception /></PrivateRoutes>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
