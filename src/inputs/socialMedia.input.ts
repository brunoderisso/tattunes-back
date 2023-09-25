import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SocialMediaInput {
  @Field(() => String)
  url: string;
}
