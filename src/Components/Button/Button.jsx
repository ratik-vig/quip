import './button.css'

const Button = ({ text, fluid }) => {
    return (
        <div className="button-wrapper">
            <button className={`button ${fluid && 'fluid'} `}>
                {text}
            </button>
        </div>
        
    )
}

export default Button