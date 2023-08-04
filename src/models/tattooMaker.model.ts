import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TattooMakerModel {
  email String  @unique
  phone Int?
  photoPath String?
  description String?
  collection Tattoo[]
  address Address?

  @Field()
  name: string;

  @Field()
  nickname: string;

  @Field()
  email: string;
}
