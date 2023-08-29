// import { SocialMediaInput } from './../inputs/socialMedia.input';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';

import { randomUUID } from 'node:crypto';

import { PrismaService } from './../database/prisma.service';
import { TattooMakerModel } from './../models/tattooMaker.model';
import { AddressInput } from './../inputs/address.input';
import { TattooMakerInput } from './../inputs/tattooMaker.input';
import { AddressModel } from './../models/address.model';
import { SocialMediaModel } from './../models/socialMedia.model';

@Resolver(() => TattooMakerModel)
export class TattooMakerResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => [TattooMakerModel])
  async getTattooMakers() {
    return this.prisma.tattooMaker.findMany();
  }

  @ResolveField(() => AddressModel)
  async getAddress(@Parent() tattooMaker: TattooMakerModel) {
    const { id } = tattooMaker;

    return this.prisma.address.findUnique({
      where: {
        tattooMakerId: id,
      },
    });
  }

  @ResolveField(() => [SocialMediaModel])
  async getSocialMedia(@Parent() tattooMaker: TattooMakerModel) {
    const { id } = tattooMaker;

    return this.prisma.socialMedia.findMany({
      where: {
        tattooMakerId: id,
      },
    });
  }

  @Mutation(() => TattooMakerModel)
  async createTattooMaker(
    @Args('tattooMaker') tattooMaker: TattooMakerInput,
    @Args('address') address: AddressInput,
    // @Args('socialMedia', { nullable: true }) socialMedia: SocialMediaInput,
  ) {
    const tattooMakerId = randomUUID();
    // const socialMedia = tattooMaker.urls?.map((url) => {
    //   return { url };
    // });
    // console.log(socialMedia);

    return this.prisma.tattooMaker.create({
      data: {
        id: tattooMakerId,
        ...tattooMaker,
        // socialMedia: {
        //   createMany: {
        //     data: socialMedia,
        //   },
        // create: socialMedia.urls.map((url) => {
        //   return { url };
        // }),
        // },
        address: {
          create: address,
        },
      },
    });
  }
}
