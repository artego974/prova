import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import Card from '../components/Card';

function Reception() {
    const [guest, setGuest] = useState([])
    const [search, setSearch] = useState("")

    async function list() {
        const token = localStorage.getItem("token")
        const response = await fetch('http://localhost:3000/guest/list', {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        });
        const data = await response.json();
        setGuest(data)
    }
    async function listName() {
        const token = localStorage.getItem("token")
        const response = await fetch(`http://localhost:3000/guest/list?name=${search}`, {
            headers: {Authorization: `Bearer ${token}`}
        });
        const data = await response.json();
        setGuest(data)
    }
    useEffect(() => {
        list()
    }, [])
    useEffect(() => {
        if (search) {
            listName()
        } else {
            list()
        }
    }, [search])
    return (
        <div className='w-screen flex justify-center items-center flex-col'>
            <Header />
            <div className='w-screen h-full flex justify-center items-center flex-col mt-10'>
                <input className='border rounded-3xl w-1/4 p-2 placeholder:text-black mb-8' value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Pesquisar' />

                <div className='w-full flex justify-center items-center flex-wrap'>
                    {guest.map((g) => {
                        return (
                            <Card key={g.id} id={g.id} name={g.name} email={g.email} table_number={g.table_number} check_in={g.check_in} CheckIn={list} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Reception