import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

export default function checkAuthentication({Product}){
    const isAuthenticated = false;
    const navigate = useNavigate();

    useEffect(() => {
        if(!isAuthenticated){
            navigate('/login')
        }
    }, [])
    return (
        Product
    )
}