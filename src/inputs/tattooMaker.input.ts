import { InputType, Field } from '@nestjs/graphql';

import { IsEmail } from 'class-validator';
import { SocialMediaInput } from './socialMedia.input';

@InputType()
export class TattooMakerInput {
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

  @Field(() => [SocialMediaInput], { nullable: 'itemsAndList' })
  socialMedias: [SocialMediaInput] | null;
}
