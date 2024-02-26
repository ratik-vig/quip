import Input from '../../Components/Input/Input'
import Button from '../../Components/Button/Button'

import { useLogin } from './useLogin'

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
                    placeholder="Enter your email"
                    label = "Email address"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e)}
                />
                <Input 
                    placeholder="Enter your password"
                    label = "Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e)}
                />
                <Button 
                    text={"Log in"}
                    fluid
                />
            </div>
        </div>
    )
}

export default Login