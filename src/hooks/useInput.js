import { useState } from "react";

export function useInput(initialValue = ''){
    const [text, setText] = useState(initialValue)
    const [error, setError] = useState('')

    const onChangeHandler = (e) => {
        setError(false)
        setText(e.target.value)
    }      

    return { text, setText: onChangeHandler, error, setError }
}