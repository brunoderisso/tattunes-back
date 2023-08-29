import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SocialMediaModel {
  @Field()
  url: string;

  @Field()
  tattooMakerId: string;
}
