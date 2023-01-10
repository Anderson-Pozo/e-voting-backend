import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Elector } from './entities/elector.entity';
import { ElectorResolver } from './elector.resolver';
import { ElectorService } from './elector.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Elector])
    ],
    exports: [
        TypeOrmModule
    ],
    providers: [ElectorResolver, ElectorService]
})
export class ElectorModule {}
