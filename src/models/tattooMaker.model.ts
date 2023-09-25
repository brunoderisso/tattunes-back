import { Field, ObjectType } from '@nestjs/graphql';

import { IsEmail } from 'class-validator';

@ObjectType()
export class TattooMakerModel {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  nickname?: string | null;

  @Field()
  @IsEmail()
  email: string;

  @Field({ nullable: true })
  phone?: string | null;

  @Field({ nullable: true })
  photoPath?: string | null;

  @Field({ nullable: true })
  description?: string | null;
}
