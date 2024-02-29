import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Input from '../../Components/Input/Input'
import Button from '../../Components/Button/Button'
import Loader from '../../Components/Loader/Loader'

import { useLogin } from './useLogin'
import { useInput } from '../../hooks/useInput'
import { UserContext } from '../../context/userProvider'

import Strings from '../../Constants/Strings'
import logo from '../../Assets/logo.png'
import './login.css'


const Login = () => {
    const navigate = useNavigate()
    const [data, loading, error, handleLogin] = useLogin()
    const {user, setUser} = useContext(UserContext)

    const { text: email, setText: setEmail, error: emailError, setError: setEmailError } = useInput('')
    const { text: password, setText: setPassword, error: pwdError, setError: setPwdError } = useInput('')

    useEffect(() => {        
        if(data){
            console.log(data)
            
        }
        if(error)
            console.log(error)
    }, [data, error, loading])

    return (
        <div className='login-page'>
            <img src = {logo} className='logo'/>
            <Loader isLoading={loading} />
            <div className='form-container'>

                <Input 
                    placeholder={Strings.emailPlaceholder}
                    label = {Strings.emailLabel}
                    type="email"
                    value={email}
                    onChange={setEmail}
                    errors={emailError}
                    setError={setEmailError}
                />
                <Input 
                    placeholder={Strings.passwordPlaceholder}
                    label = {Strings.passwordLabel}
                    type="password"
                    value={password}
                    onChange={setPassword}
                    errors={pwdError}
                    setError={setPwdError}
                />
                <Button 
                    text={Strings.loginBtn}
                    fluid
                    onClick={ () => handleLogin(email, password, setEmailError, setPwdError) }
                />
                {error && <div className='error-container'>
                    {error.errors.map(item => <p>{item.msg}</p>)}
                </div>}
            </div>
        </div>
    )
}

export default Login