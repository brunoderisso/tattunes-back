import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SocialMediaInput {
  // @Field(() => [String], { nullable: 'itemsAndList' })
  // urls: string[];
  @Field()
  url: string;
}
