import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mjvr } from './entities/mjrv.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Mjvr])
    ],
    exports: [
        TypeOrmModule
    ]
})
export class MjrvModule {}
