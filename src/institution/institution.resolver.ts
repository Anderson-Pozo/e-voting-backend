import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateInstitutionInput } from './dto/create-institution.input';
import { Institution } from './entities';
import { InstitutionService } from './institution.service';

@Resolver()
export class InstitutionResolver {
    constructor(
        private readonly institutionService: InstitutionService
    ){}
    
    @Query(() => [Institution])
    async getAllInstitutions(): Promise<Institution[]> {
        return this.institutionService.getAll()
    }

    @Mutation(() => Institution)
    async createInstitution(
        @Args("institution") institution: CreateInstitutionInput
    ) {
        return await this.institutionService.create(institution);
    }

    @Mutation(() => Institution)
    async deleteInstitution(
        @Args("id") id: number
    ){
        return await this.institutionService.delete(id);
    }
}
