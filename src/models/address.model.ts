import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AddressModel {
  @Field()
  publicPlace: string;

  @Field(() => String)
  number: string;

  @Field({ nullable: true })
  complement?: string | null;

  @Field()
  neighborhood: string;

  @Field()
  city: string;

  @Field()
  state: string;

  @Field()
  zipCode: string;

  @Field()
  tattooMakerId: string;
}
