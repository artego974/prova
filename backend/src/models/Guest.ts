import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("guest")
export class Guest{
    @PrimaryGeneratedColumn()
    id:number

    @Column({nullable:false, length:100})
    name:string
    @Column({nullable:false, length:100, unique:true})
    email:string
    @Column({nullable:false, length:11, unique:true})
    cpf:string
    @Column({nullable:false, length:11, unique:true})
    phone:string
    @Column({nullable:false})
    table_number: number
    @Column({default:false})
    check_in: boolean
}