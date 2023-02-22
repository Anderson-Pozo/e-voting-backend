import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Mjrv } from './entities';
import { MjrvService } from './mjrv.service';
import { CreateMjrvInput } from './dto';

@Resolver()
export class MjrvResolver {

    constructor(
        private readonly mjrvService: MjrvService
    ){}

    @Query(() => [Mjrv])
    async getAllMjrvs(){
        return await this.mjrvService.getAll();
    }

    @Mutation(() => Mjrv)
    async createMjrv(
        @Args("createMjrv") createMjrv: CreateMjrvInput
    ){
        return await this.mjrvService.create(createMjrv);
    }
    
}
