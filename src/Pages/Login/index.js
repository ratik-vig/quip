import Input from '../../Components/Input/Input'
import Button from '../../Components/Button/Button'
import Loader from '../../Components/Loader/Loader'

import { useLogin } from './useLogin'
import { useInput } from '../../hooks/useInput'

import Strings from '../../Constants/Strings'
import logo from '../../Assets/logo.png'

import './login.css'
import { useGet } from '../../hooks/useFetch'
import { useEffect } from 'react'

const Login = () => {

    const [
        handleLogin,
     ] = useLogin('', '')

    const [data, loading, error] = useGet('http://localhost:5001/api/v1/chats/getChatsByUser') 

    const { text: email, setText: setEmail, error: emailError, setError: setEmailError } = useInput('')
    const { text: password, setText: setPassword, error: pwdError, setError: setPwdError } = useInput('')

    useEffect(() => {
        console.log(loading)
        if(data)
            console.log(data.map(item => console.log('chat id' , item.chat_id)))
    }, [data, loading])

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
            </div>
        </div>
    )
}

export default Login