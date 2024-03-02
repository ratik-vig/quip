import Input from '../../Components/Input/Input'
import Button from '../../Components/Button/Button'

// import { useLogin } from './useLogin'
import { useInput } from '../../hooks/useInput'

import Strings from '../../Constants/Strings'
import logo from '../../Assets/logo.png'

import '../Login/login.css'
import { useSignup } from './useSignup'
import Loader from '../../Components/Loader/Loader'
import Modal from '../../Components/Modal'

const Signup = () => {

    const { text: fname, setText: setFname, error: fnameError, setError: setFnameError } = useInput('')
    const { text: lname, setText: setLname, error: lnameError, setError: setLnameError } = useInput('')
    const { text: email, setText: setEmail, error: emailError, setError: setEmailError } = useInput('')
    const { text: password, setText: setPassword, error: pwdError, setError: setPwdError } = useInput('')
    const { text: confirmPwd, setText: setConfirmPwd, error: confirmPwdError, setError: setConfirmPwdError } = useInput('')
    const { data, loading, error, handleSignup } = useSignup()

    return (
        <div className='login-page'>
            <img src = {logo} className='logo'/>
            <Loader isLoading={loading} />
            <div className='form-container'>
                <Input 
                    placeholder={Strings.fnamePlaceholder}
                    label = {Strings.fnameLabel}
                    type="email"
                    value={fname}
                    onChange={setFname}
                    errors={fnameError}
                    setError={setFnameError}
                />
                <Input 
                    placeholder={Strings.lnamePlaceholder}
                    label = {Strings.lnameLabel}
                    type="email"
                    value={lname}
                    onChange={setLname}
                    errors={lnameError}
                    setError={setLnameError}
                />
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
                    onClick={ () => handleSignup(fname, lname, email, password, confirmPwd, setFnameError, setLnameError, setEmailError, setPwdError, setConfirmPwdError) }
                />
                {error && <div className='error-container'>
                    {error.errors.map(item => <p>{item.msg}</p>)}
                </div>}
            </div>
        </div>
    )
}

export default Signup