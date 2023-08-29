import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class TattooInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string | null;

  @Field()
  photoPath: string;
}
