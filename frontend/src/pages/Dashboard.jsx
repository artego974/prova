import React, { use, useEffect, useState } from 'react'

function Dashboard() {
    const [data, setData] = useState(null);
    const [erro, setErro] = useState("")

    async function list() {
        try{
            const response = await fetch("http://localhost:3000/guest/dashboard");
            const res = await response.json();
            setData(res);
        }catch(e){
            setErro(e)
        }
    }

    useEffect(() => {
        list()
    }, []);

    return (
        <div className='h-screen flex justify-center items-center'>
            {erro ? (<p>erro</p>) : (<p></p>)}
            <div className='w-1/4 p-5 shadow-2xl'>
                Total:{data.total}
            </div>
            <div className='w-1/4 p-5 shadow-2xl'>
                Checkins realizados:{data.check_in}
            </div>
            <div className='w-1/4 p-5 shadow-2xl'>
                Pendentes:{data.pending}
            </div>
            <div className='w-1/4 p-5 shadow-2xl'>
                Ocupacidade:{data.ocuppancy}
            </div>
        </div>
    )
}

export default Dashboard


