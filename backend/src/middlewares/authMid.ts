import { NextFunction } from "express"

export const authMid=()=>{
    (req:any,res:any,next:NextFunction)=>{
        const header = req.headers.authorization
        if(!header.startswith("Bearer")) return res.status(401).json("token invalido")
        const decoaded = header.split(" ")[1]
        
        
    }
}