import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ElectoralProcess } from './entities/electoral-process.entity';
import { ElectoralProcessResolver } from './electoral-process.resolver';
import { ElectoralProcessService } from './electoral-process.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([ElectoralProcess])
    ],
    exports: [
        TypeOrmModule
    ],
    providers: [ElectoralProcessResolver, ElectoralProcessService]
})
export class ElectoralProcessModule {}
