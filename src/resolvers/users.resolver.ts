import { Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from 'src/database/prisma.service';
import { Users } from 'src/models/users.model';

@Resolver(() => Users)
export class UsersResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => Users)
  async getUser() {
    return this.prisma.user.findMany();
  }
}
