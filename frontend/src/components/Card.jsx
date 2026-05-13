import React, { useEffect } from 'react'

function Card(props) {
    async function Checkin() {
        const token = localStorage.getItem("token")
        const response = await fetch(`http://localhost:3000/guest/checkin/${props.id}`, {
            method: 'patch',
            headers: { 'Content-Type': 'application/json',
            Authorization: `Bearer ${token}` 
         }
        });
        const data = await response.json()
        console.log(data)
        props.CheckIn()
    }
   
    return (
        <div className='flex justify-center items-center w-1/3 h-2/5 shadow-2xl flex-col mb-5 m-3 rounded-3xl'>
            <h1 className='font-bold'>{props.name}</h1>
            <p className=''>{props.email}</p>
            <p className='mb-4'>Numero da mesa: {props.table_number}</p>
            {props.check_in ? <p className='font-bold mb-3'>Checkin feito</p> : <button className=' mb-3 w-1/3 p-2 bg-green-300 rounded-3xl text-white font-bold cursor-pointer ' onClick={Checkin}>Fazer Checkin</button>}
            
        </div>
    )
}

export default Card