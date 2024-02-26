import { useState } from "react";

export function useLogin(initialEmail, initalPassword) {
    const [email, setEmail] = useState(initialEmail)
    const [password, setPassword] = useState(initalPassword)

    const handleEmailChange = (e) => {
        setEmail(e)
    }

    const handlePasswordChange = (e) => {
        setPassword(e)
    }

    return {
        email,
        setEmail: handleEmailChange,
        password,
        setPassword: handlePasswordChange
    }
}