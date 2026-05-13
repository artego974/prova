import React, { useEffect, useState } from "react";
import Header from "../components/Header";

function Dashboard() {
    const [data, setData] = useState(null);
    //puxar o token pra usar com middleware
    async function list() {
        const token = localStorage.getItem("token")
        const response = await fetch("http://localhost:3000/guest/dashboard",{
            headers:{
                Authorization: `Bearer ${token}` 
            }
            
        });
        const res = await response.json();
        setData(res);
    }

    useEffect(() => {
        list();
    }, []);

    if (!data) return <p>Carregando...</p>;

    return (
        <div className="h-screen flex justify-center items-center flex-col ">
            <Header />
            <div className="shadow w-1/4 min-h-1/10 flex items-center justify-center">
                <h1> <span className="font-bold">Total:</span> {data.total}</h1>
            </div>
            <div className="shadow w-1/4 min-h-1/10 flex items-center justify-center">
                <h1> <span className="font-bold">Confirmados:</span> {data.check_in}</h1>
            </div>
            <div className="shadow w-1/4 min-h-1/10 flex items-center justify-center">
                <h1> <span className="font-bold">Pendentes:</span> {data.pending}</h1>
            </div>
            <div className="shadow w-1/4 min-h-1/10 flex items-center justify-center">
                <h1> <span className="font-bold">Ocupação:</span> {data.ocuppancy}%</h1>
            </div>
        </div>
    );
}

export default Dashboard;