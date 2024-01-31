import Home from "./pages/home"
import Register from "./pages/formregister"
import FormLogin from "./pages/formlogin"
import DetailPages from "./pages/detail"
import CreateMenu from './pages/CreateMenu'
import FormEdit from './pages/FormEdit'
import ProtectedRoute from './hoc/protectedroute'
// import ProtectedLogin from './hoc/AuthRoute'

export const Routes = [{
    path: "/",
    element: 
        <Home/>
    },
    {
    path: "/register",
    element: 
        // <ProtectedRoute>
        <Register/>
        // </ProtectedRoute>
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
        // <ProtectedRoute>
        <CreateMenu/>
        // </ProtectedRoute>
    }, 
    {
    path: "/detail/:id",
    element: 
        // <ProtectedRoute>
        <DetailPages/>
        // </ProtectedRoute>
    },
    {
    path: '/form/:id',
    element: 
        // <ProtectedRoute>
            <FormEdit/>
        // </ProtectedRoute>
    }]