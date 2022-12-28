import { Column, Entity, ManyToOne } from "typeorm";
import { Base } from "src/common/entities";
import { List } from "src/list/entities";

// Candidato
@Entity()
export class Candidate extends Base {
    @Column({ length: 30 })
    firstname: string

    @Column({ length: 30 })
    lastname: string
    
    @Column({ length: 100 })
    photo: string

    @Column({ length: 20 })
    dignity: string

    @ManyToOne(() => List, (list) => list.candidate)
    list: List
}