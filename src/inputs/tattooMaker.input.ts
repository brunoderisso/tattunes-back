import { InputType, Field } from '@nestjs/graphql';
import { TattooInput } from './tattoo.input';
import { AddressInput } from './address.input';

@InputType()
export class TattooMakerInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  nickname?: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  photoPath?: string;

  @Field({ nullable: true })
  description?: string;

  // @Field(() => [TattooInput], { nullable: true })
  // collection?: TattooInput[];

  // @Field({ nullable: true })
  // address?: AddressInput;

  // @Field(() => [String], { nullable: true })
  // socialMedia?: string[];
}
