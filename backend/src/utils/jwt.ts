import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

export const generateToken = (payload:any)=>{
    return jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: Number(process.env.JWT_EXPIRE)} )
}

export const verifyToken = (token:any)=>{
    return jwt.verify(token, process.env.JWT_SECRET )
}