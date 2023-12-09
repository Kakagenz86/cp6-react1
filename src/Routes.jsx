import React from 'react'
import Home from "./pages/home"
import FormLogin from "./pages/formlogin"
import DetailPages from "./pages/detail"
import CreateMenu from './pages/CreateMenu'
import FormEdit from './pages/FormEdit'
import ProtectedRoute from './hoc/protectedroute'
// import ProtectedLogin from './hoc/AuthRoute'

export const Routes = [{
    path: "/",
    element: 
    <ProtectedRoute>
        <Home/>
    </ProtectedRoute>
    },
    {
    path: "/login",
    element: 
    // <ProtectedLogin>
        <FormLogin/>
    // </ProtectedLogin>
    },
    {
    path: "/menu",
    element:
        <CreateMenu/>
    }, 
    {
    path: "/detail/:id",
    element: 
        <DetailPages/>
    },
    {
    path: '/form/:id',
    element: 
        <FormEdit/>
    }]