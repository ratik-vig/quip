import { Add } from '@mui/icons-material'
import Input from '../Input/Input'

const Header = ({setVisible}) => {

    return(
        <div className="chatlist-header">
            <div className="chatlist-header-title">
                <p className="header-title">All Chats</p>
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