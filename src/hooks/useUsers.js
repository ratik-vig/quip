export function useUsers(email){

    const [data, loading, error, handleRequest] = useGet(`http://localhost:5001/api/v1/users/getUsers?email=${email}`)

    const fetchUsers = () => {
        
    }

    return {
        data,
        loading,
        error,
        handleRequest
    }
}