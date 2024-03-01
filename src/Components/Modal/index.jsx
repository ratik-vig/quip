import './modal.css'

const Modal = ({ visible, setVisible, children }) => {
    return(
        visible && <>
            <div className='dimmer' onClick={() => setVisible(false)}>
                
            </div>

            <div className="modal-container">
                {children}
            </div>
        </>
        
    )
}

export default Modal