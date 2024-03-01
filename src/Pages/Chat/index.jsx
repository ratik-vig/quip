import { useContext, useEffect } from "react"
import { UserContext } from "../../context/userProvider"
import { useLogin } from "../Login/useLogin"

import './chat.css'
import ChatList from "../../Components/ChatList"
import { useChats } from "../../hooks/useChats"
import { useModal } from "../../Components/Modal/useModal"
import Modal from "../../Components/Modal"
import Loader from "../../Components/Loader/Loader"

const Chat = () => {

    const { user, setUser } = useContext(UserContext)
    const { handleLogout } = useLogin()
    const [ data, loading, error, fetchChats ] = useChats()
    const [visible, setVisible] = useModal()
    
    const fetchData = () => {
        fetchChats()
    }

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        if(data)
            console.log(data)
    }, [data])

    return (
        <div className="chat-container">
            <Loader isLoading={loading} />
            <Modal 
                visible={visible}
                setVisible={setVisible}
            />
            <ChatList 
                chats={data}
                setVisible={setVisible}
            />
            <div className="message-container">
                <p>message pane</p>
            </div>
        </div>
    )
}

export default Chat