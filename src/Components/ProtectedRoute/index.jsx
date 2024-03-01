import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { UserContext, UserProvider } from "../../context/userProvider"

const ProtectedRoute = ({ children}) => {
    const { user } = useContext(UserContext)

    if(user){
        return children
    }

    return <Navigate to={'/login'} replace />
}

export default ProtectedRoute