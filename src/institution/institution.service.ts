import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInstitutionInput } from './dto/create-institution.input';
import { Institution } from './entities';

@Injectable()
export class InstitutionService {
    constructor(
        @InjectRepository(Institution)
        private readonly repository: Repository<Institution>
    ){}

    async getAll(): Promise<Institution[]> {
        const institutions = await this.repository.find()
        return institutions
    }

    async create(institution: CreateInstitutionInput){
        try {
            const newInstitution = this.repository.create(institution);
            return await this.repository.save(newInstitution)
        } catch (error) {
            throw new Error("No se pudo crear");
        }
    }

    async delete(id: number) {
        try {
            const institution = await this.repository.findOneBy({ id })
            return await this.repository.remove(institution);
        } catch (error) {
            console.error({ error });
            throw new Error("No se pudo borrar");
        }
    }
}
