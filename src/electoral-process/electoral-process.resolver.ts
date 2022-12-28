import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateEProcessInput } from './dto/create-eprocess.input';
import { ElectoralProcessService } from './electoral-process.service';
import { ElectoralProcess } from './entities';

@Resolver()
export class ElectoralProcessResolver {
    constructor(
        private readonly eprocessService: ElectoralProcessService 
    ) { }

    @Query(() => [ElectoralProcess])
    async getAllElectoralProcess() {
        return await this.eprocessService.getAll()
    }

    @Mutation(() => ElectoralProcess)
    async createElectoralProcess(
        @Args("eproccess") eproccess: CreateEProcessInput
    ){
        console.log({ eproccess });
        return await this.eprocessService.create(eproccess);
    }

    @Mutation(() => String)
    async deleteElectoralProcess(
        @Args("id") id: number
    ){
        await this.eprocessService.delete(id)
        return "Proceso borrado"
    }
    
}
