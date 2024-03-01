import Header from "./Header"
import './chatlist.css'
import ListPane from './ListPane'

const ChatList = ({ chats, setVisible }) => {
    return (
        <div className="chatlist-container">
            <Header setVisible={setVisible} />
            <ListPane 
                chats={chats}
            />

        </div>
        
    )
}

export default ChatList