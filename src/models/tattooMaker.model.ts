import { Field, ObjectType } from '@nestjs/graphql';

import { IsEmail } from 'class-validator';
// import { SocialMediaModel } from './socialMedia.model';

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

  // @Field(() => [SocialMediaModel], { nullable: 'itemsAndList' })
  // socialMedia: SocialMediaModel[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
