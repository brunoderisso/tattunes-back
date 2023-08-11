import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AddressModel {
  @Field()
  publicPlace: string;

  @Field()
  number: number;

  @Field({ nullable: true })
  complement?: string;

  @Field()
  neighborhood: string;

  @Field()
  city: string;

  @Field()
  state: string;

  @Field()
  zipCode: string;
}
