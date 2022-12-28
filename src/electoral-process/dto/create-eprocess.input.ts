import { Field, InputType } from "@nestjs/graphql";
import { Institution } from "src/institution/entities";
import { ElectoralProcess } from "../entities";

@InputType({ description: "Input Proceso Electoral" })
export class CreateEProcessInput {
    @Field()
    processDate: Date
    
    @Field()
    initialHour: Date
    
    @Field()
    finalHour: Date
    
    @Field()
    name: string
    
    @Field()
    period: string
    
    @Field({ nullable: true })
    isActive: boolean
    
    @Field()
    institution: number
}