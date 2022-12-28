import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { Base } from "src/common/entities";
import { ElectoralProcess } from "src/electoral-process/entities";
import { Candidate } from "src/candidate/entities";

// Lista
@Entity()
export class List extends Base {
    @Column({ length: 30 })
    name: string

    @Column({ length: 30 })
    color: string
    
    @Column({ length: 100 })
    logo: string

    @ManyToOne(() => ElectoralProcess, (elProc) => elProc.board)
    electoralProcess: ElectoralProcess

    @OneToMany(() => Candidate, (candidate) => candidate.list)
    candidate: Candidate[]
}
