import { Column, Entity, ManyToOne } from "typeorm";
import { Base } from "src/common/entities";
import { Board } from "src/board/entities";

// Miembro junta receptora del voto
@Entity()
export class Mjvr extends Base {
    @Column({ length: 10 })
    dni: string

    @Column({ length: 30 })
    firstname: string

    @Column({ length: 30 })
    lastname: string
    
    @Column({ length: 20 })
    position: string

    @ManyToOne(() => Board, (board) => board.electoralProcess)
    board: Board
}