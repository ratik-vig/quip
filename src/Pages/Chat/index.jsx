import { useContext, useEffect } from "react"
import { UserContext, UserProvider } from "../../context/userProvider"

const Chat = () => {
    const { user, setUser } = useContext(UserContext)
    useEffect(() => {
        console.log('user', user)
    }, [])
    return (
        <div>
            <h1>chat page</h1>
            <p>{ user?.email }</p>
        </div>
    )
}

export default Chat