import { Request, Response } from "express";
import { GuestService } from "../services/GuestService";
import { guestSchema } from "../validators/guestSchema";

const service = new GuestService()
export class GuestController{
    async list(req:Request,res:Response){
        try{
            const {name} = req.query
            const user = await service.list((name as string))
            return res.status(200).json(user)
        }catch(e:any){
            return res.status(400).json({message:e.message})
        }
    }
    async create(req:Request,res:Response){
        try{
            const data = guestSchema.parse(req.body) 
            const user = await service.create(data)
            return res.status(201).json(user)
        }catch(e:any){
            return res.status(400).json({message:e.message})
        }
    }
    async update(req:Request,res:Response){
        try{
            const {id} = req.params
            const data = req.body
            const user = await service.update(id,data)
            return res.status(200).json(user)
        }catch(e:any){
            return res.status(400).json({message:e.message})
        }
    }
    async delete(req:Request,res:Response){
        try{
            const {id} = req.params
            const user = await service.delete(id)
            return res.status(200).json(user)
        }catch(e:any){
            return res.status(400).json({message:e.message})
        }
    }
}