import { NextFunction, Request, Response } from "express"
import { verifyToken } from "../utils/jwt"

export const authMid = (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers.authorization
    
    if (!header || !header.startsWith("Bearer")) {
        return res.status(401).json("sem token")
    }
    const decoaded = header.split(" ")[1]
    const valid = verifyToken(decoaded)
    if (!valid) {
        return res.status(401).json("token invalido")
    }

    (req as any).user = decoaded
    next()
}
    
        
    
