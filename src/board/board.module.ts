import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from './entities/board.entity';
import { BoardService } from './board.service';
import { BoardResolver } from './board.resolver';

@Module({
    imports: [
        TypeOrmModule.forFeature([Board])
    ],
    exports: [
        TypeOrmModule
    ],
    providers: [BoardService, BoardResolver]
})
export class BoardModule {}
