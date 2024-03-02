import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { usePost } from '../../hooks/useFetch'
import Routes from '../../Constants/Routes'

export function useSignup() {
    const [data, loading, error, handleRequest] = usePost(Routes.signup)
    const navigate = useNavigate()

    useEffect(() => {
        if(data){
            navigate('/login')
        }
    }, [data])

    const handleSignup = (firstName, lastName, email, password, confirmPwd, setFnameError, setLnameError,setEmailError, setPwdError, setConfirmPwdError) => {
        
        if(!email || !password || !firstName || !lastName || !confirmPwd) {
            if(!email) setEmailError({msg: 'Email is required'})
            if(!password) setPwdError({msg: 'Password is required'})
            if(!firstName) setFnameError({msg: 'First name is required'})
            if(!lastName) setLnameError({msg: 'Last name is required'})
            if(!confirmPwd) setConfirmPwdError({msg: 'Password confirmation is required'})
            return;
        }
        if(password !== confirmPwd){
            setPwdError({msg: 'Passwords do not match'})
            setConfirmPwdError({msg: 'Password do not match'})
            return;
        }
        handleRequest({ fname: firstName, lname: lastName, email, password })
    }

    return {
       data,
       loading,
       error, 
       handleSignup,
    }
}