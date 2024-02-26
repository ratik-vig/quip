import { useEffect } from 'react'
import Input from '../../Components/Input/Input'
import Button from '../../Components/Button/Button'

import { useLogin } from './useLogin'

import Strings from '../../Constants/Strings'

import './login.css'

const Login = () => {

    const { 
        email, 
        setEmail, 
        password, 
        setPassword,
        errors
    } = useLogin('', '')

    useEffect(() => {
        console.log(errors)
    }, [])
    return (
        <div className='login-page'>
            <div className='form-container'>
                <Input 
                    placeholder={Strings.emailPlaceholder}
                    label = {Strings.emailLabel}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e)}
                    errors={errors[0]}
                />
                <Input 
                    placeholder={Strings.passwordPlaceholder}
                    label = {Strings.passwordLabel}
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e)}
                    errors={errors[1]}
                />
                <Button 
                    text={Strings.loginBtn}
                    fluid
                />
            </div>
        </div>
    )
}

export default Login