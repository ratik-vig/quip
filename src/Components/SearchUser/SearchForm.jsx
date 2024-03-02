import { useChats } from "../../hooks/useChats"
import { useInput } from "../../hooks/useInput"
import Input from "../Input/Input"

const SearchForm = () => {
    const { text: searchTerm, setText: setSearchTerm} = useInput('')
    const { data, loading, error, handleRequest } = useChats()
    
    return(
        <>
            <div style={{display: 'flex', alignItems: 'center', width: '100%' }}>

                <Input 
                    placeholder={"Enter email to search for user"}
                    value={searchTerm}
                    onChange={setSearchTerm}
                />
            </div>
            
            <div>

            </div>
        </>
    )
}

export default SearchForm