import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Institution } from 'src/institution/entities';
import { Repository } from 'typeorm';
import { CreateEProcessInput } from './dto/create-eprocess.input';
import { ElectoralProcess } from './entities';

@Injectable()
export class ElectoralProcessService {

    constructor(
        @InjectRepository(ElectoralProcess)
        private readonly repository: Repository<ElectoralProcess>
    ){}
    
    async getAll(): Promise<ElectoralProcess[]> {
        return await this.repository.find({
            relations: {
                institution: true
            }
        });
    }

    async create(data: CreateEProcessInput) {
        try {
            const institution = await Institution.findOneBy({ id: data.institution })
            console.log({institution});
            
            if (!institution) throw new NotFoundException(`No se pudo encontrar institucion con id ${ data.institution }`)
            const newEprocess = this.repository.create({
                ...data,
                institution
            });
            return await this.repository.save(newEprocess);
        } catch (error) {
            throw new Error("No se pudo crear el proceso electoral");
        }
    }

    async update(id: number, UpdateEprocess: any){}

    async delete(id: number){
        const eprocess = await this.repository.findOneBy({ id })
        await this.repository.remove(eprocess)
    }

    async activeProcess(id: number){}
}
