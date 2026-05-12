import React, { useEffect } from 'react'

function Card(props) {
    async function Checkin() {
        const response = await fetch(`http://localhost:3000/guest/checkin/${props.id}`, {
            method: 'patch',
            headers: { 'Content-Type': 'application/json' }
        });
        props.Checkin()
    }
    useEffect(()=>{
        Checkin
    },[])
    return (
        <div className='flex justify-center items-center w-1/3'>
            <h1>{props.name}</h1>
            <p>{props.email}</p>
            <p>{props.table_number}</p>
            <p>{props.check_in}</p>
        </div>
    )
}

export default Card