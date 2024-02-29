import Input from '../../Components/Input/Input'
import Button from '../../Components/Button/Button'

// import { useLogin } from './useLogin'
import { useInput } from '../../hooks/useInput'

import Strings from '../../Constants/Strings'
import logo from '../../Assets/logo.png'

import '../Login/login.css'

const Signup = () => {

    // const [
    //     handleLogin,
    //  ] = useLogin('', '')

    const { text: email, setText: setEmail, error: emailError, setError: setEmailError } = useInput('')
    const { text: password, setText: setPassword, error: pwdError, setError: setPwdError } = useInput('')
    const { text: confirmPwd, setText: setConfirmPwd, error: confirmPwdError, setError: setConfirmPwdError } = useInput('')

    return (
        <div className='login-page'>
            <img src = {logo} className='logo'/>

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
                <Input 
                    placeholder={Strings.confirmPasswordPlaceholder}
                    label = {Strings.confirmPasswordLabel}
                    type="password"
                    value={confirmPwd}
                    onChange={setConfirmPwd}
                    errors={confirmPwdError}
                    setError={setConfirmPwdError}
                />
                <Button 
                    text={Strings.signupBtn}
                    fluid
                    // onClick={ () => handleLogin(email, password, setEmailError, setPwdError) }
                />
            </div>
        </div>
    )
}

export default Signup