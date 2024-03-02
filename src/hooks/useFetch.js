import { useContext, useEffect, useState } from "react";

import { UserContext } from "../context/userProvider";



const useFetch = ( 
    url, 
    method="GET"
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
        if(method==="GET" && body !== undefined){
            config["query"] = JSON.stringify(body)
        }
        config["method"] = method
        console.log(config)
        return config
    }

    const formatURL = (body) => {
        if(body !== undefined && method === "GET"){
            return url + `?${Object.keys(body)[0]}=${Object.values(body)[0]}`
        }
        return url
    }

    const handleRequest = (body = undefined) => {
        setLoading(true)
        fetch(formatURL(body), getRequestConfig(body))
        .then(res => res.json())
        .then(data => {
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