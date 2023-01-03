import { Field, Int, InputType, PartialType } from "@nestjs/graphql";
import { IsNumber } from "class-validator";
import { CreateInstitutionInput } from "./create-institution.input";

@InputType({ description: "Input Updated Institucion" })
export class UpdateInstitutionInput extends PartialType(CreateInstitutionInput) {
    @Field(() => Int)
    @IsNumber()
    id: number;
}