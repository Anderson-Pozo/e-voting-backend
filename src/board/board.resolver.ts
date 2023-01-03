import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BoardService } from './board.service';
import { CreateBoardInput, CreateBulkBoardsInput, UpdateBoardInput } from './dto';
import { Board } from './entities';

@Resolver()
export class BoardResolver {
    constructor(
        private readonly boardService: BoardService
    ) { }

    @Query(() => [Board])
    async getAllBoards(): Promise<Board[]> {
        return this.boardService.getAll()
    }

    @Query(() => Board)
    async getBoard(
        @Args("id", { type: () => Int }) id: number
    ) {
        return this.boardService.findOne(id);
    }

    @Mutation(() => Board)
    async createBoard(
        @Args("createBoard") createBoard: CreateBoardInput
    ){
        return this.boardService.create(createBoard);
    }

    @Mutation(() => [Board])
    async createMasiveBoards(
        @Args("createBoards", { type: () => [CreateBulkBoardsInput] }) 
            createBoards: CreateBulkBoardsInput[],
        @Args("idEProcess", { type: () => Int }) idEprocess: number
    ){
        return await this.boardService.bulkCreate(idEprocess, createBoards);
    }

    @Mutation(() => Board)
    async updateBoard(
        @Args("updateBoard") updateBoard: UpdateBoardInput
    ){
        return await this.boardService.update(updateBoard);
    }

    @Mutation(() => Board)
    async deleteBoard(
        @Args("id", { type: () => Int }) id: number
    ){
        return await this.boardService.delete(id);
    }

}
