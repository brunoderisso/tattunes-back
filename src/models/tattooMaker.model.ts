import { Field, Int, ObjectType } from '@nestjs/graphql';

import { TattooModel } from './tattoo.model';
import { AddressModel } from './address.model';

@ObjectType()
export class TattooMakerModel {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  nickname?: string;

  @Field()
  email: string;

  @Field(() => Int, { nullable: true })
  phone?: number;

  @Field({ nullable: true })
  photoPath?: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => [TattooModel], { nullable: true })
  collection?: TattooModel[];

  @Field({ nullable: true })
  address?: AddressModel;

  @Field(() => [String], { nullable: true })
  socialMedia?: string[];
}
