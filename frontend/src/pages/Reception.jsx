import React, { useEffect, useState } from 'react'
import Header from '../components/Header';

function Reception() {
    const [guest, setGuest] = useState([])
    const [search, setSearch] = useState("")

    //lembra de puxar o token
    async function list() {
        const token = localStorage.getItem("token")
        const response = await fetch('http://localhost:3000/guest/list',{
            headers: { 'Content-Type': 'application/json', 
            Authorization: `Bearer ${token}` 
         }
        } );
        const data = await response.json();
        setGuest(data)
    }
    async function listName(){
        const response = await fetch(`http://localhost:3000/guest/list?name${search}`);
        const data = await response.json();
        setSearch(data)
    }
    useEffect(()=>{
        list()
    },[])
    useEffect(()=>{
        if(search){
            listName()
        }else{
            list()
        }
    },[search])
    return (
        <div className='h-screen flex justify-center items-center'>
            <Header/>
            <div className='w-screen h-full flex justify-center items-center'>
                <input value={search} onChange={(e)=> setSearch(e.target.value)} type="text" placeholder='Pesquisar' />
                {guest.map((g)=>{
                    <button>env</button>
                })}
            </div>
        </div>
    )
}

export default Reception