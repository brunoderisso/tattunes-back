import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';

import { randomUUID } from 'node:crypto';

import { PrismaService } from 'src/database/prisma.service';
import { TattooMakerModel } from './../models/tattooMaker.model';
import { AddressInput } from './../inputs/address.input';
import { TattooMakerInput } from './../inputs/tattooMaker.input';
import { TattooInput } from './../inputs/tattoo.input';
import { AddressModel } from './../models/address.model';
import { TattooModel } from './../models/tattoo.model';

@Resolver(() => TattooMakerModel)
export class TattooMakerResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => [TattooMakerModel])
  async getTattooMaker() {
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

  @Mutation(() => TattooMakerModel)
  async createTattooMaker(
    @Args('tattooMaker') tattooMaker: TattooMakerInput,
    @Args('address') address: AddressInput,
    @Args('tattoos') tattoos: TattooInput,
  ) {
    const tattooMakerId = randomUUID();

    // const tattoosMap: TattooModel[] = tattoos.map((tattoo) => {
    //   return {
    //     id: randomUUID(),
    //     tattooMakerId,
    //     ...tattoo,
    //   };
    // });

    console.log(tattoos);

    return this.prisma.tattooMaker.create({
      data: {
        id: tattooMakerId,
        ...tattooMaker,
        address: {
          create: address,
        },
        // collection: {
        //   create: tattoosMap,
        // },
      },
    });
  }
}
