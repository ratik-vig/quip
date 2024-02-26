import './input.css'

const Input = ({ type, placeholder, label, value, onChange}) => {

    const onChangeHandler = (e) => {
        onChange(e.target.value)
    }       
    
    return (
        <div className='input-wrapper'>
            {label && <div className='input-label'>{label}</div>}
            <input 
                type={type}
                placeholder={placeholder}
                className='input-primary'
                value={value}
                onChange={onChangeHandler}
            />
        </div>
    )
}

export default Input