import { CreateDateColumn, Entity, ManyToOne } from "typeorm"
import { Base } from "src/common/entities"
import { List } from "src/list/entities"
import { Elector } from "src/elector/entities"

@Entity()
export class Vote extends Base {
    
    @ManyToOne(() => List, list => list.vote)
    list: List
    
    @ManyToOne(() => Elector, elector => elector.vote)
    elector: Elector
    
    @CreateDateColumn()
    votingTime: Date
}
