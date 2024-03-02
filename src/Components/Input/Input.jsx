import './input.css'
import { Search } from '@mui/icons-material'
const Input = ({ 
    type, 
    placeholder, 
    label, 
    value, 
    onChange, 
    errors,
    searchInput=true,
    setError 
}) => {

    return (
        <div 
            className={`${searchInput ? 'input-wrapper-search' : 'input-wrapper'}`}
        >
            {label && <div className='input-label'>{label}</div>}

            <div style={{display: 'flex', alignItems: 'center'}}>
                {searchInput && <Search style={{color: '#c3c3c3'}}/>}
            
                <input 
                    type={type}
                    placeholder={placeholder}
                    className={`${searchInput ? 'input-search' : 'input-primary'} ${errors && 'error-border'}`}
                    value={value}
                    onChange={ (e) => onChange(e) }
                />
            </div>
            {
                errors && 
                <p className='error-text'>{errors.msg}</p>
            }
        </div>
    )
}

export default Input