import { Field, InputType, Int } from "@nestjs/graphql";
import { IsIn, IsNumber, IsString, MaxLength, MinLength } from "class-validator";
import { MjrvPosition } from "../enums/mjrv-position.enum";

@InputType({ description: "Input creacion Mjrv" })
export class CreateMjrvInput {
    @Field()
    @IsString()
    @MaxLength(10)
    @MinLength(10)
    dni: string
    
    @Field()
    @IsString()
    @MaxLength(30)
    firstname: string
    
    @Field()
    @IsString()
    @MaxLength(30)
    lastname: string
    
    @Field()
    @IsString()
    @IsIn(["Presidente", "Secretario", "Vocal"])
    position: string

    @Field(() => Int)
    @IsNumber()
    board: number

    // @Field(() => User)
    // user: User
}