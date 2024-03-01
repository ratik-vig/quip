import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userProvider";

const useFetch = ( 
    url, 
    method="GET", 
    // token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOjIsInVzZXJfZm5hbWUiOiJyYXRpayIsInVzZXJfbG5hbWUiOiJ2aWciLCJ1c2VyX2VtYWlsIjoicmF0aWt2aWcxQGdtYWlsLmNvbSIsInVzZXJfcHdkIjoiJDJhJDEwJDhPRER0M053Q2tMdjNMZkJ0ZnFjTHVMWDlWdXplSUJQbzZiTHRpeTNtM3hoOVFLMGdrYlNLIiwiY3JlYXRlZEF0IjoiMjAyNC0wMi0yMVQwMjo1Nzo1MS4wMDBaIiwidXBkYXRlZEF0IjoiMjAyNC0wMi0yMVQwMjo1Nzo1MS4wMDBaIn0sImlhdCI6MTcwODQ4NDI5MH0.AElvmQddfCJT3tSw7qRRyOFl7xj8SP8akw3qqgSiFYE"
) => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const { user } = useContext(UserContext)

    const getRequestConfig = (body=undefined) => {
        let config = {headers: {}}
        if(user?.token){
            config["headers"]["authtoken"] = `Bearer ${user.token}`
        }
        if(method === "POST"){
            config["headers"]["Content-Type"] = "application/json"
            config["body"] = JSON.stringify(body)
        }
        config["method"] = method
        console.log(config)
        return config
    }

    const handleRequest = (body = undefined) => {
        console.log(url)
        setLoading(true)
        fetch(url, getRequestConfig(body))
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.errors){
                console.log(data.errors)
                setError({ errorCode: data.errorCode, errors: data.errors })
            }else{
                setData(data)
            }
            setLoading(false)
        }).catch(err => {
            console.log(err)
        })
    }

    // useEffect(() => {
    //     if(method === "GET")
    //         handleRequest()
    // }, [url])

    return [ data, loading, error, handleRequest ]
}

export function useGet(url){
    return useFetch(url)
}

export function usePost(url){
    return useFetch(url, "POST")
}