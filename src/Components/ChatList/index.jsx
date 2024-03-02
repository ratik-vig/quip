import Header from "./Header"
import './chatlist.css'
import ListPane from './ListPane'
import Button from "../Button/Button"

const ChatList = ({ chats, setVisible }) => {
    return (
        <div className="chatlist-container">
            <Header 
                setVisible={setVisible}
                numChats = {chats?.length} 
            />
            <ListPane 
                chats={chats}
            />
            
        </div>
        
    )
}

export default ChatList