import { Query, Resolver } from '@nestjs/graphql';

import { PrismaService } from 'src/database/prisma.service';
import { TattooMakerModel } from './../models/tattooMaker.model';

@Resolver(() => TattooMakerModel)
export class TattooMakerResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => TattooMakerModel)
  async getTattooMaker() {
    return this.prisma.tattooMaker.findMany();
  }
}
