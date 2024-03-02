import { useInput } from "../../hooks/useInput"
import Input from "../Input/Input"
import ResultPane from "./ResultPane"
import SearchForm from "./SearchForm"

const SearchUser = () => {
    const { text: searchTerm, setText: setSearchTerm} = useInput('')

    return(
        <>
            <SearchForm />
            <ResultPane />
        </>
    )
}

export default SearchUser