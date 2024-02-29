import logo from '../../Assets/logo.png'
import './loader.css'

const Loader = ({ isLoading }) => {
    return(
        isLoading && <>
            <div className='loader-dimmer'>
                
            </div>
            <div className="loader-container">
                <img src = {logo} className='loader-img' />
            </div>
        </>
        
    )
}

export default Loader