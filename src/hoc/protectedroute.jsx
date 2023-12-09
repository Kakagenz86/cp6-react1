import { Navigate } from "react-router-dom";

const ProtectedRoute = (props) => {
    const token = localStorage.getItem('accessToken')

    if(!token)
        return <Navigate to="/login" />

    return props.children
}

export default ProtectedRoute;