import { Like } from "typeorm";
import { AppDataSource } from "../config/data-source";
import { Guest } from "../models/Guest";


export class GuestService{
    private repo = AppDataSource.getRepository(Guest)
    async list(name?:string){
        if(name){
            const user = await this.repo.find({where:{name: Like(`%${name}%`)}})
            return user
        }
        const user = await this.repo.find()
        return user
    }
    async create(data:any){
        const exist = await this.repo.findOneBy({email:data.email})
        if(exist) throw new Error("user já existe")
        const user = this.repo.create(data)
        return this.repo.save(user)
    }
    async update(id:any,data:any){
        const exist = await this.repo.findOneBy({id:id})
        if(!exist) throw new Error("user nao encontrado")
        const user = this.repo.update(id,data)
        return user
    }
    async delete(id:any){
        const exist =  await this.repo.findOneBy({id:id})
        if(!exist) throw new Error("user nao encontrado")
        const user = this.repo.delete(id)
        return user
    }
}