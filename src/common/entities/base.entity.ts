import { PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity } from "typeorm";
import { Field, ID, ObjectType } from "@nestjs/graphql";


@ObjectType()
export abstract class Base extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number

    @Field()
    @CreateDateColumn()
    createdAt: Date
    
    @Field()
    @UpdateDateColumn()
    updatedAt: Date
}