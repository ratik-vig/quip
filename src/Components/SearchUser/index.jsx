import { useInput } from "../../hooks/useInput"
import Input from "../Input/Input"
import ResultPane from "./ResultPane"
import SearchForm from "./SearchForm"
import { useChats } from "../../hooks/useChats"
import { useEffect } from "react"
import { useUsers } from "../../hooks/useUsers"

const SearchUser = () => {
    const { text: searchTerm, setText: setSearchTerm} = useInput('')
    const [ data, loading, error, fetchUsers ] = useUsers()

    useEffect(() => {
        if(searchTerm.length === 2){
            fetchUsers(searchTerm)
        }
        
    }, [ searchTerm])

    useEffect(() => {
        if(data)
            console.log('check ', data)
    }, [data])

    return(
        <>
            <SearchForm 
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />
            <ResultPane />
        </>
    )
}

export default SearchUser