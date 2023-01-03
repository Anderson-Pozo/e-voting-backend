import { Field, InputType, Int, PartialType } from "@nestjs/graphql"
import { IsNumber } from "class-validator"
import { CreateBoardInput } from "./create-board-input"

@InputType({ description: "Input actualizacion Junta" })
export class UpdateBoardInput extends PartialType(CreateBoardInput) {
    
    @Field(() => Int)
    @IsNumber()
    id: number
}

