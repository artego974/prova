import React from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {
    const navigate = useNavigate()
  return (
    <div className='w-full min-h-1/6 flex justify-center items-center flex-col'>
        <h1 className='font-bold text-4xl mb-3'>Senac Wedding</h1>
        <div className='flex'>
            <button className='m-3 rounded-2xl shadow-2xl p-2 border font-bold cursor-pointer' onClick={()=> navigate("/dashboard")}>Dashboard</button>
            <button className='m-3 rounded-2xl shadow-2xl p-2 border font-bold cursor-pointer' onClick={()=> navigate("/reception")}>Reception</button>
            <button className='m-3 rounded-2xl shadow-2xl p-2 border font-bold cursor-pointer'onClick={()=> navigate("/admin")}>Admin</button>
        </div>

    </div>
  )
}

export default Header