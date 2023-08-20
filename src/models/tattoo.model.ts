import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TattooModel {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  photoPath: string;

  @Field()
  tattooMakerId: string;
}
