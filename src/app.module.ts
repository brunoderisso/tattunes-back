import { SocialMediaService } from './services/socialMedia.service';
import { TattooMakerResolver } from './resolvers/tattooMaker.resolver';
import { Module } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { join } from 'path';
import { TattooMakerService } from './services/tattooMaker.service';
import { AddressService } from './services/address.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
  ],
  controllers: [],
  providers: [
    PrismaService,
    TattooMakerService,
    TattooMakerResolver,
    AddressService,
    SocialMediaService,
  ],
})
export class AppModule {}
