import { Field, ObjectType } from '@nestjs/graphql';

import { IsEmail } from 'class-validator';

@ObjectType()
export class TattooMakerModel {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  nickname?: string;

  @Field()
  @IsEmail()
  email: string;

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  photoPath?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  // @Field(() => [String], { nullable: true })
  // socialMedia?: string[];
}
