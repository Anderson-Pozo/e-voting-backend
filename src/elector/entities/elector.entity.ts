import { Column, Entity, ManyToOne } from "typeorm";
import { Base } from "src/common/entities";
import { Board } from "src/board/entities";

// Elector
@Entity()
export class Elector extends Base {
    @Column({ length: 10 })
    dni: string

    @Column({ length: 30 })
    firstname: string

    @Column({ length: 30 })
    lastname: string
    
    @Column({default: false})
    exercisedVote: boolean

    @ManyToOne(() => Board, (board) => board.elector)
    board: Board
}