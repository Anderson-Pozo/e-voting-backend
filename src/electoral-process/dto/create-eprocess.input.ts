import { Field, InputType } from "@nestjs/graphql";
import { IsBoolean, IsDate, IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

@InputType({ description: "Input creacion Proceso Electoral" })
export class CreateEProcessInput {
    @Field()
    @IsDate()
    processDate: Date
    
    @Field()
    @IsDate()
    initialHour: Date
    
    @Field()
    @IsDate()
    finalHour: Date
    
    @Field()
    @IsString()
    @MaxLength(50)
    name: string
    
    @Field()
    @IsString()
    @MaxLength(15)
    period: string
    
    @Field({ nullable: true })
    @IsBoolean()
    @IsOptional()
    isActive: boolean
    
    @Field()
    @IsNumber()
    institution: number
}