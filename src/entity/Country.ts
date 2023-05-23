import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Field, ObjectType, InputType } from "type-graphql";

@ObjectType()
@Entity()
export class Country {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column()
  emoji!: string;

  // Autres propriétés...
}
