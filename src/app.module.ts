import { join } from 'path';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';

import { CommonModule } from './common/common.module';
import { BoardModule } from './board/board.module';
import { CandidateModule } from './candidate/candidate.module';
import { ElectorModule } from './elector/elector.module';
import { ElectoralProcessModule } from './electoral-process/electoral-process.module';
import { InstitutionModule } from './institution/institution.module';
import { ListModule } from './list/list.module';
import { MjrvModule } from './mjrv/mjrv.module';
import { VoteModule } from './vote/vote.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: false,
      plugins: [
        ApolloServerPluginLandingPageLocalDefault
      ],
    }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      synchronize: true,
      // logging: true,
      autoLoadEntities: true
    }),
    CommonModule,
    BoardModule,
    CandidateModule,
    ElectorModule,
    ElectoralProcessModule,
    InstitutionModule,
    ListModule,
    MjrvModule,
    VoteModule,
    UserModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
