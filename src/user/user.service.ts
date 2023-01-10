import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto';
import { User } from './entities';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ){}

    async getAll(): Promise<User[]>{
        return this.userRepository.find();
    }

    async create(createUserInput: CreateUserInput){
        const user = this.userRepository.create(createUserInput);

        return await this.userRepository.save(user);
    }
    
}
