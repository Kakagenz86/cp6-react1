import React from 'react'
import Home from "./pages/home"
import FormLogin from "./pages/formlogin"
import DetailPages from "./pages/detail"
import CreateMenu from './pages/create menu'
import FormEdit from './pages/FormEdit'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<FormLogin/>}/>
            <Route path="/menu" element={<CreateMenu/>}/>
            <Route path="/detail/:id" element={<DetailPages/>}/>
            <Route path='/form/:id' element={<FormEdit/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
