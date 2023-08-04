import { TattooMakerModel } from './../models/tattooMaker.model';
import { Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from 'src/database/prisma.service';

@Resolver(() => TattooMakerModel)
export class TattooMakerResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => TattooMakerModel)
  async getTattooMaker() {
    return this.prisma.tattooMaker.findMany();
  }
}
