import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class AddressInput {
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
}
