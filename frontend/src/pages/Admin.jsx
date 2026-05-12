import React, { useState } from 'react'

function Admin() {
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [cpf, setCpf] = useState("")
    const [phone, setPhone] = useState("")
    const [table_number, setTable] = useState("")

    async function criar() {
        localStorage.getItem("token")
        const response = await fetch('http://localhost:3000/guest/create', {
            method: 'post',
            body: JSON.stringify({ name, email, cpf, phone, table_number }),
            headers: { 'Content-Type': 'application/json' }
        });
        const data = await response.json();
        console.log("criado :", data)
    }
    async function atualizar() {
        const token = localStorage.getItem("token")
        const response = await fetch(`http://localhost:3000/guest/update/${id}`, {
            method: 'put',
            body: JSON.stringify({ name, email, cpf, phone, table_number }),
            headers: { 'Content-Type': 'application/json' }
        });
        const data = await response.json();
        console.log("atualizado :", data)
    }
    async function del() {
        localStorage.getItem("token")
        const response = await fetch(`http://localhost:3000/guest/delete/${id}`, {
            method: 'delete',
        });
        const data = await response.json();
        console.log("deletado :", data)
    }
    return (
        <div className='h-screen flex justify-center items-center '>
            <div className='w-1/4 shadow-2xl rounded-2xl min-h-1/2 flex flex-col justify-center items-center'>
                <h1 className='font-bold text-3xl'>Painel de Admin</h1>
                <div className='p-5'>
                    <button className='m-2 bg-green-400 p-3 rounded-3xl font-bold cursor-pointer text-white' onClick={criar}>Criar</button>
                    <button className='m-2  bg-blue-400 p-3 rounded-3xl font-bold cursor-pointer text-white' onClick={atualizar}>Editar</button>
                    <button className='m-2 bg-red-400 p-3 rounded-3xl font-bold cursor-pointer text-white' onClick={del}>Deletar</button>
                </div>
                <input className='border rounded-2xl p-2 mb-5' type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder='ID (para editar e deletar)' />
                <input className='border rounded-2xl p-2 mb-5' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Nome' />
                <input className='border rounded-2xl p-2 mb-5' type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
                <input className='border rounded-2xl p-2 mb-5' type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} placeholder='Cpf' />
                <input className='border rounded-2xl p-2 mb-5' type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Phone' />
                <input className='border rounded-2xl p-2 mb-5' type="text" value={table_number} onChange={(e) => setTable(e.target.value)} placeholder='Numero da mesa' />
            </div>

        </div>
    )
}

export default Admin