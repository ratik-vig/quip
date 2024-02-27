
export function useLogin(initialEmail, initalPassword) {

    const handleLogin = (email, password, setEmailError, setPwdError) => {
        if(!email || !password) {
            if(!email) setEmailError({msg: 'Email is required'})
            if(!password) setPwdError({msg: 'Password is required'})
            return
        }
        console.log(email, password)
    }

    return [
       handleLogin
    ]
}