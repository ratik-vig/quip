import { Link } from 'react-router-dom'

import Input from '../../Components/Input/Input'
import Button from '../../Components/Button/Button'
import Loader from '../../Components/Loader/Loader'

import { useLogin } from './useLogin'
import { useInput } from '../../hooks/useInput'

import Strings from '../../Constants/Strings'
import logo from '../../Assets/logo.png'
import './login.css'


const Login = () => {
    const { data, loading, error, handleLogin } = useLogin()

    const { text: email, setText: setEmail, error: emailError, setError: setEmailError } = useInput('')
    const { text: password, setText: setPassword, error: pwdError, setError: setPwdError } = useInput('')

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
                    noFocus={false}
                    onChange={setEmail}
                    errors={emailError}
                    setError={setEmailError}
                    searchInput={false}
                />
                <Input 
                    placeholder={Strings.passwordPlaceholder}
                    label = {Strings.passwordLabel}
                    type="password"
                    value={password}
                    noFocus={false}
                    onChange={setPassword}
                    errors={pwdError}
                    setError={setPwdError}
                    searchInput={false}
                />
                <Button 
                    text={Strings.loginBtn}
                    fluid
                    onClick={ () => handleLogin(email, password, setEmailError, setPwdError) }
                />
                <div className='signup-container'>
                    <p>Don't have an account?</p>
                    <Link className='signup-cta' to={'/signup'}>Sign up</Link>
                </div>
                {error && <div className='error-container'>
                    {error.errors.map(item => <p>{item.msg}</p>)}
                </div>}
            </div>
        </div>
    )
}

export default Login