import { AppDataSource } from "../config/data-source";
import { User } from "../models/User";
import bcrypt from "bcrypt"


export class AuthService{
    private repo = AppDataSource.getRepository(User)
    async login(email:string, password:string){
        const user = await this.repo.findOneBy({email:email})
        if(!user) throw new Error(" user nao encontrado")
        const valid = await bcrypt.compare(password,user.password)
        if(!valid) throw new Error("senha invalida")
        return user
    }
}