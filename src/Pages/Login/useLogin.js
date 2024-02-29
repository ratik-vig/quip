import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { usePost } from '../../hooks/useFetch'
import { UserContext } from '../../context/userProvider'

export function useLogin() {
    const [data, loading, error, handleRequest] = usePost('http://localhost:5001/api/v1/auth/login')
    const { user, setUser} = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(() => {
        if(data){
            const result = { userId: data.userId, username: data.name, email: data.email, token: data.token }
            setUser(result)
            localStorage.setItem("user", JSON.stringify(result))
            navigate('/chat')
        }
    }, [data])

    const handleLogin = (email, password, setEmailError, setPwdError) => {
        
        if(!email || !password) {
            if(!email) setEmailError({msg: 'Email is required'})
            if(!password) setPwdError({msg: 'Password is required'})
            return
        }

        handleRequest({ email, password })
    }

    return [
       data,
       loading,
       error, 
       handleLogin
    ]
}