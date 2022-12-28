import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Elector } from './entities/elector.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Elector])
    ],
    exports: [
        TypeOrmModule
    ]
})
export class ElectorModule {}
