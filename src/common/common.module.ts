import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Base } from './entities/base.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Base])
    ],
    exports: [
        TypeOrmModule
    ]
})
export class CommonModule {}
