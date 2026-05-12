import React, { useState } from 'react'

function Reception() {
    const [guest, setGuest] = useState([])
    const [search, setSerach] = useState("")
    async function list() {
        const response = await fetch('http://localhost:3000/guest/list');
        const data = await response.json();
        setGuest(data)
    }
    async function listName(){
        const response = await fetch('http://localhost:3000/guest/list');
        const data = await response.json();
        setGuest(data)
    }
    return (
        <div>
            <div>
                {guest.map((g)=>{

                })}
            </div>
        </div>
    )
}

export default Reception