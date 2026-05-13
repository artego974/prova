import React from 'react'
import { Navigate } from "react-router-dom"

export default function PrivateRoutes({ children, allowRoles }) {
    const token = localStorage.getItem("token")
    const role = localStorage.getItem("role")
    if (!token ){
        return <Navigate to="/" />
    }
    if(allowRoles && !allowRoles.includes(role)) {
        return <Navigate to="/reception"/>
    }
    return children
}
