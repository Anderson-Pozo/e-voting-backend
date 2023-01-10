import { Field, InputType, Int, OmitType, PartialType } from "@nestjs/graphql"
import { IsNumber, IsString, Min } from "class-validator"

@InputType({ description: "Input creacion Junta" })
export class CreateBoardInput {
    @Field(() => Int)
    @IsNumber()
    @Min(1)
    number: number
    
    @Field()
    @IsString()
    place: string
    
    @Field(() => Int)
    @IsNumber()
    electoralProcess: number
}

@InputType({ description: "Input creacion masiva Junta" })
export class CreateBulkBoardsInput extends OmitType(CreateBoardInput, [
    'electoralProcess'
] as const){}
