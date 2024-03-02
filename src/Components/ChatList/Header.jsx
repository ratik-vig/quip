import { Add } from '@mui/icons-material'
import Input from '../Input/Input'
import logo from '../../Assets/logo.png'

const Header = ({setVisible, numChats}) => {

    return(
        <div className="chatlist-header">
            <div className="chatlist-header-title">
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <img src={logo} style={{width: 28, height: 28, marginRight: 8}} />
                    <p className="header-title">{`All Chats (${ !numChats ? 0 : numChats})`}</p>
                </div>
                <div style={{cursor: 'pointer'}} onClick={() => setVisible(true)}>
                    <Add style={{color: '#3178ab'}} />

                </div>
               
            </div>
            <Input 
                placeholder={'Search Chats'}
            />
        </div>
    )
}

export default Header