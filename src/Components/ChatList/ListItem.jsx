const ListItem = ({ data, selectedChat, setSelectedChat }) => {

    return(
        <div className={`listitem-wrapper ${selectedChat === data.chat_id && 'selected'}`} onClick={() => setSelectedChat(data.chat_id)}>
            <div className="name-wrapper">
                <p className={`name-label ${selectedChat === data.chat_id && 'selected-text'}`}>{`${data.user2.user_fname} ${data.user2.user_lname}`}</p>
                <p className={`time-label ${selectedChat === data.chat_id && 'selected-text'}`}>12.30pm</p>
            </div>
        </div>
    )
}

export default ListItem