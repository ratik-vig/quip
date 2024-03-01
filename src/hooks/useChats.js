import { useGet } from "./useFetch";

export function useChats() {
    const [data, loading, error, handleRequest] = useGet('http://localhost:5001/api/v1/chats/getChatsByUser');

    const fetchChats = () => {
        handleRequest()
    }

    return [
        data,
        loading,
        error,
        fetchChats
    ]
}