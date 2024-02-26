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
        setPassword
    } = useLogin('', '')

    return (
        <div className='login-page'>
            <div className='form-container'>
                <Input 
                    placeholder={Strings.emailPlaceholder}
                    label = {Strings.emailLabel}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e)}
                />
                <Input 
                    placeholder={Strings.passwordPlaceholder}
                    label = {Strings.passwordLabel}
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e)}
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