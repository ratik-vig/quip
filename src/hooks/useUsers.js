import { useGet } from "./useFetch"

export function useUsers(){

    const [data, loading, error, handleRequest] = useGet(`http://localhost:5001/api/v1/users/getUsers`)

    const fetchUsers = (email) => {
        handleRequest({email: email})
    }

    return [
        data,
        loading,
        error,
        fetchUsers
    ]
}