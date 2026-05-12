import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    async function login() {
        const response = await fetch('http://localhost:3000/user/login', {
            method: 'post',
            body: JSON.stringify({email,password}),
            headers: { 'Content-Type': 'application/json' }
        });
        const data = await response.json();
        localStorage.setItem("token", data.token)
        localStorage.setItem("role", data.user.role)
        if(data.user.role == "admin"){
            navigate("/dashboard") 
        }else{
            navigate("/reception")
        }
        
    }

    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <div className='shadow-2xl w-1/4 flex flex-col p-5 justify-center items-center object-cover rounded-3xl'>
            <h1 className='font-bold text-3xl mb-8'>Login</h1>
            <input className='border rounded-2xl p-2 mb-5' type="text" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Email' />
            <input className='border rounded-2xl p-2 mb-5' type="text" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='Senha'/>
            <button className='bg-red-400 w-1/2 p-2 rounded-2xl font-bold cursor-pointer' onClick={login}>Entrar</button>
            </div>
        </div>
    )
}

export default Login