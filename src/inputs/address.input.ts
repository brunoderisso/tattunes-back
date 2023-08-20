import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class AddressInput {
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
