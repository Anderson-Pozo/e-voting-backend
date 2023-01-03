import { Field, InputType, Int, PartialType } from "@nestjs/graphql";
import { IsNumber } from "class-validator";
import { CreateEProcessInput } from "./create-eprocess.input";

@InputType({ description: "Input Proceso Electoral" })
export class UpdateEProcessInput extends PartialType(CreateEProcessInput) {
    
    @Field(() => Int)
    @IsNumber()
    id: number
}