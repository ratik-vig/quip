import './button.css'

const Button = ({ text, fluid, onClick }) => {
    return (
        <div className="button-wrapper">
            <button className={`button ${fluid && 'fluid'} `} onClick={onClick}>
                {text}
            </button>
        </div>
        
    )
}

export default Button