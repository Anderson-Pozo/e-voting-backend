import { DataSource, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMjrvInput } from './dto';
import { Mjrv } from './entities';
import { UserService } from 'src/user/user.service';
import { BoardService } from 'src/board/board.service';
import { User } from 'src/user/entities';

@Injectable()
export class MjrvService {

    constructor(
        @InjectRepository(Mjrv)
        private readonly mjrvRepository: Repository<Mjrv>,

        private readonly boardService: BoardService,

        private readonly userService: UserService,

        private readonly dataSource: DataSource,
    ){}

    async getAll(): Promise<Mjrv[]>{
        const mjrvs = this.mjrvRepository.find({
            relations: {
                board: true
            }
        });
        return mjrvs;
    }

    async create(createMjrv: CreateMjrvInput){

        const { board: boardMjrv, dni, firstname, lastname, position } = createMjrv;
        const board = await this.boardService.findOne(boardMjrv);

        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect()
        await queryRunner.startTransaction();

        try {
            const user = queryRunner.manager.create(User, {
                fullname: firstname.concat(" ", lastname),
                password: bcrypt.hashSync(dni, 10),
                username: dni 
            })
            
            await queryRunner.manager.save(user);

            const mjrv = queryRunner.manager.create(Mjrv, {
                ...createMjrv,
                position: position.toString(),
                board,
                user
            });

            const newMjrv = await queryRunner.manager.save(mjrv);

            await queryRunner.commitTransaction();
    
            return newMjrv;
            
        } catch (error) {
            console.error({ error })
            await queryRunner.rollbackTransaction();
            throw new BadRequestException("No se pudo crear el mjrv")
        } finally {
            await queryRunner.release()
        }
    }
    
}
