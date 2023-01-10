import { Field, InputType } from "@nestjs/graphql";
import { IsOptional, IsString } from "class-validator";

@InputType({ description: "Input creacion de usuario" })
export class CreateUserInput{
    @Field()
    @IsString()
    fullname: string
    
    @Field()
    @IsString()
    username: string
    
    @Field()
    @IsString()
    password:string
    
    @Field({ nullable: true })
    @IsString()
    @IsOptional()
    email?: string
} 