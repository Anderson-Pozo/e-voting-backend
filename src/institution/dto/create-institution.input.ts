import { Field, InputType } from "@nestjs/graphql";
import { Institution } from "../entities";

@InputType({ description: "Input Institucion" })
export class CreateInstitutionInput implements Partial<Institution> {
    @Field()
    name: string;

    @Field({ nullable: true })
    image: string;

    @Field()
    province: string;

    @Field()
    canton: string;

    @Field()
    parish: string;
}