import { Field, InputType, ObjectType } from "type-graphql";
import { MaxLength } from "class-validator";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
@ObjectType()
class Country {
  @Field()
  @PrimaryColumn()
  code: string = "";

  @Field()
  @Column({ length: 100 })
  name?: string;

  @Field()
  @Column({ length: 100 })
  emoji?: string;
}

@InputType()
export class CountryInput {
  @Field()
  @MaxLength(2)
  code: string = "";

  @Field()
  @MaxLength(100)
  name: string = "";

  @Field()
  @MaxLength(100)
  emoji: string = "";
}

export default Country;
