import './input.css'

const Input = ({ type, placeholder, label, value, onChange, errors, setError }) => {

    return (
        <div className='input-wrapper'>
            {label && <div className='input-label'>{label}</div>}
            <input 
                type={type}
                placeholder={placeholder}
                className={`input-primary ${errors && 'error-border'}`}
                value={value}
                onChange={ (e) => onChange(e) }
            />
            {
                errors && 
                <p className='error-text'>{errors.msg}</p>
            }
        </div>
    )
}

export default Input