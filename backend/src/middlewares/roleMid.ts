import { NextFunction} from "express"

export const roleMid = (role: any) => {
    (req: any, res: any, next: NextFunction) => {
        if (!req.user.role == role) {
            res.status(403).json("sem permisao")
        }
        next()
    }
}