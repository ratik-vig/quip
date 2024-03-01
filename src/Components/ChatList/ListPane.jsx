import ListItem from "./ListItem"
import { useState, useEffect} from 'react'

const ListPane = ({ chats }) => {
    
    const [selectedChat, setSelectedChat] = useState(1)

    return(
        <div className="listpane-container">
            {chats?.map(chat => {
                return <ListItem key={chat.chat_id} selectedChat={selectedChat} setSelectedChat={setSelectedChat} data={chat} />
            })}
        </div>
    )
}

export default ListPane