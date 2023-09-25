import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SocialMediaModel {
  @Field()
  id: string;

  @Field(() => String)
  url: string;
}
