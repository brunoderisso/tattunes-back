import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Users {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;
}
