import { Column, Entity, OneToOne } from "typeorm"
import { Base } from "src/common/entities"
import { Elector } from "src/elector/entities"
import { Mjvr } from "src/mjrv/entities"

@Entity()
export class User extends Base{
    @Column({ length: 50 })
    fullname: string

    @Column({ length: 15, unique: true })
    username: string
    
    @Column()
    password:string

    @Column('text', { array: true })
    roles: string[]
    
    @Column({ default: true })
    isActive: boolean

    @Column({ nullable: true })
    email?: string

    @OneToOne(() => Mjvr, (mjrv) => mjrv.user)
    mjrv: Mjvr
    
    @OneToOne(() => Elector, (elector) => elector.user)
    elector: Elector
}