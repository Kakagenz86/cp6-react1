import { Navigate } from "react-router-dom";

const ProtectedLogin = (props) => {
    const token = localStorage.getItem('accessToken')

    if(token)
        return <Navigate to="/" />

    return props.children
}

export default ProtectedLogin;